"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNativeProps = exports.divProperties = exports.imageProperties = exports.imgProperties = exports.iframeProperties = exports.formProperties = exports.colProperties = exports.colGroupProperties = exports.tdProperties = exports.thProperties = exports.trProperties = exports.tableProperties = exports.optionProperties = exports.selectProperties = exports.textAreaProperties = exports.inputProperties = exports.buttonProperties = exports.anchorProperties = exports.liProperties = exports.olProperties = exports.videoProperties = exports.audioProperties = exports.labelProperties = exports.htmlElementProperties = exports.baseElementProperties = exports.baseElementEvents = void 0;
var toObjectMap = function () {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    var result = {};
    for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
        var item = items_1[_a];
        var keys = Array.isArray(item) ? item : Object.keys(item);
        for (var _b = 0, keys_1 = keys; _b < keys_1.length; _b++) {
            var key = keys_1[_b];
            result[key] = 1;
        }
    }
    return result;
};
/**
 * An array of events that are allowed on every html element type.
 *
 * @public
 */
exports.baseElementEvents = toObjectMap([
    'onCopy',
    'onCut',
    'onPaste',
    'onCompositionEnd',
    'onCompositionStart',
    'onCompositionUpdate',
    'onFocus',
    'onFocusCapture',
    'onBlur',
    'onBlurCapture',
    'onChange',
    'onInput',
    'onSubmit',
    'onLoad',
    'onError',
    'onKeyDown',
    'onKeyDownCapture',
    'onKeyPress',
    'onKeyUp',
    'onAbort',
    'onCanPlay',
    'onCanPlayThrough',
    'onDurationChange',
    'onEmptied',
    'onEncrypted',
    'onEnded',
    'onLoadedData',
    'onLoadedMetadata',
    'onLoadStart',
    'onPause',
    'onPlay',
    'onPlaying',
    'onProgress',
    'onRateChange',
    'onSeeked',
    'onSeeking',
    'onStalled',
    'onSuspend',
    'onTimeUpdate',
    'onVolumeChange',
    'onWaiting',
    'onClick',
    'onClickCapture',
    'onContextMenu',
    'onDoubleClick',
    'onDrag',
    'onDragEnd',
    'onDragEnter',
    'onDragExit',
    'onDragLeave',
    'onDragOver',
    'onDragStart',
    'onDrop',
    'onMouseDown',
    'onMouseDownCapture',
    'onMouseEnter',
    'onMouseLeave',
    'onMouseMove',
    'onMouseOut',
    'onMouseOver',
    'onMouseUp',
    'onMouseUpCapture',
    'onSelect',
    'onTouchCancel',
    'onTouchEnd',
    'onTouchMove',
    'onTouchStart',
    'onScroll',
    'onWheel',
    'onPointerCancel',
    'onPointerDown',
    'onPointerEnter',
    'onPointerLeave',
    'onPointerMove',
    'onPointerOut',
    'onPointerOver',
    'onPointerUp',
    'onGotPointerCapture',
    'onLostPointerCapture',
]);
/**
 * An array of element attributes which are allowed on every html element type.
 *
 * @public
 */
exports.baseElementProperties = toObjectMap([
    'accessKey',
    'children',
    'className',
    'contentEditable',
    'dir',
    'draggable',
    'hidden',
    'htmlFor',
    'id',
    'lang',
    'ref',
    'role',
    'style',
    'tabIndex',
    'title',
    'translate',
    'spellCheck',
    'name',
]);
/**
 * An array of HTML element properties and events.
 *
 * @public
 */
exports.htmlElementProperties = toObjectMap(exports.baseElementProperties, exports.baseElementEvents);
/**
 * An array of LABEL tag properties and events.
 *
 * @public
 */
exports.labelProperties = toObjectMap(exports.htmlElementProperties, [
    'form',
]);
/**
 * An array of AUDIO tag properties and events.

 * @public
 */
exports.audioProperties = toObjectMap(exports.htmlElementProperties, [
    'height',
    'loop',
    'muted',
    'preload',
    'src',
    'width',
]);
/**
 * An array of VIDEO tag properties and events.
 *
 * @public
 */
exports.videoProperties = toObjectMap(exports.audioProperties, [
    'poster',
]);
/**
 * An array of OL tag properties and events.
 *
 * @public
 */
exports.olProperties = toObjectMap(exports.htmlElementProperties, [
    'start',
]);
/**
 * An array of LI tag properties and events.
 *
 * @public
 */
exports.liProperties = toObjectMap(exports.htmlElementProperties, [
    'value',
]);
/**
 * An array of A tag properties and events.
 *
 * @public
 */
exports.anchorProperties = toObjectMap(exports.htmlElementProperties, [
    'download',
    'href',
    'hrefLang',
    'media',
    'rel',
    'target',
    'type',
]);
/**
 * An array of BUTTON tag properties and events.
 *
 * @public
 */
exports.buttonProperties = toObjectMap(exports.htmlElementProperties, [
    'autoFocus',
    'disabled',
    'form',
    'formAction',
    'formEncType',
    'formMethod',
    'formNoValidate',
    'formTarget',
    'type',
    'value',
]);
/**
 * An array of INPUT tag properties and events.
 *
 * @public
 */
