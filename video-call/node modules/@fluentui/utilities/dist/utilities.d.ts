import { DATA_PORTAL_ATTRIBUTE } from '@fluentui/dom-utilities';
import { elementContains } from '@fluentui/dom-utilities';
import { elementContainsAttribute } from '@fluentui/dom-utilities';
import { findElementRecursive } from '@fluentui/dom-utilities';
import { getChildren } from '@fluentui/dom-utilities';
import { getParent } from '@fluentui/dom-utilities';
import { getVirtualParent } from '@fluentui/dom-utilities';
import { IProcessedStyleSet } from '@fluentui/merge-styles';
import { IStyleFunction } from '@fluentui/merge-styles';
import { IStyleFunctionOrObject } from '@fluentui/merge-styles';
import { IStyleSet } from '@fluentui/merge-styles';
import { isVirtualElement } from '@fluentui/dom-utilities';
import { IVirtualElement } from '@fluentui/dom-utilities';
import { Omit as Omit_2 } from '@fluentui/merge-styles';
import { portalContainsElement } from '@fluentui/dom-utilities';
import * as React_2 from 'react';
import { setPortalAttribute } from '@fluentui/dom-utilities';
import { setVirtualParent } from '@fluentui/dom-utilities';

/**
 * Adds a keycode to the list of keys that, when pressed, should cause the focus outlines to be visible.
 * This can be used to add global shortcut keys that directionally move from section to section within
 * an app or between focus trap zones.
 */
export declare function addDirectionalKeyCode(which: number): void;

/**
 * Given an array, this function returns a new array where an element has been inserted at the given index.
 * @param array - The array to operate on
 * @param index - The index where an element should be inserted
 * @param itemToAdd - The element to insert
 */
export declare function addElementAtIndex<T>(array: T[], index: number, itemToAdd: T): T[];

/**
 * Same as allowScrollOnElement but does not prevent overscrolling.
 */
export declare const allowOverscrollOnElement: (element: HTMLElement | null, events: EventGroup) => void;

/**
 * Allows the user to scroll within a element,
 * while preventing the user from scrolling the body
 */
export declare const allowScrollOnElement: (element: HTMLElement | null, events: EventGroup) => void;

/**
 * An array of A tag properties and events.
 *
 * @public
 */
export declare const anchorProperties: Record<string, number>;

/**
 * Returns a single function which will call each of the given functions in the context of the
 * parent.
 */
export declare function appendFunction(parent: any, ...functions: any[]): () => void;

/**
 * Returns a boolean indicating if the two given arrays are equal in length and values.
 *
 * @param array1 - First array to compare
 * @param array2 - Second array to compare
 * @returns True if the arrays are the same length and have the same values in the same positions, false otherwise.
 */
export declare function arraysEqual<T>(array1: T[], array2: T[]): boolean;

/**
 * Produces a component which internally loads the target component before first mount.
 * The component passes all props through to the loaded component.
 *
 * This overload accepts a module with a default export for the component.
 */
export declare function asAsync<TProps>(options: IAsAsyncOptions<TProps>): React_2.ForwardRefExoticComponent<React_2.PropsWithoutRef<TProps & {
    asyncPlaceholder?: "symbol" | "object" | "input" | "progress" | "select" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "base" | "bdi" | "bdo" | "blockquote" | "body" | "br" | "button" | "canvas" | "caption" | "cite" | "code" | "col" | "colgroup" | "data" | "datalist" | "dd" | "del" | "details" | "dfn" | "dialog" | "div" | "dl" | "dt" | "em" | "embed" | "fieldset" | "figcaption" | "figure" | "footer" | "form" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "head" | "header" | "hgroup" | "hr" | "html" | "i" | "iframe" | "img" | "ins" | "kbd" | "label" | "legend" | "li" | "link" | "main" | "map" | "mark" | "menu" | "meta" | "meter" | "nav" | "noscript" | "ol" | "optgroup" | "option" | "output" | "p" | "param" | "picture" | "pre" | "q" | "rp" | "rt" | "ruby" | "s" | "samp" | "script" | "section" | "slot" | "small" | "source" | "span" | "strong" | "style" | "sub" | "summary" | "sup" | "table" | "tbody" | "td" | "template" | "textarea" | "tfoot" | "th" | "thead" | "time" | "title" | "tr" | "track" | "u" | "ul" | "var" | "video" | "wbr" | "big" | React_2.FunctionComponent<any> | React_2.ComponentClass<any, any> | "keygen" | "menuitem" | "noindex" | "webview" | "svg" | "animate" | "animateMotion" | "animateTransform" | "circle" | "clipPath" | "defs" | "desc" | "ellipse" | "feBlend" | "feColorMatrix" | "feComponentTransfer" | "feComposite" | "feConvolveMatrix" | "feDiffuseLighting" | "feDisplacementMap" | "feDistantLight" | "feDropShadow" | "feFlood" | "feFuncA" | "feFuncB" | "feFuncG" | "feFuncR" | "feGaussianBlur" | "feImage" | "feMerge" | "feMergeNode" | "feMorphology" | "feOffset" | "fePointLight" | "feSpecularLighting" | "feSpotLight" | "feTile" | "feTurbulence" | "filter" | "foreignObject" | "g" | "image" | "line" | "linearGradient" | "marker" | "mask" | "metadata" | "mpath" | "path" | "pattern" | "polygon" | "polyline" | "radialGradient" | "rect" | "stop" | "switch" | "text" | "textPath" | "tspan" | "use" | "view" | undefined;
}> & React_2.RefAttributes<React_2.ElementType<TProps>>>;

/**
 * AssertNever is a utility function that can be used for exhaustiveness checks in switch statements.
 *
 * @public
 */
export declare function assertNever(x: never): never;

/**
 * Makes a resulting merge of a bunch of objects. Pass in the target object followed by 1 or more
 * objects as arguments and they will be merged sequentially into the target. Note that this will
 * shallow merge; it will not create new cloned values for target members.
 *
 * @public
 * @param target - Target object to merge following object arguments into.
 * @param args - One or more objects that will be mixed into the target in the order they are provided.
 * @returns Resulting merged target.
 */
export declare function assign(this: any, target: any, ...args: any[]): any;

/**
 * Bugs often appear in async code when stuff gets disposed, but async operations don't get canceled.
 * This Async helper class solves these issues by tying async code to the lifetime of a disposable object.
 *
 * Usage: Anything class extending from BaseModel can access this helper via this.async. Otherwise create a
 * new instance of the class and remember to call dispose() during your code's dispose handler.
 *
 * @public
 */
export declare class Async {
    private _timeoutIds;
    private _immediateIds;
    private _intervalIds;
    private _animationFrameIds;
    private _isDisposed;
    private _parent;
    private _onErrorHandler;
    private _noop;
    constructor(parent?: object, onError?: (e: any) => void);
    /**
     * Dispose function, clears all async operations.
     */
    dispose(): void;
    /**
     * SetTimeout override, which will auto cancel the timeout during dispose.
     * @param callback - Callback to execute.
     * @param duration - Duration in milliseconds.
     * @returns The setTimeout id.
     */
    setTimeout(callback: () => void, duration: number): number;
    /**
     * Clears the timeout.
     * @param id - Id to cancel.
     */
    clearTimeout(id: number): void;
    /**
     * SetImmediate override, which will auto cancel the immediate during dispose.
     * @param callback - Callback to execute.
     * @param targetElement - Optional target element to use for identifying the correct window.
     * @returns The setTimeout id.
     */
    setImmediate(callback: () => void, targetElement?: Element | null): number;
    /**
     * Clears the immediate.
     * @param id - Id to cancel.
     * @param targetElement - Optional target element to use for identifying the correct window.
     */
    clearImmediate(id: number, targetElement?: Element | null): void;
    /**
     * SetInterval override, which will auto cancel the timeout during dispose.
     * @param callback - Callback to execute.
     * @param duration - Duration in milliseconds.
     * @returns The setTimeout id.
     */
    setInterval(callback: () => void, duration: number): number;
    /**
     * Clears the interval.
     * @param id - Id to cancel.
     */
    clearInterval(id: number): void;
    /**
     * Creates a function that, when executed, will only call the func function at most once per
     * every wait milliseconds. Provide an options object to indicate that func should be invoked
     * on the leading and/or trailing edge of the wait timeout. Subsequent calls to the throttled
     * function will return the result of the last func call.
     *
     * Note: If leading and trailing options are true func will be called on the trailing edge of
     * the timeout only if the throttled function is invoked more than once during the wait timeout.
     *
     * @param func - The function to throttle.
     * @param wait - The number of milliseconds to throttle executions to. Defaults to 0.
     * @param options - The options object.
     * @returns The new throttled function.
     */
    throttle<T extends (...args: any[]) => any>(func: T, wait?: number, options?: {
        leading?: boolean;
        trailing?: boolean;
    }): T;
    /**
     * Creates a function that will delay the execution of func until after wait milliseconds have
     * elapsed since the last time it was invoked. Provide an options object to indicate that func
     * should be invoked on the leading and/or trailing edge of the wait timeout. Subsequent calls
     * to the debounced function will return the result of the last func call.
     *
     * Note: If leading and trailing options are true func will be called on the trailing edge of
     * the timeout only if the debounced function is invoked more than once during the wait
     * timeout.
     *
     * @param func - The function to debounce.
     * @param wait - The number of milliseconds to delay.
     * @param options - The options object.
     * @returns The new debounced function.
     */
    debounce<T extends (...args: any[]) => any>(func: T, wait?: number, options?: {
        leading?: boolean;
        maxWait?: number;
        trailing?: boolean;
    }): ICancelable<T> & T;
    requestAnimationFrame(callback: () => void, targetElement?: Element | null): number;
    cancelAnimationFrame(id: number, targetElement?: Element | null): void;
    protected _logError(e: any): void;
}

