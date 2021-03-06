define(["require", "exports", "./setSSR"], function (require, exports, setSSR_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getDocument = void 0;
    /**
     * Helper to get the document object. Note that in popup window cases, document
     * might be the wrong document, which is why we look at ownerDocument for the
     * truth. Also note that the SSR flag is used to test ssr scenarios even if
     * document is defined (from JSDOM for example.)
     *
     * @public
     */
    function getDocument(rootElement) {
        if (setSSR_1._isSSR || typeof document === 'undefined') {
            return undefined;
        }
        else {
            var el = rootElement;
            return el && el.ownerDocument ? el.ownerDocument : document;
        }
    }
    exports.getDocument = getDocument;
});
//# sourceMappingURL=getDocument.js.map