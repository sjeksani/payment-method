'use strict';

var directories = {
    aemTarget: "../ui.apps/src/main/content/jcr_root/apps/kporg/kp-foundation/components/structure/embeds/",
    aemStyles: "../ui.apps/src/main/content/jcr_root/etc/designs/kporg/payment-method/clientlib-site/css",
    assets: "assets",
    baseComponentTarget: "target/base-components/",
    bourbonNeat: require('node-neat').includePaths,
    dist: 'dist',
    ng_build: 'target/build',
    node_modules: 'node_modules',
    styleguide_modern: 'node_modules/styleguide/lib/modern',
    styleguide_assets: 'node_modules/styleguide/lib/modern/assets',
    target: "target/"
};

// Returns the aem path for the given component, assuming the folder in ui.apps is named the same as the componentName
function aemPath(componentName) {
    return directories.aemTarget + componentName + "/clientlib";
}

function generateAemFileArray() {
    var outValue = [];
    //General Functions
    var addFileFunction = function (srcFilePath, destFileName, subDir) {
        //
        outValue.push({
            expand: true,
            flatten: true,
            rename: function (dest, src) {
                var lastSlashIndexPlusOne = srcFilePath.lastIndexOf('/') + 1;
                var localFileName = srcFilePath.substring(lastSlashIndexPlusOne);
                return dest + "/" + src.replace(localFileName, destFileName);
            },
            src: srcFilePath,
            dest: "../ui.apps/src/main/content/jcr_root/etc/designs/kporg/payment-method/clientlib-site/" + subDir
        });
    };
    //CSS
    var addCSSFileFunction = function (srcFilePath, destFileName) {
        addFileFunction(srcFilePath, destFileName, 'css');
    };
    addCSSFileFunction('dist/pm/styles.bundle.css', 'page.css');
    //Action Area
    var addJSLibFunction = function (srcFilePath, destFileName) {
        addFileFunction(srcFilePath, destFileName, 'js');
    };
    addJSLibFunction('dist/pm/app.bundle.js', 'app.bundle.js');
    //addJSLibFunction('dist/pm/vendor.bundle.js', 'vendor.bundle.js');
    return outValue;
}

module.exports = function (grunt) {
    var styleguidePath = grunt.file.expand(directories.node_modules + '/styleguide');
    grunt.log.write(styleguidePath);


    grunt.initConfig({
        copy: {
            assets_pm: {
                files: [
                    {
                        expand: true,
                        cwd: directories.styleguide_modern,
                        src: 'assets/**/*',
                        dest: 'src'
                    }
                ]
            },
            toAem: {
                files: generateAemFileArray()
            },
            forWhiteHat: {
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['dist/pm/app.bundle.js'],
                        dest: 'target/whitehat',
                        filter: 'isFile'
                    }]
            }
        },
        exec: {
            pmLocal: {
                command: 'npm run build:pm',
                maxBuffer: 500 * 1024
            },
            pmAem: {
                command: 'npm run build:pmAem',
                maxBuffer: 500 * 1024
            }
        }
    });

    grunt.registerTask('default', 'Making sure gruntfile runs', function () {
        grunt.log.write("All is good.").ok();
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-exec');

    grunt.registerTask('copyAssets', ['copy:assets_pm']);
    grunt.registerTask('build', ['exec:pm']);

    // Full Build
    grunt.registerTask('buildAem', ['exec:pmAem', 'copy:toAem', 'copy:forWhiteHat']);

    //Clean Task
    grunt.registerTask('clean', 'Delete directories and files', function () {
        grunt.file.delete(directories.assets);
        grunt.file.delete(directories.dist);
        grunt.file.delete(directories.target);
        grunt.log.write("'clean' task has completed").ok();
    });
};
