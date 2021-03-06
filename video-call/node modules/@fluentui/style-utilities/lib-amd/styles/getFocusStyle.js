define(["require", "exports", "./CommonStyles", "@fluentui/utilities", "./zIndexes"], function (require, exports, CommonStyles_1, utilities_1, zIndexes_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getInputFocusStyle = exports.getFocusOutlineStyle = exports.focusClear = exports.getFocusStyle = void 0;
    function getFocusStyle(theme, insetOrOptions, position, highContrastStyle, borderColor, outlineColor, isFocusedOnly) {
        if (typeof insetOrOptions === 'number' || !insetOrOptions) {
            return _getFocusStyleInternal(theme, {
                inset: insetOrOptions,
                position: position,
                highContrastStyle: highContrastStyle,
                borderColor: borderColor,
                outlineColor: outlineColor,
                isFocusedOnly: isFocusedOnly,
            });
        }
        else {
            return _getFocusStyleInternal(theme, insetOrOptions);
        }
    }
    exports.getFocusStyle = getFocusStyle;
    function _getFocusStyleInternal(theme, options) {
        var _a, _b;
        if (options === void 0) { options = {}; }
        var _c = options.inset, inset = _c === void 0 ? 0 : _c, _d = options.width, width = _d === void 0 ? 1 : _d, _e = options.position, position = _e === void 0 ? 'relative' : _e, highContrastStyle = options.highContrastStyle, _f = options.borderColor, borderColor = _f === void 0 ? theme.palette.white : _f, _g = options.outlineColor, outlineColor = _g === void 0 ? theme.palette.neutralSecondary : _g, _h = options.isFocusedOnly, isFocusedOnly = _h === void 0 ? true : _h;
        return {
            // Clear browser-specific focus styles and use 'transparent' as placeholder for focus style.
            outline: 'transparent',
            // Requirement because pseudo-element is absolutely positioned.
            position: position,
            selectors: (_a = {
                    // Clear the focus border in Firefox.
                    // Reference: http://stackoverflow.com/a/199319/1436671
                    '::-moz-focus-inner': {
                        border: '0',
                    }
                },
                // When the element that uses this mixin is in a :focus state, add a pseudo-element to
                // create a border.
                _a["." + utilities_1.IsFocusVisibleClassName + " &" + (isFocusedOnly ? ':focus' : '') + ":after"] = {
                    content: '""',
                    position: 'absolute',
                    left: inset + 1,
                    top: inset + 1,
                    bottom: inset + 1,
                    right: inset + 1,
                    border: width + "px solid " + borderColor,
                    outline: width + "px solid " + outlineColor,
                    zIndex: zIndexes_1.ZIndexes.FocusStyle,
                    selectors: (_b = {},
                        _b[CommonStyles_1.HighContrastSelector] = highContrastStyle,
                        _b),
                },
                _a),
        };
    }
    /**
     * Generates style to clear browser specific focus styles.
     */
    function focusClear() {
        return {
            selectors: {
                '&::-moz-focus-inner': {
                    // Clear the focus border in Firefox. Reference: http://stackoverflow.com/a/199319/1436671
                    border: 0,
                },
                '&': {
                    // Clear browser specific focus styles and use transparent as placeholder for focus style
                    outline: 'transparent',
                },
            },
        };
    }
    exports.focusClear = focusClear;
    /**
     * Generates a style which can be used to set a border on focus.
     *
     * @param theme - The theme object to use.
     * @param inset - The number of pixels to inset the border (default 0)
     * @param width - The border width in pixels (default 1)
     * @param color - Color of the outline (default `theme.palette.neutralSecondary`)
     * @returns The style object.
     */
    function getFocusOutlineStyle(theme, inset, width, color) {
        var _a;
        if (inset === void 0) { inset = 0; }
        if (width === void 0) { width = 1; }
        return {
            selectors: (_a = {},
                _a[":global(" + utilities_1.IsFocusVisibleClassName + ") &:focus"] = {
                    outline: width + " solid " + (color || theme.palette.neutralSecondary),
                    outlineOffset: -inset + "px",
                },
                _a),
        };
    }
    exports.getFocusOutlineStyle = getFocusOutlineStyle;
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
    var getInputFocusStyle = function (borderColor, borderRadius, borderType, borderPosition) {
        var _a, _b, _c;
        if (borderType === void 0) { borderType = 'border'; }
        if (borderPosition === void 0) { borderPosition = -1; }
        var isBorderBottom = borderType === 'borderBottom';
        return {
            borderColor: borderColor,
            selectors: {
                ':after': (_a = {
                        pointerEvents: 'none',
                        content: "''",
                        position: 'absolute',
                        left: isBorderBottom ? 0 : borderPosition,
                        top: borderPosition,
                        bottom: borderPosition,
                        right: isBorderBottom ? 0 : borderPosition
                    },
                    _a[borderType] = "2px solid " + borderColor,
                    _a.borderRadius = borderRadius,
                    _a.width = borderType === 'borderBottom' ? '100%' : undefined,
                    _a.selectors = (_b = {},
                        _b[CommonStyles_1.HighContrastSelector] = (_c = {},
                            _c[borderType === 'border' ? 'borderColor' : 'borderBottomColor'] = 'Highlight',
                            _c),
                        _b),
                    _a),
            },
        };
    };
    exports.getInputFocusStyle = getInputFocusStyle;
});
//# sourceMappingURL=getFocusStyle.js.map