import { load } from "cheerio";
import { ids } from "../../consts/detail/ids";
const convert = (html) => {
    const $ = load(html);
    const data = {
        year: "",
        semester: "",
        faculty: "",
        lang: "",
        title: "",
        titleEn: "",
        numbering1: "",
        numbering2: "",
        field: "",
        teacher: "",
        targetStudent: "",
        targetGrade: "",
        credit: "",
        type: "",
        time: "",
        classroom: "",
        subjectGroup: "",
        lectureNumber: "",
        designation: "",
        relatedItems: "",
        requirements: "",
        theme: "",
        goal: "",
        policyRelated: "",
        keyword: "",
        content: "",
        method: "",
        study: "",
        webclass: "",
        evaluation: "",
        evaluationStandard: "",
        message: "",
        quota: "",
        phone: "",
        email: "",
        officeHours: "",
        contact: "",
        relatedUrl: "",
        note: ""
    };
    for (const [key, value] of Object.entries(ids)) {
        $("[id]").each((i, elem) => {
            if ($(elem).attr("id") === value) {
                $(elem).find('br').replaceWith('\n');
                data[key] = $(elem).text().trim();
            }
        });
    }
    return data;
};
export default convert;