/**
 * An array of AUDIO tag properties and events.

 * @public
 */
export declare const audioProperties: Record<string, number>;

/**
 * AutoScroll simply hooks up mouse events given a parent element, and scrolls the container
 * up/down depending on how close the mouse is to the top/bottom of the container.
 *
 * Once you don't want autoscroll any more, just dispose the helper and it will unhook events.
 *
 * @public
 * {@docCategory AutoScroll}
 */
export declare class AutoScroll {
    private _events;
    private _scrollableParent;
    private _scrollRect;
    private _scrollVelocity;
    private _isVerticalScroll;
    private _timeoutId?;
    constructor(element: HTMLElement);
    dispose(): void;
    private _onMouseMove;
    private _onTouchMove;
    private _computeScrollVelocity;
    private _startScroll;
    private _incrementScroll;
    private _stopScroll;
}

/**
 * BaseComponent class, which provides basic helpers for all components.
 *
 * @public
 * {@docCategory BaseComponent}
 *
 * @deprecated Do not use. We are moving away from class component.
 */
export declare class BaseComponent<TProps extends IBaseProps = {}, TState = {}> extends React_2.Component<TProps, TState> {
    /**
     * @deprecated Use React's error boundaries instead.
     */
    static onError: (errorMessage?: string, ex?: any) => void;
    /**
     * Controls whether the componentRef prop will be resolved by this component instance. If you are
     * implementing a passthrough (higher-order component), you would set this to false and pass through
     * the props to the inner component, allowing it to resolve the componentRef.
     */
    protected _skipComponentRefResolution: boolean;
    private __async;
    private __events;
    private __disposables;
    private __resolves;
    private __className;
    /**
     * BaseComponent constructor
     * @param props - The props for the component.
     * @param context - The context for the component.
     */
    constructor(props: TProps, context?: any);
    /**
     * When the component receives props, make sure the componentRef is updated.
     */
    componentDidUpdate(prevProps: TProps, prevState: TState): void;
    /**
     * When the component has mounted, update the componentRef.
     */
    componentDidMount(): void;
    /**
     * If we have disposables, dispose them automatically on unmount.
     */
    componentWillUnmount(): void;
    /**
     * Gets the object's class name.
     */
    get className(): string;
    /**
     * Allows subclasses to push things to this._disposables to be auto disposed.
     */
    protected get _disposables(): IDisposable[];
    /**
     * Gets the async instance associated with the component, created on demand. The async instance gives
     * subclasses a way to execute setTimeout/setInterval async calls safely, where the callbacks
     * will be cleared/ignored automatically after unmounting. The helpers within the async object also
     * preserve the this pointer so that you don't need to "bind" the callbacks.
     */
    protected get _async(): Async;
    /**
     * Gets the event group instance assocaited with the component, created on demand. The event instance
     * provides on/off methods for listening to DOM (or regular javascript object) events. The event callbacks
     * will be automatically disconnected after unmounting. The helpers within the events object also
     * preserve the this reference so that you don't need to "bind" the callbacks.
     */
    protected get _events(): EventGroup;
    /**
     * Helper to return a memoized ref resolver function.
     * @param refName - Name of the member to assign the ref to.
     * @returns A function instance keyed from the given refname.
     * @deprecated Use `createRef` from React.createRef.
     */
    protected _resolveRef(refName: string): (ref: React_2.ReactNode) => React_2.ReactNode;
    /**
     * Updates the componentRef (by calling it with "this" when necessary.)
     */
    protected _updateComponentRef(currentProps: IBaseProps, newProps?: IBaseProps): void;
    /**
     * Warns when a deprecated props are being used.
     *
     * @param deprecationMap - The map of deprecations, where key is the prop name and the value is
     * either null or a replacement prop name.
     */
    protected _warnDeprecations(deprecationMap: ISettingsMap<TProps>): void;
    /**
     * Warns when props which are mutually exclusive with each other are both used.
     *
     * @param mutuallyExclusiveMap - The map of mutually exclusive props.
     */
    protected _warnMutuallyExclusive(mutuallyExclusiveMap: ISettingsMap<TProps>): void;
    /**
     * Warns when props are required if a condition is met.
     *
     * @param requiredProps - The name of the props that are required when the condition is met.
     * @param conditionalPropName - The name of the prop that the condition is based on.
     * @param condition - Whether the condition is met.
     */
    protected _warnConditionallyRequiredProps(requiredProps: string[], conditionalPropName: string, condition: boolean): void;
    private _setComponentRef;
}

/**
 * An array of events that are allowed on every html element type.
 *
 * @public
 */
export declare const baseElementEvents: Record<string, number>;

/**
 * An array of element attributes which are allowed on every html element type.
 *
 * @public
 */
export declare const baseElementProperties: Record<string, number>;

/**
 * An array of BUTTON tag properties and events.
 *
 * @public
 */
export declare const buttonProperties: Record<string, number>;

/**
 * Calculates a number's precision based on the number of trailing
 * zeros if the number does not have a decimal indicated by a negative
 * precision. Otherwise, it calculates the number of digits after
 * the decimal point indicated by a positive precision.
 * @param value - the value to determine the precision of
 */
export declare function calculatePrecision(value: number | string): number;

/**
 * Creates a getClassNames function which calls getStyles given the props, and injects them
 * into mergeStyleSets.
 *
 * Note that the props you pass in on every render should be in the same order and
 * immutable (numbers, strings, and booleans). This will allow the results to be memoized. Violating
 * these will cause extra recalcs to occur.
 */
export declare function classNamesFunction<TStyleProps extends {}, TStyleSet extends IStyleSet<TStyleSet>>(options?: IClassNamesFunctionOptions): (getStyles: IStyleFunctionOrObject<TStyleProps, TStyleSet> | undefined, styleProps?: TStyleProps) => IProcessedStyleSet<TStyleSet>;

export declare const colGroupProperties: Record<string, number>;

export declare const colProperties: Record<string, number>;

/**
 * Composes two components which conform to the `IComponentAs` specification; that is, two
 * components which accept a `defaultRender` prop, which is a 'default' implementation of
 * a component which accepts the same overall props.
 *
 * @public
 */
export declare function composeComponentAs<TProps>(outer: IComponentAs<TProps>, inner: IComponentAs<TProps>): IComponentAs<TProps>;

/**
 * Composes two 'render functions' to produce a final render function that renders
 * the outer function, passing the inner function as 'default render'. The inner function
 * is then passed the original 'default render' prop.
 * @public
 */
export declare function composeRenderFunction<TProps>(outer: IRenderFunction<TProps>, inner: IRenderFunction<TProps>): IRenderFunction<TProps>;

/**
 * Creates an array of a given size and helper method to populate.
 *
 * @public
 * @param size - Size of array.
 * @param getItem - Callback to populate given cell index.
 */
export declare function createArray<T>(size: number, getItem: (index: number) => T): T[];

/**
 * Creates a memoizer for a single-value function, backed by a WeakMap.
 * With a WeakMap, the memoized values are only kept as long as the source objects,
 * ensuring that there is no memory leak.
 *
 * This function assumes that the input values passed to the wrapped function will be
 * `function` or `object` types. To memoize functions which accept other inputs, use
 * `memoizeFunction`, which memoizes against arbitrary inputs using a lookup cache.
 *
 * @public
 */
export declare function createMemoizer<F extends (input: any) => any>(getValue: F): F;

/**
 * Helper to merge refs from within class components.
 */
export declare const createMergedRef: <TType, TValue = null>(value?: TValue | undefined) => (...newRefs: (((instance: TType | TValue | null) => void) | React_2.RefObject<TType | TValue | null> | null | undefined)[]) => (newValue: TType | TValue | null) => void;

/**
 * Concatination helper, which can merge class names together. Skips over falsey values.
 *
 * @public
 */
export declare function css(...args: ICssInput[]): string;

export declare function customizable(scope: string, fields: string[], concatStyles?: boolean): <P>(ComposedComponent: React_2.ComponentType<P>) => any;

export declare class Customizations {
    private static _suppressUpdates;
    static reset(): void;
    /** Apply global Customization settings.
     * @example Customizations.applySettings(\{ theme: \{...\} \});
     */
    static applySettings(settings: ISettings): void;
    /** Apply Customizations to a particular named scope, like a component.
     * @example Customizations.applyScopedSettings('Nav', \{ styles: () =\> \{\} \});
     */
    static applyScopedSettings(scopeName: string, settings: ISettings): void;
    static getSettings(properties: string[], scopeName?: string, localSettings?: ICustomizations): any;
    /** Used to run some code that sets Customizations without triggering an update until the end.
     * Useful for applying Customizations that don't affect anything currently rendered, or for
     * applying many customizations at once.
     * @param suppressUpdate - Do not raise the change event at the end, preventing all updates
     */
    static applyBatchedUpdates(code: () => void, suppressUpdate?: boolean): void;
    static observe(onChange: () => void): void;
    static unobserve(onChange: () => void): void;
    private static _raiseChange;
}

