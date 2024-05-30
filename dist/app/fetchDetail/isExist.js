import { load } from "cheerio";
export const isExist = (html) => {
    const $ = load(html);
    return !!$("#ctl00_phContents_sylSummary_txtSbjName_lbl").text().trim();
};
