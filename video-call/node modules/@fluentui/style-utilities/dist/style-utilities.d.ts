import { AnimationStyles } from '@fluentui/theme/lib/motion/AnimationStyles';
import { AnimationVariables } from '@fluentui/theme/lib/motion/AnimationStyles';
import { concatStyleSets } from '@fluentui/merge-styles';
import { concatStyleSetsWithProps } from '@fluentui/merge-styles';
import { createFontStyles } from '@fluentui/theme/lib/fonts/index';
import { createTheme } from '@fluentui/theme/lib/createTheme';
import { DefaultEffects } from '@fluentui/theme/lib/effects/DefaultEffects';
import { DefaultFontStyles } from '@fluentui/theme/lib/fonts/DefaultFontStyles';
import { DefaultPalette } from '@fluentui/theme/lib/colors/DefaultPalette';
import { fontFace } from '@fluentui/merge-styles';
import { FontSizes } from '@fluentui/theme/lib/fonts/index';
import { FontWeights } from '@fluentui/theme/lib/fonts/index';
import { IAnimationStyles } from '@fluentui/theme/lib/types/IAnimationStyles';
import { IAnimationVariables } from '@fluentui/theme/lib/types/IAnimationStyles';
import { IconFontSizes } from '@fluentui/theme/lib/fonts/index';
import { ICSPSettings } from '@fluentui/merge-styles';
import { ICustomizerContext } from '@fluentui/utilities';
import { IEffects } from '@fluentui/theme/lib/types/IEffects';
import { IFontFace } from '@fluentui/merge-styles';
import { IFontStyles } from '@fluentui/theme/lib/types/IFontStyles';
import { IFontWeight } from '@fluentui/merge-styles';
import { InjectionMode } from '@fluentui/merge-styles';
import { IPalette } from '@fluentui/theme/lib/types/IPalette';
import { IPartialTheme } from '@fluentui/theme/lib/types/ITheme';
import { IProcessedStyleSet } from '@fluentui/merge-styles';
import { IRawStyle } from '@fluentui/merge-styles';
import { IScheme } from '@fluentui/theme/lib/types/ITheme';
import { ISchemeNames } from '@fluentui/theme/lib/types/ITheme';
import { ISemanticColors } from '@fluentui/theme/lib/types/ISemanticColors';
import { ISemanticTextColors } from '@fluentui/theme/lib/types/ISemanticTextColors';
import { ISpacing } from '@fluentui/theme/lib/types/ISpacing';
import { IStyle } from '@fluentui/merge-styles';
import { IStyleSet } from '@fluentui/merge-styles';
import { IStyleSheetConfig } from '@fluentui/merge-styles';
import { ITheme } from '@fluentui/theme/lib/types/ITheme';
import { keyframes } from '@fluentui/merge-styles';
import { mergeStyles } from '@fluentui/merge-styles';
import { mergeStyleSets } from '@fluentui/merge-styles';
import { registerDefaultFontFaces } from '@fluentui/theme/lib/fonts/DefaultFontStyles';
import { Stylesheet } from '@fluentui/merge-styles';

/**
 * {@docCategory AnimationClassNames}
 */
export declare const AnimationClassNames: {
    [key in keyof IAnimationStyles]?: string;
};
export { AnimationStyles }
export { AnimationVariables }

/**
 * Builds a class names object from a given map.
 *
 * @param styles - Map of unprocessed styles.
 * @returns Map of property name to class name.
 */
export declare function buildClassMap<T extends Object>(styles: T): {
    [key in keyof T]?: string;
};

export declare const ColorClassNames: IColorClassNames;
export { concatStyleSets }
export { concatStyleSetsWithProps }

declare function _continuousPulseAnimationDouble(beaconColorOne: string, beaconColorTwo: string, innerDimension: string, outerDimension: string, borderWidth: string): string;

declare function _continuousPulseAnimationSingle(beaconColorOne: string, beaconColorTwo: string, innerDimension: string, outerDimension: string, borderWidth: string): string;

