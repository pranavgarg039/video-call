define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.omit = exports.values = exports.mapEnumByName = exports.filteredAssign = exports.assign = exports.shallowCompare = void 0;
    /**
     * Compares a to b and b to a.
     *
     * @public
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function shallowCompare(a, b) {
        for (var propName in a) {
            if (a.hasOwnProperty(propName)) {
                if (!b.hasOwnProperty(propName) || b[propName] !== a[propName]) {
                    return false;
                }
            }
        }
        for (var propName in b) {
            if (b.hasOwnProperty(propName)) {
                if (!a.hasOwnProperty(propName)) {
                    return false;
                }
            }
        }
        return true;
    }
    exports.shallowCompare = shallowCompare;
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function assign(target) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return filteredAssign.apply(this, [null, target].concat(args));
    }
    exports.assign = assign;
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function filteredAssign(isAllowed, target) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        target = target || {};
        for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
            var sourceObject = args_1[_a];
            if (sourceObject) {
                for (var propName in sourceObject) {
                    if (sourceObject.hasOwnProperty(propName) && (!isAllowed || isAllowed(propName))) {
                        target[propName] = sourceObject[propName];
                    }
                }
            }
        }
        return target;
    }
    exports.filteredAssign = filteredAssign;
    /**
     * Takes an enum and iterates over each value of the enum (as a string), running the callback on each,
     * returning a mapped array.
     * @param theEnum - Enum to iterate over
     * @param callback - The first parameter the name of the entry, and the second parameter is the value
     * of that entry, which is the value you'd normally use when using the enum (usually a number).
     */
    function mapEnumByName(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    theEnum, callback) {
        // map<any> to satisfy compiler since it doesn't realize we strip out undefineds in the .filter() call
        return Object.keys(theEnum)
            .map(function (p) {
            // map on each property name as a string
            if (String(Number(p)) !== p) {
                // if the property is not just a number (because enums in TypeScript will map both ways)
                return callback(p, theEnum[p]);
            }
            return undefined;
        })
            .filter(function (v) { return !!v; }); // only return elements with values
    }
    exports.mapEnumByName = mapEnumByName;
    /**
     * Get all values in an object dictionary
     *
     * @param obj - The dictionary to get values for
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function values(obj) {
        return Object.keys(obj).reduce(function (arr, key) {
            arr.push(obj[key]);
            return arr;
        }, []);
    }
    exports.values = values;
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function omit(obj, exclusions) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var result = {};
        for (var key in obj) {
            if (exclusions.indexOf(key) === -1 && obj.hasOwnProperty(key)) {
                result[key] = obj[key];
            }
        }
        return result;
    }
    exports.omit = omit;
});
//# sourceMappingURL=object.js.map