exports.inputProperties = toObjectMap(exports.buttonProperties, [
    'accept',
    'alt',
    'autoCapitalize',
    'autoComplete',
    'checked',
    'dirname',
    'form',
    'height',
    'inputMode',
    'list',
    'max',
    'maxLength',
    'min',
    'multiple',
    'pattern',
    'placeholder',
    'readOnly',
    'required',
    'src',
    'step',
    'size',
    'type',
    'value',
    'width',
]);
/**
 * An array of TEXTAREA tag properties and events.
 *
 * @public
 */
exports.textAreaProperties = toObjectMap(exports.buttonProperties, [
    'autoCapitalize',
    'cols',
    'dirname',
    'form',
    'maxLength',
    'placeholder',
    'readOnly',
    'required',
    'rows',
    'wrap',
]);
/**
 * An array of SELECT tag properties and events.
 *
 * @public
 */
exports.selectProperties = toObjectMap(exports.buttonProperties, [
    'form',
    'multiple',
    'required',
]);
exports.optionProperties = toObjectMap(exports.htmlElementProperties, [
    'selected',
    'value',
]);
/**
 * An array of TABLE tag properties and events.
 *
 * @public
 */
exports.tableProperties = toObjectMap(exports.htmlElementProperties, [
    'cellPadding',
    'cellSpacing',
]);
/**
 * An array of TR tag properties and events.
 *
 * @public
 */
exports.trProperties = exports.htmlElementProperties;
/**
 * An array of TH tag properties and events.
 *
 * @public
 */
exports.thProperties = toObjectMap(exports.htmlElementProperties, [
    'rowSpan',
    'scope',
]);
/**
 * An array of TD tag properties and events.
 *
 * @public
 */
exports.tdProperties = toObjectMap(exports.htmlElementProperties, [
    'colSpan',
    'headers',
    'rowSpan',
    'scope',
]);
exports.colGroupProperties = toObjectMap(exports.htmlElementProperties, [
    'span',
]);
exports.colProperties = toObjectMap(exports.htmlElementProperties, [
    'span',
]);
/**
 * An array of FORM tag properties and events.
 *
 * @public
 */
exports.formProperties = toObjectMap(exports.htmlElementProperties, [
    'acceptCharset',
    'action',
    'encType',
    'encType',
    'method',
    'noValidate',
    'target',
]);
/**
 * An array of IFRAME tag properties and events.
 *
 * @public
 */
exports.iframeProperties = toObjectMap(exports.htmlElementProperties, [
    'allow',
    'allowFullScreen',
    'allowPaymentRequest',
    'allowTransparency',
    'csp',
    'height',
    'importance',
    'referrerPolicy',
    'sandbox',
    'src',
    'srcDoc',
    'width',
]);
/**
 * An array of IMAGE tag properties and events.
 *
 * @public
 */
exports.imgProperties = toObjectMap(exports.htmlElementProperties, [
    'alt',
    'crossOrigin',
    'height',
    'src',
    'srcSet',
    'useMap',
    'width',
]);
/**
 * @deprecated Use imgProperties for img elements.
 */
exports.imageProperties = exports.imgProperties;
/**
 * An array of DIV tag properties and events.
 *
 * @public
 */
exports.divProperties = exports.htmlElementProperties;
/**
 * Gets native supported props for an html element provided the allowance set. Use one of the property
 * sets defined (divProperties, buttonPropertes, etc) to filter out supported properties from a given
 * props set. Note that all data- and aria- prefixed attributes will be allowed.
 * NOTE: getNativeProps should always be applied first when adding props to a react component. The
 * non-native props should be applied second. This will prevent getNativeProps from overriding your custom props.
 * For example, if props passed to getNativeProps has an onClick function and getNativeProps is added to
 * the component after an onClick function is added, then the getNativeProps onClick will override it.
 *
 * @public
 * @param props - The unfiltered input props
 * @param allowedPropsNames - The array or record of allowed prop names.
 * @returns The filtered props
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getNativeProps(
// eslint-disable-next-line @typescript-eslint/no-explicit-any
props, allowedPropNames, excludedPropNames) {
    // It'd be great to properly type this while allowing 'aria-` and 'data-' attributes like TypeScript does for
    // JSX attributes, but that ability is hardcoded into the TS compiler with no analog in TypeScript typings.
    // Then we'd be able to enforce props extends native props (including aria- and data- attributes), and then
    // return native props.
    // We should be able to do this once this PR is merged: https://github.com/microsoft/TypeScript/pull/26797
    var isArray = Array.isArray(allowedPropNames);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var result = {};
    var keys = Object.keys(props);
    for (var _i = 0, keys_2 = keys; _i < keys_2.length; _i++) {
        var key = keys_2[_i];
        var isNativeProp = (!isArray && allowedPropNames[key]) ||
            (isArray && allowedPropNames.indexOf(key) >= 0) ||
            key.indexOf('data-') === 0 ||
            key.indexOf('aria-') === 0;
        if (isNativeProp && (!excludedPropNames || (excludedPropNames === null || excludedPropNames === void 0 ? void 0 : excludedPropNames.indexOf(key)) === -1)) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            result[key] = props[key];
        }
    }
    return result;
}
exports.getNativeProps = getNativeProps;
//# sourceMappingURL=properties.js.map