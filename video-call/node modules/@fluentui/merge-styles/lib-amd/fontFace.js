define(["require", "exports", "./StyleOptionsState", "./Stylesheet", "./styleToClassName"], function (require, exports, StyleOptionsState_1, Stylesheet_1, styleToClassName_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fontFace = void 0;
    /**
     * Registers a font face.
     * @public
     */
    function fontFace(font) {
        Stylesheet_1.Stylesheet.getInstance().insertRule("@font-face{" + styleToClassName_1.serializeRuleEntries(StyleOptionsState_1.getStyleOptions(), font) + "}", true);
    }
    exports.fontFace = fontFace;
});
//# sourceMappingURL=fontFace.js.map