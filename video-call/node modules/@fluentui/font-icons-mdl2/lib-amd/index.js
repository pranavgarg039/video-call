define(["require", "exports", "./fabric-icons", "./fabric-icons-0", "./fabric-icons-1", "./fabric-icons-2", "./fabric-icons-3", "./fabric-icons-4", "./fabric-icons-5", "./fabric-icons-6", "./fabric-icons-7", "./fabric-icons-8", "./fabric-icons-9", "./fabric-icons-10", "./fabric-icons-11", "./fabric-icons-12", "./fabric-icons-13", "./fabric-icons-14", "./fabric-icons-15", "./fabric-icons-16", "./fabric-icons-17", "./iconAliases", "./version"], function (require, exports, fabric_icons_1, fabric_icons_0_1, fabric_icons_1_1, fabric_icons_2_1, fabric_icons_3_1, fabric_icons_4_1, fabric_icons_5_1, fabric_icons_6_1, fabric_icons_7_1, fabric_icons_8_1, fabric_icons_9_1, fabric_icons_10_1, fabric_icons_11_1, fabric_icons_12_1, fabric_icons_13_1, fabric_icons_14_1, fabric_icons_15_1, fabric_icons_16_1, fabric_icons_17_1, iconAliases_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.initializeIcons = void 0;
    var DEFAULT_BASE_URL = 'https://spoprod-a.akamaihd.net/files/fabric/assets/icons/';
    function initializeIcons(baseUrl, options) {
        if (baseUrl === void 0) { baseUrl = DEFAULT_BASE_URL; }
        [
            fabric_icons_1.initializeIcons,
            fabric_icons_0_1.initializeIcons,
            fabric_icons_1_1.initializeIcons,
            fabric_icons_2_1.initializeIcons,
            fabric_icons_3_1.initializeIcons,
            fabric_icons_4_1.initializeIcons,
            fabric_icons_5_1.initializeIcons,
            fabric_icons_6_1.initializeIcons,
            fabric_icons_7_1.initializeIcons,
            fabric_icons_8_1.initializeIcons,
            fabric_icons_9_1.initializeIcons,
            fabric_icons_10_1.initializeIcons,
            fabric_icons_11_1.initializeIcons,
            fabric_icons_12_1.initializeIcons,
            fabric_icons_13_1.initializeIcons,
            fabric_icons_14_1.initializeIcons,
            fabric_icons_15_1.initializeIcons,
            fabric_icons_16_1.initializeIcons,
            fabric_icons_17_1.initializeIcons,
        ].forEach(function (initialize) { return initialize(baseUrl, options); });
        iconAliases_1.registerIconAliases();
    }
    exports.initializeIcons = initializeIcons;
});
//# sourceMappingURL=index.js.map