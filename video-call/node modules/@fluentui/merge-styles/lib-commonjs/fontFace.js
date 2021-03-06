"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fontFace = void 0;
var StyleOptionsState_1 = require("./StyleOptionsState");
var Stylesheet_1 = require("./Stylesheet");
var styleToClassName_1 = require("./styleToClassName");
/**
 * Registers a font face.
 * @public
 */
function fontFace(font) {
    Stylesheet_1.Stylesheet.getInstance().insertRule("@font-face{" + styleToClassName_1.serializeRuleEntries(StyleOptionsState_1.getStyleOptions(), font) + "}", true);
}
exports.fontFace = fontFace;
//# sourceMappingURL=fontFace.js.map