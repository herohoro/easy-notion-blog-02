'use client'

import React from 'react'
import Link from 'next/link'
import { Post } from '../lib/notion/interfaces'
import NotionBlocks from './notion-block'
import MokujiBlocks from './mokuji-block'
import {
  getBeforeLink,
  getBlogLink,
  getDateStr,
  getEditTimeStr,
  getTagLink,
  getCategoryLink,
  getTagBeforeLink,
  getCategoryBeforeLink,
} from '../lib/blog-helpers'
import { TwitterTimelineEmbed } from 'react-twitter-embed'
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
    <Link href={getBlogLink(post.Slug)}>
      <img src={post.OGImage} width={300} height={160} alt="thumbnail" />
    </Link>
  </div>
)
export const PostThumbnailSlug = ({ post }) => (
  <div className={styles.thumbnailSlug}>
    <Link href={getBlogLink(post.Slug)}>
      <img src={post.OGImage} width={800} height={420} alt="thumbnail" />
    </Link>
  </div>
)
export const PostTitle = ({ post, enableLink = true }) => {
  const postTitle = post.Title ? post.Title : ''

  return (
    <h3 className={styles.postTitle}>
      {enableLink ? (
        <Link href={getBlogLink(post.Slug)}>{postTitle}</Link>
      ) : (
        postTitle
      )}
    </h3>
  )
}
import Heart from './svgs/heart'
export const PostLike = ({ post }) => {
  return (
    <div className={styles.postLike}>
      <div className={styles.postLikeCount}>
        <Heart width={20} height={20} active={true} />
        <span>{post.Like === null ? 0 : post.Like} </span>
      </div>
    </div>
  )
}
export const PostTitleSlug = ({ post, enableLink = true }) => {
  const postTitle = post.Title ? post.Title : ''

  return (
    <h2 className={styles.postTitleSlug}>
      {enableLink ? (
        <Link href={getBlogLink(post.Slug)}>{postTitle}</Link>
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
        <Link href={getTagLink(tag)} key={tag}>
          {tag}
        </Link>
      ))}
  </div>
)
export const PostCategorySlug = ({ post }) => (
  <div className={`${post.CategoryColor}`}>
    {post.Category && post.Category.length > 0 && (
      <Link href={getCategoryLink(post.Category)} key={post.Category}>
        <div className={styles.categoryText}>{post.Category}</div>
      </Link>
    )}
  </div>
)

export const PostTags = ({ post }) => (
  <div className={styles.postTags}>
    {post.Tags &&
      post.Tags.length > 0 &&
      post.Tags.map((tag: string) => (
        <Link href={getTagLink(tag)} key={tag}>
          {tag}
        </Link>
      ))}
  </div>
)
export const PostCategory = ({ post }) => (
  <div className={`${post.CategoryColor}`}>
    <Link href={getCategoryLink(post.Category)} key={post.Category}>
      <div className={styles.linkButton}>
        {post.Category ? post.Category : ''}
      </div>
    </Link>
  </div>
)
export const PostExcerpt = ({ post }) => (
  <div className={styles.postExcerpt}>
    <p>{post.Excerpt ? post.Excerpt : ''}</p>
  </div>
)

export const PostBody = ({ blocks }) => (
  <div className={styles.postBody}>
    <NotionBlocks blocks={blocks} isRoot={true} />
  </div>
)
export const IndexList = ({ blocks, heading }) => (
  <div className={styles.indexList}>
    <h3>{heading}</h3>
    <MokujiBlocks blocks={blocks} />
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
    <Link href={getBlogLink(post.Slug)} className={styles.readMore}>
      Read more
    </Link>
  </div>
)

export const NextPageLink = ({ firstPost, posts, tag = '', category = '' }) => {
  if (!firstPost) return null
  if (posts.length === 0) return null

  const lastPost = posts[posts.length - 1]

  if (firstPost.Date === lastPost.Date) return null

  return (
    <div className={styles.nextContainer}>
      <hr />

      <Link
        href={
          tag
            ? getTagBeforeLink(tag, lastPost.Date)
            : category
            ? getCategoryBeforeLink(category, lastPost.Date)
            : getBeforeLink(lastPost.Date)
        }
      >
        <div className={styles.nextPageLink}>Next page ＞</div>
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
    <Link href="/blog">
      <p> 🔍　to Blog List </p>
    </Link>
  </div>
)
export const BuyMeOnigiri = () => (
  <div style={{ margin: '3rem 3rem' }}>
    <script
      type="text/javascript"
      src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js"
      data-name="bmc-button"
      data-slug="horomi"
      data-color="#FFDD00"
      data-emoji=""
      data-font="Cookie"
      data-text="Buy me a coffee"
      data-outline-color="#000000"
      data-font-color="#000000"
      data-coffee-color="#ffffff"
    ></script>
  </div>
)
export const TwitterTimeline = () => (
  <div className={styles.twitterTimeline}>
    <h3>Twitter Timeline</h3>
    <hr />
    <p>フォロー大歓迎＼(^o^)／</p>
    <TwitterTimelineEmbed
      noFooter
      noHeader
      options={{
        height: 400,
        width: 400,
      }}
      screenName="mineral_30"
      sourceType="profile"
    />
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

export const BlogCategoryLink = ({ heading, categorys }) => (
  <div className={styles.blogTagLink}>
    <h3>{heading}</h3>
    <hr />
    <NoContents contents={categorys} />
    <CategoryLinkNoList categorys={categorys} />
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
//     {tags.map(category => {
//       return(

//     <div key={category}>
//     <NoContents contents={tags} />
//     <Link  href="/blog/category/[category]" as={getTagLink(category)} passHref >
//       <a >{category}</a>
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
            <Link href={getBlogLink(post.Slug)}>{post.Title}</Link>
            <span> &#x1f91f; {post.LikeRank}</span>
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
            <Link href={getBlogLink(post.Slug)}>
              <img
                src={post.OGImage}
                width={143.54}
                height={75}
                alt="thumbnail"
              />
            </Link>
            <div>
              <Link href={getBlogLink(post.Slug)}>{post.Title}</Link>
              <span> &#x1f91f; {post.LikeRank}</span>
            </div>
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
            <Link href={getTagLink(tag)}>{tag}</Link>
          </li>
        )
      })}
    </ul>
  )
}

export const CategoryLinkNoList = ({ categorys }) => {
  if (!categorys || categorys.length === 0) return null

  return (
    <div>
      {categorys.map((category: string) => {
        return (
          <div key={category} className={styles.categoryNoList}>
            <Link href={getCategoryLink(category)}>{category}</Link>
          </div>
        )
      })}
    </div>
  )
}

export const TagLinkNoList = ({ tags }) => {
  if (!tags || tags.length === 0) return null

  return (
    <div>
      {tags.map((tag) => {
        return (
          <div className={styles.tagSub} key={tag}>
            <Link href={getTagLink(tag)}>
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
