import { IRawStyle } from '../MergeStyles';
export declare const HighContrastSelector = "@media screen and (-ms-high-contrast: active), (forced-colors: active)";
export declare const HighContrastSelectorWhite = "@media screen and (-ms-high-contrast: black-on-white), (forced-colors: black-on-white)";
export declare const HighContrastSelectorBlack = "@media screen and (-ms-high-contrast: white-on-black), (forced-colors: white-on-black)";
export declare const EdgeChromiumHighContrastSelector = "@media screen and (forced-colors: active)";
export declare const ScreenWidthMinSmall = 320;
export declare const ScreenWidthMinMedium = 480;
export declare const ScreenWidthMinLarge = 640;
export declare const ScreenWidthMinXLarge = 1024;
export declare const ScreenWidthMinXXLarge = 1366;
export declare const ScreenWidthMinXXXLarge = 1920;
export declare const ScreenWidthMaxSmall: number;
export declare const ScreenWidthMaxMedium: number;
export declare const ScreenWidthMaxLarge: number;
export declare const ScreenWidthMaxXLarge: number;
export declare const ScreenWidthMaxXXLarge: number;
export declare const ScreenWidthMinUhfMobile = 768;
export declare function getScreenSelector(min: number | undefined, max: number | undefined): string;
/**
 * The style which turns off high contrast adjustment in browsers.
 */
export declare function getHighContrastNoAdjustStyle(): IRawStyle;
/**
 * The style which turns off high contrast adjustment in (only) Edge Chromium browser.
 *  @deprecated Use `getHighContrastNoAdjustStyle`
 */
export declare function getEdgeChromiumNoHighContrastAdjustSelector(): {
    [EdgeChromiumHighContrastSelector]: IRawStyle;
};
