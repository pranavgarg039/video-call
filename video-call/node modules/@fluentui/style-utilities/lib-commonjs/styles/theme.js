"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadTheme = exports.removeOnThemeChangeCallback = exports.registerOnThemeChangeCallback = exports.getTheme = exports.initializeThemeInCustomizations = exports.ThemeSettingName = exports.createTheme = void 0;
var tslib_1 = require("tslib");
var utilities_1 = require("@fluentui/utilities");
var load_themed_styles_1 = require("@microsoft/load-themed-styles");
var createTheme_1 = require("@fluentui/theme/lib-commonjs/createTheme");
var createTheme_2 = require("@fluentui/theme/lib-commonjs/createTheme");
Object.defineProperty(exports, "createTheme", { enumerable: true, get: function () { return createTheme_2.createTheme; } });
var _theme = createTheme_1.createTheme({});
var _onThemeChangeCallbacks = [];
exports.ThemeSettingName = 'theme';
function initializeThemeInCustomizations() {
    var _a;
    var _b;
    if (!utilities_1.Customizations.getSettings([exports.ThemeSettingName]).theme) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var win = utilities_1.getWindow();
        if ((_b = win === null || win === void 0 ? void 0 : win.FabricConfig) === null || _b === void 0 ? void 0 : _b.theme) {
            _theme = createTheme_1.createTheme(win.FabricConfig.theme);
        }
        // Set the default theme.
        utilities_1.Customizations.applySettings((_a = {}, _a[exports.ThemeSettingName] = _theme, _a));
    }
}
exports.initializeThemeInCustomizations = initializeThemeInCustomizations;
initializeThemeInCustomizations();
/**
 * Gets the theme object
 * @param depComments - Whether to include deprecated tags as comments for deprecated slots.
 */
function getTheme(depComments) {
    if (depComments === void 0) { depComments = false; }
    if (depComments === true) {
        _theme = createTheme_1.createTheme({}, depComments);
    }
    return _theme;
}
exports.getTheme = getTheme;
/**
 * Registers a callback that gets called whenever the theme changes.
 * This should only be used when the component cannot automatically get theme changes through its state.
 * This will not register duplicate callbacks.
 */
function registerOnThemeChangeCallback(callback) {
    if (_onThemeChangeCallbacks.indexOf(callback) === -1) {
        _onThemeChangeCallbacks.push(callback);
    }
}
exports.registerOnThemeChangeCallback = registerOnThemeChangeCallback;
/**
 * See registerOnThemeChangeCallback().
 * Removes previously registered callbacks.
 */
function removeOnThemeChangeCallback(callback) {
    var i = _onThemeChangeCallbacks.indexOf(callback);
    if (i === -1) {
        return;
    }
    _onThemeChangeCallbacks.splice(i, 1);
}
exports.removeOnThemeChangeCallback = removeOnThemeChangeCallback;
/**
 * Applies the theme, while filling in missing slots.
 * @param theme - Partial theme object.
 * @param depComments - Whether to include deprecated tags as comments for deprecated slots.
 */
function loadTheme(theme, depComments) {
    var _a;
    if (depComments === void 0) { depComments = false; }
    _theme = createTheme_1.createTheme(theme, depComments);
    // Invoke the legacy method of theming the page as well.
    load_themed_styles_1.loadTheme(tslib_1.__assign(tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, _theme.palette), _theme.semanticColors), _theme.effects), _loadFonts(_theme)));
    utilities_1.Customizations.applySettings((_a = {}, _a[exports.ThemeSettingName] = _theme, _a));
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
exports.loadTheme = loadTheme;
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