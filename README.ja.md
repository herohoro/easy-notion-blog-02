[English](README.md) | 日本語

# easy-notion-blog

[![GitHub stars](https://img.shields.io/github/stars/otoyo/easy-notion-blog)](https://github.com/otoyo/easy-notion-blog/stargazers)
[![GitHub license](https://img.shields.io/github/license/otoyo/easy-notion-blog)](https://github.com/otoyo/easy-notion-blog/blob/master/LICENSE)

easy-notion-blog を使えば簡単にブログを開設できます。

ブログは Notion で書くことができます。

## スクリーンショット

![Screenshot](https://user-images.githubusercontent.com/1063435/152633191-0bda9095-52ce-4e01-9794-4268c26d0ef4.png)

## デモ

[https://easy-notion-blog-otoyo.vercel.app/blog](https://easy-notion-blog-otoyo.vercel.app/blog)

## ユーザーブログ

- [nitaking.dev](https://blog-nitaking.vercel.app/) (Contributor)
- [www.gadge7.net](https://www.gadge7.net/blog)
- [herohoro ブログ](https://easy-notion-blog-02.vercel.app/)
- [アルパカログ](https://alpacat.com/) (Owner)

## 特長

- 高速な表示
- Notion でブログが書ける
- Notion 公式 API を使用
- すべてカスタマイズ可能

## 必要要件

- [Notion](https://www.notion.so/) アカウント
- [Vercel](https://vercel.com/) アカウント
- Git

(カスタマイズしたい場合は下記も)

- Node.js v12
- [Yarn](https://yarnpkg.com/getting-started)

## クイックスタート

1. [notion.so](https://www.notion.so/) にログインします
1. 新規に空のページを作成します
1. `/table` とタイプし "Table - Inline" を選択します(下図 1)
1. "Untitled" と名前のついた一階層下のページ(データベース) に移動します(下図 2)
1. データベースの列名が `Name`, `Tags` になっていることを確認します。そうなっていない場合は変更します
1. URL から次の部分を `DATABASE_ID` としてメモします `https://notion.so/your-account/<ココ>?v=xxxx`
1. [Create an integration](https://developers.notion.com/docs#step-1-create-an-integration) からインテグレーションを作成し "Internal Integration Token" を `NOTION_API_SECRET` としてメモします
1. `DATABASE_ID` をメモしたデータベースを再度開き [Share a database with your integration](https://developers.notion.com/docs#step-1-create-an-integration) の手順でインテグレーションにデータベースを共有します
1. ターミナルアプリを開きこのリポジトリをクローンします `git clone git@github.com:otoyo/easy-notion-blog.git && cd easy-notion-blog`
1. 初期化スクリプトを実行します `DATABASE_ID='<YOUR_DATABASE_ID>' NOTION_API_SECRET='<YOUR_NOTION_API_SECRET>' ./scripts/init-database.sh`
1. [vercel.com](https://vercel.com/) にログインします
1. プロジェクトを新規作成しリポジトリとして `otoyo/easy-notion-blog` をインポートします(チームの作成はスキップします)
1. "Configure Project" で "Environment Variables" を開き先ほどメモした `NOTION_API_SECRET` と `DATABASE_ID` を入力します
1. デプロイが完了すると Notion Blog が見えるようになります

---

図 1 `/table` とタイプしたら "Table - Inline" を選択します

![Fig. 1](https://user-images.githubusercontent.com/1063435/140594182-1a717ed1-24ed-47e7-b037-70c684273dab.png)

---

図 2 作成された "Untitled" データベースに移動します

![Fig. 2](https://user-images.githubusercontent.com/1063435/140629759-b05d7596-394d-4fe4-9861-264bb01809b8.png)

## カスタマイズするには

このリポジトリをあなたの GitHub アカウントにフォークして開発してください。

```sh
# 依存関係のインストール
yarn install

# 開発サーバー(localhost:3000) のスタート
yarn dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開きます。

開発環境では `Published` でないエントリーも表示されるためプレビューすることができます。ただし `Slug` が設定されていないエントリーは表示されません。

開発サーバーを停止するにはターミナルで `Ctrl+C` を押します。

## よくある質問

[wiki](https://github.com/otoyo/easy-notion-blog/wiki) の「よくある質問」をご覧ください。

## Lint & Test

```
yarn lint
yarn test
```

HTML を変更した場合はスナップショットを更新してください。

```
yarn jest --updateSnapshot
```

- [Jest CLI オプション --updateSnapshot](https://jestjs.io/ja/docs/cli#--updatesnapshot)

## オプション設定

- favicon
  - `public/` ディレクトリ以下に `favicon.ico` を置きます
- Google Analytics 4
  - `lib/gtag.js` にトラッキング ID を記載します

## 貢献

PR 歓迎です。

---

easy-notion-blog は [ijjk/notion-blog](https://github.com/ijjk/notion-blog) と [otoyo/notion-blog](https://github.com/otoyo/notion-blog) をベースにしています。
