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
         * Gets a value indicating whether the control 
         * has been rendered or not. If the control has not 
         * been rendered, then 'element' is null.
         */
        rendered: boolean;

        /**
         * Renders the control.
         */
        render(): void;
    }
}
