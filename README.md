<p align="center">
  <img src="https://github.com/miryoku7/sh/assets/84623421/587fd335-b9e3-4c61-9d88-8bb9246a159e">
</p>
<h1 align="center">
    Crawl SU Syllabus
</h1>

このプロジェクトは、JavaScriptを使用して埼玉大学のシラバスをクローリングするプログラムです。

> [!NOTE]
> クローリングはサーバー側に非常に負担をかけます。常識の範囲内かつ、アクセスが集中しない時期にお使いください

## インストール

npmを使用してインストールします。

```sh
npm install https://github.com/saidai-jumin/crawl-su-syllabus.git
```

## 使い方

シラバスのリストを取得し展開する例

```ts
import { fetchList, fetchDetail } from 'crawl-su-syllabus'

const list = await fetchList({
  year: 2024,
  field: '経済学部'
})
// list: LessonSummary[]

for (const item of list) {
  const detail = await fetchDetail(item.id)
  // detail: LessonDetail
}
```

## Functions

### fetchList

fetchList: (option: [Options](#options)) => Promise\<[LessonSummary](#lessonsummary)[]>

シラバスのリストを取得します。

学部と開講年度を指定することができ、全件取得します。
今後、他の検索条件を追加します。

```ts
import { fetchList } from 'my-crawler'

const list = await fetchList({
  year: 2024,
  faculty: '経済学部'
})
```

### fetchDetail

fetchDetail: (id: [LessonId](#lessonid), language?: 'ja' | 'en') => Promise\<[LessonId](#lessonid)>

シラバスの詳細を取得します。

## Constants

<!-- ### faculties -->

### translationSchema

このAPIを使用して取得できるデータの翻訳スキーマです。

[LessonDetail](#lessondetail)のKeyをKeyとし(booksは除く)、その値を翻訳したものをValueとするオブジェクトです。

```ts
import { fetchDetail, translationSchema, type LessonDetail } from 'crawl-su-syllabus'

const lesson = await fetchDetail('24A05106')
for (const baseKey in lesson) {
  const key = baseKey as keyof LessonDetail;
  if (key === 'books') continue;
  console.log(translationSchema[key], lesson[key])
  // if key is 'title', 
  // Expected output: '講義名', '債権法'
}
```

## Types

### Options

シラバスのリストを取得する際のオプションです。

今後、ページや検索条件を追加します。

| Name | Type | Description |
| ---- | ---- | ----------- |
| year | [Year](#year) | 年度 |
| faculty | [Field](#field) | 開講学部 |

### Year

年度の種類です。

Yearはnumber型の以下のいずれかです。

- 2020
- 2021
- 2022
- 2023
- 2024

### Field

学部の種類です。

Facultyは以下の文字列リテラルのいずれかです。
教育機構=基盤科目です

- '教育機構'
- '教養学部'
- '教育学部'
- '経済学部'
- '理学部'
- '工学部'

### LessonId

オリジナルのシラバスのIDです。

開講年度の下2桁 + 講義番号 で構成されています。

`https://risyu.saitama-u.ac.jp/Portal/Public/Syllabus/DetailMain.aspx?lct_year=2024&lct_cd=A05106&je_cd=1`

シラバスのURLの `lct_year`の下2桁 + `lct_cd`

上のURLだと`24A05106`

### LessonSummary

シラバスの概要です。
検索結果の一覧に表示される情報です。

| Name | Type | Description |
| --- | --- | --- |
| numberings | string | ナンバリング |
| id | [LessonId](#lessonid) | オリジナルのシラバスのIDです。 |
| language | string | 言語 |
| lct_cd | string | 講義コード |
| je_cd | string | 日英区分コード |
| link | string | リンク |
| title | string | シラバスのタイトル |
| teacher | string | 担当教員 |
| term | string | 学期 |
| daytime | string | 曜日時限 |
| target | string | 対象学生 |

### LessonDetail

シラバスの詳細です。
個別ぺージに表示される情報です。

| Name | Type | Description |
| --- | --- | --- |
| year | string | 講義年 |
| semester | string | 前期後期 |
| faculty | string | 学部・学科 |
| lang | string | 日英区分 |
| title | string | 講義名（日本語） |
| titleEn | string | 講義名（英語） |
| numbering1 | string | ナンバリング1 |
| numbering2 | string | ナンバリング2 |
| field | string | 科目分野 |
| teacher | string | 担当教員 |
| targetStudent | string | 対象学生 |
| targetGrade | string | 対象年次 |
| credit | string | 単位数 |
| type | string | 必修・指定選択・選択 |
| time | string | 曜日時限 |
| classroom | string | 教室 |
| subjectGroup | string | 科目群 |
| lectureNumber | string | 講義番号 |
| designation | string | クラス指定 |
| relatedItems | string | 関連項目 |
| requirements | string | 履修条件 |
| theme | string | テーマ |
| goal | string | 到達目標 |
| policyRelated | string | ディプロマ・ポリシーを含む関連 |
| keyword | string | キーワード |
| content | string | 内容 |
| method | string | 方法 |
| study | string | 事前・事後学習 |
| webclass | string | 詳細（Webclass） |
| evaluation | string | 評価方法 |
| evaluationStandard | string | 評価基準 |
| message | string | メッセージ |
| quota | string | 人数制限 |
| phone | string | 電話 |
| email | string | メアド |
| officeHours | string | オフィスアワー |
| contact | string | 連絡先（その他） |
| relatedUrl | string | 関連URL |
| note | string | その他備考 |
| books | [Book](#book)[] | 教科書・参考図書 |

### Book

教科書の情報です。

| Name | Type | Description |
|---|---|---|
| isbn | string | ISBN |
| title | string | タイトル |
| bookType | string | テキスト or 参考図書 |

### Lesson

シラバスの情報です。

| Name | Type | Description |
| ---- | ---- | ----------- |
| id | string | シラバスのID |
| title | string | シラバスのタイトル |

## Contribution

*IssueやPull Requestを歓迎します!!*

## License

MIT

## 更新期間

[埼大住民](https://saidai-jumin.com)の運営が終了するまで

