import React from 'react'
import Link from 'next/link'

import { Post } from '../lib/notion/interfaces'
import NotionBlocks from './notion-block'
import {
  getBeforeLink,
  getBlogLink,
  getDateStr,
  getEditTimeStr,
  getTagLink,
  getTagBeforeLink,
} from '../lib/blog-helpers'
import styles from '../styles/blog-parts.module.css'

export const PostDate = ({ post }) => (
  <div className={styles.postDate}>
    📅&nbsp;&nbsp;{post.Date ? getDateStr(post.Date) : ''}
  </div>
)
{
  /* キャッシュ保存前のコード
 <Link href="/blog/[slug]" as={BlogPostLink(post.Slug)} passHref>
                <img className={stylesParts.thumbnail} src={post.OGImage} />
              </Link> */
}
export const PostEditTimeStr = ({ post }) => (
  <div className={styles.postEditTime}>
    🔄 &nbsp;&nbsp;{post.EditTime ? getEditTimeStr(post.EditTime) : ''}
  </div>
)
export const PostThumbnail = ({ post }) => (
  <div className={styles.thumbnail}>
    <Link href="/blog/[slug]" as={getBlogLink(post.Slug)} passHref>
      <img
        src={`/notion_images/${post.PageId}.png`}
        width={300}
        height={160}
        alt="thumbnail"
      />
    </Link>
  </div>
)
export const PostThumbnailSlug = ({ post }) => (
  <div className={styles.thumbnailSlug}>
    <Link href="/blog/[slug]" as={getBlogLink(post.Slug)} passHref>
      <img
        src={`/notion_images/${post.PageId}.png`}
        width={800}
        height={420}
        alt="thumbnail"
      />
    </Link>
  </div>
)
export const PostTitle = ({ post, enableLink = true }) => {
  const postTitle = post.Title ? post.Title : ''

  return (
    <h3 className={styles.postTitle}>
      {enableLink ? (
        <Link href="/blog/[slug]" as={getBlogLink(post.Slug)} passHref>
          <a>{postTitle}</a>
        </Link>
      ) : (
        postTitle
      )}
    </h3>
  )
}
export const PostTitleSlug = ({ post, enableLink = true }) => {
  const postTitle = post.Title ? post.Title : ''

  return (
    <h2 className={styles.postTitleSlug}>
      {enableLink ? (
        <Link href="/blog/[slug]" as={getBlogLink(post.Slug)} passHref>
          <a>{postTitle}</a>
        </Link>
      ) : (
        postTitle
      )}
    </h2>
  )
}
export const PostTagsSlug = ({ post }) => (
  <div className={styles.postTagsSlug}>
    {post.Tags &&
      post.Tags.length > 0 &&
      post.Tags.map((tag) => (
        <Link href="/blog/tag/[tag]" as={getTagLink(tag)} key={tag} passHref>
          <a>{tag}</a>
        </Link>
      ))}
  </div>
)

export const PostTags = ({ post }) => (
  <div className={styles.postTags}>
    {post.Tags &&
      post.Tags.length > 0 &&
      post.Tags.map((tag: string) => (
        <Link href="/blog/tag/[tag]" as={getTagLink(tag)} key={tag} passHref>
          <a>{tag}</a>
        </Link>
      ))}
  </div>
)

export const PostExcerpt = ({ post }) => (
  <div className={styles.postExcerpt}>
    <p>{post.Excerpt ? post.Excerpt : ''}</p>
  </div>
)

export const PostBody = ({ blocks }) => (
  <div className={styles.postBody}>
    <NotionBlocks blocks={blocks} />
  </div>
)
export const IndexList = ({ blocks, heading }) => (
  <div className={styles.indexList}>
    <h3>{heading}</h3>
    <NotionBlocks blocks={blocks} />
  </div>
)
export const ClosePhrase = () => (
  <div>
    <p>Twitterでは更新のお知らせを随時行っています</p>
    <a href="https://twitter.com/mineral_30">興味ある方はLet&apos;sフォロー★</a>
  </div>
)
export const ReadMoreLink = ({ post }) => (
  <div className={styles.readMoreLink}>
    <Link href="/blog/[slug]" as={getBlogLink(post.Slug)} passHref>
      <a className={styles.readMore}>Read more</a>
    </Link>
  </div>
)

export const NextPageLink = ({ firstPost, posts, tag = '' }) => {
  if (!firstPost) return null
  if (posts.length === 0) return null

  const lastPost = posts[posts.length - 1]

  if (firstPost.Date === lastPost.Date) return null

  return (
    <div className={styles.nextContainer}>
      <hr />

      <Link
        href={tag ? '/blog/tag/[tag]/before/[date]' : '/blog/before/[date]'}
        as={
          tag
            ? getTagBeforeLink(tag, lastPost.Date)
            : getBeforeLink(lastPost.Date)
        }
        passHref
      >
        <a className={styles.nextPageLink}>Next page ＞</a>
      </Link>
    </div>
  )
}

// export const NextPageLink02 = ({firstPost, posts}) =>{
//   if (!firstPost) return null
//   if (posts.length === 0) return null

//   const lastPost = posts[posts.length - 1]

//   if (firstPost.Date === lastPost.Date) return null

