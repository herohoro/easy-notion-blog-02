import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import {
  NEXT_PUBLIC_URL,
  NEXT_PUBLIC_SITE_TITLE,
  NEXT_PUBLIC_SITE_DESCRIPTION,
  NUMBER_OF_POSTS_PER_PAGE,
} from '../../../../../../app/server-constants'
import GoogleAnalytics from '../../../../../../components/google-analytics'
import {
  BlogPostLink,
  BlogTagLink,
  BlogCategoryLink,
  NoContents,
  PostDate,
  PostExcerpt,
  PostTags,
  PostCategory,
  PostTitle,
  PostThumbnail,
  PostLike,
  //   ReadMoreLink,
  BuyMeCoffee,
  NotionLink,
} from '../../../../../../components/blog-parts'
import { TwitterTimeline } from '../../../../../../components/twitter-timeLine'
import { NextBackPageLink } from '../../../../../../components/nextbackpage'
import { BackPageLink } from '../../../../../../components/backpage'
import {
  getPosts,
  getRankedPosts,
  getPostsByTagBefore,
  getFirstPostByTag,
  getAllTags,
  getAllCategorys,
} from '../../../../../../lib/notion/client'
import styles from '../../../../../../styles/blog.module.css'

export const revalidate = 3600
export const dynamic = 'force-dynamic'

export async function generateMetadata({
  params: { date: encodedDate, tag: encodedTag },
}): Promise<Metadata> {
  const date = decodeURIComponent(encodedDate)
  const tag = decodeURIComponent(encodedTag)
  const title = `Posts in ${tag} before ${
    date.split('T')[0]
  } - ${NEXT_PUBLIC_SITE_TITLE}`
  const description = NEXT_PUBLIC_SITE_DESCRIPTION
  const url = NEXT_PUBLIC_URL ? new URL('/blog', NEXT_PUBLIC_URL) : undefined
  const imageURL = new URL('/hero-room.jpg', NEXT_PUBLIC_URL)

  const metadata: Metadata = {
    title: title,
    openGraph: {
      title: title,
      description: description,
      url: url,
      siteName: title,
      type: 'website',
      images: [{ url: imageURL }],
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      images: [{ url: imageURL }],
    },
    alternates: {
      canonical: url,
    },
  }

  return metadata
}

const BlogTagBeforeDatePage = async ({
  params: { tag: encodedTag, date: encodedDate },
}) => {
  const tag = decodeURIComponent(encodedTag)
  const date = decodeURIComponent(encodedDate)

  if (!Date.parse(date) || !/^\d{4}-\d{2}-\d{2}/.test(date)) {
    notFound()
  }

  const [posts, firstPost, rankedPosts, recentPosts, tags, categorys] =
    await Promise.all([
      getPostsByTagBefore(tag, date, NUMBER_OF_POSTS_PER_PAGE),
      getFirstPostByTag(tag),
      getRankedPosts(),
      getPosts(5),
      getAllTags(),
      getAllCategorys(),
    ])

  return (
    <>
      <GoogleAnalytics
        pageTitle={`Posts in ${tag} before ${date.split('T')[0]}`}
      />
      <div className={styles.container}>
        <div className={styles.flexWraper}>
          <div className={styles.mainContent}>
            <header className={styles.mainTop}>
              <h2>{tag}</h2>
            </header>
            <div className={styles.mainGallery}>
              <NoContents contents={posts} />

              {posts.map((post) => {
                return (
                  <div className={styles.post} key={post.Slug}>
                    <div className={styles.twoColums}>
                      <PostDate post={post} />
                      <PostLike post={post} />
                    </div>
                    <PostCategory post={post} />
                    <PostTitle post={post} />
                    <PostThumbnail post={post} />
                    <PostTags post={post} />
                    <PostExcerpt post={post} />
                  </div>
                )
              })}
            </div>

            <footer>
              <NextBackPageLink firstPost={firstPost} posts={posts} tag={tag} />
              <BackPageLink firstPost={firstPost} posts={posts} />
            </footer>
          </div>

          <div className={styles.subContent}>
            <BuyMeCoffee />
            <NotionLink />
            <BlogCategoryLink heading="Category List" categorys={categorys} />
            <BlogTagLink heading="Tag List" tags={tags} />
            <BlogPostLink heading="Recommended" posts={rankedPosts} />
            <BlogPostLink heading="Latest Posts" posts={recentPosts} />
            <TwitterTimeline />
          </div>
        </div>
        <div className={styles.endContent}>
          <div className={styles.endSection}>
            <BlogPostLink heading="Recommended" posts={rankedPosts} />
          </div>
          <div className={styles.endSection}>
            <BlogCategoryLink heading="Category List" categorys={categorys} />
            <BlogPostLink heading="Latest Posts" posts={recentPosts} />
          </div>
          <div className={styles.endSection}>
            <BlogTagLink heading="Tag List" tags={tags} />
            <TwitterTimeline />
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogTagBeforeDatePage
