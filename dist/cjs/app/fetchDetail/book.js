"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cheerio_1 = require("cheerio");
const book = (html) => {
    const $ = (0, cheerio_1.load)(html);
    const data = [];
    // id が "itemBook_" で始まり "_lblIsbn" で終わる span 要素を選択
    const spans = $('span[id^="ctl00_phContents_ucSylContents"][id$="_lblIsbn"]');
    spans.each((i, elem) => {
        // CheerioでHTMLをロード
        const isbnBase = $(elem).text().trim();
        if (isbnBase) {
            const type = $(elem).closest("tbody").find("td").eq(0).text().trim() || "";
            const title = $(elem).closest("tbody").find("td:nth-child(2)").eq(1).text().trim() || "";
            if (title === "") {
                // やめる
                return;
            }
            // isbnからハイフンを除去
            const isbn = isbnBase.replace(/-/g, "");
            // isbnが数字で構成されているかチェック
            if (!/^\d+$/.test(isbn)) {
                // やめる
                return;
            }
            data.push({
                isbn,
                title,
                bookType: type,
            });
        }
    });
    return data;
};
exports.default = book;
