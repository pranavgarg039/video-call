define(["require", "exports", "./KeyCodes"], function (require, exports, KeyCodes_1) {
    "use strict";
    var _a;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.addDirectionalKeyCode = exports.isDirectionalKeyCode = void 0;
    var DirectionalKeyCodes = (_a = {},
        _a[KeyCodes_1.KeyCodes.up] = 1,
        _a[KeyCodes_1.KeyCodes.down] = 1,
        _a[KeyCodes_1.KeyCodes.left] = 1,
        _a[KeyCodes_1.KeyCodes.right] = 1,
        _a[KeyCodes_1.KeyCodes.home] = 1,
        _a[KeyCodes_1.KeyCodes.end] = 1,
        _a[KeyCodes_1.KeyCodes.tab] = 1,
        _a[KeyCodes_1.KeyCodes.pageUp] = 1,
        _a[KeyCodes_1.KeyCodes.pageDown] = 1,
        _a);
    /**
     * Returns true if the keycode is a directional keyboard key.
     */
    function isDirectionalKeyCode(which) {
        return !!DirectionalKeyCodes[which];
    }
    exports.isDirectionalKeyCode = isDirectionalKeyCode;
    /**
     * Adds a keycode to the list of keys that, when pressed, should cause the focus outlines to be visible.
     * This can be used to add global shortcut keys that directionally move from section to section within
     * an app or between focus trap zones.
     */
    function addDirectionalKeyCode(which) {
        DirectionalKeyCodes[which] = 1;
    }
    exports.addDirectionalKeyCode = addDirectionalKeyCode;
});
//# sourceMappingURL=keyboard.js.map