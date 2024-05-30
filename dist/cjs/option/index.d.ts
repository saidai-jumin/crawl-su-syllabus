export declare const year: readonly [{
    readonly name: "2022年度";
    readonly value: 2022;
}, {
    readonly name: "2023年度";
    readonly value: 2023;
}, {
    readonly name: "2024年度";
    readonly value: 2024;
}, {
    readonly name: "addYear";
    readonly value: "add";
}];
export declare const faculty: readonly [{
    readonly name: "全学部";
    readonly value: "all";
}, {
    readonly name: "教養学部";
    readonly value: "01";
}, {
    readonly name: "教育学部";
    readonly value: "02";
}, {
    readonly name: "経済学部";
    readonly value: "03";
}, {
    readonly name: "理学部";
    readonly value: "04";
}, {
    readonly name: "工学部";
    readonly value: "05";
}, {
    readonly name: "教育機構";
    readonly value: "06";
}, {
    readonly name: "addFaculty";
    readonly value: "add";
}];
export declare const questions: ({
    type: string;
    name: string;
    message: string;
    choices: readonly [{
        readonly name: "2022年度";
        readonly value: 2022;
    }, {
        readonly name: "2023年度";
        readonly value: 2023;
    }, {
        readonly name: "2024年度";
        readonly value: 2024;
    }, {
        readonly name: "addYear";
        readonly value: "add";
    }];
} | {
    type: string;
    name: string;
    message: string;
    choices: readonly [{
        readonly name: "全学部";
        readonly value: "all";
    }, {
        readonly name: "教養学部";
        readonly value: "01";
    }, {
        readonly name: "教育学部";
        readonly value: "02";
    }, {
        readonly name: "経済学部";
        readonly value: "03";
    }, {
        readonly name: "理学部";
        readonly value: "04";
    }, {
        readonly name: "工学部";
        readonly value: "05";
    }, {
        readonly name: "教育機構";
        readonly value: "06";
    }, {
        readonly name: "addFaculty";
        readonly value: "add";
    }];
})[];
export type AnswersType = {
    year: typeof year[number]['value'];
    faculty: typeof faculty[number]['value'];
};
