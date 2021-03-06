var _a;
import { KeyCodes } from './KeyCodes';
var DirectionalKeyCodes = (_a = {},
    _a[KeyCodes.up] = 1,
    _a[KeyCodes.down] = 1,
    _a[KeyCodes.left] = 1,
    _a[KeyCodes.right] = 1,
    _a[KeyCodes.home] = 1,
    _a[KeyCodes.end] = 1,
    _a[KeyCodes.tab] = 1,
    _a[KeyCodes.pageUp] = 1,
    _a[KeyCodes.pageDown] = 1,
    _a);
/**
 * Returns true if the keycode is a directional keyboard key.
 */
export function isDirectionalKeyCode(which) {
    return !!DirectionalKeyCodes[which];
}
/**
 * Adds a keycode to the list of keys that, when pressed, should cause the focus outlines to be visible.
 * This can be used to add global shortcut keys that directionally move from section to section within
 * an app or between focus trap zones.
 */
export function addDirectionalKeyCode(which) {
    DirectionalKeyCodes[which] = 1;
}
//# sourceMappingURL=keyboard.js.map