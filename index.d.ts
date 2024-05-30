declare const ids: {
    readonly year: "ctl00_phContents_sylSummary_txtLctYear_lbl";
    readonly semester: "ctl00_phContents_sylSummary_txtTerm_lbl";
    readonly faculty: "ctl00_phContents_sylSummary_txtFacNm_lbl";
    readonly lang: "ctl00_phContents_sylSummary_txtJeNm_lbl";
    readonly title: "ctl00_phContents_sylSummary_txtSbjName_lbl";
    readonly titleEn: "ctl00_phContents_sylSummary_txtSbjName_e_lbl";
    readonly numbering1: "ctl00_phContents_sylSummary_txtSbjNumbering1_lbl";
    readonly numbering2: "ctl00_phContents_sylSummary_txtSbjNumbering2_lbl";
    readonly field: "ctl00_phContents_sylSummary_txtSbjArea_lbl";
    readonly teacher: "ctl00_phContents_sylSummary_txtStaffNameLinkDouble_lbl";
    readonly targetStudent: "ctl00_phContents_sylSummary_txtTermName_lbl";
    readonly targetGrade: "ctl00_phContents_sylSummary_txtPeriod_lbl";
    readonly credit: "ctl00_phContents_sylSummary_txtCredits_lbl";
    readonly type: "ctl00_phContents_sylSummary_txtSylReqName_lbl";
    readonly time: "ctl00_phContents_sylSummary_txtDayPeriod_lbl";
    readonly classroom: "ctl00_phContents_sylSummary_txtClassroomName_lbl";
    readonly subjectGroup: "ctl00_phContents_sylSummary_txtFirstCourse_lbl";
    readonly lectureNumber: "ctl00_phContents_sylSummary_txtLctCd_lbl";
    readonly designation: "ctl00_phContents_ucSylContents_cateDesignateClass_lblNormal";
    readonly relatedItems: "ctl00_phContents_ucSylContents_cateRelatedSbj_lblNormal";
    readonly requirements: "ctl00_phContents_ucSylContents_cateRequirements_lblNormal";
    readonly theme: "ctl00_phContents_ucSylContents_cateTheme_lblNormal";
    readonly goal: "ctl00_phContents_ucSylContents_cateTarget_lblNormal";
    readonly policyRelated: "ctl00_phContents_ucSylContents_cateRelation_lblNormal";
    readonly keyword: "ctl00_phContents_ucSylContents_cateKeyWord_lblNormal";
    readonly content: "ctl00_phContents_ucSylContents_cateOutLine_lblNormal";
    readonly method: "ctl00_phContents_ucSylContents_cateMethod_lblNormal";
    readonly study: "ctl00_phContents_ucSylContents_cateStudy_lblNormal";
    readonly webclass: "";
    readonly evaluation: "ctl00_phContents_ucSylContents_cateGrading_lblNormal";
    readonly evaluationStandard: "ctl00_phContents_ucSylContents_cateGradingStandard_lblNormal";
    readonly message: "ctl00_phContents_ucSylContents_cateSomething_lblNormal";
    readonly quota: "ctl00_phContents_ucSylContents_cateQuota_lblNormal";
    readonly phone: "ctl00_phContents_ucSylContents_cateAddress_lblNormal";
    readonly email: "ctl00_phContents_ucSylContents_cateE_Mail_lblNormal";
    readonly officeHours: "ctl00_phContents_ucSylContents_cateOffice_hours_lblNormal";
    readonly contact: "ctl00_phContents_ucSylContents_cateUrlStf_lblNormal";
    readonly relatedUrl: "ctl00_phContents_ucSylContents_cateUrlRel_lblNormal";
    readonly note: "ctl00_phContents_ucSylContents_cateNote1_lblNormal";
};

type Year = 2021 | 2022 | 2023 | 2024;
type Field = "教養学部" | "教育学部" | "経済学部" | "理学部" | "工学部" | "教育機構";
type FetchList = (options: Options) => Promise<LessonSummary[]>;
type FetchDetail = (id: string, lang?: "1" | "2" | "ja" | "en" | "日" | "英") => Promise<LessonDetail>;
type Options = {
    year: Year;
    field: Field;
};
type LessonSummary = {
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
interface LessonDetail extends Record<keyof typeof ids, string> {
    books: Book[];
}
type Book = {
    isbn: string;
    title: string;
    bookType: "テキスト" | "参考図書";
};

type TranslationSchema = Record<keyof Omit<LessonDetail, "books">, string>;
declare const translationSchema: TranslationSchema;

declare const fetchList: FetchList;

declare const fetchDetail: FetchDetail;

declare const isExist: (html: string) => boolean;

export { type Book, type FetchDetail, type FetchList, type Field, type LessonDetail, type LessonSummary, type Options, type Year, fetchDetail, fetchList, isExist, translationSchema };
