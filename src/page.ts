/**
 * page.ts
 * Andrea Tino - 2016
 */

/// <reference path="control.ts" />
/// <reference path="style/cssClassNames.ts" />
/// <reference path="style/fontNames.ts" />

namespace ReleaseTracker {
    export class Page implements Control {
        // TODO: Move to a separate class
        private GoogleChartLoaderUrl = "https://www.gstatic.com/charts/loader.js";

        private document: Document;
        private _element: Element;

        /**
         * Initializes a new instance of the Page class.
         */
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
            return this._element;
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
            // Render font load script
            var fontLoaderScript = this.createFontsLoaderScriptElement();
            this.document.head.appendChild(fontLoaderScript);

            // Render link for our CSS
            var styleLink = this.createStyleLinkElement();
            this.document.head.appendChild(styleLink);

            // Render chart load script
            var chartLoaderScript = this.createChartLoaderScriptElement();
            this.document.head.appendChild(chartLoaderScript);

            var root = this.createRootElement();
            this.document.body.appendChild(root);
        }

        private createChartLoaderScriptElement(): Element {
            var includeScript = <HTMLScriptElement>this.createElement("script");
            includeScript.type = "text/javascript";
            includeScript.src = this.GoogleChartLoaderUrl;

            return includeScript;
        }

        private createFontsLoaderScriptElement(): Element {
            var includeScript = <HTMLScriptElement>this.createElement("script");
            includeScript.type = "text/javascript";
            includeScript.src = Style.FontNames.fontLoadSrc;

            return includeScript;
        }

        private createStyleLinkElement(): Element {
            var style = <HTMLLinkElement>this.createElement("link");
            style.type = "text/css";
            style.rel = "stylesheet";
            style.href = "style.css";

            return style;
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

            var title = this.createHeaderTitle();
            content.appendChild(title);

            var footer = this.createElement("div");
            footer.classList.add(Style.CssClassNames.footer);

            header.appendChild(content);
            header.appendChild(footer);

            return header;
        }

        private createHeaderTitle(): Element {
            var title = this.createElement("div");
            title.classList.add(Style.CssClassNames.title);

            return title;
        }

        private createElement(tagName): Element {
            return this.document.createElement(tagName);
        }
    }
}
