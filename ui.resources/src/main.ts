/** IE9, IE10 and IE11 requires all of the following polyfills. **/
import 'core-js/es6/symbol';
import 'core-js/es6/object';
import 'core-js/es6/function';
import 'core-js/es6/parse-int';
import 'core-js/es6/parse-float';
import 'core-js/es6/number';
import 'core-js/es6/math';
import 'core-js/es6/string';
import 'core-js/es6/date';
import 'core-js/es6/array';
import 'core-js/es6/regexp';
import 'core-js/es6/map';
import 'core-js/es6/weak-map';
import 'core-js/es6/set';

import 'core-js/es6/reflect';
import 'zone.js';
import 'reflect-metadata';

import { enableProdMode } from "@angular/core";

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

Object.defineProperty(HTMLSelectElement.prototype, "selectedOptions", {
    get: (function() {
        try {
            document.querySelector(":checked");
            return function() {
                return this.querySelectorAll(":checked");
            };
        } catch (e) {
            return function() {
                if (!this.multiple) {
                    return this.selectedIndex >= 0
                            ? [this.options[this.selectedIndex]] : [];
                }
                for (var i = 0, a = []; i < this.options.length; i++)
                    if (this.options[i].selected) a.push(this.options[i]);
                return a;
            };
        }
    })()
});

enableProdMode();
platformBrowserDynamic().bootstrapModule(AppModule);