declare function _createDefaultAnimation(animationName: string, delayLength?: string): IRawStyle;
export { createFontStyles }
export { createTheme }
export { DefaultEffects }
export { DefaultFontStyles }
export { DefaultPalette }

export declare const EdgeChromiumHighContrastSelector = "@media screen and (forced-colors: active)";

/**
 * Generates style to clear browser specific focus styles.
 */
export declare function focusClear(): IRawStyle;

/**
 * {@docCategory FontClassNames}
 */
export declare const FontClassNames: {
    [key in keyof IFontStyles]?: string;
};
export { fontFace }
export { FontSizes }
export { FontWeights }

/**
 * The style which turns off high contrast adjustment in (only) Edge Chromium browser.
 *  @deprecated Use `getHighContrastNoAdjustStyle`
 */
export declare function getEdgeChromiumNoHighContrastAdjustSelector(): {
    [EdgeChromiumHighContrastSelector]: IRawStyle;
};

/**
 * - Generates a style used to fade out an overflowing content by defining a style for an :after pseudo element.
 * - Apply it to the :after selector for all combination of states the parent of content might have (normal, hover,
 * selected, focus).
 * - Requires the target to have position set to relative and overflow set to hidden.
 *
 * @example
 * ```tsx
 * // Assuming the following DOM structure and the different background colors coming from
 * // the parent holding the content.
 * <div className={classNames.parent}>
 *   <span className={classNames.content}>Overflown Content</span>
 * </div>
 * ```
 * ```ts
 * // This is how the style set would look in Component.styles.ts
 * const { bodyBackground } = theme.semanticColors;
 * const { neutralLighter } = theme.palette;
 *
 * // The second argument of getFadedOverflowStyle function is a string representing a key of
 * // ISemanticColors or IPalette.
 *
 * const styles = {
 *   parent: [
 *     backgroundColor: bodyBackground,
 *     selectors: {
 *       '&:hover: {
 *         backgroundColor: neutralLighter
 *       },
 *       '$content:after': {
 *         ...getFadedOverflowStyle(theme, 'bodyBackground')
 *       },
 *       '&:hover $content:after': {
 *         ...getFadedOverflowStyle(theme, 'neutralLighter')
 *       }
 *     }
 *   ],
 *   content: [
 *     width: '100%',
 *     display: 'inline-block',
 *     position: 'relative',
 *     overflow: 'hidden'
 *   ]
 * }
 * ```
 * @param theme - The theme object to use.
 * @param color - The background color to fade out to. Accepts only keys of ISemanticColors or IPalette.
 * Defaults to 'bodyBackground'.
 * @param direction - The direction of the overflow. Defaults to horizontal.
 * @param width - The width of the fading overflow. Vertical direction defaults it to 100% vs 20px when horizontal.
 * @param height - The Height of the fading overflow. Vertical direction defaults it to 50% vs 100% when horizontal.
 * @returns The style object.
 */
export declare function getFadedOverflowStyle(theme: ITheme, color?: keyof ISemanticColors | keyof IPalette, direction?: 'horizontal' | 'vertical', width?: string | number, height?: string | number): IRawStyle;

/**
 * Generates a style which can be used to set a border on focus.
 *
 * @param theme - The theme object to use.
 * @param inset - The number of pixels to inset the border (default 0)
 * @param width - The border width in pixels (default 1)
 * @param color - Color of the outline (default `theme.palette.neutralSecondary`)
 * @returns The style object.
 */
export declare function getFocusOutlineStyle(theme: ITheme, inset?: number, width?: number, color?: string): IRawStyle;

/**
 * Generates a focus style which can be used to define an :after focus border.
 *
 * @param theme - The theme object to use.
 * @param options - Options to customize the focus border.
 * @returns The style object.
 */
export declare function getFocusStyle(theme: ITheme, options?: IGetFocusStylesOptions): IRawStyle;

