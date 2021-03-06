import { IFontWeight } from '@fluentui/merge-styles';
import { IRawStyle } from '@fluentui/merge-styles';
import { IStyleFunctionOrObject } from '@fluentui/utilities';

/**
 * All Fabric standard animations, exposed as json objects referencing predefined
 * keyframes. These objects can be mixed in with other class definitions.
 */
export declare const AnimationStyles: IAnimationStyles;

/**
 * Exporting raw duraction values and easing functions to be used in custom animations
 */
export declare const AnimationVariables: IAnimationVariables;

export declare namespace CommunicationColors {
    const shade30 = "#004578";
    const shade20 = "#005a9e";
    const shade10 = "#106ebe";
    const primary = "#0078d4";
    const tint10 = "#2b88d8";
    const tint20 = "#c7e0f4";
    const tint30 = "#deecf9";
    const tint40 = "#eff6fc";
}

/**
 * {@docCategory Theme}
 * Component-level styles and token set.
 */
export declare type ComponentsStyles = {
    [componentName: string]: ComponentStyles;
};

/**
 * {@docCategory Theme}
 * Component-level styles and variants.
 */
export declare interface ComponentStyles {
    /**
     * styles prop for a component.
     */
    styles?: IStyleFunctionOrObject<any, any>;
}

export declare function createFontStyles(localeCode: string | null): IFontStyles;

/**
 * Creates a custom theme definition.
 * @param theme - Partial theme object.
 * @param depComments - Whether to include deprecated tags as comments for deprecated slots.
 */
export declare function createTheme(theme?: PartialTheme, depComments?: boolean): Theme;

export declare const DefaultEffects: IEffects;

export declare const DefaultFontStyles: IFontStyles;

export declare const DefaultPalette: IPalette;

export declare const DefaultSpacing: ISpacing;

export declare namespace Depths {
    const depth0 = "0 0 0 0 transparent";
    const depth4 = "0 1.6px 3.6px 0 rgba(0, 0, 0, 0.132), 0 0.3px 0.9px 0 rgba(0, 0, 0, 0.108)";
    const depth8 = "0 3.2px 7.2px 0 rgba(0, 0, 0, 0.132), 0 0.6px 1.8px 0 rgba(0, 0, 0, 0.108)";
    const depth16 = "0 6.4px 14.4px 0 rgba(0, 0, 0, 0.132), 0 1.2px 3.6px 0 rgba(0, 0, 0, 0.108)";
    const depth64 = "0 25.6px 57.6px 0 rgba(0, 0, 0, 0.22), 0 4.8px 14.4px 0 rgba(0, 0, 0, 0.18)";
}

export declare const FluentTheme: ITheme;

export declare namespace FontSizes {
    const size10 = "10px";
    const size12 = "12px";
    const size14 = "14px";
    const size16 = "16px";
    const size18 = "18px";
    const size20 = "20px";
    const size24 = "24px";
    const size28 = "28px";
    const size32 = "32px";
    const size42 = "42px";
    const size68 = "68px";
    const mini: string;
    const xSmall: string;
    const small: string;
    const smallPlus: string;
    const medium: string;
    const mediumPlus: string;
    const icon: string;
    const large: string;
    const xLarge: string;
    const xLargePlus: string;
    const xxLarge: string;
    const xxLargePlus: string;
    const superLarge: string;
    const mega: string;
}

export declare namespace FontWeights {
    const light: IFontWeight;
    const semilight: IFontWeight;
    const regular: IFontWeight;
    const semibold: IFontWeight;
    const bold: IFontWeight;
}

/**
 * All Fabric standard animations, exposed as json objects referencing predefined
 * keyframes. These objects can be mixed in with other class definitions.
 * {@docCategory IAnimationStyles}
 */
