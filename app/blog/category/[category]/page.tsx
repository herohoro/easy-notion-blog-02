import { notFound } from 'next/navigation'
import { NUMBER_OF_POSTS_PER_PAGE } from '../../../../app/server-constants'
import GoogleAnalytics from '../../../../components/google-analytics'
import {
  BlogPostLink,
  BlogCategoryLink,
  NextPageLink,
  BlogTagLink,
  NoContents,
  PostDate,
  PostExcerpt,
  PostTags,
  PostCategory,
  PostTitle,
  PostThumbnail,
  PostLike,
  RssFeed,
  BuyMeCoffee,
  NotionLink,
} from '../../../../components/blog-parts'
import { TwitterTimeline } from '../../../../components/twitter-timeLine'
import styles from '../../../../styles/blog.module.css'
import {
  getPosts,
  getRankedPosts,
  getPostsByCategory,
  getFirstPostByCategory,
  getAllTags,
  getAllCategorys,
} from '../../../../lib/notion/client'

export const revalidate = 60
export const dynamicParams = false
export const dynamic = 'force-dynamic'

export async function generateStaticParams() {
  const categorys = await getAllCategorys()
  return categorys.map((category) => ({ category: category }))
}

const BlogCategoryPage = async ({ params: { category: encodedCategory } }) => {
  const category = decodeURIComponent(encodedCategory)

  const posts = await getPostsByCategory(category, NUMBER_OF_POSTS_PER_PAGE)

  if (posts.length === 0) {
    notFound()
  }

  const [firstPost, rankedPosts, recentPosts, tags, categorys] =
    await Promise.all([
      getFirstPostByCategory(category),
      getRankedPosts(),
      getPosts(5),
      getAllTags(),
      getAllCategorys(),
    ])

  return (
    <>
      <GoogleAnalytics pageTitle={`Posts in ${category}`} />
      <div className={styles.container}>
        <div className={styles.flexWraper}>
          <div className={styles.mainContent}>
            <header className={styles.mainTop}>
              <h2>{category}</h2>
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
              <NextPageLink
                firstPost={firstPost}
                posts={posts}
                category={category}
              />
            </footer>
          </div>

          <div className={styles.subContent}>
            <BuyMeCoffee />
            <NotionLink />
            <RssFeed />
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
            <BlogCategoryLink heading="Category List" categorys={categorys} />
            <TwitterTimeline />
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogCategoryPage
