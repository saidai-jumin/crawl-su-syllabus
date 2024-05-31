var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { post } from "../../utils";
import { fields } from "../../consts";
import { getBase } from "../../consts/search/base";
import convert from "./convert";
export const fetchList = (option) => __awaiter(void 0, void 0, void 0, function* () {
    const { year, field } = option;
    const base = getBase(year);
    const fieldCode = fields[field];
    const html = yield post(`${process.env.SYLLABUS_URL}/`, Object.assign(Object.assign({}, base), { "ctl00$phContents$ddl_fac": fieldCode, "ctl00$phContents$ddl_year": year.toString() }));
    const data = convert(html);
    return data;
});
