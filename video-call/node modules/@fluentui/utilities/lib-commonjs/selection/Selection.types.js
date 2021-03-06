"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectionDirection = exports.SelectionMode = exports.SELECTION_CHANGE = void 0;
exports.SELECTION_CHANGE = 'change';
/**
 * {@docCategory Selection}
 */
var SelectionMode;
(function (SelectionMode) {
    SelectionMode[SelectionMode["none"] = 0] = "none";
    SelectionMode[SelectionMode["single"] = 1] = "single";
    SelectionMode[SelectionMode["multiple"] = 2] = "multiple";
})(SelectionMode = exports.SelectionMode || (exports.SelectionMode = {}));
/**
 * {@docCategory Selection}
 */
var SelectionDirection;
(function (SelectionDirection) {
    SelectionDirection[SelectionDirection["horizontal"] = 0] = "horizontal";
    SelectionDirection[SelectionDirection["vertical"] = 1] = "vertical";
})(SelectionDirection = exports.SelectionDirection || (exports.SelectionDirection = {}));
//# sourceMappingURL=Selection.types.js.map