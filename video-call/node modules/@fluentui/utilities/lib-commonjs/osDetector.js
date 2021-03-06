"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isMac = void 0;
var getWindow_1 = require("./dom/getWindow");
var isMacResult;
/**
 * Returns true if the user is on a Mac. Caches the result value.
 * @param reset - Reset the cached result value (mainly for testing).
 */
function isMac(reset) {
    if (typeof isMacResult === 'undefined' || reset) {
        var win = getWindow_1.getWindow();
        var userAgent = win && win.navigator.userAgent;
        isMacResult = !!userAgent && userAgent.indexOf('Macintosh') !== -1;
    }
    return !!isMacResult;
}
exports.isMac = isMac;
//# sourceMappingURL=osDetector.js.map