/**
 * The Customizer component allows for default props to be mixed into components which
 * are decorated with the customizable() decorator, or use the styled HOC. This enables
 * injection scenarios like:
 *
 * 1. render svg icons instead of the icon font within all buttons
 * 2. inject a custom theme object into a component
 *
 * Props are provided via the settings prop which should be one of the following:
 * - A json map which contains 1 or more name/value pairs representing injectable props.
 * - A function that receives the current settings and returns the new ones that apply to the scope
 *
 * @public
 *
 * @deprecated This component is deprecated for purpose of applying theme to components
 * as of `@fluentui/react` version 8. Use `ThemeProvider` for applying theme instead.
 */
export declare class Customizer extends React_2.Component<ICustomizerProps> {
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): React_2.ReactElement<{}>;
    private _onCustomizationChange;
}

export declare const CustomizerContext: React_2.Context<ICustomizerContext>;

/**
 * Placing this attribute on scrollable divs optimizes detection to know
 * if the div is scrollable or not (given we can avoid expensive operations
 * like getComputedStyle.)
 *
 * @public
 */
export declare const DATA_IS_SCROLLABLE_ATTRIBUTE = "data-is-scrollable";
export { DATA_PORTAL_ATTRIBUTE }

/**
 * Utility component for delaying the render of a child component after a given delay. This component
 * requires a single child component; don't pass in many components. Wrap multiple components in a DIV
 * if necessary.
 *
 * @public
 * {@docCategory DelayedRender}
 */
export declare class DelayedRender extends React_2.Component<IDelayedRenderProps, IDelayedRenderState> {
    static defaultProps: {
        delay: number;
    };
    private _timeoutId;
    constructor(props: IDelayedRenderProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): React_2.ReactElement<{}> | null;
}

/**
 * Disables the body scrolling.
 *
 * @public
 */
export declare function disableBodyScroll(): void;

/**
 * An array of DIV tag properties and events.
 *
 * @public
 */
export declare const divProperties: Record<string, number>;

/**
 * Determines if an element, or any of its children, contain focus.
 *
 * @public
 */
export declare function doesElementContainFocus(element: HTMLElement): boolean;
export { elementContains }
export { elementContainsAttribute }

/**
 * Enables the body scrolling.
 *
 * @public
 */
export declare function enableBodyScroll(): void;

/** An instance of EventGroup allows anything with a handle to it to trigger events on it.
 *  If the target is an HTMLElement, the event will be attached to the element and can be
 *  triggered as usual (like clicking for onClick).
 *  The event can be triggered by calling EventGroup.raise() here. If the target is an
 *  HTMLElement, the event gets raised and is handled by the browser. Otherwise, it gets
 *  handled here in EventGroup, and the handler is called in the context of the parent
 *  (which is passed in in the constructor).
 *
 * @public
 * {@docCategory EventGroup}
 */
export declare class EventGroup {
    private static _uniqueId;
    private _parent;
    private _eventRecords;
    private _id;
    private _isDisposed;
    /** For IE8, bubbleEvent is ignored here and must be dealt with by the handler.
     *  Events raised here by default have bubbling set to false and cancelable set to true.
     *  This applies also to built-in events being raised manually here on HTMLElements,
     *  which may lead to unexpected behavior if it differs from the defaults.
     *
     */
    static raise(target: any, eventName: string, eventArgs?: any, bubbleEvent?: boolean): boolean | undefined;
    static isObserved(target: any, eventName: string): boolean;
    /** Check to see if the target has declared support of the given event. */
    static isDeclared(target: any, eventName: string): boolean;
    static stopPropagation(event: any): void;
    private static _isElement;
    /** parent: the context in which events attached to non-HTMLElements are called */
    constructor(parent: any);
    dispose(): void;
    /** On the target, attach a set of events, where the events object is a name to function mapping. */
    onAll(target: any, events: {
        [key: string]: (args?: any) => void;
    }, useCapture?: boolean): void;
    /**
     * On the target, attach an event whose handler will be called in the context of the parent
     * of this instance of EventGroup.
     */
    on(target: any, eventName: string, callback: (args?: any) => void, options?: boolean | AddEventListenerOptions): void;
    off(target?: any, eventName?: string, callback?: (args?: any) => void, options?: boolean | AddEventListenerOptions): void;
    /** Trigger the given event in the context of this instance of EventGroup. */
    raise(eventName: string, eventArgs?: any, bubbleEvent?: boolean): boolean | undefined;
    /** Declare an event as being supported by this instance of EventGroup. */
    declare(event: string | string[]): void;
}

/**
 * Extends a component's lifetime methods by appending new functions to the existing lifetime functions.
 */
export declare function extendComponent<T extends React_2.Component>(parent: T, methods: {
    [key in keyof T]?: T[key];
}): void;

/**
 * Performance helper class for measuring things.
 *
 * @public
 * {@docCategory FabricPerformance}
 */
export declare class FabricPerformance {
    static summary: IPerfSummary;
    private static _timeoutId;
    /**
     * Measures execution time of the given syncronous function. If the same logic is executed multiple times,
     * each individual measurement will be collected as well the overall numbers.
     * @param name - The name of this measurement
     * @param func - The logic to be measured for execution time
     */
    static measure(name: string, func: () => void): void;
    static reset(): void;
    static setPeriodicReset(): void;
}

/**
 * Makes a resulting merge of a bunch of objects, but allows a filter function to be passed in to filter
 * the resulting merges. This allows for scenarios where you want to merge "everything except that one thing"
 * or "properties that start with data-". Note that this will shallow merge; it will not create new cloned
 * values for target members.
 *
 * @public
 * @param isAllowed - Callback to determine if the given propName is allowed in the result.
 * @param target - Target object to merge following object arguments into.
 * @param args - One or more objects that will be mixed into the target in the order they are provided.
 * @returns Resulting merged target.
 */
export declare function filteredAssign(isAllowed: (propName: string) => boolean, target: any, ...args: any[]): any;

/**
 * Helper to find the first item within an array that satisfies the callback.
 * @param array - Array to search
 * @param cb - Callback which returns true on matches
 */
export declare function find<T>(array: T[], cb: (item: T, index: number) => boolean): T | undefined;
export { findElementRecursive }

/**
 * Helper to find the index of an item within an array, using a callback to
 * determine the match.
 *
 * @public
 * @param array - Array to search.
 * @param cb - Callback which returns true on matches.
 * @param fromIndex - Optional index to start from (defaults to 0)
 */
export declare function findIndex<T>(array: T[], cb: (item: T, index: number) => boolean, fromIndex?: number): number;

/**
 * Traverses up the DOM for the element with the data-is-scrollable=true attribute, or returns
 * document.body.
 *
 * @public
 */
export declare function findScrollableParent(startingElement: HTMLElement | null): HTMLElement | Window | undefined | null;

/**
 * Produces a proportionally-scaled version of an input content size when fit to a bounding size.
 * Given a `contentSize` and a `boundsSize`, this function scales `contentSize` proportionally
 * using either `contain` or `cover` fit behaviors.
 * Use this function to pre-calculate the layout for the CSS `object-fit` and `background-fit` behaviors.
 * With `contain`, the output size must be the largest it can be while completely within the `boundsSize`.
 * With `cover`, the output size must be the smallest it can be while completely around the `boundsSize`.
 * By default, there is a `maxScale` value of 1, which prevents the `contentSize` from being scaled larger.
 *
 * @param options - the options for the bounds fit operation
 */
export declare function fitContentToBounds(options: IFitContentToBoundsOptions): ISize;

/**
 * The available fit modes. These should match the fit modes for CSS.
 */
export declare type FitMode = 'contain' | 'cover';

/**
 * Given an array where each element is of type T or T[], flatten it into an array of T
 * @param array - The array where each element can optionally also be an array
 */
export declare function flatten<T>(array: (T | T[])[]): T[];

/**
 * Sets focus to an element asynchronously. The focus will be set at the next browser repaint,
 * meaning it won't cause any extra recalculations. If more than one focusAsync is called during one frame,
 * only the latest called focusAsync element will actually be focused
 * @param element - The element to focus
 */
export declare function focusAsync(element: HTMLElement | {
    focus: () => void;
} | undefined | null): void;

/**
 * Attempts to focus the first focusable element that is a child or child's child of the rootElement.
 *
 * @public
 * @param rootElement - Element to start the search for a focusable child.
 * @returns True if focus was set, false if it was not.
 */
export declare function focusFirstChild(rootElement: HTMLElement): boolean;

/**
 * Function Component wrapper which enables calling `useFocusRects` hook.
 * Renders nothing.
 */
export declare const FocusRects: React_2.FunctionComponent<{
    rootRef?: React_2.RefObject<HTMLElement>;
}>;

/**
 * String format method, used for scenarios where at runtime you
 * need to evaluate a formatted string given a tokenized string. This
 * usually only is needed in localization scenarios.

 * @example
 * ```tsx
 * "I love {0} every {1}".format("CXP")
 * ```
 * will result in a Debug Exception.
 *
 * @public
 */
export declare function format(s: string, ...values: any[]): string;

/**
 * An array of FORM tag properties and events.
 *
 * @public
 */
export declare const formProperties: Record<string, number>;
export { getChildren }

/**
 * Determines the distance between two points.
 *
 * @public
 */
