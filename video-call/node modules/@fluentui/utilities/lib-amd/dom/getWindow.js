define(["require", "exports", "./setSSR"], function (require, exports, setSSR_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getWindow = void 0;
    var _window = undefined;
    // Note: Accessing "window" in IE11 is somewhat expensive, and calling "typeof window"
    // hits a memory leak, whereas aliasing it and calling "typeof _window" does not.
    // Caching the window value at the file scope lets us minimize the impact.
    try {
        _window = window;
    }
    catch (e) {
        /* no-op */
    }
    /**
     * Helper to get the window object. The helper will make sure to use a cached variable
     * of "window", to avoid overhead and memory leaks in IE11. Note that in popup scenarios the
     * window object won't match the "global" window object, and for these scenarios, you should
     * pass in an element hosted within the popup.
     *
     * @public
     */
    function getWindow(rootElement) {
        if (setSSR_1._isSSR || typeof _window === 'undefined') {
            return undefined;
        }
        else {
            var el = rootElement;
            return el && el.ownerDocument && el.ownerDocument.defaultView ? el.ownerDocument.defaultView : _window;
        }
    }
    exports.getWindow = getWindow;
});
//# sourceMappingURL=getWindow.js.map