/**
 * Generates a focus style which can be used to define an :after focus border.
 *
 * @param theme - The theme object to use.
 * @param inset - The number of pixels to inset the border.
 * @param position - The positioning applied to the container. Must
 * be 'relative' or 'absolute' so that the focus border can live around it.
 * @param highContrastStyle - Style for high contrast mode.
 * @param borderColor - Color of the border.
 * @param outlineColor - Color of the outline.
 * @param isFocusedOnly - If the styles should apply on focus or not.
 * @returns The style object.
 * @deprecated Use the object parameter version instead.
 */
export declare function getFocusStyle(theme: ITheme, inset?: number, position?: 'relative' | 'absolute', highContrastStyle?: IRawStyle | undefined, borderColor?: string, outlineColor?: string, isFocusedOnly?: boolean): IRawStyle;

/**
 * Checks for the `disableGlobalClassNames` property on the `theme` to determine if it should return `classNames`
 * Note that calls to this function are memoized.
 *
 * @param classNames - The collection of global class names that apply when the flag is false. Make sure to pass in
 * the same instance on each call to benefit from memoization.
 * @param theme - The theme to check the flag on
 * @param disableGlobalClassNames - Optional. Explicitly opt in/out of disabling global classnames. Defaults to false.
 */
export declare function getGlobalClassNames<T>(classNames: GlobalClassNames<T>, theme: ITheme, disableGlobalClassNames?: boolean): GlobalClassNames<T>;

/**
 * The style which turns off high contrast adjustment in browsers.
 */
export declare function getHighContrastNoAdjustStyle(): IRawStyle;

/**
 * Gets an icon definition. If an icon is requested but the subset has yet to be registered,
 * it will get registered immediately.
 *
 * @public
 * @param name - Name of icon.
 */
export declare function getIcon(name?: string): IIconRecord | undefined;

/**
 * Gets an icon classname. You should be able to add this classname to an I tag with no
 * additional classnames, and render the icon.
 *
 * @public
 */
export declare function getIconClassName(name: string): string;

/**
 * Generates text input border styles on focus.
 *
 * @param borderColor - Color of the border.
 * @param borderRadius - Radius of the border.
 * @param borderType - Type of the border.
 * @param borderPosition - Position of the border relative to the input element (default to -1
 * as it's the most common border width of the input element)
 * @returns The style object.
 */
export declare const getInputFocusStyle: (borderColor: string, borderRadius: string | number, borderType?: 'border' | 'borderBottom', borderPosition?: number) => IRawStyle;

/**
 * Generates placeholder style for each of the browsers supported by `@fluentui/react`.
 * @param styles - The style to use.
 * @returns The placeholder style object for each browser depending on the placeholder directive it uses.
 */
export declare function getPlaceholderStyles(styles: IStyle): IStyle;

export declare function getScreenSelector(min: number | undefined, max: number | undefined): string;

/**
 * Gets the theme object
 * @param depComments - Whether to include deprecated tags as comments for deprecated slots.
 */
export declare function getTheme(depComments?: boolean): ITheme;

/**
 * @internal
 * This function is still in experimental phase in support of Foundation experimental development.
 * Its API signature and existence are subject to change.
 *
 * Modify context to activate the specified scheme or theme. For schemes, look in context (if available) and fall back
 * to global Customizations. If both scheme and theme are specified, scheme will be looked up in theme. In this case,
 * scheme must be present in theme arg, otherwise new context will default to theme arg (there is no fallback to
 * settings to look up scheme.)
 *
 * @param context - Context in which to get schemed customizations.
 * @param scheme - Scheme to get customizations for from theme arg (if supplied) OR from context and global settings.
 * @param theme - Theme to merge into context.
 * @returns modified schemed context if scheme is valid and not already applied, unmodified context otherwise.
 */
export declare function getThemedContext(context: ICustomizerContext, scheme?: ISchemeNames, theme?: ITheme): ICustomizerContext;

export declare type GlobalClassNames<IStyles> = Record<keyof IStyles, string>;

export declare const hiddenContentStyle: IRawStyle;

