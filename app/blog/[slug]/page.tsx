import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { NEXT_PUBLIC_URL, NEXT_PUBLIC_SITE_TITLE } from '../../server-constants'
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
  ClosePhrase,
  IndexList,
  NewPostList,
  RssFeed,
  BuyMeCoffee,
  NotionLink,
} from '../../../components/blog-parts'
import { TwitterTimeline } from '../../../components/twitter-timeLine'
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
  getCommentsPage
} from '../../../lib/notion/client'

export const revalidate = 30
// export const dynamic = 'force-dynamic'
export const dynamic = 'force-static'

export async function generateMetadata(props): Promise<Metadata> {
  const params = await props.params;
  const post = await getPostBySlug(params.slug)
  const title = `${post?.Title} - ${NEXT_PUBLIC_SITE_TITLE}`
  const description = post?.Excerpt
  const url = NEXT_PUBLIC_URL
    ? new URL(getBlogLink(post?.Slug || ''), NEXT_PUBLIC_URL)
    : undefined
  const images = NEXT_PUBLIC_URL
    ? [{ url: new URL(`/api/og-image?slug=${post?.Slug}`, NEXT_PUBLIC_URL)}]
    : []

  const metadata: Metadata = {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      url: url,
      siteName: title,
      type: 'website',
      images: images,
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      images: images,
    },
    alternates: {
      canonical: url,
    },
  }

  return metadata
}

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((p) => ({ slug: p.Slug }))
}

const BlogSlugPage = async props => {
  const params = await props.params;

  const {
    slug
  } = params;

  const post = await getPostBySlug(slug)

  if (!post) {
    console.log(`Failed to find post for slug: ${slug}`)
    redirect('/blog')
  }

  const [blocks, rankedPosts, recentPosts, tags, sameTagPosts, categorys, comment] =
    await Promise.all([
      getAllBlocksByBlockId(post.PageId),
      getRankedPosts(),
      getPosts(5),
      getAllTags(),
      getPostsByTag(post.Tags[0], 6),
      getAllCategorys(),
      getCommentsPage(post.PageId)
    ])

  return (
    <>
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
              
              <div>
                {comment && comment.length > 0 ? (
                  comment.map((comment, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '10px' }}>
                      <div style={{ minWidth: '100px', fontWeight: 'bold', marginRight: '10px', whiteSpace: 'nowrap', flexShrink: 0 }}>{comment.user}:</div>
                      <div>{comment.text}</div>
                    </div>
                  ))
                ) : (
                  ""
                )}
              </div>


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
            <BuyMeCoffee />
            <NotionLink />
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
