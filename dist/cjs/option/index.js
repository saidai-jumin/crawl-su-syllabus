"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.questions = exports.faculty = exports.year = void 0;
exports.year = [
    {
        name: "2022年度",
        value: 2022,
    },
    {
        name: "2023年度",
        value: 2023,
    },
    {
        name: "2024年度",
        value: 2024,
    },
    {
        name: "addYear",
        value: "add",
    }
];
exports.faculty = [
    {
        name: "全学部",
        value: "all",
    },
    {
        name: "教養学部",
        value: "01",
    },
    {
        name: "教育学部",
        value: "02",
    },
    {
        name: "経済学部",
        value: "03",
    },
    {
        name: "理学部",
        value: "04",
    },
    {
        name: "工学部",
        value: "05",
    },
    {
        name: "教育機構",
        value: "06",
    },
    {
        name: "addFaculty",
        value: "add",
    }
];
exports.questions = [
    {
        type: 'list',
        name: 'year',
        message: 'スクレイピングする講義の開講年度を選択してください',
        choices: exports.year
    },
    {
        type: 'list',
        name: 'faculty',
        message: '開講学部を選択してください',
        choices: exports.faculty,
    }
];
