"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeIcons = void 0;
var fabric_icons_1 = require("./fabric-icons");
var fabric_icons_0_1 = require("./fabric-icons-0");
var fabric_icons_1_1 = require("./fabric-icons-1");
var fabric_icons_2_1 = require("./fabric-icons-2");
var fabric_icons_3_1 = require("./fabric-icons-3");
var fabric_icons_4_1 = require("./fabric-icons-4");
var fabric_icons_5_1 = require("./fabric-icons-5");
var fabric_icons_6_1 = require("./fabric-icons-6");
var fabric_icons_7_1 = require("./fabric-icons-7");
var fabric_icons_8_1 = require("./fabric-icons-8");
var fabric_icons_9_1 = require("./fabric-icons-9");
var fabric_icons_10_1 = require("./fabric-icons-10");
var fabric_icons_11_1 = require("./fabric-icons-11");
var fabric_icons_12_1 = require("./fabric-icons-12");
var fabric_icons_13_1 = require("./fabric-icons-13");
var fabric_icons_14_1 = require("./fabric-icons-14");
var fabric_icons_15_1 = require("./fabric-icons-15");
var fabric_icons_16_1 = require("./fabric-icons-16");
var fabric_icons_17_1 = require("./fabric-icons-17");
var iconAliases_1 = require("./iconAliases");
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
require("./version");
//# sourceMappingURL=index.js.map