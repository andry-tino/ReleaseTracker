/**
 * page.ts
 * Andrea Tino - 2016
 */

/// <reference path="control.ts" />

namespace ReleaseTracker {
    export class Page implements Control {
        // TODO: Move to a separate class
        private GoogleChartLoaderUrl = "https://www.gstatic.com/charts/loader.js";

        private document: Document;
        private _element: Element;

        public constructor(document: Document) {
            if (!document) {
                throw "Parameter 'document' cannot be null or undefined!";
            }

            this.document = document;
        }

        /**
         * Gets the element which has been rendered.
         */
        public get element(): Element {
            return this.element;
        }

        /**
         * Gets a value indicating whether the control 
         * has been rendered or not.
         */
        public get rendered(): boolean {
            return this.element != null && this.element != undefined;
        }

        /**
         * Renders the control.
         */
        public render() {
            var loaderScript = this.createChartLoaderScriptElement();
            this.document.head.appendChild(loaderScript);

            var root = this.createContentElement();
            this.document.body.appendChild(root);
        }

        private createChartLoaderScriptElement(): Element {
            var includeScript = <HTMLScriptElement>this.createElement("script");
            includeScript.type = "text/javascript";
            includeScript.src = this.GoogleChartLoaderUrl;

            return includeScript;
        }

        private createContentElement(): Element {
            var root = this.createElement("div");
            root.classList.add();

            return root;
        }

        private createElement(tagName): Element {
            return this.document.createElement(tagName);
        }
    }
}
