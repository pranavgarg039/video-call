define(["require", "exports", "@fluentui/merge-styles"], function (require, exports, merge_styles_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AnimationStyles = exports.AnimationVariables = void 0;
    /* Register the keyframes */
    var EASING_FUNCTION_1 = 'cubic-bezier(.1,.9,.2,1)';
    var EASING_FUNCTION_2 = 'cubic-bezier(.1,.25,.75,.9)';
    var DURATION_1 = '0.167s';
    var DURATION_2 = '0.267s';
    var DURATION_3 = '0.367s';
    var DURATION_4 = '0.467s';
    var FADE_IN = merge_styles_1.keyframes({
        from: { opacity: 0 },
        to: { opacity: 1 },
    });
    var FADE_OUT = merge_styles_1.keyframes({
        from: { opacity: 1 },
        to: { opacity: 0, visibility: 'hidden' },
    });
    var SLIDE_RIGHT_IN10 = _createSlideInX(-10);
    var SLIDE_RIGHT_IN20 = _createSlideInX(-20);
    var SLIDE_RIGHT_IN40 = _createSlideInX(-40);
    var SLIDE_RIGHT_IN400 = _createSlideInX(-400);
    var SLIDE_LEFT_IN10 = _createSlideInX(10);
    var SLIDE_LEFT_IN20 = _createSlideInX(20);
    var SLIDE_LEFT_IN40 = _createSlideInX(40);
    var SLIDE_LEFT_IN400 = _createSlideInX(400);
    var SLIDE_UP_IN10 = _createSlideInY(10);
    var SLIDE_UP_IN20 = _createSlideInY(20);
    var SLIDE_DOWN_IN10 = _createSlideInY(-10);
    var SLIDE_DOWN_IN20 = _createSlideInY(-20);
    var SLIDE_RIGHT_OUT10 = _createSlideOutX(10);
    var SLIDE_RIGHT_OUT20 = _createSlideOutX(20);
    var SLIDE_RIGHT_OUT40 = _createSlideOutX(40);
    var SLIDE_RIGHT_OUT400 = _createSlideOutX(400);
    var SLIDE_LEFT_OUT10 = _createSlideOutX(-10);
    var SLIDE_LEFT_OUT20 = _createSlideOutX(-20);
    var SLIDE_LEFT_OUT40 = _createSlideOutX(-40);
    var SLIDE_LEFT_OUT400 = _createSlideOutX(-400);
    var SLIDE_UP_OUT10 = _createSlideOutY(-10);
    var SLIDE_UP_OUT20 = _createSlideOutY(-20);
    var SLIDE_DOWN_OUT10 = _createSlideOutY(10);
    var SLIDE_DOWN_OUT20 = _createSlideOutY(20);
    var SCALE_UP100 = merge_styles_1.keyframes({
        from: { transform: 'scale3d(.98,.98,1)' },
        to: { transform: 'scale3d(1,1,1)' },
    });
    var SCALE_DOWN98 = merge_styles_1.keyframes({
        from: { transform: 'scale3d(1,1,1)' },
        to: { transform: 'scale3d(.98,.98,1)' },
    });
    var SCALE_DOWN100 = merge_styles_1.keyframes({
        from: { transform: 'scale3d(1.03,1.03,1)' },
        to: { transform: 'scale3d(1,1,1)' },
    });
    var SCALE_UP103 = merge_styles_1.keyframes({
        from: { transform: 'scale3d(1,1,1)' },
        to: { transform: 'scale3d(1.03,1.03,1)' },
    });
    var ROTATE90 = merge_styles_1.keyframes({
        from: { transform: 'rotateZ(0deg)' },
        to: { transform: 'rotateZ(90deg)' },
    });
    var ROTATE_N90 = merge_styles_1.keyframes({
        from: { transform: 'rotateZ(0deg)' },
        to: { transform: 'rotateZ(-90deg)' },
    });
    /**
     * Exporting raw duraction values and easing functions to be used in custom animations
     */
    exports.AnimationVariables = {
        easeFunction1: EASING_FUNCTION_1,
        easeFunction2: EASING_FUNCTION_2,
        durationValue1: DURATION_1,
        durationValue2: DURATION_2,
        durationValue3: DURATION_3,
        durationValue4: DURATION_4,
    };
    /**
     * All Fabric standard animations, exposed as json objects referencing predefined
     * keyframes. These objects can be mixed in with other class definitions.
     */
    exports.AnimationStyles = {
        slideRightIn10: _createAnimation(FADE_IN + "," + SLIDE_RIGHT_IN10, DURATION_3, EASING_FUNCTION_1),
        slideRightIn20: _createAnimation(FADE_IN + "," + SLIDE_RIGHT_IN20, DURATION_3, EASING_FUNCTION_1),
        slideRightIn40: _createAnimation(FADE_IN + "," + SLIDE_RIGHT_IN40, DURATION_3, EASING_FUNCTION_1),
        slideRightIn400: _createAnimation(FADE_IN + "," + SLIDE_RIGHT_IN400, DURATION_3, EASING_FUNCTION_1),
        slideLeftIn10: _createAnimation(FADE_IN + "," + SLIDE_LEFT_IN10, DURATION_3, EASING_FUNCTION_1),
        slideLeftIn20: _createAnimation(FADE_IN + "," + SLIDE_LEFT_IN20, DURATION_3, EASING_FUNCTION_1),
        slideLeftIn40: _createAnimation(FADE_IN + "," + SLIDE_LEFT_IN40, DURATION_3, EASING_FUNCTION_1),
        slideLeftIn400: _createAnimation(FADE_IN + "," + SLIDE_LEFT_IN400, DURATION_3, EASING_FUNCTION_1),
        slideUpIn10: _createAnimation(FADE_IN + "," + SLIDE_UP_IN10, DURATION_3, EASING_FUNCTION_1),
        slideUpIn20: _createAnimation(FADE_IN + "," + SLIDE_UP_IN20, DURATION_3, EASING_FUNCTION_1),
        slideDownIn10: _createAnimation(FADE_IN + "," + SLIDE_DOWN_IN10, DURATION_3, EASING_FUNCTION_1),
        slideDownIn20: _createAnimation(FADE_IN + "," + SLIDE_DOWN_IN20, DURATION_3, EASING_FUNCTION_1),
        slideRightOut10: _createAnimation(FADE_OUT + "," + SLIDE_RIGHT_OUT10, DURATION_3, EASING_FUNCTION_1),
        slideRightOut20: _createAnimation(FADE_OUT + "," + SLIDE_RIGHT_OUT20, DURATION_3, EASING_FUNCTION_1),
        slideRightOut40: _createAnimation(FADE_OUT + "," + SLIDE_RIGHT_OUT40, DURATION_3, EASING_FUNCTION_1),
        slideRightOut400: _createAnimation(FADE_OUT + "," + SLIDE_RIGHT_OUT400, DURATION_3, EASING_FUNCTION_1),
        slideLeftOut10: _createAnimation(FADE_OUT + "," + SLIDE_LEFT_OUT10, DURATION_3, EASING_FUNCTION_1),
        slideLeftOut20: _createAnimation(FADE_OUT + "," + SLIDE_LEFT_OUT20, DURATION_3, EASING_FUNCTION_1),
        slideLeftOut40: _createAnimation(FADE_OUT + "," + SLIDE_LEFT_OUT40, DURATION_3, EASING_FUNCTION_1),
        slideLeftOut400: _createAnimation(FADE_OUT + "," + SLIDE_LEFT_OUT400, DURATION_3, EASING_FUNCTION_1),
        slideUpOut10: _createAnimation(FADE_OUT + "," + SLIDE_UP_OUT10, DURATION_3, EASING_FUNCTION_1),
        slideUpOut20: _createAnimation(FADE_OUT + "," + SLIDE_UP_OUT20, DURATION_3, EASING_FUNCTION_1),
        slideDownOut10: _createAnimation(FADE_OUT + "," + SLIDE_DOWN_OUT10, DURATION_3, EASING_FUNCTION_1),
        slideDownOut20: _createAnimation(FADE_OUT + "," + SLIDE_DOWN_OUT20, DURATION_3, EASING_FUNCTION_1),
        scaleUpIn100: _createAnimation(FADE_IN + "," + SCALE_UP100, DURATION_3, EASING_FUNCTION_1),
        scaleDownIn100: _createAnimation(FADE_IN + "," + SCALE_DOWN100, DURATION_3, EASING_FUNCTION_1),
        scaleUpOut103: _createAnimation(FADE_OUT + "," + SCALE_UP103, DURATION_1, EASING_FUNCTION_2),
        scaleDownOut98: _createAnimation(FADE_OUT + "," + SCALE_DOWN98, DURATION_1, EASING_FUNCTION_2),
        fadeIn100: _createAnimation(FADE_IN, DURATION_1, EASING_FUNCTION_2),
        fadeIn200: _createAnimation(FADE_IN, DURATION_2, EASING_FUNCTION_2),
        fadeIn400: _createAnimation(FADE_IN, DURATION_3, EASING_FUNCTION_2),
        fadeIn500: _createAnimation(FADE_IN, DURATION_4, EASING_FUNCTION_2),
        fadeOut100: _createAnimation(FADE_OUT, DURATION_1, EASING_FUNCTION_2),
        fadeOut200: _createAnimation(FADE_OUT, DURATION_2, EASING_FUNCTION_2),
        fadeOut400: _createAnimation(FADE_OUT, DURATION_3, EASING_FUNCTION_2),
        fadeOut500: _createAnimation(FADE_OUT, DURATION_4, EASING_FUNCTION_2),
        rotate90deg: _createAnimation(ROTATE90, '0.1s', EASING_FUNCTION_2),
        rotateN90deg: _createAnimation(ROTATE_N90, '0.1s', EASING_FUNCTION_2),
    };
    function _createAnimation(animationName, animationDuration, animationTimingFunction) {
        return {
            animationName: animationName,
            animationDuration: animationDuration,
            animationTimingFunction: animationTimingFunction,
            animationFillMode: 'both',
        };
    }
    function _createSlideInX(fromX) {
        return merge_styles_1.keyframes({
            from: { transform: "translate3d(" + fromX + "px,0,0)", pointerEvents: 'none' },
            to: { transform: "translate3d(0,0,0)", pointerEvents: 'auto' },
        });
    }
    function _createSlideInY(fromY) {
        return merge_styles_1.keyframes({
            from: { transform: "translate3d(0," + fromY + "px,0)", pointerEvents: 'none' },
            to: { transform: "translate3d(0,0,0)", pointerEvents: 'auto' },
        });
    }
    function _createSlideOutX(toX) {
        return merge_styles_1.keyframes({
            from: { transform: "translate3d(0,0,0)" },
            to: { transform: "translate3d(" + toX + "px,0,0)" },
        });
    }
    function _createSlideOutY(toY) {
        return merge_styles_1.keyframes({
            from: { transform: "translate3d(0,0,0)" },
            to: { transform: "translate3d(0," + toY + "px,0)" },
        });
    }
});
//# sourceMappingURL=AnimationStyles.js.map