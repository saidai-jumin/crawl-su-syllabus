"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBase = void 0;
const _2021_1 = require("./2021");
const _2022_1 = require("./2022");
const _2023_1 = require("./2023");
const _2024_1 = require("./2024");
const getBase = (year) => {
    switch (year) {
        case 2021:
            return _2021_1.base;
        case 2022:
            return _2022_1.base;
        case 2023:
            return _2023_1.base;
        case 2024:
            return _2024_1.base;
        default:
            throw new Error("Invalid year");
    }
};
exports.getBase = getBase;
