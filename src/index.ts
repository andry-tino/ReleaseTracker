/**
 * index.ts
 * Andrea Tino - 2016
 */

/// <reference path="definitions/google-visualization.d.ts" />

/// <reference path="page.ts" />

namespace ReleaseTracker {
    export class Application {
        public run() {
            var page = new Page(document);
            page.render();

            google.charts.load('current', { packages: ['corechart', 'controls'] });
            google.charts.setOnLoadCallback(null);
        }
    }
}

window.addEventListener("load", function () {
    new ReleaseTracker.Application().run();
});