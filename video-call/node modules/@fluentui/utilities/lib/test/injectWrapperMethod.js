/**
 * Injects a function call prior to running a method for a component
 * rendered using enzyme deep rendering.
 * @param wrapper - The enzyme deep rendering wrapper object to modify
 * @param methodName - The name of the method to modify on the wrapper
 * @param fn - The function to run prior to the call of the original method
 */
export function injectWrapperMethod(wrapper, methodName, fn) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var originalMethod = wrapper.instance()[methodName];
    if (typeof originalMethod !== 'function') {
        throw new Error("Tried to override the method " + methodName + " on a ReactWrapper that does not have that function");
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    wrapper.instance()[methodName] = function (prevProps) {
        fn();
        originalMethod.call(this, prevProps);
    };
}
//# sourceMappingURL=injectWrapperMethod.js.map