export declare function getDistanceBetweenPoints(point1: Point, point2: Point): number;

/**
 * Helper to get the document object. Note that in popup window cases, document
 * might be the wrong document, which is why we look at ownerDocument for the
 * truth. Also note that the SSR flag is used to test ssr scenarios even if
 * document is defined (from JSDOM for example.)
 *
 * @public
 */
export declare function getDocument(rootElement?: HTMLElement | null): Document | undefined;

/**
 * Finds the element index path from a parent element to a child element.
 *
 * If you had this node structure: "A has children [B, C] and C has child D",
 * the index path from A to D would be [1, 0], or `parent.chidren[1].children[0]`.
 */
export declare function getElementIndexPath(fromElement: HTMLElement, toElement: HTMLElement): number[];

/**
 * Gets the first focusable element.
 *
 * @public
 */
export declare function getFirstFocusable(rootElement: HTMLElement, currentElement: HTMLElement, includeElementsInFocusZones?: boolean): HTMLElement | null;

/**
 * Gets the first tabbable element. (The difference between focusable and tabbable is that tabbable elements are
 * focusable elements that also have tabIndex != -1.)
 * @param rootElement - The parent element to search beneath.
 * @param currentElement - The descendant of rootElement to start the search at.  This element is the first one checked,
 * and iteration continues forward.  Typical use passes rootElement.firstChild.
 * @param includeElementsInFocusZones - true if traversal should go into FocusZone descendants.
 * @param checkNode - Include currentElement in search when true. Defaults to true.
 * @public
 */
export declare function getFirstTabbable(rootElement: HTMLElement, currentElement: HTMLElement, includeElementsInFocusZones?: boolean, checkNode?: boolean): HTMLElement | null;

/**
 * Finds the closest focusable element via an index path from a parent. See
 * `getElementIndexPath` for getting an index path from an element to a child.
 */
export declare function getFocusableByIndexPath(parent: HTMLElement, path: number[]): HTMLElement | undefined;

/**
 * Generates a unique id in the global scope (this spans across duplicate copies of the same library.)
 *
 * @public
 */
export declare function getId(prefix?: string): string;

/**
 * Regular expressions matching characters to ignore when calculating the initials.
 */
/**
 * Get (up to 2 characters) initials based on display name of the persona.
 *
 * @public
 */
export declare function getInitials(displayName: string | undefined | null, isRtl: boolean, allowPhoneInitials?: boolean): string;

/**
 * Gets the language set for the page.
 * @param persistenceType - Where to persist the value. Default is `sessionStorage` if available.
 */
export declare function getLanguage(persistenceType?: 'localStorage' | 'sessionStorage' | 'none'): string | null;

/**
 * Gets the last focusable element.
 *
 * @public
 */
export declare function getLastFocusable(rootElement: HTMLElement, currentElement: HTMLElement, includeElementsInFocusZones?: boolean): HTMLElement | null;

/**
 * Gets the last tabbable element. (The difference between focusable and tabbable is that tabbable elements are
 * focusable elements that also have tabIndex != -1.)
 * @param rootElement - The parent element to search beneath.
 * @param currentElement - The descendant of rootElement to start the search at.  This element is the first one checked,
 * and iteration continues in reverse.  Typical use passes rootElement.lastChild.
 * @param includeElementsInFocusZones - true if traversal should go into FocusZone descendants.
 * @param checkNode - Include currentElement in search when true. Defaults to true.
 * @public
 */
export declare function getLastTabbable(rootElement: HTMLElement, currentElement: HTMLElement, includeElementsInFocusZones?: boolean, checkNode?: boolean): HTMLElement | null;

/**
 * Given an element tagname and user props, filters the props to only allowed props for the given
 * element type.
 * @param tagName - Tag name (e.g. "div")
 * @param props - Props object
 * @param excludedPropNames - List of props to disallow
 */
export declare function getNativeElementProps<TAttributes extends React_2.HTMLAttributes<any>>(tagName: string, props: {}, excludedPropNames?: string[]): TAttributes;

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
export declare function getNativeProps<T extends Record<string, any>>(props: Record<string, any>, allowedPropNames: string[] | Record<string, number>, excludedPropNames?: string[]): T;

/**
 * Traverse to find the next focusable element.
 * If tabbable is true, the element must have tabIndex != -1.
 *
 * @public
 * @param checkNode - Include currentElement in search when true.
 */
export declare function getNextElement(rootElement: HTMLElement, currentElement: HTMLElement | null, checkNode?: boolean, suppressParentTraversal?: boolean, suppressChildTraversal?: boolean, includeElementsInFocusZones?: boolean, allowFocusRoot?: boolean, tabbable?: boolean): HTMLElement | null;
export { getParent }

/**
 * Traverse to find the previous element.
 * If tabbable is true, the element must have tabIndex != -1.
 *
 * @public
 */
export declare function getPreviousElement(rootElement: HTMLElement, currentElement: HTMLElement | null, checkNode?: boolean, suppressParentTraversal?: boolean, traverseChildren?: boolean, includeElementsInFocusZones?: boolean, allowFocusRoot?: boolean, tabbable?: boolean): HTMLElement | null;

/**
 * Function to apply default values to a component props object. This function is intended for function components,
 * to maintain parity with the `defaultProps` feature of class components. It accounts for properties that are
 * specified, but undefined.
 * @param defaultProps- An object with default values for various properties
 * @param propsWithoutDefaults- The props object passed into the component
 */
export declare function getPropsWithDefaults<TProps extends {}>(defaultProps: Partial<TProps>, propsWithoutDefaults: TProps): TProps;

/**
 * Helper to get bounding client rect. Passing in window will get the window size.
 *
 * @public
 */
export declare function getRect(element: HTMLElement | Window | null): IRectangle | undefined;

/**
 * @deprecated Unused as of version 8
 */
export declare function getResourceUrl(url: string): string;

/**
 * Gets the rtl state of the page (returns true if in rtl.)
 */
export declare function getRTL(theme?: {
    rtl?: boolean;
}): boolean;

/**
 * Returns the given key, but flips right/left arrows if necessary.
 */
export declare function getRTLSafeKeyCode(key: number, theme?: {
    rtl?: boolean;
}): number;

/**
 * Calculates the width of a scrollbar for the browser/os.
 *
 * @public
 */
export declare function getScrollbarWidth(): number;
export { getVirtualParent }

/**
 * Helper to get the window object. The helper will make sure to use a cached variable
 * of "window", to avoid overhead and memory leaks in IE11. Note that in popup scenarios the
 * window object won't match the "global" window object, and for these scenarios, you should
 * pass in an element hosted within the popup.
 *
 * @public
 */
export declare function getWindow(rootElement?: Element | null): Window | undefined;

/**
 * Global settings helper, which stores settings in the global (window) namespace.
 * If window is not provided, it will store settings in module scope. Provides a
 * way to observe changes as well when their values change.
 *
 * @public
 * {@docCategory GlobalSettings}
 */
export declare class GlobalSettings {
    static getValue<T>(key: string, defaultValue?: T | (() => T)): T;
    static setValue<T>(key: string, value: T): T;
    static addChangeListener(cb: IChangeEventCallback): void;
    static removeChangeListener(cb: IChangeEventCallback): void;
}

/**
 * Detects whether an element's content has horizontal overflow
 *
 * @public
 * @param element - Element to check for overflow
 * @returns True if element's content overflows
 */
export declare function hasHorizontalOverflow(element: HTMLElement): boolean;

/**
 * Detects whether an element's content has overflow in any direction
 *
 * @public
 * @param element - Element to check for overflow
 * @returns True if element's content overflows
 */
export declare function hasOverflow(element: HTMLElement): boolean;

/**
 * Detects whether an element's content has vertical overflow
 *
 * @public
 * @param element - Element to check for overflow
 * @returns True if element's content overflows
 */
export declare function hasVerticalOverflow(element: HTMLElement): boolean;

/**
 * Allows you to hoist methods, except those in an exclusion set from a source object into a destination object.
 *
 * @public
 * @param destination - The instance of the object to hoist the methods onto.
 * @param source - The instance of the object where the methods are hoisted from.
 * @param exclusions - (Optional) What methods to exclude from being hoisted.
 * @returns An array of names of methods that were hoisted.
 */
export declare function hoistMethods(destination: any, source: any, exclusions?: string[]): string[];

/**
 * Allows you to hoist static functions in components.
 * Created for the purpose of fixing broken static functions in classes
 * that utilize decorators.
 *
 * @public
 * @param source - The object where the methods are hoisted from.
 * @param dest - The object to hoist the methods onto.
 * @returns The dest object with methods added
 */
export declare function hoistStatics<TSource extends Object, TDest>(source: TSource, dest: TDest): TDest;

/**
 * An array of HTML element properties and events.
 *
 * @public
 */
export declare const htmlElementProperties: Record<string, number>;

export declare interface IAsAsyncOptions<TProps> {
    /**
     * Callback which returns a promise resolving an object which exports the component.
     */
    load: () => Promise<React_2.ElementType<TProps>>;
    /**
     * Callback executed when async loading is complete.
     */
    onLoad?: () => void;
    /**
     * Callback when async loading fails.
     */
    onError?: (error: Error) => void;
}

/**
 * BaseProps interface.
 *
 * @public
 * {@docCategory IBaseProps}
 */
