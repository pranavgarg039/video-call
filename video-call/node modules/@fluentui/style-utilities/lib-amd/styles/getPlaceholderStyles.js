define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getPlaceholderStyles = void 0;
    /**
     * Generates placeholder style for each of the browsers supported by `@fluentui/react`.
     * @param styles - The style to use.
     * @returns The placeholder style object for each browser depending on the placeholder directive it uses.
     */
    function getPlaceholderStyles(styles) {
        return {
            selectors: {
                '::placeholder': styles,
                ':-ms-input-placeholder': styles,
                '::-ms-input-placeholder': styles,
            },
        };
    }
    exports.getPlaceholderStyles = getPlaceholderStyles;
});
//# sourceMappingURL=getPlaceholderStyles.js.map