export declare interface IAnimationStyles {
    slideRightIn10: IRawStyle;
    slideRightIn20: IRawStyle;
    slideRightIn40: IRawStyle;
    slideRightIn400: IRawStyle;
    slideLeftIn10: IRawStyle;
    slideLeftIn20: IRawStyle;
    slideLeftIn40: IRawStyle;
    slideLeftIn400: IRawStyle;
    slideUpIn10: IRawStyle;
    slideUpIn20: IRawStyle;
    slideDownIn10: IRawStyle;
    slideDownIn20: IRawStyle;
    slideRightOut10: IRawStyle;
    slideRightOut20: IRawStyle;
    slideRightOut40: IRawStyle;
    slideRightOut400: IRawStyle;
    slideLeftOut10: IRawStyle;
    slideLeftOut20: IRawStyle;
    slideLeftOut40: IRawStyle;
    slideLeftOut400: IRawStyle;
    slideUpOut10: IRawStyle;
    slideUpOut20: IRawStyle;
    slideDownOut10: IRawStyle;
    slideDownOut20: IRawStyle;
    scaleUpIn100: IRawStyle;
    scaleDownIn100: IRawStyle;
    scaleUpOut103: IRawStyle;
    scaleDownOut98: IRawStyle;
    fadeIn100: IRawStyle;
    fadeIn200: IRawStyle;
    fadeIn400: IRawStyle;
    fadeIn500: IRawStyle;
    fadeOut100: IRawStyle;
    fadeOut200: IRawStyle;
    fadeOut400: IRawStyle;
    fadeOut500: IRawStyle;
    rotate90deg: IRawStyle;
    rotateN90deg: IRawStyle;
}

export declare interface IAnimationVariables {
    easeFunction1: string;
    easeFunction2: string;
    durationValue1: string;
    durationValue2: string;
    durationValue3: string;
    durationValue4: string;
}

export declare namespace IconFontSizes {
    const xSmall: string;
    const small: string;
    const medium: string;
    const large: string;
}

/**
 * Decorative styles in a theme
 * {@docCategory IEffects}
 */
export declare interface IEffects {
    /**
     * Used to provide a visual affordance that this element is elevated above the surface it rests on.
     * This is lower than elevations with a higher value, and higher than elevations with a lower value.
     * The shadow's color should not change with the theme, because colored shadows look unnatural.
     * Used for: cards, grid items
     */
    elevation4: string;
    /**
     * Used to provide a visual affordance that this element is elevated above the surface it rests on.
     * This is lower than elevations with a higher value, and higher than elevations with a lower value.
     * The shadow's color should not change with the theme, because colored shadows look unnatural.
     * Used for: menus, command surfaces
     */
    elevation8: string;
    /**
     * Used to provide a visual affordance that this element is elevated above the surface it rests on.
     * This is lower than elevations with a higher value, and higher than elevations with a lower value.
     * The shadow's color should not change with the theme, because colored shadows look unnatural.
     * Used for: search result dropdowns, hover cards, tooltips, help bubbles
     */
    elevation16: string;
    /**
     * Used to provide a visual affordance that this element is elevated above the surface it rests on.
     * This is lower than elevations with a higher value, and higher than elevations with a lower value.
     * The shadow's color should not change with the theme, because colored shadows look unnatural.
     * Used for: Panels, Dialogs
     */
    elevation64: string;
    /**
     * Rounded corner value, for use with border-radius. Smaller values indicate less rounding.
     * Smaller elements should get less rounding than larger elements.
     * Used for: buttons
     */
    roundedCorner2: string;
    /**
     * Rounded corner value, for use with border-radius. Smaller values indicate less rounding.
     * Smaller elements should get less rounding than larger elements.
     * Used for: cards
     */
    roundedCorner4: string;
    /**
     * Rounded corner value, for use with border-radius. Smaller values indicate less rounding.
     * Smaller elements should get less rounding than larger elements.
     * Used for: surfaces
     */
    roundedCorner6: string;
}

/**
 * Fluent UI font set.
 * {@docCategory IFontStyles}
 */
export declare interface IFontStyles {
    tiny: IRawStyle;
    xSmall: IRawStyle;
    small: IRawStyle;
    smallPlus: IRawStyle;
    medium: IRawStyle;
    mediumPlus: IRawStyle;
    large: IRawStyle;
    xLarge: IRawStyle;
    /**
     * @deprecated Exists for forward compatibility with Fabric 7's Fluent theme.
     * Not recommended for use with Fabric 6.
     */
    xLargePlus: IRawStyle;
    xxLarge: IRawStyle;
    /**
     * @deprecated Exists for forward compatibility with Fabric 7's Fluent theme
     * Not recommended for use with Fabric 6.
     */
    xxLargePlus: IRawStyle;
    superLarge: IRawStyle;
    mega: IRawStyle;
}

/**
 * Fluent UI color palette.
 * {@docCategory IPalette}
 */
