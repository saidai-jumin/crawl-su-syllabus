"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cheerio_1 = require("cheerio");
const book = (html) => {
    const $ = (0, cheerio_1.load)(html);
    const data = [];
    $("a").each((i, elem) => {
        const href = $(elem).attr("href");
        // start with https://opac.lib.saitama-u.ac.jp/Main/OpenSearch?isbn=
        if (href && href.startsWith("https://opac.lib.saitama-u.ac.jp/Main/OpenSearch?isbn=")) {
            const title = $(elem).text().trim();
            const type = $(elem).closest("tbody").find("td").eq(0).text().trim() || "";
            if (title === "") {
                // やめる
                return;
            }
            const isbnBase = href.replace("https://opac.lib.saitama-u.ac.jp/Main/OpenSearch?isbn=", "");
            // isbnからハイフンを除去
            const isbn = isbnBase.replace(/-/g, "");
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
