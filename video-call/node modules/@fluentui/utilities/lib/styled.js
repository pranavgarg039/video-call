import { __assign, __rest } from "tslib";
import * as React from 'react';
import { concatStyleSetsWithProps } from '@fluentui/merge-styles';
import { useCustomizationSettings } from './customizations/useCustomizationSettings';
var DefaultFields = ['theme', 'styles'];
export function styled(Component, baseStyles, getProps, customizable, pure) {
    customizable = customizable || { scope: '', fields: undefined };
    var scope = customizable.scope, _a = customizable.fields, fields = _a === void 0 ? DefaultFields : _a;
    var Wrapped = React.forwardRef(function (props, forwardedRef) {
        var styles = React.useRef();
        var settings = useCustomizationSettings(fields, scope);
        var customizedStyles = settings.styles, dir = settings.dir, rest = __rest(settings, ["styles", "dir"]);
        var additionalProps = getProps ? getProps(props) : undefined;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var cache = (styles.current && styles.current.__cachedInputs__) || [];
        if (!styles.current || customizedStyles !== cache[1] || props.styles !== cache[2]) {
            // Using styled components as the Component arg will result in nested styling arrays.
            var concatenatedStyles = function (styleProps) {
                return concatStyleSetsWithProps(styleProps, baseStyles, customizedStyles, props.styles);
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
        return React.createElement(Component, __assign({ ref: forwardedRef }, rest, additionalProps, props, { styles: styles.current }));
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
//# sourceMappingURL=styled.js.map