export declare interface IPalette {
    /**
     * Color code for themeDarker.
     */
    themeDarker: string;
    /**
     * Color code for themeDark.
     */
    themeDark: string;
    /**
     * Color code for themeDarkAlt.
     */
    themeDarkAlt: string;
    /**
     * Color code for themePrimary.
     */
    themePrimary: string;
    /**
     * Color code for themeSecondary.
     */
    themeSecondary: string;
    /**
     * Color code for themeTertiary.
     */
    themeTertiary: string;
    /**
     * Color code for themeLight.
     */
    themeLight: string;
    /**
     * Color code for themeLighter.
     */
    themeLighter: string;
    /**
     * Color code for themeLighterAlt.
     */
    themeLighterAlt: string;
    /**
     * Color code for the strongest color, which is black in the default theme.
     * This is a very light color in inverted themes.
     */
    black: string;
    /**
     * Color code for blackTranslucent40.
     */
    blackTranslucent40: string;
    /**
     * Color code for neutralDark.
     */
    neutralDark: string;
    /**
     * Color code for neutralPrimary.
     */
    neutralPrimary: string;
    /**
     * Color code for neutralPrimaryAlt.
     */
    neutralPrimaryAlt: string;
    /**
     * Color code for neutralSecondary.
     */
    neutralSecondary: string;
    /**
     * Color code for neutralSecondaryAlt.
     */
    neutralSecondaryAlt: string;
    /**
     * Color code for neutralTertiary.
     */
    neutralTertiary: string;
    /**
     * Color code for neutralTertiaryAlt.
     */
    neutralTertiaryAlt: string;
    /**
     * Color code for neutralQuaternary.
     */
    neutralQuaternary: string;
    /**
     * Color code for neutralQuaternaryAlt.
     */
    neutralQuaternaryAlt: string;
    /**
     * Color code for neutralLight.
     */
    neutralLight: string;
    /**
     * Color code for neutralLighter.
     */
    neutralLighter: string;
    /**
     * Color code for neutralLighterAlt.
     */
    neutralLighterAlt: string;
    /**
     * Color code for the accent.
     */
    accent: string;
    /**
     * Color code for the softest color, which is white in the default theme. This is a very dark color in dark themes.
     * This is the page background.
     */
    white: string;
    /**
     * Color code for whiteTranslucent40
     */
    whiteTranslucent40: string;
    /**
     * Color code for yellowDark.
     */
    yellowDark: string;
    /**
     * Color code for yellow.
     */
    yellow: string;
    /**
     * Color code for yellowLight.
     */
    yellowLight: string;
    /**
     * Color code for orange.
     */
    orange: string;
    /**
     * Color code for orangeLight.
     */
    orangeLight: string;
    /**
     * Color code for orangeLighter.
     */
    orangeLighter: string;
    /**
     * Color code for redDark.
     */
    redDark: string;
    /**
     * Color code for red.
     */
    red: string;
    /**
     * Color code for magentaDark.
     */
    magentaDark: string;
    /**
     * Color code for magenta.
     */
    magenta: string;
    /**
     * Color code for magentaLight.
     */
    magentaLight: string;
    /**
     * Color code for purpleDark.
     */
    purpleDark: string;
    /**
     * Color code for purple.
     */
    purple: string;
    /**
     * Color code for purpleLight.
     */
    purpleLight: string;
    /**
     * Color code for blueDark.
     */
    blueDark: string;
    /**
     * Color code for blueMid.
     */
    blueMid: string;
    /**
     * Color code for blue.
     */
    blue: string;
    /**
     * Color code for blueLight.
     */
    blueLight: string;
    /**
     * Color code for tealDark.
     */
    tealDark: string;
    /**
     * Color code for teal.
     */
    teal: string;
    /**
     * Color code for tealLight.
     */
    tealLight: string;
    /**
     * Color code for greenDark.
     */
    greenDark: string;
    /**
     * Color code for green.
     */
    green: string;
    /**
     * Color code for greenLight.
     */
    greenLight: string;
}

/**
 * {@docCategory ITheme}
 */
export declare interface IPartialTheme extends PartialTheme {
}

/**
 * {@docCategory IScheme}
 */
export declare interface IScheme {
    rtl?: boolean;
    palette: IPalette;
    fonts: IFontStyles;
    semanticColors: ISemanticColors;
    isInverted: boolean;
    /**
     * This setting is for a very narrow use case and you probably don't need to worry about,
     * unless you share a environment with others that also use fabric.
     * It is used for disabling global styles on fabric components. This will prevent global
     * overrides that might have been set by other fabric users from applying to your components.
     * When you set this setting to `true` on your theme the components in the subtree of your
     * Customizer will not get the global styles applied to them.
     */
    disableGlobalClassNames: boolean;
    /**
     * @internal
     * The spacing property is still in an experimental phase. The intent is to have it
     * be used for padding and margin sizes in a future release, but it is still undergoing review.
     * Avoid using it until it is finalized.
     */
    spacing: ISpacing;
    effects: IEffects;
}

