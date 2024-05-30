import { post } from "@/utils";
import { fields } from "@/consts";
import { getBase } from "@/consts/search/base";
import convert from "./convert";
export const fetchList = async (option) => {
    const { year, field } = option;
    const base = getBase(year);
    const fieldCode = fields[field];
    const html = await post(`${process.env.SYLLABUS_URL}/`, {
        ...base,
        "ctl00$phContents$ddl_fac": fieldCode,
        "ctl00$phContents$ddl_year": year.toString(),
    });
    const data = convert(html);
    return data;
};