export declare const HighContrastSelector = "@media screen and (-ms-high-contrast: active), (forced-colors: active)";

export declare const HighContrastSelectorBlack = "@media screen and (-ms-high-contrast: white-on-black), (forced-colors: white-on-black)";

export declare const HighContrastSelectorWhite = "@media screen and (-ms-high-contrast: black-on-white), (forced-colors: black-on-white)";
export { IAnimationStyles }
export { IAnimationVariables }

/**
 * {@docCategory IColorClassNames}
 */
declare interface IColorClassNames {
    themeDarker: string;
    themeDarkerHover: string;
    themeDarkerBackground: string;
    themeDarkerBackgroundHover: string;
    themeDarkerBorder: string;
    themeDarkerBorderHover: string;
    themeDark: string;
    themeDarkHover: string;
    themeDarkBackground: string;
    themeDarkBackgroundHover: string;
    themeDarkBorder: string;
    themeDarkBorderHover: string;
    themeDarkAlt: string;
    themeDarkAltHover: string;
    themeDarkAltBackground: string;
    themeDarkAltBackgroundHover: string;
    themeDarkAltBorder: string;
    themeDarkAltBorderHover: string;
    themePrimary: string;
    themePrimaryHover: string;
    themePrimaryBackground: string;
    themePrimaryBackgroundHover: string;
    themePrimaryBorder: string;
    themePrimaryBorderHover: string;
    themeSecondary: string;
    themeSecondaryHover: string;
    themeSecondaryBackground: string;
    themeSecondaryBackgroundHover: string;
    themeSecondaryBorder: string;
    themeSecondaryBorderHover: string;
    themeTertiary: string;
    themeTertiaryHover: string;
    themeTertiaryBackground: string;
    themeTertiaryBackgroundHover: string;
    themeTertiaryBorder: string;
    themeTertiaryBorderHover: string;
    themeLight: string;
    themeLightHover: string;
    themeLightBackground: string;
    themeLightBackgroundHover: string;
    themeLightBorder: string;
    themeLightBorderHover: string;
    themeLighter: string;
    themeLighterHover: string;
    themeLighterBackground: string;
    themeLighterBackgroundHover: string;
    themeLighterBorder: string;
    themeLighterBorderHover: string;
    themeLighterAlt: string;
    themeLighterAltHover: string;
    themeLighterAltBackground: string;
    themeLighterAltBackgroundHover: string;
    themeLighterAltBorder: string;
    themeLighterAltBorderHover: string;
    black: string;
    blackHover: string;
    blackBackground: string;
    blackBackgroundHover: string;
    blackBorder: string;
    blackBorderHover: string;
    blackTranslucent40: string;
    blackTranslucent40Hover: string;
    blackTranslucent40Background: string;
    blackTranslucent40BackgroundHover: string;
    blackTranslucent40Border: string;
    blackTranslucent40BorderHover: string;
    neutralDark: string;
    neutralDarkHover: string;
    neutralDarkBackground: string;
    neutralDarkBackgroundHover: string;
    neutralDarkBorder: string;
    neutralDarkBorderHover: string;
    neutralPrimary: string;
    neutralPrimaryHover: string;
    neutralPrimaryBackground: string;
    neutralPrimaryBackgroundHover: string;
    neutralPrimaryBorder: string;
    neutralPrimaryBorderHover: string;
    neutralPrimaryAlt: string;
    neutralPrimaryAltHover: string;
    neutralPrimaryAltBackground: string;
    neutralPrimaryAltBackgroundHover: string;
    neutralPrimaryAltBorder: string;
    neutralPrimaryAltBorderHover: string;
    neutralSecondary: string;
    neutralSecondaryHover: string;
    neutralSecondaryBackground: string;
    neutralSecondaryBackgroundHover: string;
    neutralSecondaryBorder: string;
    neutralSecondaryBorderHover: string;
    neutralSecondaryAlt: string;
    neutralSecondaryAltHover: string;
    neutralSecondaryAltBackground: string;
    neutralSecondaryAltBackgroundHover: string;
    neutralSecondaryAltBorder: string;
    neutralSecondaryAltBorderHover: string;
    neutralTertiary: string;
    neutralTertiaryHover: string;
    neutralTertiaryBackground: string;
    neutralTertiaryBackgroundHover: string;
    neutralTertiaryBorder: string;
    neutralTertiaryBorderHover: string;
    neutralTertiaryAlt: string;
    neutralTertiaryAltHover: string;
    neutralTertiaryAltBackground: string;
    neutralTertiaryAltBackgroundHover: string;
    neutralTertiaryAltBorder: string;
    neutralTertiaryAltBorderHover: string;
    neutralQuaternary: string;
    neutralQuaternaryHover: string;
    neutralQuaternaryBackground: string;
    neutralQuaternaryBackgroundHover: string;
    neutralQuaternaryBorder: string;
    neutralQuaternaryBorderHover: string;
    neutralQuaternaryAlt: string;
    neutralQuaternaryAltHover: string;
    neutralQuaternaryAltBackground: string;
    neutralQuaternaryAltBackgroundHover: string;
    neutralQuaternaryAltBorder: string;
    neutralQuaternaryAltBorderHover: string;
    neutralLight: string;
    neutralLightHover: string;
    neutralLightBackground: string;
    neutralLightBackgroundHover: string;
    neutralLightBorder: string;
    neutralLightBorderHover: string;
    neutralLighter: string;
    neutralLighterHover: string;
    neutralLighterBackground: string;
    neutralLighterBackgroundHover: string;
    neutralLighterBorder: string;
    neutralLighterBorderHover: string;
    neutralLighterAlt: string;
    neutralLighterAltHover: string;
    neutralLighterAltBackground: string;
    neutralLighterAltBackgroundHover: string;
    neutralLighterAltBorder: string;
    neutralLighterAltBorderHover: string;
    white: string;
    whiteHover: string;
    whiteBackground: string;
    whiteBackgroundHover: string;
    whiteBorder: string;
    whiteBorderHover: string;
    whiteTranslucent40: string;
    whiteTranslucent40Hover: string;
    whiteTranslucent40Background: string;
    whiteTranslucent40BackgroundHover: string;
    whiteTranslucent40Border: string;
    whiteTranslucent40BorderHover: string;
    yellow: string;
    yellowHover: string;
    yellowBackground: string;
    yellowBackgroundHover: string;
    yellowBorder: string;
    yellowBorderHover: string;
    yellowLight: string;
    yellowLightHover: string;
    yellowLightBackground: string;
    yellowLightBackgroundHover: string;
    yellowLightBorder: string;
    yellowLightBorderHover: string;
    orange: string;
    orangeHover: string;
    orangeBackground: string;
    orangeBackgroundHover: string;
    orangeBorder: string;
    orangeBorderHover: string;
    orangeLight: string;
    orangeLightHover: string;
    orangeLightBackground: string;
    orangeLightBackgroundHover: string;
    orangeLightBorder: string;
    orangeLightBorderHover: string;
    orangeLighter: string;
    orangeLighterHover: string;
    orangeLighterBackground: string;
    orangeLighterBackgroundHover: string;
    orangeLighterBorder: string;
    orangeLighterBorderHover: string;
    redDark: string;
    redDarkHover: string;
    redDarkBackground: string;
    redDarkBackgroundHover: string;
    redDarkBorder: string;
    redDarkBorderHover: string;
    red: string;
    redHover: string;
    redBackground: string;
    redBackgroundHover: string;
    redBorder: string;
    redBorderHover: string;
    magentaDark: string;
    magentaDarkHover: string;
    magentaDarkBackground: string;
    magentaDarkBackgroundHover: string;
    magentaDarkBorder: string;
    magentaDarkBorderHover: string;
    magenta: string;
    magentaHover: string;
    magentaBackground: string;
    magentaBackgroundHover: string;
    magentaBorder: string;
    magentaBorderHover: string;
    magentaLight: string;
    magentaLightHover: string;
    magentaLightBackground: string;
    magentaLightBackgroundHover: string;
    magentaLightBorder: string;
    magentaLightBorderHover: string;
    purpleDark: string;
    purpleDarkHover: string;
    purpleDarkBackground: string;
    purpleDarkBackgroundHover: string;
    purpleDarkBorder: string;
    purpleDarkBorderHover: string;
    purple: string;
    purpleHover: string;
    purpleBackground: string;
    purpleBackgroundHover: string;
    purpleBorder: string;
    purpleBorderHover: string;
    purpleLight: string;
    purpleLightHover: string;
    purpleLightBackground: string;
    purpleLightBackgroundHover: string;
    purpleLightBorder: string;
    purpleLightBorderHover: string;
    blueDark: string;
    blueDarkHover: string;
    blueDarkBackground: string;
    blueDarkBackgroundHover: string;
    blueDarkBorder: string;
    blueDarkBorderHover: string;
    blueMid: string;
    blueMidHover: string;
    blueMidBackground: string;
    blueMidBackgroundHover: string;
    blueMidBorder: string;
    blueMidBorderHover: string;
    blue: string;
    blueHover: string;
    blueBackground: string;
    blueBackgroundHover: string;
    blueBorder: string;
    blueBorderHover: string;
    blueLight: string;
    blueLightHover: string;
    blueLightBackground: string;
    blueLightBackgroundHover: string;
    blueLightBorder: string;
    blueLightBorderHover: string;
    tealDark: string;
    tealDarkHover: string;
    tealDarkBackground: string;
    tealDarkBackgroundHover: string;
    tealDarkBorder: string;
    tealDarkBorderHover: string;
    teal: string;
    tealHover: string;
    tealBackground: string;
    tealBackgroundHover: string;
    tealBorder: string;
    tealBorderHover: string;
    tealLight: string;
    tealLightHover: string;
    tealLightBackground: string;
    tealLightBackgroundHover: string;
    tealLightBorder: string;
    tealLightBorderHover: string;
    greenDark: string;
    greenDarkHover: string;
    greenDarkBackground: string;
    greenDarkBackgroundHover: string;
    greenDarkBorder: string;
    greenDarkBorderHover: string;
    green: string;
    greenHover: string;
    greenBackground: string;
    greenBackgroundHover: string;
    greenBorder: string;
    greenBorderHover: string;
    greenLight: string;
    greenLightHover: string;
    greenLightBackground: string;
    greenLightBackgroundHover: string;
    greenLightBorder: string;
    greenLightBorderHover: string;
}
export { IconFontSizes }
export { ICSPSettings }
export { IEffects }
export { IFontFace }
export { IFontStyles }
export { IFontWeight }