/**
 * @internal
 * Predefined scheme identifiers.
 * Schemes are is still in an experimental phase.
 * This interface's naming and values are not finalized and are subject to change.
 * {@docCategory IScheme}
 */
export declare type ISchemeNames = 'default' | 'neutral' | 'soft' | 'strong';

/**
 * The collection of all semantic slots for colors used in themes.
 *
 * Note: text colors are defined in ISemanticTextColors.ts.
 * We plan to move completely to semantic slots and replace all usage of Fabric palette slots.
 * We've been actively making some of these changes but still have a ways to go. At present,
 * we're only adding slots if absolutely necessary because we are trying to avoid bloating
 * the already sizeable offering. We're also working on a better solution for design tokens
 * overall in our next iteration. We'll provide an update on this site when that's ready.
 * Thank you for your patience.
 *
 * #### Naming Convention
 *
 * The name of a semantic slot can quickly tell you how it???s meant to be used. It generally follows this format:
 *
 * `[category name][element name][Checked][Hovered/Pressed/Disabled state]`
 *
 * * `[category name]` ??? The ???family??? that this slot belongs to.
 * * `[element name]` ??? The name of the thing being targeted, such as the background or border.
 * * `[Checked]` ??? Whether the thing is checked. We assume things are unchecked by default, so no need to specify the
 * unchecked state. (???Checked??? refers to anything that is on, selected, toggled, highlighted, emphasized, etc.)
 * * `[Hovered/Pressed/Disabled state]` ??? One of these states, if applicable. Each of these states are mutually
 * exclusive. Pressed styles overwrite hovered styles, and disabled elements cannot be hovered or pressed.
 *
 * #### Base Slots
 *
 * A basic set of slots that provide many default body styles, such as text, subtext, disabled colors, and so on.
 * If a category doesn't provide the slot you're looking for, use one from this category.
 * For example, the placeholder text on a text input field has no corresponding slot in its category,
 * so you'd use the bodySubtextColor from this category.
 *
 * #### Invariants
 *
 * When color has meaning, we do not want to change the color much theme to theme. For example, we
 * will always want errors to be some shade of red, but we will need to tweak the exact shade so it's
 * legible depending on whether it's an inverted theme or not.
 * Invariant colors should almost never be changed by the theme, the defaults should suffice.
 *
 * #### Input Controls
 *
 * This category contains input components commonly used to denote state, including radio buttons,
 * check boxes, toggle switches, sliders, progress bars, and more.
 *
 * #### Buttons
 *
 * Buttons! And all the flavors thereof.
 *
 * #### Menus
 *
 * Any kind of popup menus uses this category.
 *
 * #### Lists
 *
 * Lists differ from menus in that they are designed to show infinite amounts of items, often scroll,
 * and have a large and complex interaction surface.
 * This category covers all kinds of lists, whether they're typical one-item-per-row lists (like DetailsList)
 * or ones with a tiled layout.
 *
 * {@docCategory ISemanticColors}
 */
