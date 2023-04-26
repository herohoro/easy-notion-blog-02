import { NextBackPageLinkClient } from './nextbackpage.client'

export const NextBackPageLink = ({
  firstPost,
  posts,
  tag = '',
  category = '',
}) => {
  if (!firstPost) return null
  if (posts.length === 0) return null

  const lastPost = posts[posts.length - 1]

  if (firstPost.Date === lastPost.Date) return null

  return (
    <NextBackPageLinkClient
      lastPostDate={lastPost.Date}
      tag={tag}
      category={category}
    />
  )
}
