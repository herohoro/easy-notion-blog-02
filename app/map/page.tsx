import Link from 'next/link'
import { getTagLink } from '../../lib/blog-helpers'
import GoogleAnalytics from '../../components/google-analytics'
import styles from '../../styles/page.module.css'
import {
  getRankedPosts,
  getAllTags,
  getAllBlocksByBlockId,
  getAllCategorys,
} from '../../lib/notion/client'
import { MAP_PAGE_ID } from '../../app/server-constants'
import Image from 'next/image'
import NotionBlocks from '../../components/notion-block'
import {
  BlogPostLink,
  BlogTagLink,
  TwitterTimeline,
  BlogCategoryLink,
} from '../../components/blog-parts'

export const revalidate = 60

const MapPage = async () => {
  const [blocks, rankedPosts, tags, categorys] = await Promise.all([
    getAllBlocksByBlockId(MAP_PAGE_ID),
    getRankedPosts(),
    getAllTags(),
    getAllCategorys(),
  ])
  return (
    <>
      <GoogleAnalytics pageTitle="Map" />
      <div className={styles.container}>
        <div className={styles.mainContent}>
          <div className={styles.flexTagsMain}>
            {tags.map((tag) => {
              if (tag === 'README' || tag === 'Q&A') {
                return (
                  <div className={styles.tagMain}>
                    <Link href="/blog/tag/[tag]" as={getTagLink(tag)} passHref>
                      <p>easy-notion-blog&apos; s {tag}</p>
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
            <Image
              src="/study-hero.jpeg"
              width={300}
              height={300}
              objectFit="contain"
              alt=""
            />
          </div>
          <NotionBlocks blocks={blocks} />
        </div>

        <div className={styles.subContent}>
          <BlogCategoryLink heading="Category List" categorys={categorys} />
          <BlogTagLink heading="Tag List" tags={tags} />
          <h3>Prolile</h3>
          <hr />
          <div className={styles.flexWraper}>
            <Image
              src="/profile.png"
              width={200}
              height={200}
              objectFit="contain"
              alt=""
            />
            <Image
              src="/notion-essentials-badge.png"
              width={80}
              height={80}
              objectFit="contain"
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
            src="https://notion2charts.com/embed/bad01964-6bce-4f62-bc9d-1d2899652ed6"
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

export default MapPage
