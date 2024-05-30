"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isExist = void 0;
const cheerio_1 = require("cheerio");
const isExist = (html) => {
    const $ = (0, cheerio_1.load)(html);
    return !!$("#ctl00_phContents_sylSummary_txtSbjName_lbl").text().trim();
};
exports.isExist = isExist;
