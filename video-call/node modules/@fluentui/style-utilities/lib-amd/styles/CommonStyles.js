define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getEdgeChromiumNoHighContrastAdjustSelector = exports.getHighContrastNoAdjustStyle = exports.getScreenSelector = exports.ScreenWidthMinUhfMobile = exports.ScreenWidthMaxXXLarge = exports.ScreenWidthMaxXLarge = exports.ScreenWidthMaxLarge = exports.ScreenWidthMaxMedium = exports.ScreenWidthMaxSmall = exports.ScreenWidthMinXXXLarge = exports.ScreenWidthMinXXLarge = exports.ScreenWidthMinXLarge = exports.ScreenWidthMinLarge = exports.ScreenWidthMinMedium = exports.ScreenWidthMinSmall = exports.EdgeChromiumHighContrastSelector = exports.HighContrastSelectorBlack = exports.HighContrastSelectorWhite = exports.HighContrastSelector = void 0;
    exports.HighContrastSelector = '@media screen and (-ms-high-contrast: active), (forced-colors: active)';
    exports.HighContrastSelectorWhite = '@media screen and (-ms-high-contrast: black-on-white), (forced-colors: black-on-white)';
    exports.HighContrastSelectorBlack = '@media screen and (-ms-high-contrast: white-on-black), (forced-colors: white-on-black)';
    exports.EdgeChromiumHighContrastSelector = '@media screen and (forced-colors: active)';
    exports.ScreenWidthMinSmall = 320;
    exports.ScreenWidthMinMedium = 480;
    exports.ScreenWidthMinLarge = 640;
    exports.ScreenWidthMinXLarge = 1024;
    exports.ScreenWidthMinXXLarge = 1366;
    exports.ScreenWidthMinXXXLarge = 1920;
    exports.ScreenWidthMaxSmall = exports.ScreenWidthMinMedium - 1;
    exports.ScreenWidthMaxMedium = exports.ScreenWidthMinLarge - 1;
    exports.ScreenWidthMaxLarge = exports.ScreenWidthMinXLarge - 1;
    exports.ScreenWidthMaxXLarge = exports.ScreenWidthMinXXLarge - 1;
    exports.ScreenWidthMaxXXLarge = exports.ScreenWidthMinXXXLarge - 1;
    exports.ScreenWidthMinUhfMobile = 768;
    function getScreenSelector(min, max) {
        var minSelector = typeof min === 'number' ? " and (min-width: " + min + "px)" : '';
        var maxSelector = typeof max === 'number' ? " and (max-width: " + max + "px)" : '';
        return "@media only screen" + minSelector + maxSelector;
    }
    exports.getScreenSelector = getScreenSelector;
    /**
     * The style which turns off high contrast adjustment in browsers.
     */
    function getHighContrastNoAdjustStyle() {
        return {
            forcedColorAdjust: 'none',
            MsHighContrastAdjust: 'none',
        };
    }
    exports.getHighContrastNoAdjustStyle = getHighContrastNoAdjustStyle;
    /**
     * The style which turns off high contrast adjustment in (only) Edge Chromium browser.
     *  @deprecated Use `getHighContrastNoAdjustStyle`
     */
    function getEdgeChromiumNoHighContrastAdjustSelector() {
        var _a;
        return _a = {},
            _a[exports.EdgeChromiumHighContrastSelector] = {
                forcedColorAdjust: 'none',
            },
            _a;
    }
    exports.getEdgeChromiumNoHighContrastAdjustSelector = getEdgeChromiumNoHighContrastAdjustSelector;
});
//# sourceMappingURL=CommonStyles.js.map