export declare interface IBaseProps<T = any> {
    componentRef?: IRefObject<T>;
}

export declare type ICancelable<T extends (...args: any[]) => any> = {
    flush: () => ReturnType<T>;
    cancel: () => void;
    pending: () => boolean;
};

/**
 * Change description used for change callbacks in GlobalSettings.
 *
 * @public
 * {@docCategory IChangeDescription}
 */
export declare interface IChangeDescription {
    key: string;
    oldValue: any;
    value: any;
}

/**
 * Change event callback.
 *
 * @public
 * {@docCategory IChangeEventCallback}
 */
export declare interface IChangeEventCallback {
    __id__?: string;
    (changeDescription?: IChangeDescription): void;
}

/**
 * @deprecated Use `IProcessedStyleSet` from `@fluentui/style-utilities` or `@fluentui/merge-styles` instead.
 */
export declare type IClassNames<T> = {
    [key in keyof T]: string;
};

export declare interface IClassNamesFunctionOptions {
    /**
     * Disables class caching for scenarios where styleProp parts mutate frequently.
     */
    disableCaching?: boolean;
    /**
     * Size of the cache. It overwrites default cache size when defined.
     */
    cacheSize?: number;
    /**
     * Set to true if component base styles are implemented in scss instead of css-in-js.
     */
    useStaticStyles?: boolean;
}

/**
 * Render function interface for providing overrideable render callbacks.
 *
 * @public
 * {@docCategory IComponentAs}
 */
export declare type IComponentAs<T> = React_2.ComponentType<IComponentAsProps<T>>;

/**
 * Properties used by render function interface for providing overrideable render callbacks.
 *
 * @public
 * {@docCategory IComponentAsProps}
 */
export declare type IComponentAsProps<T> = T & {
    defaultRender?: React_2.ComponentType<T>;
};

/**
 * css input type.
 *
 * @internal
 */
export declare type ICssInput = string | ISerializableObject | IDictionary | null | undefined | boolean;

export declare interface ICustomizableProps {
    /**
     * Name of scope, which can be targeted using the Customizer.
     */
    scope: string;
    /**
     * List of fields which can be customized.
     * @defaultvalue [ 'theme', 'styles' ]
     */
    fields?: string[];
}

export declare interface ICustomizations {
    settings: ISettings;
    scopedSettings: {
        [key: string]: ISettings;
    };
    inCustomizerContext?: boolean;
}

export declare interface ICustomizerContext {
    customizations: ICustomizations;
}

export declare type ICustomizerProps = IBaseProps & Partial<{
    /**
     * Settings are used as general settings for the React tree below.
     * Components can subscribe to receive the settings by using `customizable`.
     *
     * @example
     * ```
     * // Settings can be represented by a plain object that contains the key value pairs.
     * <Customizer settings={{ color: 'red' }} />
     *
     * // or a function that receives the current settings and returns the new ones
     * <Customizer settings={(currentSettings) => ({ ...currentSettings, color: 'red' })} />
     * ```
     */
    settings: ISettings | ISettingsFunction;
    /**
     * Scoped settings are settings that are scoped to a specific scope. The
     * scope is the name that is passed to the `customizable` function when the
     * the component is customized.
     *
     * @example
     * ```
     * // Scoped settings can be represented by a plain object that contains the key value pairs.
     * const myScopedSettings = {
     *   Button: { color: 'red' };
     * };
     * <Customizer scopedSettings={myScopedSettings} />
     *
     * // or a function that receives the current settings and returns the new ones
     * const myScopedSettings = {
     *   Button: { color: 'red' };
     * };
     * <Customizer scopedSettings={(currentScopedSettings) => ({ ...currentScopedSettings, ...myScopedSettings })} />
     * ```
     */
    scopedSettings: ISettings | ISettingsFunction;
}> & {
    /**
     * Optional transform function for context. Any implementations should take care to return context without
     * mutating it.
     */
    contextTransform?: (context: Readonly<ICustomizerContext>) => ICustomizerContext;
};

/**
 * @internal
 */
export declare interface IDeclaredEventsByName {
    [eventName: string]: boolean;
}

/**
 * DelayedRender component props.
 *
 * @public
 */
export declare interface IDelayedRenderProps extends React_2.Props<{}> {
    /**
     * Number of milliseconds to delay rendering children.
     */
    delay?: number;
}

/**
 * DelayedRender component state.
 *
 * @internal
 */
export declare interface IDelayedRenderState {
    /**
     * Whether the component is rendered or not.
     */
    isRendered: boolean;
}

/**
 * Dictionary of booleans.
 *
 * @internal
 */
export declare interface IDictionary {
    [className: string]: boolean;
}

/**
 * Disposable interface.
 *
 * @public
 * {@docCategory IDisposable}
 */
export declare interface IDisposable {
    dispose: () => void;
}

/**
 * @internal
 */
export declare interface IEventRecord {
    target: any;
    eventName: string;
    parent: any;
    callback: (args?: any) => void;
    elementCallback?: (...args: any[]) => void;
    objectCallback?: (args?: any) => void;
    options?: boolean | AddEventListenerOptions;
}

/**
 * @internal
 */
export declare interface IEventRecordList {
    [id: string]: IEventRecord[] | number;
    count: number;
}

/**
 * @internal
 */
export declare interface IEventRecordsByName {
    [eventName: string]: IEventRecordList;
}

/**
 * Options for fitting content sizes into bounding sizes.
 */
export declare interface IFitContentToBoundsOptions {
    /**
     * The size of the content to fit to the bounds.
     * The output will be proportional to this value.
     */
    contentSize: ISize;
    /**
     * The size of the bounds.
     */
    boundsSize: ISize;
    /**
     * The fit mode to apply, either 'contain' or 'cover'.
     */
    mode: FitMode;
    /**
     * An optional maximum scale factor to apply. The default is 1.
     * Use Infinity for an unbounded resize.
     */
    maxScale?: number;
}

/**
 * An array of IFRAME tag properties and events.
 *
 * @public
 */
export declare const iframeProperties: Record<string, number>;

/**
 * @deprecated Use imgProperties for img elements.
 */
export declare const imageProperties: Record<string, number>;

/**
 * An array of IMAGE tag properties and events.
 *
 * @public
 */
export declare const imgProperties: Record<string, number>;

/**
 * Helper to manage componentRef resolution. Internally appends logic to
 * lifetime methods to resolve componentRef to the passed in object.
 *
 * Usage: call initializeComponentRef(this) in the constructor,
 */
export declare function initializeComponentRef<TProps extends IBaseProps, TState>(obj: React_2.Component<TProps, TState>): void;

/**
 * Initializes the logic which:
 *
 * 1. Subscribes keydown and mousedown events. (It will only do it once per window,
 *    so it's safe to call this method multiple times.)
 * 2. When the user presses directional keyboard keys, adds the 'ms-Fabric--isFocusVisible' classname
 *    to the document body, removes the 'ms-Fabric-isFocusHidden' classname.
 * 3. When the user clicks a mouse button, adds the 'ms-Fabric-isFocusHidden' classname to the
 *    document body, removes the 'ms-Fabric--isFocusVisible' classname.
 *
 * This logic allows components on the page to conditionally render focus treatments based on
 * the existence of global classnames, which simplifies logic overall.
 *
 * @param window - the window used to add the event listeners
 * @deprecated Use useFocusRects hook or FocusRects component instead.
 */
export declare function initializeFocusRects(window?: Window): void;

/**
 * An array of INPUT tag properties and events.
 *
 * @public
 */
export declare const inputProperties: Record<string, number>;

/**
 * {@docCategory Selection}
 */
export declare interface IObjectWithKey {
    key?: string | number;
}

/**
 * PerfData interface.
 *
 * @internal
 */
export declare interface IPerfData {
    duration: number;
    timeStamp: number;
}

/**
 * PerfMeasurement interface.
 *
 * @internal
 */
export declare interface IPerfMeasurement {
    totalDuration: number;
    count: number;
    all: IPerfData[];
}

/**
 * PerfSummary interface.
 *
 * @internal
 */
export declare interface IPerfSummary {
    [key: string]: IPerfMeasurement;
}

/**
 * Point interface.
 *
 * @public
 * @deprecated Use `Point` instead.
 * {@docCategory Point}
 */
export declare interface IPoint extends Point {
}

export declare interface IPropsWithStyles<TStyleProps, TStyleSet extends IStyleSet<TStyleSet>> {
    styles?: IStyleFunctionOrObject<TStyleProps, TStyleSet>;
}

/**
 * Rectangle interface.
 *
 * @public
 * {@docCategory IRectangle}
 */
export declare interface IRectangle {
    left: number;
    top: number;
    width: number;
    height: number;
    right?: number;
    bottom?: number;
}

export declare type IRefObject<T> = React_2.RefObject<T> | RefObject<T> | ((ref: T | null) => void);

/**
 * An interface representing a component that will not output any DOM, will just render its children and
 * pass through items to modify the children.
 *
 * {@docCategory IRenderComponent}
 */
export declare interface IRenderComponent<TProps> {
    /**
     * JSX.Element to return in this component's render() function.
     */
    children: (props: TProps) => JSX.Element;
}

/**
 * Render function interface for providing overrideable render callbacks.
 *
 * @public
 */
export declare interface IRenderFunction<P> {
    (props?: P, defaultRender?: (props?: P) => JSX.Element | null): JSX.Element | null;
}

