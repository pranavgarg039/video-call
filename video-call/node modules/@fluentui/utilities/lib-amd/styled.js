define(["require", "exports", "tslib", "react", "@fluentui/merge-styles", "./customizations/useCustomizationSettings"], function (require, exports, tslib_1, React, merge_styles_1, useCustomizationSettings_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.styled = void 0;
    var DefaultFields = ['theme', 'styles'];
    function styled(Component, baseStyles, getProps, customizable, pure) {
        customizable = customizable || { scope: '', fields: undefined };
        var scope = customizable.scope, _a = customizable.fields, fields = _a === void 0 ? DefaultFields : _a;
        var Wrapped = React.forwardRef(function (props, forwardedRef) {
            var styles = React.useRef();
            var settings = useCustomizationSettings_1.useCustomizationSettings(fields, scope);
            var customizedStyles = settings.styles, dir = settings.dir, rest = tslib_1.__rest(settings, ["styles", "dir"]);
            var additionalProps = getProps ? getProps(props) : undefined;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            var cache = (styles.current && styles.current.__cachedInputs__) || [];
            if (!styles.current || customizedStyles !== cache[1] || props.styles !== cache[2]) {
                // Using styled components as the Component arg will result in nested styling arrays.
                var concatenatedStyles = function (styleProps) {
                    return merge_styles_1.concatStyleSetsWithProps(styleProps, baseStyles, customizedStyles, props.styles);
                };
                // The __cachedInputs__ array is attached to the function and consumed by the
                // classNamesFunction as a list of keys to include for memoizing classnames.
                concatenatedStyles.__cachedInputs__ = [
                    baseStyles,
                    customizedStyles,
                    props.styles,
                ];
                concatenatedStyles.__noStyleOverride__ =
                    !customizedStyles && !props.styles;
                styles.current = concatenatedStyles;
            }
            return React.createElement(Component, tslib_1.__assign({ ref: forwardedRef }, rest, additionalProps, props, { styles: styles.current }));
        });
        // Function.prototype.name is an ES6 feature, so the cast to any is required until we're
        // able to drop IE 11 support and compile with ES6 libs
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        Wrapped.displayName = "Styled" + (Component.displayName || Component.name);
        // This preserves backwards compatibility.
        var pureComponent = pure ? React.memo(Wrapped) : Wrapped;
        // Check if the wrapper has a displayName after it has been memoized. Then assign it to the pure component.
        if (Wrapped.displayName) {
            pureComponent.displayName = Wrapped.displayName;
        }
        return pureComponent;
    }
    exports.styled = styled;
});
//# sourceMappingURL=styled.js.map