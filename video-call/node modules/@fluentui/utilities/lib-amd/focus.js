define(["require", "exports", "./dom/elementContainsAttribute", "./dom/elementContains", "./dom/getParent", "./dom/getWindow", "./dom/getDocument"], function (require, exports, elementContainsAttribute_1, elementContains_1, getParent_1, getWindow_1, getDocument_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getElementIndexPath = exports.getFocusableByIndexPath = exports.focusAsync = exports.shouldWrapFocus = exports.doesElementContainFocus = exports.isElementFocusSubZone = exports.isElementFocusZone = exports.isElementTabbable = exports.isElementVisible = exports.getNextElement = exports.getPreviousElement = exports.focusFirstChild = exports.getLastTabbable = exports.getFirstTabbable = exports.getLastFocusable = exports.getFirstFocusable = void 0;
    var IS_FOCUSABLE_ATTRIBUTE = 'data-is-focusable';
    var IS_VISIBLE_ATTRIBUTE = 'data-is-visible';
    var FOCUSZONE_ID_ATTRIBUTE = 'data-focuszone-id';
    var FOCUSZONE_SUB_ATTRIBUTE = 'data-is-sub-focuszone';
    /**
     * Gets the first focusable element.
     *
     * @public
     */
    function getFirstFocusable(rootElement, currentElement, includeElementsInFocusZones) {
        return getNextElement(rootElement, currentElement, true /*checkNode*/, false /*suppressParentTraversal*/, false /*suppressChildTraversal*/, includeElementsInFocusZones);
    }
    exports.getFirstFocusable = getFirstFocusable;
    /**
     * Gets the last focusable element.
     *
     * @public
     */
    function getLastFocusable(rootElement, currentElement, includeElementsInFocusZones) {
        return getPreviousElement(rootElement, currentElement, true /*checkNode*/, false /*suppressParentTraversal*/, true /*traverseChildren*/, includeElementsInFocusZones);
    }
    exports.getLastFocusable = getLastFocusable;
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
    function getFirstTabbable(rootElement, currentElement, includeElementsInFocusZones, checkNode) {
        if (checkNode === void 0) { checkNode = true; }
        return getNextElement(rootElement, currentElement, checkNode, false /*suppressParentTraversal*/, false /*suppressChildTraversal*/, includeElementsInFocusZones, false /*allowFocusRoot*/, true /*tabbable*/);
    }
    exports.getFirstTabbable = getFirstTabbable;
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
    function getLastTabbable(rootElement, currentElement, includeElementsInFocusZones, checkNode) {
        if (checkNode === void 0) { checkNode = true; }
        return getPreviousElement(rootElement, currentElement, checkNode, false /*suppressParentTraversal*/, true /*traverseChildren*/, includeElementsInFocusZones, false /*allowFocusRoot*/, true /*tabbable*/);
    }
    exports.getLastTabbable = getLastTabbable;
    /**
     * Attempts to focus the first focusable element that is a child or child's child of the rootElement.
     *
     * @public
     * @param rootElement - Element to start the search for a focusable child.
     * @returns True if focus was set, false if it was not.
     */
    function focusFirstChild(rootElement) {
        var element = getNextElement(rootElement, rootElement, true, false, false, true);
        if (element) {
            focusAsync(element);
            return true;
        }
        return false;
    }
    exports.focusFirstChild = focusFirstChild;
    /**
     * Traverse to find the previous element.
     * If tabbable is true, the element must have tabIndex != -1.
     *
     * @public
     */
    function getPreviousElement(rootElement, currentElement, checkNode, suppressParentTraversal, traverseChildren, includeElementsInFocusZones, allowFocusRoot, tabbable) {
        if (!currentElement || (!allowFocusRoot && currentElement === rootElement)) {
            return null;
        }
        var isCurrentElementVisible = isElementVisible(currentElement);
        // Check its children.
        if (traverseChildren &&
            isCurrentElementVisible &&
            (includeElementsInFocusZones || !(isElementFocusZone(currentElement) || isElementFocusSubZone(currentElement)))) {
            var childMatch = getPreviousElement(rootElement, currentElement.lastElementChild, true, true, true, includeElementsInFocusZones, allowFocusRoot, tabbable);
            if (childMatch) {
                if ((tabbable && isElementTabbable(childMatch, true)) || !tabbable) {
                    return childMatch;
                }
                var childMatchSiblingMatch = getPreviousElement(rootElement, childMatch.previousElementSibling, true, true, true, includeElementsInFocusZones, allowFocusRoot, tabbable);
                if (childMatchSiblingMatch) {
                    return childMatchSiblingMatch;
                }
                var childMatchParent = childMatch.parentElement;
                // At this point if we have not found any potential matches
                // start looking at the rest of the subtree under the currentParent.
                // NOTE: We do not want to recurse here because doing so could
                // cause elements to get skipped.
                while (childMatchParent && childMatchParent !== currentElement) {
                    var childMatchParentMatch = getPreviousElement(rootElement, childMatchParent.previousElementSibling, true, true, true, includeElementsInFocusZones, allowFocusRoot, tabbable);
                    if (childMatchParentMatch) {
                        return childMatchParentMatch;
                    }
                    childMatchParent = childMatchParent.parentElement;
                }
            }
        }
        // Check the current node, if it's not the first traversal.
        if (checkNode && isCurrentElementVisible && isElementTabbable(currentElement, tabbable)) {
            return currentElement;
        }
        // Check its previous sibling.
        var siblingMatch = getPreviousElement(rootElement, currentElement.previousElementSibling, true, true, true, includeElementsInFocusZones, allowFocusRoot, tabbable);
        if (siblingMatch) {
            return siblingMatch;
        }
        // Check its parent.
        if (!suppressParentTraversal) {
            return getPreviousElement(rootElement, currentElement.parentElement, true, false, false, includeElementsInFocusZones, allowFocusRoot, tabbable);
        }
        return null;
    }
    exports.getPreviousElement = getPreviousElement;
    /**
     * Traverse to find the next focusable element.
     * If tabbable is true, the element must have tabIndex != -1.
     *
     * @public
     * @param checkNode - Include currentElement in search when true.
     */
    function getNextElement(rootElement, currentElement, checkNode, suppressParentTraversal, suppressChildTraversal, includeElementsInFocusZones, allowFocusRoot, tabbable) {
        if (!currentElement || (currentElement === rootElement && suppressChildTraversal && !allowFocusRoot)) {
            return null;
        }
        var isCurrentElementVisible = isElementVisible(currentElement);
        // Check the current node, if it's not the first traversal.
        if (checkNode && isCurrentElementVisible && isElementTabbable(currentElement, tabbable)) {
            return currentElement;
        }
        // Check its children.
        if (!suppressChildTraversal &&
            isCurrentElementVisible &&
            (includeElementsInFocusZones || !(isElementFocusZone(currentElement) || isElementFocusSubZone(currentElement)))) {
            var childMatch = getNextElement(rootElement, currentElement.firstElementChild, true, true, false, includeElementsInFocusZones, allowFocusRoot, tabbable);
            if (childMatch) {
                return childMatch;
            }
        }
        if (currentElement === rootElement) {
            return null;
        }
        // Check its sibling.
        var siblingMatch = getNextElement(rootElement, currentElement.nextElementSibling, true, true, false, includeElementsInFocusZones, allowFocusRoot, tabbable);
        if (siblingMatch) {
            return siblingMatch;
        }
        if (!suppressParentTraversal) {
            return getNextElement(rootElement, currentElement.parentElement, false, false, true, includeElementsInFocusZones, allowFocusRoot, tabbable);
        }
        return null;
    }
    exports.getNextElement = getNextElement;
    /**
     * Determines if an element is visible.
     *
     * @public
     */
    function isElementVisible(element) {
        // If the element is not valid, return false.
        if (!element || !element.getAttribute) {
            return false;
        }
        var visibilityAttribute = element.getAttribute(IS_VISIBLE_ATTRIBUTE);
        // If the element is explicitly marked with the visibility attribute, return that value as boolean.
        if (visibilityAttribute !== null && visibilityAttribute !== undefined) {
            return visibilityAttribute === 'true';
        }
        // Fallback to other methods of determining actual visibility.
        return (element.offsetHeight !== 0 ||
            element.offsetParent !== null ||
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            element.isVisible === true); // used as a workaround for testing.
    }
    exports.isElementVisible = isElementVisible;
    /**
     * Determines if an element can receive focus programmatically or via a mouse click.
     * If checkTabIndex is true, additionally checks to ensure the element can be focused with the tab key,
     * meaning tabIndex != -1.
     *
     * @public
     */
    function isElementTabbable(element, checkTabIndex) {
        // If this element is null or is disabled, it is not considered tabbable.
        if (!element || element.disabled) {
            return false;
        }
        var tabIndex = 0;
        var tabIndexAttributeValue = null;
        if (element && element.getAttribute) {
            tabIndexAttributeValue = element.getAttribute('tabIndex');
            if (tabIndexAttributeValue) {
                tabIndex = parseInt(tabIndexAttributeValue, 10);
            }
        }
        var isFocusableAttribute = element.getAttribute ? element.getAttribute(IS_FOCUSABLE_ATTRIBUTE) : null;
        var isTabIndexSet = tabIndexAttributeValue !== null && tabIndex >= 0;
        var result = !!element &&
            isFocusableAttribute !== 'false' &&
            (element.tagName === 'A' ||
                element.tagName === 'BUTTON' ||
                element.tagName === 'INPUT' ||
                element.tagName === 'TEXTAREA' ||
                element.tagName === 'SELECT' ||
                isFocusableAttribute === 'true' ||
                isTabIndexSet);
        return checkTabIndex ? tabIndex !== -1 && result : result;
    }
    exports.isElementTabbable = isElementTabbable;
    /**
     * Determines if a given element is a focus zone.
     *
     * @public
     */
    function isElementFocusZone(element) {
        return !!(element && element.getAttribute && !!element.getAttribute(FOCUSZONE_ID_ATTRIBUTE));
    }
    exports.isElementFocusZone = isElementFocusZone;
    /**
     * Determines if a given element is a focus sub zone.
     *
     * @public
     */
    function isElementFocusSubZone(element) {
        return !!(element && element.getAttribute && element.getAttribute(FOCUSZONE_SUB_ATTRIBUTE) === 'true');
    }
    exports.isElementFocusSubZone = isElementFocusSubZone;
    /**
     * Determines if an element, or any of its children, contain focus.
     *
     * @public
     */
    function doesElementContainFocus(element) {
        var document = getDocument_1.getDocument(element);
        var currentActiveElement = document && document.activeElement;
        if (currentActiveElement && elementContains_1.elementContains(element, currentActiveElement)) {
            return true;
        }
        return false;
    }
    exports.doesElementContainFocus = doesElementContainFocus;
    /**
     * Determines if an, or any of its ancestors, sepcificies that it doesn't want focus to wrap
     * @param element - element to start searching from
     * @param noWrapDataAttribute - the no wrap data attribute to match (either)
     * @returns true if focus should wrap, false otherwise
     */
    function shouldWrapFocus(element, noWrapDataAttribute) {
        return elementContainsAttribute_1.elementContainsAttribute(element, noWrapDataAttribute) === 'true' ? false : true;
    }
    exports.shouldWrapFocus = shouldWrapFocus;
    var targetToFocusOnNextRepaint = undefined;
    /**
     * Sets focus to an element asynchronously. The focus will be set at the next browser repaint,
     * meaning it won't cause any extra recalculations. If more than one focusAsync is called during one frame,
     * only the latest called focusAsync element will actually be focused
     * @param element - The element to focus
     */
    function focusAsync(element) {
        if (element) {
            // An element was already queued to be focused, so replace that one with the new element
            if (targetToFocusOnNextRepaint) {
                targetToFocusOnNextRepaint = element;
                return;
            }
            targetToFocusOnNextRepaint = element;
            var win = getWindow_1.getWindow(element);
            if (win) {
                // element.focus() is a no-op if the element is no longer in the DOM, meaning this is always safe
                win.requestAnimationFrame(function () {
                    targetToFocusOnNextRepaint && targetToFocusOnNextRepaint.focus();
                    // We are done focusing for this frame, so reset the queued focus element
                    targetToFocusOnNextRepaint = undefined;
                });
            }
        }
    }
    exports.focusAsync = focusAsync;
    /**
     * Finds the closest focusable element via an index path from a parent. See
     * `getElementIndexPath` for getting an index path from an element to a child.
     */
    function getFocusableByIndexPath(parent, path) {
        var element = parent;
        for (var _i = 0, path_1 = path; _i < path_1.length; _i++) {
            var index = path_1[_i];
            var nextChild = element.children[Math.min(index, element.children.length - 1)];
            if (!nextChild) {
                break;
            }
            element = nextChild;
        }
        element =
            isElementTabbable(element) && isElementVisible(element)
                ? element
                : getNextElement(parent, element, true) || getPreviousElement(parent, element);
        return element;
    }
    exports.getFocusableByIndexPath = getFocusableByIndexPath;
    /**
     * Finds the element index path from a parent element to a child element.
     *
     * If you had this node structure: "A has children [B, C] and C has child D",
     * the index path from A to D would be [1, 0], or `parent.chidren[1].children[0]`.
     */
    function getElementIndexPath(fromElement, toElement) {
        var path = [];
        while (toElement && fromElement && toElement !== fromElement) {
            var parent_1 = getParent_1.getParent(toElement, true);
            if (parent_1 === null) {
                return [];
            }
            path.unshift(Array.prototype.indexOf.call(parent_1.children, toElement));
            toElement = parent_1;
        }
        return path;
    }
    exports.getElementIndexPath = getElementIndexPath;
});
//# sourceMappingURL=focus.js.map