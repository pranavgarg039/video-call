import { __assign } from "tslib";
import { Customizations, getWindow } from '@fluentui/utilities';
import { loadTheme as legacyLoadTheme } from '@microsoft/load-themed-styles';
import { createTheme } from '@fluentui/theme/lib/createTheme';
export { createTheme } from '@fluentui/theme/lib/createTheme';
var _theme = createTheme({});
var _onThemeChangeCallbacks = [];
export var ThemeSettingName = 'theme';
export function initializeThemeInCustomizations() {
    var _a;
    var _b;
    if (!Customizations.getSettings([ThemeSettingName]).theme) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var win = getWindow();
        if ((_b = win === null || win === void 0 ? void 0 : win.FabricConfig) === null || _b === void 0 ? void 0 : _b.theme) {
            _theme = createTheme(win.FabricConfig.theme);
        }
        // Set the default theme.
        Customizations.applySettings((_a = {}, _a[ThemeSettingName] = _theme, _a));
    }
}
initializeThemeInCustomizations();
/**
 * Gets the theme object
 * @param depComments - Whether to include deprecated tags as comments for deprecated slots.
 */
export function getTheme(depComments) {
    if (depComments === void 0) { depComments = false; }
    if (depComments === true) {
        _theme = createTheme({}, depComments);
    }
    return _theme;
}
/**
 * Registers a callback that gets called whenever the theme changes.
 * This should only be used when the component cannot automatically get theme changes through its state.
 * This will not register duplicate callbacks.
 */
export function registerOnThemeChangeCallback(callback) {
    if (_onThemeChangeCallbacks.indexOf(callback) === -1) {
        _onThemeChangeCallbacks.push(callback);
    }
}
/**
 * See registerOnThemeChangeCallback().
 * Removes previously registered callbacks.
 */
export function removeOnThemeChangeCallback(callback) {
    var i = _onThemeChangeCallbacks.indexOf(callback);
    if (i === -1) {
        return;
    }
    _onThemeChangeCallbacks.splice(i, 1);
}
/**
 * Applies the theme, while filling in missing slots.
 * @param theme - Partial theme object.
 * @param depComments - Whether to include deprecated tags as comments for deprecated slots.
 */
export function loadTheme(theme, depComments) {
    var _a;
    if (depComments === void 0) { depComments = false; }
    _theme = createTheme(theme, depComments);
    // Invoke the legacy method of theming the page as well.
    legacyLoadTheme(__assign(__assign(__assign(__assign({}, _theme.palette), _theme.semanticColors), _theme.effects), _loadFonts(_theme)));
    Customizations.applySettings((_a = {}, _a[ThemeSettingName] = _theme, _a));
    _onThemeChangeCallbacks.forEach(function (callback) {
        try {
            callback(_theme);
        }
        catch (e) {
            // don't let a bad callback break everything else
        }
    });
    return _theme;
}
/**
 * Loads font variables into a JSON object.
 * @param theme - The theme object
 */
function _loadFonts(theme) {
    var lines = {};
    for (var _i = 0, _a = Object.keys(theme.fonts); _i < _a.length; _i++) {
        var fontName = _a[_i];
        var font = theme.fonts[fontName];
        for (var _b = 0, _c = Object.keys(font); _b < _c.length; _b++) {
            var propName = _c[_b];
            var name_1 = fontName + propName.charAt(0).toUpperCase() + propName.slice(1);
            var value = font[propName];
            if (propName === 'fontSize' && typeof value === 'number') {
                // if it's a number, convert it to px by default like our theming system does
                value = value + 'px';
            }
            lines[name_1] = value;
        }
    }
    return lines;
}
//# sourceMappingURL=theme.js.map