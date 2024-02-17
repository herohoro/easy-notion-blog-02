import Link from 'next/link'
import { NEXT_PUBLIC_SITE_TITLE } from '../server-constants'
import GoogleAnalytics from '../../components/google-analytics'
import styles from '../../styles/page.module.css'
import {
  getRankedPosts,
  getAllTags,
  getAllBlocksByBlockId,
  getAllCategorys,
} from '../../lib/notion/client'
import { INDEX_PAGE_ID } from '../../app/server-constants'
import { getTagLink } from '../../lib/blog-helpers'
import Image from 'next/image'
import NotionBlocks from '../../components/notion-block'
import SecStyles from '../../styles/sec-notion.module.css'
import {
  BlogPostLink,
  BlogTagLink,
  BlogCategoryLink,
  BuyMeCoffee,
  NotionLink,
} from '../../components/blog-parts'
import { TwitterTimeline } from '../../components/twitter-timeLine'

export const revalidate = 60
export const dynamic = 'force-dynamic'

const RootPage = async () => {
  const [blocks, rankedPosts, tags, categorys] = await Promise.all([
    getAllBlocksByBlockId(INDEX_PAGE_ID),
    getRankedPosts(),
    getAllTags(),
    getAllCategorys(),
  ])
  return (
    <>
      <GoogleAnalytics pageTitle={NEXT_PUBLIC_SITE_TITLE} />
      <div className={styles.container}>
        <div className={styles.mainContent}>
          <div className={styles.flexTagsMain}>
            {tags.map((tag, index) => {
              if (tag === 'README' || tag === 'Q&A') {
                return (
                  <div className={styles.tagMain} key={index}>
                    <Link
                      href={getTagLink(tag)}
                      style={{
                        display: 'block',
                        textAlign: 'center',
                        fontWeight: 'bold',
                        textShadow: '0 2px 5px rgb(0 0 0 / 50%)',
                      }}
                    >
                      easy-notion-blog&apos; s {tag}
                    </Link>
                  </div>
                )
              } else {
                return null
              }
            })}
            {/* 奇数だからお休み */}
            {/* <div className={styles.moreSearch}>
          <Link href="/blog" passHref>
            <p> 🔍　to Blog List </p>
          </Link>
        </div> */}
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img
              src="/hero-room.jpg"
              width={300}
              height={300}
              style={{ objectFit: 'contain', width: '100%' }}
              alt=""
            />
          </div>
          <NotionBlocks blocks={blocks} />
          <div className={SecStyles.pcode}>
            <iframe
              src="https://bae.herohoro.com/%E3%83%89%E3%83%83%E3%83%88/index.html"
              width="100%"
              height="100%"
              scrolling="no"
            ></iframe>
          </div>
        </div>

        <div className={styles.subContent}>
          <BuyMeCoffee />
          <NotionLink />
          <BlogCategoryLink heading="Category List" categorys={categorys} />
          <BlogTagLink heading="Tag List" tags={tags} />
          <h3>Prolile</h3>
          <hr />
          <div className={styles.flexWraper}>
            <img
              src="/profile.png"
              width={200}
              height={200}
              style={{ objectFit: 'contain' }}
              alt=""
            />
            <img
              src="/notion-essentials-badge.png"
              width={80}
              height={80}
              style={{ objectFit: 'contain' }}
              alt=""
            />
          </div>
          <ul>
            <li>勉強が趣味</li>
            <li>教えるの好き</li>
            <li>オンライン学習塾で５画面を操り指導(自称：職人)</li>
            <li>元教員・介護士</li>
            <li>家の中では無限大</li>
          </ul>
          <h3>Study TimeLine</h3>
          <hr />
          <iframe
            src="https://notion2charts.com/embed/4a0acf85-e27d-4abe-bca6-efff7c2db54c"
            width="100%"
            height="400"
          ></iframe>

          <BlogPostLink heading="Recommended" posts={rankedPosts} />
          <TwitterTimeline />
        </div>
      </div>
    </>
  )
}

export default RootPage