export declare interface ISemanticColors extends ISemanticTextColors {
    /**
     * The default color for backgrounds.
     */
    bodyBackground: string;
    /**
     * The default hover color for the backgrounds of interactable elements that don't have their own backgrounds.
     * e.g. if links had hover backgrounds, they'd use this
     */
    bodyBackgroundHovered: string;
    /**
     * The default background color of selected interactable elements that don't have their own backgrounds.
     * e.g. indicates in the nav which page you're currently on
     */
    bodyBackgroundChecked: string;
    /**
     * The standout color for highlighted content backgrounds.
     * For highlighted content when there is no emphasis, use the neutral variant instead.
     * This should be a shade darker than bodyBackground in light themes, and a shade lighter in inverted themes.
     */
    bodyStandoutBackground: string;
    /**
     * The color for chrome adjacent to an area with bodyBackground.
     * This can be used to provide visual separation of zones when using stronger colors, when using a divider line
     * is not desired.
     * In most themes, this should match the color of bodyBackground.
     * See also: bodyFrameDivider
     */
    bodyFrameBackground: string;
    /**
     * Used as the border between a zone with bodyFrameBackground and a zone with bodyBackground.
     * If bodyBackground and bodyFrameBackground are different, this should be the same color as bodyFrameBackground
     * in order to visually disappear.
     * See also: bodyFrameBackground
     */
    bodyFrameDivider: string;
    /**
     * Divider lines; e.g. lines that separate sections in a menu, an <HR> element.
     */
    bodyDivider: string;
    /**
     * The default color for backgrounds of disabled controls; e.g. disabled text field.
     */
    disabledBackground: string;
    /**
     * The default color for border of disabled controls; e.g. disabled slider, disabled toggle border.
     */
    disabledBorder: string;
    /**
     * The color of the outline around focused controls that don't already have a border; e.g. menu items
     */
    focusBorder: string;
    /**
     * The background color of a card (or other surface) on a standout background.
     * Cards usually have shadows, but the variantBorder slots can be used for a solid border.
     * e.g. cards on a carousel of highlighted articles
     */
    cardStandoutBackground: string;
    /**
     * The default box-shadow for a card. In inverted themes, by default, this is set to `none` since shadows do not work
     * well on dark backgrounds. If the card could be the same color as the background, it is recommended that
     * `variantBorder` is used instead, so the card doesn't disappear in inverted themes.
     * For use with `box-shadow`.
     */
    cardShadow: string;
    /**
     * The default box-shadow when hovering on a card. Generally, this is a deeper shadow than `cardShadow`, to give
     * the effect that the card is lifting off the page.
     * In inverted themes, this should be set to a box-shadow that looks like a solid border, because shadows are not
     * visible on dark themes.
     * For use with `box-shadow`.
     */
    cardShadowHovered: string;
    /**
     * The color of the border that provides contrast between an element, such as a card, and a standout background.
     */
    variantBorder: string;
    /**
     * Hover color of border that provides contrast between an element, such as a card, and a standout background.
     */
    variantBorderHovered: string;
    /**
     * Background color for default/empty state graphical elements; eg default icons, empty section that
     * needs user to fill in content, placeholder graphics, empty seats, etc.
     */
    defaultStateBackground: string;
    /**
     * Background for informational messages.
     */
    infoBackground: string;
    /**
     * The background for errors, if necessary, or highlighting the section of the page where the error is present.
     */
    errorBackground: string;
    /**
     * Background for blocking issues, which is more severe than a warning, but not as bad as an error.
     */
    blockingBackground: string;
    /**
     * Background for warning messages.
     */
    warningBackground: string;
    /**
     * Background for severe warning messages.
     */
    severeWarningBackground: string;
    /**
     * Background for success
     */
    successBackground: string;
    /**
     * Color for icons on infoBackground.
     */
    infoIcon: string;
    /**
     * Color for icons on errorBackground.
     */
    errorIcon: string;
    /**
     * Color for icons on blockingBackground.
     */
    blockingIcon: string;
    /**
     * Color for icons on warningBackground.
     */
    warningIcon: string;
    /**
     * Color for icons on severeWarningBackground.
     */
    severeWarningIcon: string;
    /**
     * Color for icons on successBackground.
     */
    successIcon: string;
    /**
     * Color of links within a message.
     */
    messageLink: string;
    /**
     * Color of links within a message when hovered.
     */
    messageLinkHovered: string;
    /**
     * The border of a large input control in its resting, state; e.g. the box of dropdown.
     */
    inputBorder: string;
    /**
     * The border of a small input control in its resting unchecked state; e.g. the box of an unchecked checkbox.
     */
    smallInputBorder: string;
    /**
     * The border color of a large hovered input control, such as textbox.
     */
    inputBorderHovered: string;
    /**
     * The background color of an input, e.g. textbox background.
     */
    inputBackground: string;
    /**
     * The background of a checked control; e.g. checked radio button's dot, checked toggle's background.
     */
    inputBackgroundChecked: string;
    /**
     * The background of a checked and hovered control; e.g. checked checkbox's background color on hover.
     */
    inputBackgroundCheckedHovered: string;
    /**
     * The placeholder background color of a checked control, e.g. slider background, spinner background.
     */
    inputPlaceholderBackgroundChecked: string;
    /**
     * The foreground of a checked control; e.g. checked checkbox's checkmark color, checked toggle's thumb color,
     * radio button's background color around the dot.
     */
    inputForegroundChecked: string;
    /**
     * The alternate focus border color for elements that already have a border; e.g. text field borders on focus.
     */
    inputFocusBorderAlt: string;
    /**
     * The color for disabled icon ; e.g. SearchBox magnifying glass in disabled state.
     */
    inputIconDisabled: string;
    /**
     * The color for icon ; e.g. SearchBox magnifying glass in rest state.
     */
    inputIcon: string;
    /**
     * The color for hovered icon ; e.g. SearchBox magnifying glass in hovered state.
     */
    inputIconHovered: string;
    /**
     * Background of a standard button
     */
    buttonBackground: string;
    /**
     * Background of a checked standard button; e.g. bold/italicize/underline text button in toolbar
     */
    buttonBackgroundChecked: string;
    /**
     * Background of a hovered standard button
     */
    buttonBackgroundHovered: string;
    /**
     * Background of a checked and hovered standard button; e.g. bold/italicize/underline text button in toolbar
     */
    buttonBackgroundCheckedHovered: string;
    /**
     * Background of a disabled standard button
     */
    buttonBackgroundDisabled: string;
    /**
     * Background of a pressed standard button; i.e. currently being clicked by mouse
     */
    buttonBackgroundPressed: string;
    /**
     * Border of a standard button
     */
    buttonBorder: string;
    /**
     * Border of a disabled standard button
     */
    buttonBorderDisabled: string;
    /**
     * Background of a primary button
     */
    primaryButtonBackground: string;
    /**
     * Background of a hovered primary button
     */
    primaryButtonBackgroundHovered: string;
    /**
     * Background of a pressed primary button; i.e. currently being clicked by mouse
     */
    primaryButtonBackgroundPressed: string;
    /**
     * Background of a disabled primary button
     */
    primaryButtonBackgroundDisabled: string;
    /**
     * Border of a primary button
     */
    primaryButtonBorder: string;
    /**
     * Background of an accent button (kicker)
     */
    accentButtonBackground: string;
    /**
     * The background of a menu.
     */
    menuBackground: string;
    /**
     * The divider between menu items.
     */
    menuDivider: string;
    /**
     * The default colors of icons in menus.
     */
    menuIcon: string;
    /**
     * The headers in menus that denote title of a section.
     */
    menuHeader: string;
    /**
     * The background of a hovered menu item.
     */
    menuItemBackgroundHovered: string;
    /**
     * The background of a pressed menu item.
     */
    menuItemBackgroundPressed: string;
    /**
     * The text color of a menu item.
     */
    menuItemText: string;
    /**
     * The text color of a hovered menu item.
     */
    menuItemTextHovered: string;
    /**
     * The background color for the entire list.
     */
    listBackground: string;
    /**
     * The default text color for list item titles and text in column fields.
     */
    listText: string;
    /**
     * The background color of a hovered list item.
     */
    listItemBackgroundHovered: string;
    /**
     * The background color of a checked list item.
     */
    listItemBackgroundChecked: string;
    /**
     * The background color of a checked and hovered list item.
     */
    listItemBackgroundCheckedHovered: string;
    /**
     * The background color for a hovered list header.
     */
    listHeaderBackgroundHovered: string;
    /**
     * The background color for a pressed list header.
     */
    listHeaderBackgroundPressed: string;
    /**
     * @deprecated
     * (Checked menu items no longer get a background color.)
     * The background of checked menu item; e.g. a menu item whose submenu is open, a selected dropdown item.
     */
    menuItemBackgroundChecked: string;
    /**
     * @deprecated
     * (no longer used)
     * Foreground color for warning highlights
     */
    warningHighlight: string;
}