/**
 * Determines whether a component is controlled.
 * @param props - Component props
 * @param valueProp - Prop containing the controlled value
 * @returns true if controlled, false if uncontrolled
 */
export declare function isControlled<P>(props: P, valueProp: keyof P): boolean;

/**
 * Returns true if the keycode is a directional keyboard key.
 */
export declare function isDirectionalKeyCode(which: number): boolean;

/**
 * {@docCategory Selection}
 */
export declare interface ISelection<TItem = IObjectWithKey> {
    count: number;
    mode: SelectionMode_2;
    canSelectItem: (item: TItem, index?: number) => boolean;
    setChangeEvents(isEnabled: boolean, suppressChange?: boolean): void;
    setItems(items: TItem[], shouldClear: boolean): void;
    getItems(): TItem[];
    getSelection(): TItem[];
    getSelectedIndices(): number[];
    getSelectedCount(): number;
    isRangeSelected(fromIndex: number, count: number): boolean;
    isAllSelected(): boolean;
    isKeySelected(key: string): boolean;
    isIndexSelected(index: number): boolean;
    isModal?(): boolean;
    setAllSelected(isAllSelected: boolean): void;
    setKeySelected(key: string, isSelected: boolean, shouldAnchor: boolean): void;
    setIndexSelected(index: number, isSelected: boolean, shouldAnchor: boolean): void;
    setModal?(isModal: boolean): void;
    selectToKey(key: string, clearSelection?: boolean): void;
    selectToIndex(index: number, clearSelection?: boolean): void;
    toggleAllSelected(): void;
    toggleKeySelected(key: string): void;
    toggleIndexSelected(index: number): void;
    toggleRangeSelected(fromIndex: number, count: number): void;
}

/**
 * {@docCategory Selection}
 */
export declare interface ISelectionOptions<TItem = IObjectWithKey> {
    onSelectionChanged?: () => void;
    /** Custom logic to generate item keys. Required if `TItem` does not have a `key` property. */
    getKey?: (item: TItem, index?: number) => string | number;
    canSelectItem?: (item: TItem, index?: number) => boolean;
    selectionMode?: SelectionMode_2;
    items?: TItem[];
}

/**
 * Selection options with required `getKey` property.
 * {@docCategory Selection}
 */
export declare type ISelectionOptionsWithRequiredGetKey<TItem> = ISelectionOptions<TItem> & Required<Pick<ISelectionOptions<TItem>, 'getKey'>>;

/**
 * Determines if a given element is a focus sub zone.
 *
 * @public
 */
export declare function isElementFocusSubZone(element?: HTMLElement): boolean;

/**
 * Determines if a given element is a focus zone.
 *
 * @public
 */
export declare function isElementFocusZone(element?: HTMLElement): boolean;

/**
 * Determines if an element can receive focus programmatically or via a mouse click.
 * If checkTabIndex is true, additionally checks to ensure the element can be focused with the tab key,
 * meaning tabIndex != -1.
 *
 * @public
 */
export declare function isElementTabbable(element: HTMLElement, checkTabIndex?: boolean): boolean;

/**
 * Determines if an element is visible.
 *
 * @public
 */
export declare function isElementVisible(element: HTMLElement | undefined | null): boolean;

/**
 * Serializable object.
 *
 * @internal
 */
export declare interface ISerializableObject {
    toString?: () => string;
}

export declare type ISettings = {
    [key: string]: any;
};

export declare type ISettingsFunction = (settings: ISettings) => ISettings;

export declare type ISettingsMap<T> = {
    [P in keyof T]?: string;
};

export declare const IsFocusVisibleClassName = "ms-Fabric--isFocusVisible";

export declare const isIE11: () => boolean;

/**
 * Returns true if and only if the user is on a iOS device.
 * Used to determine whether iOS-specific behavior should be applied.
 */
export declare const isIOS: () => boolean;

/**
 * {@docCategory ISize}
 */
export declare interface ISize {
    width: number;
    height: number;
}

/**
 * Returns true if the user is on a Mac. Caches the result value.
 * @param reset - Reset the cached result value (mainly for testing).
 */
export declare function isMac(reset?: boolean): boolean;
export { IStyleFunction }
export { IStyleFunctionOrObject }
export { isVirtualElement }
export { IVirtualElement }

export declare interface IWarnControlledUsageParams<P> {
    /** ID of the component instance. Used to prevent showing warnings repeatedly. */
    componentId: string;
    /** Name of the component class. */
    componentName: string;
    /** Current props to evaluate. */
    props: P;
    /** Previous props to evaluate (undefined if called in the constructor). */
    oldProps?: P;
    /** Name of the prop for the controlled value. */
    valueProp: keyof P;
    /** Name of the prop for the uncontrolled initial value. */
    defaultValueProp: keyof P;
    /** Name of the change handler prop. */
    onChangeProp: keyof P;
    /** Name of the read-only prop. */
    readOnlyProp?: keyof P;
}

/**
 * Simulated enum for keycodes. These will get inlined by uglify when used much like an enum
 *
 * @public
 * {@docCategory KeyCodes}
 */
export declare const KeyCodes: {
    backspace: 8;
    tab: 9;
    enter: 13;
    shift: 16;
    ctrl: 17;
    alt: 18;
    pauseBreak: 19;
    capslock: 20;
    escape: 27;
    space: 32;
    pageUp: 33;
    pageDown: 34;
    end: 35;
    home: 36;
    left: 37;
    up: 38;
    right: 39;
    down: 40;
    insert: 45;
    del: 46;
    zero: 48;
    one: 49;
    two: 50;
    three: 51;
    four: 52;
    five: 53;
    six: 54;
    seven: 55;
    eight: 56;
    nine: 57;
    colon: 58;
    a: 65;
    b: 66;
    c: 67;
    d: 68;
    e: 69;
    f: 70;
    g: 71;
    h: 72;
    i: 73;
    j: 74;
    k: 75;
    l: 76;
    m: 77;
    n: 78;
    o: 79;
    p: 80;
    q: 81;
    r: 82;
    s: 83;
    t: 84;
    u: 85;
    v: 86;
    w: 87;
    x: 88;
    y: 89;
    z: 90;
    leftWindow: 91;
    rightWindow: 92;
    select: 93;
    zero_numpad: 96;
    one_numpad: 97;
    two_numpad: 98;
    three_numpad: 99;
    four_numpad: 100;
    five_numpad: 101;
    six_numpad: 102;
    seven_numpad: 103;
    eight_numpad: 104;
    nine_numpad: 105;
    multiply: 106;
    add: 107;
    subtract: 109;
    decimalPoint: 110;
    divide: 111;
    f1: 112;
    f2: 113;
    f3: 114;
    f4: 115;
    f5: 116;
    f6: 117;
    f7: 118;
    f8: 119;
    f9: 120;
    f10: 121;
    f11: 122;
    f12: 123;
    numlock: 144;
    scrollLock: 145;
    semicolon: 186;
    equalSign: 187;
    comma: 188;
    dash: 189;
    period: 190;
    forwardSlash: 191;
    graveAccent: 192;
    openBracket: 219;
    backSlash: 220;
    closeBracket: 221;
    singleQuote: 222;
};

export declare type KeyCodes = number;

/**
 * An array of LABEL tag properties and events.
 *
 * @public
 */
export declare const labelProperties: Record<string, number>;

/**
 * An array of LI tag properties and events.
 *
 * @public
 */
export declare const liProperties: Record<string, number>;

/**
 * Takes an enum and iterates over each value of the enum (as a string), running the callback on each,
 * returning a mapped array.
 * @param theEnum - Enum to iterate over
 * @param callback - The first parameter the name of the entry, and the second parameter is the value
 * of that entry, which is the value you'd normally use when using the enum (usually a number).
 */
export declare function mapEnumByName<T>(theEnum: any, callback: (name?: string, value?: string | number) => T | undefined): (T | undefined)[] | undefined;

/**
 * Memoize decorator to be used on class methods. WARNING: the `this` reference
 * will be inaccessible within a memoized method, given that a cached method's `this`
 * would not be instance-specific.
 *
 * @public
 */
export declare function memoize<T extends Function>(_target: any, _key: string, descriptor: TypedPropertyDescriptor<T>): {
    configurable: boolean;
    get(): T;
};

/**
 * Memoizes a function; when you pass in the same parameters multiple times, it returns a cached result.
 * Be careful when passing in objects, you need to pass in the same INSTANCE for caching to work. Otherwise
 * it will grow the cache unnecessarily. Also avoid using default values that evaluate functions; passing in
 * undefined for a value and relying on a default function will execute it the first time, but will not
 * re-evaluate subsequent times which may have been unexpected.
 *
 * By default, the cache will reset after 100 permutations, to avoid abuse cases where the function is
 * unintendedly called with unique objects. Without a reset, the cache could grow infinitely, so we safeguard
 * by resetting. To override this behavior, pass a value of 0 to the maxCacheSize parameter.
 *
 * @public
 * @param cb - The function to memoize.
 * @param maxCacheSize - Max results to cache. If the cache exceeds this value, it will reset on the next call.
 * @param ignoreNullOrUndefinedResult - Flag to decide whether to cache callback result if it is undefined/null.
 * If the flag is set to true, the callback result is recomputed every time till the callback result is
 * not undefined/null for the first time, and then the non-undefined/null version gets cached.
 * @returns A memoized version of the function.
 */
