/**
 * page.ts
 * Andrea Tino - 2016
 */

/// <reference path="control.ts" />

namespace ReleaseTracker {
    export class Page implements Control {
        private _element: Element;

        /**
         * Gets the element which has been rendered.
         */
        public get element(): Element {
            return null;
        }

        /**
         * Renders the control.
         */
        public render() {
            var root = document.createElement("div");
        }
    }
}
