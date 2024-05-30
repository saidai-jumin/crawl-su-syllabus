# SU Crawler

このプロジェクトは、Bunを使用して大学のシラバスをクローリングするプログラムです。

## インストール

まず、リポジトリをクローンして依存関係をインストールします。

```sh
git clone https://github.com/your-username/my-crawler.git

cd my-crawler

bun install
```

## 使い方

### シラバスのリストを取得する

```ts
import { fetchList } from 'my-crawler'
```

## Functions

### fetchList

fetchList: (option: [Options](#options)) => Promise\<[LessonSummary](#lessonsummary)[]>

シラバスのリストを取得します。

```ts
import { fetchList } from 'my-crawler'

const list = await fetchList({
  year: 2024,
  faculty: '経済学部'
})

for (const item of list) {
  console.log(item)
}
```

### fetchDetail

fetchDetail: (id: [LessonId](#lessonid), language?: 'ja' | 'en') => Promise\<[LessonId](#lessonid)>

シラバスの詳細を取得します。

## Constants

<!-- ### faculties -->

### translationSchema

このAPIを使用して取得できるデータの翻訳スキーマです。

[Lesson](#lesson)のKeyをKeyとし、その値を翻訳したものをValueとするオブジェクトです。

```ts
import { translationSchema } from 'my-crawler'

console.log(translationSchema['faculty'])
// Expected output: '開講学部'
```

## Types

### Options

シラバスのリストを取得する際のオプションです。

| Name | Type | Description |
| ---- | ---- | ----------- |
| year | number | 年度 |
| faculty | [Faculty](#faculty) | 学期 |

### Faculty

学部の種類です。

Facultyは以下の文字列リテラルのいずれかです。
基盤科目=教育機構です

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

### LessonSummary

シラバスの概要です。
検索結果の一覧に表示される情報です。

| Name | Type | Description |
| ---- | ---- | ----------- |
| id | string | シラバスのID |
| title | string | シラバスのタイトル |
| faculty | [Faculty](#faculty) | 開講学部 |

### LessonDetail

シラバスの詳細です。
個別ぺージに表示される情報です。

| Name | Type | Description |
| ---- | ---- | ----------- |
| id | string | シラバスのID |
| title | string | シラバスのタイトル |
| faculty | Faculty | 開講学部 |

### Book

教科書の情報です。

### Lesson

シラバスの情報です。

| Name | Type | Description |
| ---- | ---- | ----------- |
| id | string | シラバスのID |
| title | string | シラバスのタイトル |
