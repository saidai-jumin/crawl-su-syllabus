"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = exports.post = void 0;
const axios_1 = require("axios");
const post = (url, data) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.default.post(url, data, {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    });
    return response.data;
});
exports.post = post;
const get = (url) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.default.get(url);
    return response.data;
});
exports.get = get;
