import { redirect } from 'next/navigation'
import { NEXT_PUBLIC_URL } from '../../server-constants'
import { Post } from '../../../lib/notion/interfaces'
import GoogleAnalytics from '../../../components/google-analytics'
import {
  BlogPostLink,
  BlogTagLink,
  BlogCategoryLink,
  NoContents,
  PostBody,
  PostDate,
  PostEditTimeStr,
  PostTitleSlug,
  PostTagsSlug,
  PostCategorySlug,
  // PostThumbnailSlug,
  TwitterTimeline,
  ClosePhrase,
  IndexList,
  NewPostList,
  RssFeed,
} from '../../../components/blog-parts'
import SocialButtons from '../../../components/social-buttons'
import styles from '../../../styles/blog.module.css'
import { getBlogLink } from '../../../lib/blog-helpers'
import {
  getPosts,
  getAllPosts,
  getRankedPosts,
  getPostBySlug,
  getPostsByTag,
  getAllTags,
  getAllCategorys,
  getAllBlocksByBlockId,
} from '../../../lib/notion/client'

export const revalidate = 30

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((p) => ({ slug: p.Slug }))
}

const BlogSlugPage = async ({ params: { slug } }) => {
  const post = await getPostBySlug(slug)

  if (!post) {
    console.log(`Failed to find post for slug: ${slug}`)
    redirect('/blog')
  }

  const [blocks, rankedPosts, recentPosts, tags, sameTagPosts, categorys] =
    await Promise.all([
      getAllBlocksByBlockId(post.PageId),
      getRankedPosts(),
      getPosts(5),
      getAllTags(),
      getPostsByTag(post.Tags[0], 6),
      getAllCategorys(),
    ])

  const otherPostsHavingSameTag = sameTagPosts.filter(
    (p: Post) => p.Slug !== post.Slug
  )

  return (
    <>
      <GoogleAnalytics pageTitle={post.Title} />
      <div className={styles.container}>
        <div className={styles.flexWraper}>
          <div className={styles.mainContent}>
            <div className={styles.postSlug}>
              <div>
                <PostDate post={post} />
                <PostCategorySlug post={post} />
              </div>

              <PostTitleSlug post={post} enableLink={false} />
              {/* <PostThumbnailSlug post={post} /> */}
              <PostTagsSlug post={post} />
              <br />
              <hr />
              <PostEditTimeStr post={post} />

              <NoContents contents={blocks} />
              <PostBody blocks={blocks} />
              <ClosePhrase />

              <footer>
                {NEXT_PUBLIC_URL && (
                  <SocialButtons
                    title={post.Title}
                    url={new URL(
                      getBlogLink(post.Slug),
                      NEXT_PUBLIC_URL
                    ).toString()}
                    id={post.Slug}
                    like={post.Like}
                  />
                )}
              </footer>
              <p>
                ▼　この記事に興味があったら同じタグから関連記事をのぞいてみてね
              </p>
              <PostTagsSlug post={post} />
            </div>
          </div>

          <div className={styles.subContent}>
            <RssFeed />
            <BlogCategoryLink heading="Category List" categorys={categorys} />
            <BlogPostLink
              heading="Posts in the same tag"
              posts={sameTagPosts}
              enableThumnail={true}
            />
            <BlogTagLink heading="Tag List" tags={tags} />
            <BlogPostLink
              heading="Recommended"
              posts={rankedPosts}
              enableThumnail={true}
            />
            <BlogPostLink
              heading="Latest posts"
              posts={recentPosts}
              enableThumnail={true}
            />
            <TwitterTimeline />
            <IndexList heading="★ MOKUJI ★" blocks={blocks} />
          </div>
        </div>
        <div className={styles.endContent}>
          <div className={styles.endSection}>
            <BlogPostLink
              heading="Posts in the same tag"
              posts={sameTagPosts}
              enableThumnail={true}
            />
            <PostTagsSlug post={post} />
          </div>
          <div className={styles.endSection}>
            <BlogPostLink
              heading="Latest posts"
              posts={recentPosts}
              enableThumnail={true}
            />
            <div className={styles.inlineCenter}>
              <BlogCategoryLink heading="Category List" categorys={categorys} />
              <NewPostList />
            </div>
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

export default BlogSlugPage
