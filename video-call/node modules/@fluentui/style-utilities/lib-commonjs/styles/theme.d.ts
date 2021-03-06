import { ITheme, IPartialTheme } from '../interfaces/index';
export { createTheme } from '@fluentui/theme/lib-commonjs/createTheme';
export declare const ThemeSettingName = "theme";
export declare function initializeThemeInCustomizations(): void;
/**
 * Gets the theme object
 * @param depComments - Whether to include deprecated tags as comments for deprecated slots.
 */
export declare function getTheme(depComments?: boolean): ITheme;
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
/**
 * Applies the theme, while filling in missing slots.
 * @param theme - Partial theme object.
 * @param depComments - Whether to include deprecated tags as comments for deprecated slots.
 */
export declare function loadTheme(theme: IPartialTheme, depComments?: boolean): ITheme;