export declare interface IGetFocusStylesOptions {
    /**
     * The number of pixels to inset the border.
     * @defaultvalue 0
     */
    inset?: number;
    /**
     * The width of the border in pixels.
     * @defaultvalue 1
     */
    width?: number;
    /**
     * The positioning applied to the container.
     * Must be 'relative' or 'absolute' so that the focus border can live around it.
     * @defaultvalue 'relative'
     */
    position?: 'relative' | 'absolute';
    /**
     * Style for high contrast mode.
     */
    highContrastStyle?: IRawStyle;
    /**
     * Color of the border.
     * @defaultvalue theme.palette.white
     */
    borderColor?: string;
    /**
     * Color of the outline.
     * @defaultvalue theme.palette.neutralSecondary
     */
    outlineColor?: string;
    /**
     * If the styles should apply on `:focus` pseudo element.
     * @defaultvalue true
     */
    isFocusedOnly?: boolean;
}

export declare interface IIconOptions {
    /**
     * By default, registering the same set of icons will generate a console warning per duplicate icon
     * registered, because this scenario can create unexpected consequences.
     *
     * Some scenarios include:
     *
     * Icon set was previously registered using a different base url.
     * Icon set was previously registered but a different version was provided.
     * Icons in a previous registered set overlap with a new set.
     *
     * To simply ignore previously registered icons, you can specify to disable warnings. This means
     * that if an icon which was previous registered is registered again, it will be silently ignored.
     * However, consider whether the problems listed above will cause issues.
     **/
    disableWarnings: boolean;
    /**
     * @deprecated Use `disableWarnings` instead.
     */
    warnOnMissingIcons?: boolean;
}

