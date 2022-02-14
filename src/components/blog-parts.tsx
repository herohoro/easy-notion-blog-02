import React from 'react'
import Link from 'next/link'

import NotionBlock from './notion-block'
import * as interfaces from '../lib/notion/interfaces'
import {
  getBeforeLink,
  getBlogLink,
  getDateStr,
  getTagLink,
} from '../lib/blog-helpers'
import styles from '../styles/blog-parts.module.css'

export const PostDate = ({ post }) => (
  <div className={styles.postDate}>
    📅&nbsp;&nbsp;{post.Date ? getDateStr(post.Date) : ''}
  </div>
)

export const PostThumbnail = ({ post }) => (
  <Link href="/blog/[slug]" as={getBlogLink(post.Slug)} passHref>
    <img className={styles.thumbnail} src={post.OGImage} />
  </Link>
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
    <h3 className={styles.postTitleSlug}>
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
export const PostTagsSlug = ({ post }) => (
  <div className={styles.postTagsSlug}>
    {post.Tags &&
      post.Tags.length > 0 &&
      post.Tags.map(tag => (
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
      post.Tags.map(tag => (
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
    {wrapListItems(blocks).map((block, i) => (
      <NotionBlock block={block} key={`post-body-${i}`} />
    ))}
  </div>
)

export const ReadMoreLink = ({ post }) => (
  <div className={styles.readMoreLink}>
    <Link href="/blog/[slug]" as={getBlogLink(post.Slug)} passHref>
      <a className={styles.readMore}>Read more</a>
    </Link>
  </div>
)

export const NextPageLink = ({ firstPost, posts }) => {
  if (!firstPost) return null
  if (posts.length === 0) return null

  const lastPost = posts[posts.length - 1]

  if (firstPost.Date === lastPost.Date) return null

  return (
    <div className={styles.nextContainer}>
      <hr />

      <Link
        href="/blog/before/[date]"
        as={getBeforeLink(lastPost.Date)}
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

export const BlogPostLink = ({ heading, posts }) => (
  <div className={styles.blogPostLink}>
    <h3>{heading}</h3>
    <hr />
    <NoContents contents={posts} />
    <PostLinkList posts={posts} />
  </div>
)

export const BlogTagLink = ({ heading, tags }) => (
  <div className={styles.blogTagLink}>
    <h3>{heading}</h3>
    <hr />
    <NoContents contents={tags} />
    <TagLinkList tags={tags} />
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
      {posts.map(post => {
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

export const TagLinkList = ({ tags }) => {
  if (!tags || tags.length === 0) return null

  return (
    <ul>
      {tags.map(tag => {
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

export const PostsNotFound = () => (
  <div className={styles.postsNotFound}>
    Woops! did not find the posts, redirecting you back to the blog index
  </div>
)

const wrapListItems = blocks =>
  blocks.reduce((arr, block, i) => {
    const isBulletedListItem = block.Type === 'bulleted_list_item'
    const isNumberedListItem = block.Type === 'numbered_list_item'

    if (!isBulletedListItem && !isNumberedListItem) return arr.concat(block)

    const listType = isBulletedListItem ? 'bulleted_list' : 'numbered_list'

    if (i === 0) {
      const list: interfaces.List = {
        Type: listType,
        ListItems: [block],
      }
      return arr.concat(list)
    }

    const prevList = arr[arr.length - 1]

    if (
      (isBulletedListItem && prevList.Type !== 'bulleted_list') ||
      (isNumberedListItem && prevList.Type !== 'numbered_list')
    ) {
      const list: interfaces.List = {
        Type: listType,
        ListItems: [block],
      }
      return arr.concat(list)
    }

    prevList.ListItems.push(block)

    return arr
  }, [])
