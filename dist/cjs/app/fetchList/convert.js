"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cheerio_1 = require("cheerio");
const convert = (html) => {
    const $ = (0, cheerio_1.load)(html);
    const data = $("#ctl00_phContents_ucGrid_grv tr").map((i, el) => {
        if (i === 0)
            return;
        const year = $(el).find("td").eq(4).find("a").attr("href").match(/lct_year=(\d+)/)[1];
        const year2 = year.slice(2, 4);
        const inner = (n) => $(el).find("td").eq(n).text().trim();
        return {
            numberings: inner(1),
            id: year2 + inner(2),
            language: inner(3),
            lct_cd: inner(3) != "英" ? "1" : "2", // 1: 日本語, 2: 英語
            je_cd: year,
            link: $(el).find("td").eq(4).find("a").attr("href"),
            title: $(el).find("td").eq(4).find("a").text().trim(),
            teacher: inner(5),
            term: inner(6),
            daytime: inner(7),
            target: inner(8),
        };
    }).get();
    return data;
};
exports.default = convert;