export declare interface IIconRecord {
    code: string | undefined;
    subset: IIconSubsetRecord;
}

export declare interface IIconSubset {
    fontFace?: IFontFace;
    icons: {
        [key: string]: string | JSX.Element;
    };
    style?: IRawStyle;
}

export declare interface IIconSubsetRecord extends IIconSubset {
    isRegistered?: boolean;
    className?: string;
}
export { InjectionMode }
export { IPalette }
export { IPartialTheme }
export { IProcessedStyleSet }
export { IRawStyle }
export { IScheme }
export { ISchemeNames }
export { ISemanticColors }
export { ISemanticTextColors }
export { ISpacing }
export { IStyle }
export { IStyleSet }
export { IStyleSheetConfig }
export { ITheme }
export { keyframes }

/**
 * Applies the theme, while filling in missing slots.
 * @param theme - Partial theme object.
 * @param depComments - Whether to include deprecated tags as comments for deprecated slots.
 */
export declare function loadTheme(theme: IPartialTheme, depComments?: boolean): ITheme;
export { mergeStyles }
export { mergeStyleSets }

export declare const normalize: IRawStyle;

export declare const noWrap: IRawStyle;

export declare const PulsingBeaconAnimationStyles: {
    continuousPulseAnimationDouble: typeof _continuousPulseAnimationDouble;
    continuousPulseAnimationSingle: typeof _continuousPulseAnimationSingle;
    createDefaultAnimation: typeof _createDefaultAnimation;
};
export { registerDefaultFontFaces }

