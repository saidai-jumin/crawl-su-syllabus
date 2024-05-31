import { get } from "@/utils";
import book from "./book";
import convert from "./convert";
import { isExist } from "./isExist";
import type { FetchDetail } from "@/types";
import { SYLLABUS_URL } from "@/consts";

export const fetchDetail: FetchDetail = async (id, lang = "1") => {
  // lang 1 か 2に変換する
  const langMap: Record<string, string> = {
    "ja": "1",
    "日": "1",
    "en": "2",
    "英": "2",
    "1": "1",
    "2": "2",
  }
  const year = `20${id.slice(0, 2)}`;
  const code = id.slice(2);
  const langCode = Object.keys(langMap).includes(lang) ? langMap[lang] : "1";

  const html = await get<string>(`${SYLLABUS_URL}/detailMain.aspx?lct_year=${year}&lct_cd=${code}&je_cd=${langCode}`)
  if (!isExist(html)) {
    throw new Error("該当する授業が見つかりませんでした。");
  }
    
  const converted = convert(html);
  const books = book(html);

  const data = {
    ...converted,
    books,
  }

  return data;
}