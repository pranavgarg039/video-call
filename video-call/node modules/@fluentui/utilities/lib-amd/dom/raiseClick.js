define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.raiseClick = void 0;
    /** Raises a click event. */
    function raiseClick(target) {
        var event = createNewEvent('MouseEvents');
        event.initEvent('click', true, true);
        target.dispatchEvent(event);
    }
    exports.raiseClick = raiseClick;
    function createNewEvent(eventName) {
        var event;
        if (typeof Event === 'function') {
            // Chrome, Opera, Firefox
            event = new Event(eventName);
        }
        else {
            // IE
            event = document.createEvent('Event');
            event.initEvent(eventName, true, true);
        }
        return event;
    }
});
//# sourceMappingURL=raiseClick.js.map