/**
 * Remaps one icon name to another.
 */
export declare function registerIconAlias(iconName: string, mappedToName: string): void;

/**
 * Registers a given subset of icons.
 *
 * @param iconSubset - the icon subset definition.
 */
export declare function registerIcons(iconSubset: IIconSubset, options?: Partial<IIconOptions>): void;

/**
 * Registers a callback that gets called whenever the theme changes.
 * This should only be used when the component cannot automatically get theme changes through its state.
 * This will not register duplicate callbacks.
 */
export declare function registerOnThemeChangeCallback(callback: (theme: ITheme) => void): void;

/**
 * See registerOnThemeChangeCallback().
 * Removes previously registered callbacks.
 */
export declare function removeOnThemeChangeCallback(callback: (theme: ITheme) => void): void;

export declare const ScreenWidthMaxLarge: number;

export declare const ScreenWidthMaxMedium: number;

export declare const ScreenWidthMaxSmall: number;

export declare const ScreenWidthMaxXLarge: number;

export declare const ScreenWidthMaxXXLarge: number;

export declare const ScreenWidthMinLarge = 640;

export declare const ScreenWidthMinMedium = 480;

export declare const ScreenWidthMinSmall = 320;

export declare const ScreenWidthMinUhfMobile = 768;

export declare const ScreenWidthMinXLarge = 1024;

export declare const ScreenWidthMinXXLarge = 1366;

export declare const ScreenWidthMinXXXLarge = 1920;

/**
 * Sets the icon options.
 *
 * @public
 */
export declare function setIconOptions(options: Partial<IIconOptions>): void;
export { Stylesheet }

export declare const ThemeSettingName = "theme";

/**
 * Unregisters icons by name.
 *
 * @param iconNames - List of icons to unregister.
 */
export declare function unregisterIcons(iconNames: string[]): void;

export declare namespace ZIndexes {
    const Nav: number;
    /**
     * @deprecated Do not use
     */
    const ScrollablePane: number;
    const FocusStyle: number;
    const Coachmark: number;
    const Layer: number;
    const KeytipLayer: number;
}

export { }
