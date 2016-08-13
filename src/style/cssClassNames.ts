/**
 * cssClassNames.ts
 * Andrea Tino - 2016
 */

namespace ReleaseTracker.Style {
    /**
     * Contains all the class names being used in the application.
     */
    export class CssClassNames {
        /**
         * Gets the name of class for the root element.
         */
        public get root(): string { return "root"; }

        /**
         * Gets the name of class for the content element.
         */
        public get content(): string { return "content"; }

        /**
         * Gets the name of class for the header element.
         */
        public get header(): string { return "header"; }

        /**
         * Gets the name of class for the footer element.
         */
        public get footer(): string { return "footer"; }
    }
}
