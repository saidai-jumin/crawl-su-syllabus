import { type LessonDetail } from "../types";
type TranslationSchema = Record<keyof Omit<LessonDetail, "books">, string>;
export declare const translationSchema: TranslationSchema;
export {};