export declare function memoizeFunction<T extends (...args: any[]) => RetType, RetType>(cb: T, maxCacheSize?: number, ignoreNullOrUndefinedResult?: boolean): T;

/**
 * Simple deep merge function. Takes all arguments and returns a deep copy of the objects merged
 * together in the order provided. If an object creates a circular reference, it will assign the
 * original reference.
 */
export declare function merge<T = {}>(target: Partial<T>, ...args: (Partial<T> | null | undefined | false)[]): T;

/**
 * ARIA helper to concatenate attributes, returning undefined if all attributes
 * are undefined. (Empty strings are not a valid ARIA attribute value.)
 *
 * @param ariaAttributes - ARIA attributes to merge
 */
export declare function mergeAriaAttributeValues(...ariaAttributes: (string | undefined | false)[]): string | undefined;

/**
 * Merge props and customizations giving priority to props over context.
 * NOTE: This function will always perform multiple merge operations. Use with caution.
 * @param props - New settings to merge in.
 * @param parentContext - Context containing current settings.
 * @returns Merged customizations.
 */
export declare function mergeCustomizations(props: ICustomizerProps, parentContext: ICustomizerContext): ICustomizerContext;

export declare function mergeScopedSettings(oldSettings?: ISettings, newSettings?: ISettings | ISettingsFunction): ISettings;

/**
 * Merge new and old settings, giving priority to new settings.
 * New settings is optional in which case oldSettings is returned as-is.
 * @param oldSettings - Old settings to fall back to.
 * @param newSettings - New settings that will be merged over oldSettings.
 * @returns Merged settings.
 */
export declare function mergeSettings(oldSettings?: ISettings, newSettings?: ISettings | ISettingsFunction): ISettings;

/**
 * The helper functions here will make the target element as modal to screen readers, by placing aria-hidden on elements
 * that are siblings to the target element and the target element's ancestors (because aria-hidden gets inherited).
 * That way, all other elements on the page are hidden to the screen reader.
 */
/**
 * Call this on a target element to make it modal to screen readers.
 * Returns a function that undoes the changes it made.
 */
export declare function modalize(target: HTMLElement): () => void;

/**
 * Simple constant function for returning null, used to render empty templates in JSX.
 *
 * @public
 */
export declare function nullRender(): JSX.Element | null;

/**
 * An array of OL tag properties and events.
 *
 * @public
 */
export declare const olProperties: Record<string, number>;

/**
 * Tiny helper to do the minimal amount of work in duplicating an object but omitting some
 * props. This ends up faster than using object ...rest or reduce to filter.
 *
 * This behaves very much like filteredAssign, but does not merge many objects together,
 * uses an exclusion object map, and avoids spreads all for optimal performance.
 *
 * See perf test for background:
 * https://jsperf.com/omit-vs-rest-vs-reduce/1
 *
 * @param obj - The object to clone
 * @param exclusions - The array of keys to exclude
 */
export declare function omit<TObj extends Record<string, any>>(obj: TObj, exclusions: (keyof TObj)[]): TObj;
export { Omit_2 as Omit }

export declare function on(element: Element | Window | Document, eventName: string, callback: (ev: Event) => void, options?: boolean): () => void;

export declare const optionProperties: Record<string, number>;

/**
 * Point interface.
 *
 * @public
 * {@docCategory Point}
 */
export declare interface Point {
    left?: number;
    top?: number;
    /** @deprecated Use `left` instead */
    x?: number;
    /** @deprecated Use `top` instead */
    y?: number;
}
export { portalContainsElement }

/**
 * Rounds a number to a certain level of precision. Accepts negative precision.
 * @param value - The value that is being rounded.
 * @param precision - The number of decimal places to round the number to
 */
export declare function precisionRound(value: number, precision: number, base?: number): number;

/** Raises a click event. */
export declare function raiseClick(target: Element): void;

/**
 * Rectangle helper class.
 *
 * @public
 * {@docCategory Rectangle}
 */
export declare class Rectangle {
    top: number;
    bottom: number;
    left: number;
    right: number;
    constructor(left?: number, right?: number, top?: number, bottom?: number);
    /**
     * Calculated automatically by subtracting the right from left
     */
    get width(): number;
    /**
     * Calculated automatically by subtracting the bottom from top.
     */
    get height(): number;
    /**
     * Tests if another rect is approximately equal to this rect (within 4 decimal places.)
     */
    equals(rect: Rectangle): boolean;
}

export declare type RefObject<T> = {
    (component: T | null): void;
    current: T | null;
};

/**
 * Given an array, it returns a new array that does not contain the item at the given index.
 * @param array - The array to operate on
 * @param index - The index of the element to remove
 */
export declare function removeIndex<T>(array: T[], index: number): T[];

/**
 * Given an array, this function returns a new array where the element at a given index has been replaced.
 * @param array - The array to operate on
 * @param newElement - The element that will be placed in the new array
 * @param index - The index of the element that should be replaced
 */
export declare function replaceElement<T>(array: T[], newElement: T, index: number): T[];

/** Reset controlled usage warnings for testing purposes. */
export declare function resetControlledWarnings(): void;

/**
 * Resets id counter to an (optional) number.
 *
 * @public
 */
export declare function resetIds(counter?: number): void;

/**
 * Reset memoizations.
 */
export declare function resetMemoizations(): void;

/**
 * Generates a function to be attached to a React component, which can be called
 * as a replacement to RAF. In-flight async calls will be auto canceled if the component
 * is unmounting before the async code is executed, preventing bugs where code
 * accesses things within the component after being unmounted.
 */
export declare const safeRequestAnimationFrame: (component: React_2.Component) => (cb: Function) => void;

/**
 * Generates a function to be attached to a React component, which can be called
 * as a replacement to setTimeout. In-flight async calls will be auto canceled if the component
 * is unmounting before the async code is executed, preventing bugs where code
 * accesses things within the component after being unmounted.
 */
export declare const safeSetTimeout: (component: React_2.Component) => (cb: Function, duration: number) => void;

/**
 * {@docCategory Selection}
 */
declare class Selection_2<TItem = IObjectWithKey> implements ISelection<TItem> {
    /** Number of items selected. Do not modify. */
    count: number;
    readonly mode: SelectionMode_2;
    private _getKey;
    private _canSelectItem;
    private _changeEventSuppressionCount;
    private _items;
    private _selectedItems;
    private _selectedIndices;
    private _isAllSelected;
    private _exemptedIndices;
    private _exemptedCount;
    private _keyToIndexMap;
    private _anchoredIndex;
    private _onSelectionChanged;
    private _hasChanged;
    private _unselectableIndices;
    private _unselectableCount;
    private _isModal;
    /**
     * Create a new Selection. If `TItem` does not have a `key` property, you must provide an options
     * object with a `getKey` implementation. Providing options is optional otherwise.
     * (At most one `options` object is accepted.)
     */
    constructor(...options: TItem extends IObjectWithKey ? [] | [ISelectionOptions<TItem>] : [ISelectionOptionsWithRequiredGetKey<TItem>]);
    canSelectItem(item: TItem, index?: number): boolean;
    getKey(item: TItem, index?: number): string;
    setChangeEvents(isEnabled: boolean, suppressChange?: boolean): void;
    isModal(): boolean;
    setModal(isModal: boolean): void;
    /**
     * Selection needs the items, call this method to set them. If the set
     * of items is the same, this will re-evaluate selection and index maps.
     * Otherwise, shouldClear should be set to true, so that selection is
     * cleared.
     */
    setItems(items: TItem[], shouldClear?: boolean): void;
    getItems(): TItem[];
    getSelection(): TItem[];
    getSelectedCount(): number;
    getSelectedIndices(): number[];
    isRangeSelected(fromIndex: number, count: number): boolean;
    isAllSelected(): boolean;
    isKeySelected(key: string): boolean;
    isIndexSelected(index: number): boolean;
    setAllSelected(isAllSelected: boolean): void;
    setKeySelected(key: string, isSelected: boolean, shouldAnchor: boolean): void;
    setIndexSelected(index: number, isSelected: boolean, shouldAnchor: boolean): void;
    selectToKey(key: string, clearSelection?: boolean): void;
    selectToIndex(index: number, clearSelection?: boolean): void;
    toggleAllSelected(): void;
    toggleKeySelected(key: string): void;
    toggleIndexSelected(index: number): void;
    toggleRangeSelected(fromIndex: number, count: number): void;
    private _updateCount;
    private _setAllSelected;
    private _change;
}
export { Selection_2 as Selection }

export declare const SELECTION_CHANGE = "change";

/**
 * {@docCategory Selection}
 */
export declare enum SelectionDirection {
    horizontal = 0,
    vertical = 1
}

/**
 * {@docCategory Selection}
 */
declare enum SelectionMode_2 {
    none = 0,
    single = 1,
    multiple = 2
}
export { SelectionMode_2 as SelectionMode }

/**
 * An array of SELECT tag properties and events.
 *
 * @public
 */
export declare const selectProperties: Record<string, number>;

/**
 * @deprecated Unused as of version 8
 */
export declare function setBaseUrl(baseUrl: string): void;

