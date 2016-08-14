/**
 * squareControl.ts
 * Andrea Tino - 2016
 */

/// <reference path="control.ts" />

namespace ReleaseTracker {
    /**
     * Square control for displaying info.
     */
    export class SquareControl implements Control {
        private _element: Element;

        private text: string;
        private tag: string;
        private info: string;

        /**
         * Initializes a new instance of the SquareControl class.
         */
        constructor(text: string, tag?: string, info?: string) {
            if (!text) {
                throw "Argument 'text' cannot be null or undefined!";
            }

            this.text = text;
            this.tag = tag;
            this.info = info;
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
            
        }
    }
}