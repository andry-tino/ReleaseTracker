/**
 * page.ts
 * Andrea Tino - 2016
 */

/// <reference path="control.ts" />
/// <reference path="style/cssClassNames.ts" />

namespace ReleaseTracker {
    export class Page implements Control {
        // TODO: Move to a separate class
        private GoogleChartLoaderUrl = "https://www.gstatic.com/charts/loader.js";

        private document: Document;
        private _element: Element;

        constructor(document: Document) {
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

            var root = this.createRootElement();
            this.document.body.appendChild(root);
        }

        private createChartLoaderScriptElement(): Element {
            var includeScript = <HTMLScriptElement>this.createElement("script");
            includeScript.type = "text/javascript";
            includeScript.src = this.GoogleChartLoaderUrl;

            return includeScript;
        }

        private createRootElement(): Element {
            var root = this.createElement("div");
            root.classList.add(Style.CssClassNames.root);

            var header = this.createHeaderElement();

            var content = this.createElement("div");
            content.classList.add(Style.CssClassNames.content);

            root.appendChild(header);
            root.appendChild(content);

            return root;
        }

        private createHeaderElement(): Element {
            var header = this.createElement("div");
            header.classList.add(Style.CssClassNames.header);

            var content = this.createElement("div");
            content.classList.add(Style.CssClassNames.content);

            var footer = this.createElement("div");
            footer.classList.add(Style.CssClassNames.footer);

            header.appendChild(content);
            header.appendChild(footer);

            return header;
        }

        private createHeaderTitle(): Element {
            var title = this.createElement("div");
            title.classList.add(Style.CssClassNames.title);

            title.textContent = "ReleaseTracker";

            return title;
        }

        private createElement(tagName): Element {
            return this.document.createElement(tagName);
        }
    }
}
