import { ids } from "../consts/detail/ids";
export type Year = 2021 | 2022 | 2023 | 2024;
export type Field = "教養学部" | "教育学部" | "経済学部" | "理学部" | "工学部" | "教育機構";
export type FetchList = (options: Options) => Promise<LessonSummary[]>;
export type FetchDetail = (id: string, lang?: "1" | "2" | "ja" | "en" | "日" | "英") => Promise<LessonDetail>;
export type Options = {
    year: Year;
    field: Field;
};
export type LessonSummary = {
    numberings: string;
    id: string;
    language: string;
    lct_cd: string;
    je_cd: string;
    link: string;
    title: string;
    teacher: string;
    term: string;
    daytime: string;
    target: string;
};
export interface LessonDetail extends Record<keyof typeof ids, string> {
    books: Book[];
}
export type Book = {
    isbn: string;
    title: string;
    bookType: "テキスト" | "参考図書";
};
