define(["require", "exports", "./dom/getWindow"], function (require, exports, getWindow_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.setFocusVisibility = exports.IsFocusHiddenClassName = exports.IsFocusVisibleClassName = void 0;
    exports.IsFocusVisibleClassName = 'ms-Fabric--isFocusVisible';
    exports.IsFocusHiddenClassName = 'ms-Fabric--isFocusHidden';
    /**
     * Sets the visibility of focus styling.
     *
     * By default, focus styles (the box surrounding a focused Button, for example) only show up when navigational
     * keypresses occur (through Tab, arrows, PgUp/PgDn, Home and End), and are hidden when mouse interactions occur.
     * This API provides an imperative way to turn them on/off.
     *
     * A use case might be when you have a keypress like ctrl-f6 navigate to a particular region on the page,
     * and want focus to show up.
     *
     * @param enabled - whether to remove or add focus
     * @param target - optional target
     */
    function setFocusVisibility(enabled, target) {
        var win = target ? getWindow_1.getWindow(target) : getWindow_1.getWindow();
        if (win) {
            var classList = win.document.body.classList;
            classList.add(enabled ? exports.IsFocusVisibleClassName : exports.IsFocusHiddenClassName);
            classList.remove(enabled ? exports.IsFocusHiddenClassName : exports.IsFocusVisibleClassName);
        }
    }
    exports.setFocusVisibility = setFocusVisibility;
});
//# sourceMappingURL=setFocusVisibility.js.map