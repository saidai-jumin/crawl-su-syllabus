import { type LessonDetail } from "../../types";
type LessonDetailText = Omit<LessonDetail, "books">;
declare const convert: (html: string) => LessonDetailText;
export default convert;
