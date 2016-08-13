/**
 * index.ts
 * Andrea Tino - 2016
 */

/// <reference path="definitions/googleCharts.d.ts" />

/// <reference path="page.ts" />

namespace ReleaseTracker {
    export class Application {
        public run() {
            var page = new Page(document);
            page.render();
        }
    }
}

window.addEventListener("load", function() {
    new ReleaseTracker.Application().run();
});