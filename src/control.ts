/**
 * control.ts
 * Andrea Tino - 2016
 */

namespace ReleaseTracker {
    /**
     * Interface describing renderable controls.
     */
    export interface Control {
        /**
         * Gets the element which has been rendered.
         */
        element: Element;

        /**
         * Renders the control.
         */
        render(): void;
    }
}
