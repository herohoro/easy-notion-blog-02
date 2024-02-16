/* eslint @typescript-eslint/no-var-requires: 0 */
// use commonjs so it can be required without transpiling
import path from "node:path"
import fs from 'fs'
import { Client } from '@notionhq/client'
import { NOTION_API_SECRET, DATABASE_ID } from '../../app/server-constants.js'

const BLOG_INDEX_CACHE = path.resolve('.blog_index_data')

const notionClient = new Client({
  auth: NOTION_API_SECRET,
})

export function exists() {
  return fs.existsSync(BLOG_INDEX_CACHE)
}

export function get() {
  return JSON.parse(fs.readFileSync(BLOG_INDEX_CACHE))
}

export async function set() {
  let params = {
    database_id: DATABASE_ID,
    filter: {
      and: [
        {
          property: 'Published',
          checkbox: {
            equals: true,
          },
        },
        {
          property: 'Date',
          date: {
            on_or_before: new Date().toISOString(),
          },
        },
      ],
    },
    sorts: [
      {
        property: 'Date',
        timestamp: 'created_time',
        direction: 'descending',
      },
    ],
    page_size: 100,
  }

  let results = []

  while (true) {
    const data = await notionClient.databases.query(params)

    results = results.concat(data.results)

    if (!data.has_more) {
      break
    }

    params['start_cursor'] = data.next_cursor
  }

  fs.writeFileSync(BLOG_INDEX_CACHE, JSON.stringify(results))
  console.log(`Cached ${results.length} posts into ${BLOG_INDEX_CACHE}`)

  return
}

export function expire() {
  return fs.unlinkSync(BLOG_INDEX_CACHE)
}
