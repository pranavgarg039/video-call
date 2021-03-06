// Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fluentui-assets-license
define(["require", "exports", "@fluentui/style-utilities"], function (require, exports, style_utilities_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.initializeIcons = void 0;
    function initializeIcons(baseUrl, options) {
        if (baseUrl === void 0) { baseUrl = ''; }
        var subset = {
            style: {
                MozOsxFontSmoothing: 'grayscale',
                WebkitFontSmoothing: 'antialiased',
                fontStyle: 'normal',
                fontWeight: 'normal',
                speak: 'none',
            },
            fontFace: {
                fontFamily: "\"FabricMDL2Icons\"",
                src: "url('" + baseUrl + "fabric-icons-a13498cf.woff') format('woff')",
            },
            icons: {
                GlobalNavButton: '\uE700',
                ChevronDown: '\uE70D',
                ChevronUp: '\uE70E',
                Edit: '\uE70F',
                Add: '\uE710',
                Cancel: '\uE711',
                More: '\uE712',
                Settings: '\uE713',
                Mail: '\uE715',
                Filter: '\uE71C',
                Search: '\uE721',
                Share: '\uE72D',
                BlockedSite: '\uE72F',
                FavoriteStar: '\uE734',
                FavoriteStarFill: '\uE735',
                CheckMark: '\uE73E',
                Delete: '\uE74D',
                ChevronLeft: '\uE76B',
                ChevronRight: '\uE76C',
                Calendar: '\uE787',
                Megaphone: '\uE789',
                Undo: '\uE7A7',
                Flag: '\uE7C1',
                Page: '\uE7C3',
                Pinned: '\uE840',
                View: '\uE890',
                Clear: '\uE894',
                Download: '\uE896',
                Upload: '\uE898',
                Folder: '\uE8B7',
                Sort: '\uE8CB',
                AlignRight: '\uE8E2',
                AlignLeft: '\uE8E4',
                Tag: '\uE8EC',
                AddFriend: '\uE8FA',
                Info: '\uE946',
                SortLines: '\uE9D0',
                List: '\uEA37',
                CircleRing: '\uEA3A',
                Heart: '\uEB51',
                HeartFill: '\uEB52',
                Tiles: '\uECA5',
                Embed: '\uECCE',
                Glimmer: '\uECF4',
                Ascending: '\uEDC0',
                Descending: '\uEDC1',
                SortUp: '\uEE68',
                SortDown: '\uEE69',
                SyncToPC: '\uEE6E',
                LargeGrid: '\uEECB',
                SkypeCheck: '\uEF80',
                SkypeClock: '\uEF81',
                SkypeMinus: '\uEF82',
                ClearFilter: '\uEF8F',
                Flow: '\uEF90',
                StatusCircleCheckmark: '\uF13E',
                MoreVertical: '\uF2BC',
            },
        };
        style_utilities_1.registerIcons(subset, options);
    }
    exports.initializeIcons = initializeIcons;
});
//# sourceMappingURL=fabric-icons.js.map