English | [日本語](README.ja.md)

# easy-notion-blog

[![GitHub stars](https://img.shields.io/github/stars/otoyo/easy-notion-blog)](https://github.com/otoyo/easy-notion-blog/stargazers)
[![GitHub license](https://img.shields.io/github/license/otoyo/easy-notion-blog)](https://github.com/otoyo/easy-notion-blog/blob/master/LICENSE)

![easy-notion-blog-logo-2](https://user-images.githubusercontent.com/1063435/155871688-aeb3a7ea-28cb-4b84-bcde-eafc7a2a859a.png)

Easy to start your blog.

You can write on your Notion.

## Screenshot

![Screenshot](https://user-images.githubusercontent.com/1063435/152633191-0bda9095-52ce-4e01-9794-4268c26d0ef4.png)

## Demo

[https://easy-notion-blog-otoyo.vercel.app/blog](https://easy-notion-blog-otoyo.vercel.app/blog)

## Users' blogs

- [techPeck](https://techpeck.net/)
- [チャベログ](https://chabelog.com/)
- [オマツリ](https://omatsuri.vercel.app/)
- [八朔 Blog](https://hassaku-easy-notion-blog.vercel.app/)
- [shmn7iii](https://blog.shmn7iii.net/)
- [nitaking.dev](https://blog-nitaking.vercel.app/) (Contributor)
- [www.gadge7.net](https://www.gadge7.net/blog)
- [herohoro ブログ](https://easy-notion-blog-02.vercel.app/) (Contributor)
- [アルパカログ](https://alpacat.com/) (Owner)

## Features

- Very fast!
- Write on the Notion
- Using official API
- Full customization

## Requirements

- [Notion](https://www.notion.so/) account
- [Vercel](https://vercel.com/) account
- Git

(For your customization)

- Node.js v14 or higher
- [Yarn](https://yarnpkg.com/getting-started)

1. **Star this repo** :wink:
   - It makes me motivative!
2. Duplicate [the template](https://www.notion.so/otoyo/158bd90116004cd19aca26ad88cb5c07?v=a20acca876c2428380e5a2a33db233ed) into your Notion.
3. Note the part of URL `https://notion.so/your-account/<HERE>?v=xxxx` as `DATABASE_ID`
   - ex) `158bd90116004cd19aca26ad88cb5c07`
   - :warning: **CAUTION:** `?v=NOT_THIS_VALUE`. Use ahead strings.
4. [Create an integration](https://developers.notion.com/docs/create-a-notion-integration#step-1-create-an-integration) and note "Internal Integration Token" as `NOTION_API_SECRET`
5. [Share a database with your integration](https://developers.notion.com/docs/create-a-notion-integration#step-2-share-a-database-with-your-integration) at the Notion database page
6. Go to [vercel.com](https://vercel.com/) and log-in
7. Create new project by importing this repository `otoyo/easy-notion-blog` (Skip creating a team)
8. In "Configure Project", open "Environment Variables" settings and set `NOTION_API_SECRET` and `DATABASE_ID`
9. Your Notion Blog will be published after deploy

## How to customize

Fork this repo into your GitHub account and develop.

```sh
# Install dependencies
yarn install

# Start local server at localhost:3000
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

Entries without `Published` are also displayed for preview in local. But no `Slug` entries are not displayed.

Press `Ctrl+C` to stop local server in the terminal.

## How to deploy to Google Cloud Run

See the [wiki](https://github.com/otoyo/easy-notion-blog/wiki/How-to-deploy-easy-notion-blog-to-Google-Cloud-Run).

## Lint & Test

```
yarn lint
yarn test
```

## Optional settings

- favicon
  - Place `favicon.ico` under `public/` directory
- Google Analytics 4
  - Set your tracking ID in `lib/gtag.js`

## Twitter community

- [easy-notion-blog](https://twitter.com/i/communities/1497431576975908868)

## Contribution

Pull requests are welcome.

---

easy-notion-blog is based on [ijjk/notion-blog](https://github.com/ijjk/notion-blog) and [otoyo/notion-blog](https://github.com/otoyo/notion-blog)