/**
 * {@docCategory ISemanticTextColors}
 */
export declare interface ISemanticTextColors {
    /**
     * The default color for text.
     */
    bodyText: string;
    /**
     * Checked text color, e.g. selected menu item text.
     */
    bodyTextChecked: string;
    /**
     * De-emphasized text; e.g. metadata, captions, placeholder text.
     */
    bodySubtext: string;
    /**
     * Neutral colored links and links for action buttons.
     */
    actionLink: string;
    /**
     * Hover state for neutral colored links and links for action buttons.
     */
    actionLinkHovered: string;
    /**
     * The color of a link.
     */
    link: string;
    /**
     * The color of a hovered link. Also used when the link is active.
     */
    linkHovered: string;
    /**
     * The default color for disabled text on top of disabledBackground; e.g. text in a disabled text field or
     * disabled button text.
     */
    disabledText: string;
    /**
     * The default color for disabled text on the default background (bodyBackground).
     */
    disabledBodyText: string;
    /**
     * Disabled de-emphasized text, for use on disabledBackground.
     */
    disabledSubtext: string;
    /**
     * Disabled de-emphasized text, for use on the default background (bodyBackground).
     */
    disabledBodySubtext: string;
    /**
     * The default color of error text on bodyBackground.
     */
    errorText: string;
    /**
     * The default color of text in a message bar.
     */
    messageText: string;
    /**
     * The color of input text.
     */
    inputText: string;
    /**
     * The color of input text on hover.
     */
    inputTextHovered: string;
    /**
     * The color of placeholder text.
     */
    inputPlaceholderText: string;
    /**
     * Color of text in a standard button
     */
    buttonText: string;
    /**
     * Color of text in a hovered standard button
     */
    buttonTextHovered: string;
    /**
     * Color of text in a checked standard button
     */
    buttonTextChecked: string;
    /**
     * Color of text in a checked and hovered standard button
     */
    buttonTextCheckedHovered: string;
    /**
     * Color of text in a pressed standard button; i.e. currently being clicked by mouse
     */
    buttonTextPressed: string;
    /**
     * Color of text in a disabled standard button
     */
    buttonTextDisabled: string;
    /**
     * Color of text in a primary button
     */
    primaryButtonText: string;
    /**
     * Color of text in a hovered primary button
     */
    primaryButtonTextHovered: string;
    /**
     * Color of text in a pressed primary button; i.e. currently being clicked by mouse
     */
    primaryButtonTextPressed: string;
    /**
     * Color of text in a disabled primary button
     */
    primaryButtonTextDisabled: string;
    /**
     * Color of text for accent button (kicker)
     */
    accentButtonText: string;
    /**
     * The default text color for list item titles and text in column fields.
     */
    listText: string;
    /** @deprecated
     * This slot was incorrectly named. Use listText instead. */
    listTextColor: string;
    /** @deprecated
     * No longer used. Consider using messageText and/or warningIcon instead.
     */
    warningText: string;
    /** @deprecated
     * No longer used. Consider using messageText and/or successIcon instead.
     */
    successText: string;
}

/**
 * @internal This is an experimental interface and will be changed post design review.
 * {@docCategory ISpacing}
 */
export declare interface ISpacing {
    s2: string;
    s1: string;
    m: string;
    l1: string;
    l2: string;
}

/**
 * {@docCategory ITheme}
 */
export declare interface ITheme extends Theme {
}

export declare namespace LocalizedFontFamilies {
    const Arabic: string;
    const ChineseSimplified = "'Microsoft Yahei UI', Verdana, Simsun";
    const ChineseTraditional = "'Microsoft Jhenghei UI', Pmingliu";
    const Cyrillic: string;
    const EastEuropean: string;
    const Greek: string;
    const Hebrew: string;
    const Hindi = "'Nirmala UI'";
    const Japanese = "'Yu Gothic UI', 'Meiryo UI', Meiryo, 'MS Pgothic', Osaka";
    const Korean = "'Malgun Gothic', Gulim";
    const Selawik: string;
    const Thai = "'Leelawadee UI Web', 'Kmer UI'";
    const Vietnamese: string;
    const WestEuropean: string;
    const Armenian: string;
    const Georgian: string;
}

export declare namespace LocalizedFontNames {
    const Arabic = "Segoe UI Web (Arabic)";
    const Cyrillic = "Segoe UI Web (Cyrillic)";
    const EastEuropean = "Segoe UI Web (East European)";
    const Greek = "Segoe UI Web (Greek)";
    const Hebrew = "Segoe UI Web (Hebrew)";
    const Thai = "Leelawadee UI Web";
    const Vietnamese = "Segoe UI Web (Vietnamese)";
    const WestEuropean = "Segoe UI Web (West European)";
    const Selawik = "Selawik Web";
    const Armenian = "Segoe UI Web (Armenian)";
    const Georgian = "Segoe UI Web (Georgian)";
}

/**
 * Merge a partial/full theme into a full theme and returns a merged full theme.
 */
export declare function mergeThemes(theme: Theme, partialTheme?: PartialTheme): Theme;

export declare namespace MotionAnimations {
    const fadeIn: string;
    const fadeOut: string;
    const scaleDownIn: string;
    const scaleDownOut: string;
    const slideLeftOut: string;
    const slideRightOut: string;
    const slideLeftIn: string;
    const slideRightIn: string;
    const slideUpOut: string;
    const slideDownOut: string;
    const slideUpIn: string;
    const slideDownIn: string;
}

