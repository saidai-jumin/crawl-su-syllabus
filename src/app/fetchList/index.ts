import { post } from "@/utils";
import { fields } from "@/consts";
import { getBase } from "@/consts/search/base";
import convert from "./convert";
import { SYLLABUS_URL } from "@/consts";
import type { FetchList } from "@/types";

export const fetchList:FetchList = async (option) => {
  const { year, field } = option;
  const base = getBase(year);
  const fieldCode = fields[field];

  const html = await post<string>(`${SYLLABUS_URL}/`, {
    ...base,
    "ctl00$phContents$ddl_fac": fieldCode,
    "ctl00$phContents$ddl_year": year.toString(),
  });
  
  const data = convert(html);


  return data;
}