define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.tokenizeWithParentheses = void 0;
    /**
     * Split a string into tokens separated by whitespace, except all text within parentheses
     * is treated as a single token (whitespace is ignored within parentheses).
     *
     * Unlike String.split(' '), multiple consecutive space characters are collapsed and
     * removed from the returned array (including leading and trailing spaces).
     *
     * For example:
     * `tokenizeWithParentheses("3px calc(var(--x) / 2) 9px    0 ")`
     *   => `["3px", "calc(var(--x) / 2)", "9px", "0"]`
     *
     * @returns The array of tokens. Returns an empty array if the string was empty or contained only whitespace.
     */
    function tokenizeWithParentheses(value) {
        var parts = [];
        var partStart = 0;
        var parens = 0;
        for (var i = 0; i < value.length; i++) {
            switch (value[i]) {
                case '(':
                    parens++;
                    break;
                case ')':
                    if (parens) {
                        parens--;
                    }
                    break;
                case '\t':
                case ' ':
                    if (!parens) {
                        // Add the new part if it's not an empty string
                        if (i > partStart) {
                            parts.push(value.substring(partStart, i));
                        }
                        partStart = i + 1;
                    }
                    break;
            }
        }
        // Add the last part
        if (partStart < value.length) {
            parts.push(value.substring(partStart));
        }
        return parts;
    }
    exports.tokenizeWithParentheses = tokenizeWithParentheses;
});
//# sourceMappingURL=tokenizeWithParentheses.js.map