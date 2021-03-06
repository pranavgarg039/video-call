"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setSSR = exports._isSSR = void 0;
exports._isSSR = false;
/**
 * Helper to set ssr mode to simulate no window object returned from getWindow helper.
 *
 * @public
 */
function setSSR(isEnabled) {
    exports._isSSR = isEnabled;
}
exports.setSSR = setSSR;
//# sourceMappingURL=setSSR.js.map