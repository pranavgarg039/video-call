define(["require", "exports", "./StyleOptionsState", "./Stylesheet", "./styleToClassName"], function (require, exports, StyleOptionsState_1, Stylesheet_1, styleToClassName_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.keyframes = void 0;
    /**
     * Registers keyframe definitions.
     *
     * @public
     */
    function keyframes(timeline) {
        var stylesheet = Stylesheet_1.Stylesheet.getInstance();
        var name = stylesheet.getClassName();
        var rulesArray = [];
        for (var prop in timeline) {
            if (timeline.hasOwnProperty(prop)) {
                rulesArray.push(prop, '{', styleToClassName_1.serializeRuleEntries(StyleOptionsState_1.getStyleOptions(), timeline[prop]), '}');
            }
        }
        var rules = rulesArray.join('');
        stylesheet.insertRule("@keyframes " + name + "{" + rules + "}", true);
        stylesheet.cacheClassName(name, rules, [], ['keyframes', rules]);
        return name;
    }
    exports.keyframes = keyframes;
});
//# sourceMappingURL=keyframes.js.map