/**
 * Sets the visibility of focus styling.
 *
 * By default, focus styles (the box surrounding a focused Button, for example) only show up when navigational
 * keypresses occur (through Tab, arrows, PgUp/PgDn, Home and End), and are hidden when mouse interactions occur.
 * This API provides an imperative way to turn them on/off.
 *
 * A use case might be when you have a keypress like ctrl-f6 navigate to a particular region on the page,
 * and want focus to show up.
 *
 * @param enabled - whether to remove or add focus
 * @param target - optional target
 */
export declare function setFocusVisibility(enabled: boolean, target?: Element): void;

/**
 * Sets the language for the page (by adjusting the lang attribute of the html element).
 * @param language - Language to set.
 * @param persistenceType - Where to persist the value. Default is `sessionStorage` if available.
 */
export declare function setLanguage(language: string, persistenceType?: 'localStorage' | 'sessionStorage' | 'none'): void;

/**
 * Sets the language for the page (by adjusting the lang attribute of the html element).
 * @deprecated Use string parameter version.
 * @param language - Language to set.
 * @param avoidPersisting - If true, don't store the value.
 */
export declare function setLanguage(language: string, avoidPersisting?: boolean): void;

/**
 *  Test utility for providing a custom weakmap.
 *
 * @internal
 * */
export declare function setMemoizeWeakMap(weakMap: any): void;
export { setPortalAttribute }

/**
 * Sets the rtl state of the page (by adjusting the dir attribute of the html element.)
 */
export declare function setRTL(isRTL: boolean, persistSetting?: boolean): void;

/**
 * Helper to set ssr mode to simulate no window object returned from getWindow helper.
 *
 * @public
 */
export declare function setSSR(isEnabled: boolean): void;

/**
 * @deprecated Use ISettings.
 */
export declare type Settings = ISettings;

/**
 * @deprecated Use ISettingsFunction.
 */
export declare type SettingsFunction = ISettingsFunction;
export { setVirtualParent }

/**
 * Configures the warning callback. Passing in undefined will reset it to use the default
 * console.warn function.
 *
 * @public
 * @param warningCallback - Callback to override the generated warnings.
 */
export declare function setWarningCallback(warningCallback?: (message: string) => void): void;

/**
 * Compares a to b and b to a.
 *
 * @public
 */
export declare function shallowCompare<TA extends any, TB extends any>(a: TA, b: TB): boolean;

/**
 * Determines if an, or any of its ancestors, sepcificies that it doesn't want focus to wrap
 * @param element - element to start searching from
 * @param noWrapDataAttribute - the no wrap data attribute to match (either)
 * @returns true if focus should wrap, false otherwise
 */
export declare function shouldWrapFocus(element: HTMLElement, noWrapDataAttribute: 'data-no-vertical-wrap' | 'data-no-horizontal-wrap'): boolean;

/**
 * The styled HOC wrapper allows you to create a functional wrapper around a given component which will resolve
 * getStyles functional props, and mix customized props passed in using concatStyleSets.
 *
 * @example
 * ```tsx
 * export const Toggle = styled(
 *   ToggleBase,
 *   props => ({ root: { background: 'red' }})
 * );
 * ```
 * @param Component - The unstyled base component to render, which receives styles.
 * @param baseStyles - The styles which should be curried with the component.
 * @param getProps - A helper which provides default props.
 * @param customizable - An object which defines which props can be customized using the Customizer.
 * @param pure - A boolean indicating if the component should avoid re-rendering when props haven't changed.
 * Note that pure should not be used on components which allow children, or take in complex objects or
 * arrays as props which could mutate on every render.
 */
export declare function styled<TComponentProps extends IPropsWithStyles<TStyleProps, TStyleSet>, TStyleProps, TStyleSet extends IStyleSet<TStyleSet>>(Component: React_2.ComponentClass<TComponentProps> | React_2.FunctionComponent<TComponentProps>, baseStyles: IStyleFunctionOrObject<TStyleProps, TStyleSet>, getProps?: (props: TComponentProps) => Partial<TComponentProps>, customizable?: ICustomizableProps, pure?: boolean): React_2.FunctionComponent<TComponentProps>;

export declare function styled<TComponentProps extends IPropsWithStyles<TStyleProps, TStyleSet> & React_2.RefAttributes<TRef>, TStyleProps, TStyleSet extends IStyleSet<TStyleSet>, TRef = unknown>(Component: React_2.ComponentClass<TComponentProps> | React_2.FunctionComponent<TComponentProps>, baseStyles: IStyleFunctionOrObject<TStyleProps, TStyleSet>, getProps?: (props: TComponentProps) => Partial<TComponentProps>, customizable?: ICustomizableProps, pure?: boolean): React_2.ForwardRefExoticComponent<React_2.PropsWithoutRef<TComponentProps> & React_2.RefAttributes<TRef>>;

export declare type StyleFunction<TStyleProps, TStyleSet> = IStyleFunctionOrObject<TStyleProps, TStyleSet> & {
    /** Cache for all style functions. */
    __cachedInputs__: (IStyleFunctionOrObject<TStyleProps, TStyleSet> | undefined)[];
    /** True if no styles prop or styles from Customizer is passed to wrapped component. */
    __noStyleOverride__: boolean;
};

/**
 * An array of TABLE tag properties and events.
 *
 * @public
 */
export declare const tableProperties: Record<string, number>;

/**
 * An array of TD tag properties and events.
 *
 * @public
 */
export declare const tdProperties: Record<string, number>;

/**
 * An array of TEXTAREA tag properties and events.
 *
 * @public
 */
export declare const textAreaProperties: Record<string, number>;

/**
 * An array of TH tag properties and events.
 *
 * @public
 */
export declare const thProperties: Record<string, number>;

/**
 * Convert the given array to a matrix with columnCount number
 * of columns.
 *
 * @public
 * @param items - The array to convert
 * @param columnCount - The number of columns for the resulting matrix
 * @returns A matrix of items
 */
export declare function toMatrix<T>(items: T[], columnCount: number): T[][];

/**
 * An array of TR tag properties and events.
 *
 * @public
 */
export declare const trProperties: Record<string, number>;

/**
 * Provides a method for convenience to unhoist hoisted methods.
 *
 * @public
 * @param source - The source object upon which methods were hoisted.
 * @param methodNames - An array of method names to unhoist.
 */
export declare function unhoistMethods(source: any, methodNames: string[]): void;

/**
 * Hook to get Customizations settings from Customizations singleton or CustomizerContext.
 * It will trigger component state update on settings change observed.
 */
export declare function useCustomizationSettings(properties: string[], scopeName?: string): ISettings;

/**
 * Initializes the logic which:
 *
 * 1. Subscribes keydown and mousedown events. (It will only do it once per window,
 *    so it's safe to call this method multiple times.)
 * 2. When the user presses directional keyboard keys, adds the 'ms-Fabric--isFocusVisible' classname
 *    to the document body, removes the 'ms-Fabric-isFocusHidden' classname.
 * 3. When the user clicks a mouse button, adds the 'ms-Fabric-isFocusHidden' classname to the
 *    document body, removes the 'ms-Fabric--isFocusVisible' classname.
 *
 * This logic allows components on the page to conditionally render focus treatments based on
 * the existence of global classnames, which simplifies logic overall.
 *
 * @param rootRef - A Ref object. Focus rectangle can be applied on itself and all its children.
 */
export declare function useFocusRects(rootRef?: React_2.RefObject<HTMLElement>): void;

/**
 * Get all values in an object dictionary
 *
 * @param obj - The dictionary to get values for
 */
export declare function values<T>(obj: any): T[];

/**
 * An array of VIDEO tag properties and events.
 *
 * @public
 */
export declare const videoProperties: Record<string, number>;

/**
 * Sends a warning to console, if the api is present.
 *
 * @public
 * @param message - Warning message.
 */
export declare function warn(message: string): void;

/**
 * Warns when props are required if a condition is met.
 *
 * @public
 * @param componentName - The name of the component being used.
 * @param props - The props passed into the component.
 * @param requiredProps - The name of the props that are required when the condition is met.
 * @param conditionalPropName - The name of the prop that the condition is based on.
 * @param condition - Whether the condition is met.
 */
export declare function warnConditionallyRequiredProps<P>(componentName: string, props: P, requiredProps: string[], conditionalPropName: string, condition: boolean): void;

/**
 * Check for and warn on the following error conditions with a form component:
 * - A value prop is provided (indicated it's being used as controlled) without a change handler,
 *    and the component is not read-only
 * - Both the value and defaultValue props are provided
 * - The component is attempting to switch between controlled and uncontrolled
 *
 * The messages mimic the warnings React gives for these error conditions on input elements.
 * The warning will only be displayed once per component ID.
 */
export declare function warnControlledUsage<P>(params: IWarnControlledUsageParams<P>): void;

/**
 * Warns when a deprecated props are being used.
 *
 * @public
 * @param componentName - The name of the component being used.
 * @param props - The props passed into the component.
 * @param deprecationMap - The map of deprecations, where key is the prop name and the value is
 * either null or a replacement prop name.
 */
export declare function warnDeprecations<P>(componentName: string, props: P, deprecationMap: ISettingsMap<P>): void;

/**
 * Warns when two props which are mutually exclusive are both being used.
 *
 * @public
 * @param componentName - The name of the component being used.
 * @param props - The props passed into the component.
 * @param exclusiveMap - A map where the key is a parameter, and the value is the other parameter.
 */
export declare function warnMutuallyExclusive<P>(componentName: string, props: P, exclusiveMap: ISettingsMap<P>): void;

export { }
