/**
 * index.ts
 * Andrea Tino - 2016
 */

/// <reference path="definitions/google-visualization.d.ts" />

/// <reference path="page.ts" />

namespace ReleaseTracker {
    export class Application {
        private packages = [
            "corechart", 
            "controls"
        ];

        public run() {
            var page = new Page(document);
            page.render();

            google.charts.load('current', { packages: this.packages });
            google.charts.setOnLoadCallback(this.runCore);
        }

        private runCore() {
            // Chart libraries have been called, can use charts here
        }
    }
}

window.addEventListener("load", function () {
    new ReleaseTracker.Application().run();
});