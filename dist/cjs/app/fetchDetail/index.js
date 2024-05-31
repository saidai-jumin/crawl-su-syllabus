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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchDetail = void 0;
const utils_1 = require("../../utils");
const book_1 = __importDefault(require("./book"));
const convert_1 = __importDefault(require("./convert"));
const isExist_1 = require("./isExist");
const fetchDetail = (id_1, ...args_1) => __awaiter(void 0, [id_1, ...args_1], void 0, function* (id, lang = "1") {
    // lang 1 か 2に変換する
    const langMap = {
        "ja": "1",
        "日": "1",
        "en": "2",
        "英": "2",
        "1": "1",
        "2": "2",
    };
    const year = `20${id.slice(0, 2)}`;
    const code = id.slice(2);
    const langCode = Object.keys(langMap).includes(lang) ? langMap[lang] : "1";
    const html = yield (0, utils_1.get)(`${process.env.SYLLABUS_URL}/detailMain.aspx?lct_year=${year}&lct_cd=${code}&je_cd=${langCode}`);
    if (!(0, isExist_1.isExist)(html)) {
        throw new Error("該当する授業が見つかりませんでした。");
    }
    const converted = (0, convert_1.default)(html);
    const books = (0, book_1.default)(html);
    const data = Object.assign(Object.assign({}, converted), { books });
    return data;
});
exports.fetchDetail = fetchDetail;