export declare namespace MotionDurations {
    const duration1 = "100ms";
    const duration2 = "200ms";
    const duration3 = "300ms";
    const duration4 = "400ms";
}

export declare namespace MotionTimings {
    const accelerate = "cubic-bezier(0.9, 0.1, 1, 0.2)";
    const decelerate = "cubic-bezier(0.1, 0.9, 0.2, 1)";
    const linear = "cubic-bezier(0, 0, 1, 1)";
    const standard = "cubic-bezier(0.8, 0, 0.2, 1)";
}

export declare namespace NeutralColors {
    const black = "#000000";
    const gray220 = "#11100f";
    const gray210 = "#161514";
    const gray200 = "#1b1a19";
    const gray190 = "#201f1e";
    const gray180 = "#252423";
    const gray170 = "#292827";
    const gray160 = "#323130";
    const gray150 = "#3b3a39";
    const gray140 = "#484644";
    const gray130 = "#605e5c";
    const gray120 = "#797775";
    const gray110 = "#8a8886";
    const gray100 = "#979593";
    const gray90 = "#a19f9d";
    const gray80 = "#b3b0ad";
    const gray70 = "#bebbb8";
    const gray60 = "#c8c6c4";
    const gray50 = "#d2d0ce";
    const gray40 = "#e1dfdd";
    const gray30 = "#edebe9";
    const gray20 = "#f3f2f1";
    const gray10 = "#faf9f8";
    const white = "#ffffff";
}

/**
 * {@docCategory Theme}
 * A partial theme.
 */
export declare interface PartialTheme {
    components?: ComponentsStyles;
    palette?: Partial<IPalette>;
    fonts?: Partial<IFontStyles>;
    semanticColors?: Partial<ISemanticColors>;
    isInverted?: boolean;
    disableGlobalClassNames?: boolean;
    rtl?: boolean;
    spacing?: Partial<ISpacing>;
    effects?: Partial<IEffects>;
    /**
     * Use this property to specify font property defaults.
     */
    defaultFontStyle?: IRawStyle;
    /**
     * @internal
     * The schemes property is still in an experimental phase. The intent is to have it work
     * in conjunction with new 'schemes' prop that any component making use of Foundation can use.
     * Alternative themes that can be referred to by name.
     */
    schemes?: {
        [P in ISchemeNames]?: IScheme;
    };
}

export declare function registerDefaultFontFaces(baseUrl: string): void;

export declare namespace SharedColors {
    const pinkRed10 = "#750b1c";
    const red20 = "#a4262c";
    const red10 = "#d13438";
    const redOrange20 = "#603d30";
    const redOrange10 = "#da3b01";
    const orange30 = "#8e562e";
    const orange20 = "#ca5010";
    const orange10 = "#ffaa44";
    const yellow10 = "#fce100";
    const orangeYellow20 = "#986f0b";
    const orangeYellow10 = "#c19c00";
    const yellowGreen10 = "#8cbd18";
    const green20 = "#0b6a0b";
    const green10 = "#498205";
    const greenCyan10 = "#00ad56";
    const cyan40 = "#005e50";
    const cyan30 = "#005b70";
    const cyan20 = "#038387";
    const cyan10 = "#00b7c3";
    const cyanBlue20 = "#004e8c";
    const cyanBlue10 = "#0078d4";
    const blue10 = "#4f6bed";
    const blueMagenta40 = "#373277";
    const blueMagenta30 = "#5c2e91";
    const blueMagenta20 = "#8764b8";
    const blueMagenta10 = "#8378de";
    const magenta20 = "#881798";
    const magenta10 = "#c239b3";
    const magentaPink20 = "#9b0062";
    const magentaPink10 = "#e3008c";
    const gray40 = "#393939";
    const gray30 = "#7a7574";
    const gray20 = "#69797e";
    const gray10 = "#a0aeb2";
}

/**
 * {@docCategory Theme}
 * A prepared (fully expanded) theme object.
 */
export declare interface Theme extends IScheme {
    /**
     * Component-level styles and token set.
     * This is still in an experimental phase and is only applied by `ThemeProvider`.
     */
    components?: ComponentsStyles;
    /**
     * @internal
     * Id of the theme. This is for internal use only.
     */
    id?: string;
    /**
     * @internal
     * The schemes property is still in an experimental phase. The intent is to have it work
     * in conjunction with new 'schemes' prop that any component making use of Foundation can use.
     * Alternative themes that can be referred to by name.
     */
    schemes?: {
        [P in ISchemeNames]?: IScheme;
    };
}

export { }
