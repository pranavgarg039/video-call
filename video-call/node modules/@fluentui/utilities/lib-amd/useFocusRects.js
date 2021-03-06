define(["require", "exports", "react", "./dom/getWindow", "./keyboard", "./setFocusVisibility"], function (require, exports, React, getWindow_1, keyboard_1, setFocusVisibility_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FocusRects = exports.useFocusRects = void 0;
    /**
     * Counter for mounted component that uses focus rectangle.
     * We want to cleanup the listners before last component that uses focus rectangle unmounts.
     */
    var mountCounters = new WeakMap();
    function setMountCounters(key, delta) {
        var newValue;
        var currValue = mountCounters.get(key);
        if (currValue) {
            newValue = currValue + delta;
        }
        else {
            newValue = 1;
        }
        mountCounters.set(key, newValue);
        return newValue;
    }
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
    function useFocusRects(rootRef) {
        React.useEffect(function () {
            var _a;
            var win = getWindow_1.getWindow(rootRef === null || rootRef === void 0 ? void 0 : rootRef.current);
            if (!win || ((_a = win.FabricConfig) === null || _a === void 0 ? void 0 : _a.disableFocusRects) === true) {
                return undefined;
            }
            var count = setMountCounters(win, 1);
            if (count <= 1) {
                win.addEventListener('mousedown', _onMouseDown, true);
                win.addEventListener('pointerdown', _onPointerDown, true);
                win.addEventListener('keydown', _onKeyDown, true);
            }
            return function () {
                var _a;
                if (!win || ((_a = win.FabricConfig) === null || _a === void 0 ? void 0 : _a.disableFocusRects) === true) {
                    return;
                }
                count = setMountCounters(win, -1);
                if (count === 0) {
                    win.removeEventListener('mousedown', _onMouseDown, true);
                    win.removeEventListener('pointerdown', _onPointerDown, true);
                    win.removeEventListener('keydown', _onKeyDown, true);
                }
            };
        }, [rootRef]);
    }
    exports.useFocusRects = useFocusRects;
    /**
     * Function Component wrapper which enables calling `useFocusRects` hook.
     * Renders nothing.
     */
    var FocusRects = function (props) {
        useFocusRects(props.rootRef);
        return null;
    };
    exports.FocusRects = FocusRects;
    function _onMouseDown(ev) {
        setFocusVisibility_1.setFocusVisibility(false, ev.target);
    }
    function _onPointerDown(ev) {
        if (ev.pointerType !== 'mouse') {
            setFocusVisibility_1.setFocusVisibility(false, ev.target);
        }
    }
    function _onKeyDown(ev) {
        // eslint-disable-next-line deprecation/deprecation
        if (keyboard_1.isDirectionalKeyCode(ev.which)) {
            setFocusVisibility_1.setFocusVisibility(true, ev.target);
        }
    }
});
//# sourceMappingURL=useFocusRects.js.map