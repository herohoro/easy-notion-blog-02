import Link from 'next/link'
import { NEXT_PUBLIC_SITE_TITLE } from './server-constants'
import GoogleAnalytics from '../components/google-analytics'
import styles from '../styles/page.module.css'
import {
  getPosts,
  getRankedPosts,
  getAllTags,
  getAllBlocksByBlockId,
  getAllCategorys,
} from '../lib/notion/client'
import { INDEX_PAGE_ID } from '../app/server-constants'
import { getTagLink } from '../lib/blog-helpers'
import Image from 'next/image'
import NotionBlocks from '../components/notion-block'
import SecStyles from '../styles/sec-notion.module.css'
import {
  BlogPostLink,
  BlogTagLink,
  TwitterTimeline,
  BlogCategoryLink,
  BuyMeCoffee,
} from '../components/blog-parts'

export const revalidate = 60
export const dynamic = 'force-dynamic'

const RootPage = async () => {
  const [blocks, posts, rankedPosts, tags, categorys] = await Promise.all([
    getAllBlocksByBlockId(INDEX_PAGE_ID),
    getPosts(),
    getRankedPosts(),
    getAllTags(),
    getAllCategorys(),
  ])
  return (
    <>
      <GoogleAnalytics pageTitle={NEXT_PUBLIC_SITE_TITLE} />
      <div className={styles.container}>
        <div className={styles.onlyContent}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Image
              src="/hero-room.jpg"
              width={300}
              height={300}
              style={{ objectFit: 'contain', width: '100%' }}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default RootPage
