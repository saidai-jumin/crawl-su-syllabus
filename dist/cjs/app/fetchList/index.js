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
exports.fetchList = void 0;
const utils_1 = require("../../utils");
const consts_1 = require("../../consts");
const base_1 = require("../../consts/search/base");
const convert_1 = require("./convert");
const fetchList = (option) => __awaiter(void 0, void 0, void 0, function* () {
    const { year, field } = option;
    const base = (0, base_1.getBase)(year);
    const fieldCode = consts_1.fields[field];
    const html = yield (0, utils_1.post)(`${process.env.SYLLABUS_URL}/`, Object.assign(Object.assign({}, base), { "ctl00$phContents$ddl_fac": fieldCode, "ctl00$phContents$ddl_year": year.toString() }));
    const data = (0, convert_1.default)(html);
    return data;
});
exports.fetchList = fetchList;
