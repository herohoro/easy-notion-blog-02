import { notFound } from 'next/navigation'
import { NUMBER_OF_POSTS_PER_PAGE } from '../../../../app/server-constants'
import GoogleAnalytics from '../../../../components/google-analytics'
import {
  getRankedPosts,
  getPostsBefore,
  getFirstPost,
  getAllTags,
  getAllCategorys,
} from '../../../../lib/notion/client'
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
  TwitterTimeline,
  RssFeed,
} from '../../../../components/blog-parts'
import { NextBackPageLink } from '../../../../components/nextbackpage'
import { BackPageLink } from '../../../../components/backpage'
import styles from '../../../../styles/blog.module.css'

export const revalidate = 3600
export const dynamic = 'force-dynamic'

const BlogBeforeDatePage = async ({ params: { date: encodedDate } }) => {
  const date = decodeURIComponent(encodedDate)

  if (!Date.parse(date) || !/^\d{4}-\d{2}-\d{2}/.test(date)) {
    notFound()
  }

  const [posts, firstPost, rankedPosts, tags, categorys] = await Promise.all([
    getPostsBefore(date, NUMBER_OF_POSTS_PER_PAGE),
    getFirstPost(),
    getRankedPosts(),
    getAllTags(),
    getAllCategorys(),
  ])

  return (
    <>
      <GoogleAnalytics pageTitle={`Posts before ${date.split('T')[0]}`} />
      <div className={styles.container}>
        <div className={styles.flexWraper}>
          <div className={styles.mainContent}>
            <header className={styles.mainTop}>
              <h2>Posts before {date.split('T')[0]}</h2>
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
              <NextBackPageLink firstPost={firstPost} posts={posts} />
              <BackPageLink firstPost={firstPost} posts={posts} />
            </footer>
          </div>
          <div className={styles.subContent}>
            <RssFeed />
            <BlogCategoryLink heading="Category List" categorys={categorys} />
            <BlogTagLink heading="Tag List" tags={tags} />
            <BlogPostLink heading="Recommended" posts={rankedPosts} />
            <TwitterTimeline />
          </div>
        </div>
        <div className={styles.endContent}>
          <div className={styles.endSection}>
            <BlogPostLink heading="Recommended" posts={rankedPosts} />
          </div>
          <div className={styles.endSection}>
            <BlogCategoryLink heading="Category List" categorys={categorys} />
            <TwitterTimeline />
          </div>
          <div className={styles.endSection}>
            <BlogTagLink heading="Tag List" tags={tags} />
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogBeforeDatePage
