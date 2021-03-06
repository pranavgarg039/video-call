import { IRawStyle } from '@fluentui/merge-styles';
import { IGetFocusStylesOptions, ITheme } from '../interfaces/index';
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
 * Generates style to clear browser specific focus styles.
 */
export declare function focusClear(): IRawStyle;
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
