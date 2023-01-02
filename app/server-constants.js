/* eslint @typescript-eslint/no-var-requires: 0 */
// use commonjs so it can be required without transpiling

const NOTION_API_SECRET = process.env.NOTION_API_SECRET
const DATABASE_ID = process.env.DATABASE_ID
const INDEX_PAGE_ID = process.env.INDEX_PAGE_ID
const MAP_PAGE_ID = process.env.MAP_PAGE_ID
const NEXT_PUBLIC_URL = process.env.NEXT_PUBLIC_URL
const NEXT_PUBLIC_GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID
const NEXT_PUBLIC_SITE_TITLE = 'herohoroブログ'
const NEXT_PUBLIC_SITE_DESCRIPTION =
  '非エンジニアがeasy-notion-blogを通して勉強しながらスキルアップをしていくブログ'
const NUMBER_OF_POSTS_PER_PAGE = 10
const SEC_NOTION_API_SECRET = process.env.SEC_NOTION_API_SECRET
const SEC_DATABASE_ID = process.env.SEC_DATABASE_ID

module.exports = {
  NOTION_API_SECRET,
  DATABASE_ID,
  INDEX_PAGE_ID,
  MAP_PAGE_ID,
  NEXT_PUBLIC_URL,
  NEXT_PUBLIC_GA_TRACKING_ID,
  NEXT_PUBLIC_SITE_TITLE,
  NEXT_PUBLIC_SITE_DESCRIPTION,
  NUMBER_OF_POSTS_PER_PAGE,
  SEC_NOTION_API_SECRET,
  SEC_DATABASE_ID,
}
