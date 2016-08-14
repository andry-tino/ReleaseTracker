/**
 * index.ts
 * Andrea Tino - 2016
 */

/// <reference path="definitions/google-visualization.d.ts" />

/// <reference path="page.ts" />

namespace ReleaseTracker {
    class Kernel {
        private document: Document;

        private packages = [
            "corechart",
            "controls"
        ];

        /**
         * Initializes a new instance of the Kernel class.
         */
        constructor(document: Document) {
            if (!document) {
                throw "Argument 'document' cannot be null or undefined!";
            }
        }

        /**
         * Runs the kernel.
         */
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

    /**
     * Entry point.
     */
    export class Application {
        private static kernekInstance: Kernel;

        /**
         * Gets the singleton instance of the kernel.
         */
        public static get kernel(): Kernel {
            if (!Application.kernekInstance) {
                Application.kernekInstance = new Kernel(document);
            }

            return Application.kernekInstance;
        }
    }
}

window.addEventListener("load", function () {
    ReleaseTracker.Application.kernel.run();
});