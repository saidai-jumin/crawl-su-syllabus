var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { get } from "@/utils";
import book from "./book";
import convert from "./convert";
import { isExist } from "./isExist";
export const fetchDetail = (id_1, ...args_1) => __awaiter(void 0, [id_1, ...args_1], void 0, function* (id, lang = "1") {
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
    const html = yield get(`${process.env.SYLLABUS_URL}/detailMain.aspx?lct_year=${year}&lct_cd=${code}&je_cd=${langCode}`);
    if (!isExist(html)) {
        throw new Error("該当する授業が見つかりませんでした。");
    }
    const converted = convert(html);
    const books = book(html);
    const data = Object.assign(Object.assign({}, converted), { books });
    return data;
});