//   return(
//     <div className={styles.nextContainer}>
//     <hr />
//     <div className={styles.buttonSubContainer}>
//       <a
//         className={styles.backButton}
//         onClick={() => router.back()}
//       >
//         {' '}
//         ＜ Back{' '}
//       </a>
//       <Link
//         href="/blog/before/[date]"
//         as={getBeforeLink(lastPost.Date)}
//         passHref
//       >
//         <a className={styles.nextButton}>Next ＞</a>
//       </Link>
//       </div>
//     </div>
//   )

// }

export const NoContents = ({ contents }) => {
  if (!!contents && contents.length > 0) return null

  return <div className={styles.noContents}>There are no contents yet</div>
}
export const NewPostList = () => (
  <div className={styles.newPostList}>
    <Link href="/blog" passHref>
      <p> 🔍　to Blog List </p>
    </Link>
  </div>
)
export const TwitterTimeline = () => (
  <div className={styles.twitterTimeline}>
    <h3>Twitter Timeline</h3>
    <hr />
    <p>フォロー大歓迎＼(^o^)／</p>
    <a
      className="twitter-timeline"
      data-lang="en"
      data-chrome="nofooter,transparent"
      data-width="500"
      data-height="500"
      data-theme="light"
      href="https://twitter.com/mineral_30?ref_src=twsrc%5Etfw"
    >
      Tweets by mineral_30
    </a>{' '}
    <script
      async
      src="https://platform.twitter.com/widgets.js"
      // charset="utf-8"
    ></script>
  </div>
)
export const RssFeed = () => (
  <div>
    <h3>新着記事を通知したい？？</h3>
    <hr />
    <p>RSSリーダーにatomのリンクを登録すると通知が行くよ🐌</p>
    <code>https://herohoro.com/atom</code>
    <p>やってみてね(*´ω`*)(*´ω`*)</p>
  </div>
)
export const BlogPostLink = ({ heading, posts, enableThumnail = false }) => (
  <div className={styles.blogPostLink}>
    <h3>{heading}</h3>
    <hr />
    <NoContents contents={posts} />
    {enableThumnail ? (
      <PostLinkListThumnail posts={posts} />
    ) : (
      <PostLinkList posts={posts} />
    )}
  </div>
)

export const BlogTagLink = ({ heading, tags, enableList = false }) => (
  <div className={styles.blogTagLink}>
    <h3>{heading}</h3>
    <hr />
    <NoContents contents={tags} />
    {enableList ? <TagLinkList tags={tags} /> : <TagLinkNoList tags={tags} />}
  </div>
)

export const IndexBlogTagLink = ({ heading, tags }) => (
  <div className={styles.IndexblogTagLink}>
    <h3>{heading}</h3>
    <hr />
    <NoContents contents={tags} />
    <TagLinkList tags={tags} />
  </div>
)

// export const IndexBlogTagLink = ({ heading, tags }) => {
//   if (!tags || tags.length === 0) return null
//   return(

//     <div className={styles.IndexblogTagLink} >
//       <h3>{heading}</h3>
//       <div>
//     {tags.map(tag => {
//       return(

//     <div key={tag}>
//     <NoContents contents={tags} />
//     <Link  href="/blog/tag/[tag]" as={getTagLink(tag)} passHref >
//       <a >{tag}</a>
//      </Link>
//      </div>
//   )})}</div>
//   <hr/></div>
// )}

export const PostLinkList = ({ posts }) => {
  if (!posts || posts.length === 0) return null

  return (
    <ul>
      {posts.map((post: Post) => {
        return (
          <li key={post.Slug}>
            <Link href="/blog/[slug]" as={getBlogLink(post.Slug)} passHref>
              <a>{post.Title}</a>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
const PostLinkListThumnail = ({ posts }) => {
  if (!posts || posts.length === 0) return null
  return (
    <div>
      {posts.map((post) => {
        return (
          <div key={post.Slug} className={styles.flexWraper}>
            <Link href="/blog/[slug]" as={getBlogLink(post.Slug)} passHref>
              <img
                src={`/notion_images/${post.PageId}.png`}
                width={143.54}
                height={75}
                alt="thumbnail"
              />
            </Link>
            <Link href="/blog/[slug]" as={getBlogLink(post.Slug)} passHref>
              <a>{post.Title}</a>
            </Link>
          </div>
        )
      })}
    </div>
  )
}
export const TagLinkList = ({ tags }) => {
  if (!tags || tags.length === 0) return null

  return (
    <ul>
      {tags.map((tag: string) => {
        return (
          <li key={tag}>
            <Link href="/blog/tag/[tag]" as={getTagLink(tag)} passHref>
              <a>{tag}</a>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
export const TagLinkNoList = ({ tags }) => {
  if (!tags || tags.length === 0) return null

  return (
    <div>
      {tags.map((tag) => {
        return (
          <div className={styles.tagSub} key={tag}>
            <Link href="/blog/tag/[tag]" as={getTagLink(tag)} passHref>
              <p>{tag}</p>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export const PostsNotFound = () => (
  <div className={styles.postsNotFound}>
    Woops! did not find the posts, redirecting you back to the blog index
  </div>
)
