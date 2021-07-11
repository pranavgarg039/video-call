/* eslint-disable no-console */
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.setWarningCallback = exports.warn = void 0;
    var _warningCallback = undefined;
    /**
     * Sends a warning to console, if the api is present.
     *
     * @public
     * @param message - Warning message.
     */
    function warn(message) {
        
    }
    exports.warn = warn;
    /**
     * Configures the warning callback. Passing in undefined will reset it to use the default
     * console.warn function.
     *
     * @public
     * @param warningCallback - Callback to override the generated warnings.
     */
    function setWarningCallback(warningCallback) {
        _warningCallback = warningCallback;
    }
    exports.setWarningCallback = setWarningCallback;
});
//# sourceMappingURL=warn.js.map