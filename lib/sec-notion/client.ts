import {
  SEC_NOTION_API_SECRET,
  SEC_DATABASE_ID,
} from '../../app/server-constants'
import { Post } from './interfaces'

import { Client } from '@notionhq/client'
const client = new Client({
  auth: SEC_NOTION_API_SECRET,
})

export async function getSecShinyaMessage() {
  let results = []

  const params = {
    database_id: SEC_DATABASE_ID,
    filter: {
      property: 'tags',
      select: {
        equals: '深夜学習_つぶやき',
      },
    },
    sorts: [
      {
        property: 'last_edit',
        direction: 'descending',
      },
    ],
  }
  const data = await client.databases.query(params)

  results = results.concat(data.results)

  params['start_cursor'] = data.next_cursor

  return results.map((item) => _buildPost(item))
}

export async function getAllSecShinyaPosts() {
  let results = []

  const params = {
    database_id: SEC_DATABASE_ID,
    filter: {
      property: 'tags',
      select: {
        equals: '深夜学習',
      },
    },
    sorts: [
      {
        property: 'date',
        direction: 'descending',
      },
    ],
  }
  const data = await client.databases.query(params)

  results = results.concat(data.results)

  params['start_cursor'] = data.next_cursor

  return results.map((item) => _buildPost(item))
}

export async function getAllSecPosts() {
  let results = []

  const params = {
    database_id: SEC_DATABASE_ID,
    filter: {
      property: 'tags',
      select: {
        equals: 'posting',
      },
    },
    sorts: [
      {
        property: 'date',
        direction: 'descending',
      },
    ],
  }
  const data = await client.databases.query(params)

  results = results.concat(data.results)

  params['start_cursor'] = data.next_cursor

  return results.map((item) => _buildPost(item))
}

function _buildPost(data) {
  const prop = data.properties

  const post: Post = {
    title: prop.title.title[0].plain_text,
    date: prop.date.date.start,
    tags: prop.tags.select.name,
    description:
      prop.description.rich_text.length > 0
        ? prop.description.rich_text[0].plain_text
        : '',
    last_edit: prop.last_edit.last_edited_time,
    URL: prop.URL.url,
    site: prop.site.select.name,
    siteCollor: prop.site.select.color,
  }

  return post
}
