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
        public static get root(): string { return "root"; }

        /**
         * Gets the name of class for the content element.
         */
        public static  get content(): string { return "content"; }

        /**
         * Gets the name of class for the header element.
         */
        public static get header(): string { return "header"; }

        /**
         * Gets the name of class for the title element.
         */
        public static get title(): string { return "title"; }

        /**
         * Gets the name of class for the footer element.
         */
        public static get footer(): string { return "footer"; }
    }
}
