import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

import { NUMBER_OF_POSTS_PER_PAGE } from '../../../lib/notion/server-constants'
import DocumentHead from '../../../components/document-head'
import {
  BlogPostLink,
  BlogTagLink,
  BlogCategoryLink,
  NoContents,
  NextBackPageLink,
  BackPageLink,
  PostDate,
  PostExcerpt,
  PostTags,
  PostCategory,
  PostTitle,
  PostsNotFound,
  PostThumbnail,
  PostLike,
  TwitterTimeline,
  RssFeed,
} from '../../../components/blog-parts'
import styles from '../../../styles/blog.module.css'
import { getBeforeLink } from '../../../lib/blog-helpers'
import {
  getPosts,
  getRankedPosts,
  getPostsBefore,
  getFirstPost,
  getAllTags,
  getAllCategorys,
} from '../../../lib/notion/client'

export async function getStaticProps({ params: { date } }) {
  if (!Date.parse(date) || !/\d{4}-\d{2}-\d{2}/.test(date)) {
    return { notFound: true }
  }

  const [posts, firstPost, rankedPosts, tags, categorys] = await Promise.all([
    getPostsBefore(date, NUMBER_OF_POSTS_PER_PAGE),
    getFirstPost(),
    getRankedPosts(),
    getAllTags(),
    getAllCategorys(),
  ])

  return {
    props: {
      date,
      posts,
      firstPost,
      rankedPosts,
      tags,
      categorys,
    },
    revalidate: 3600,
  }
}

export async function getStaticPaths() {
  const posts = await getPosts()
  const path = getBeforeLink(posts[posts.length - 1].Date)

  return {
    paths: [path],
    fallback: 'blocking',
  }
}

const RenderPostsBeforeDate = ({
  date,
  posts = [],
  firstPost,
  rankedPosts = [],
  tags = [],
  redirect,
  categorys = [],
}) => {
  const router = useRouter()

  useEffect(() => {
    if (redirect && !posts) {
      router.replace(redirect)
    }
  }, [router, redirect, posts])

  if (!posts) {
    return <PostsNotFound />
  }

  return (
    <div className={styles.container}>
      <div className={styles.flexWraper}>
        <div className={styles.mainContent}>
          <DocumentHead description={`Post before ${date.split('T')[0]}`} />
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
  )
}

export default RenderPostsBeforeDate