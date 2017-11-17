//This liberation from Webpack is brought to you by https://github.com/monounity/karma-typescript/tree/master/examples/angular2
//This is the main web site that outlined what's in this file - https://www.npmjs.com/package/karma-typescript
module.exports = function(config) {
    config.set({

        frameworks: ["jasmine", "karma-typescript"],

        files: [
            { pattern: "jsonConfigs.mock.js"},
            { pattern: "base.spec.ts" },
            { pattern: "src/app/**/*.+(ts|html)" }
        ],

        preprocessors: {
            "**/!(*spec).ts": ["karma-typescript"],
            "**/*.spec.ts": ["karma-typescript"]
        },
        karmaTypescriptConfig: {
            bundlerOptions: {
                entrypoints: /\.spec\.ts$/,
                transforms: [
                    require("karma-typescript-angular2-transform"),
                    require("karma-typescript-es6-transform")()
               ]
            },
            compilerOptions: {
                noEmitOnError: true,
                "allowJs": true,
                lib: ["ES2015", "DOM"]
            },
            reports: {
                "cobertura": {
                    "directory": "target/test_coverage",
                    "subdirectory" : "cobertura",
                    "filename": "cobertura.xml"
                },
                "html": "target/test_coverage/html",
                "text-summary": ""
            }
        },
        reporters: ["progress", "karma-typescript"],
        browsers: ["PhantomJS"]
    });
};
