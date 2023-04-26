import { BackPageLinkClient } from './backpage.client'

export const BackPageLink = ({ firstPost, posts }) => {
  if (!firstPost) return null
  if (posts.length === 0) return null

  const lastPost = posts[posts.length - 1]

  if (firstPost.Date !== lastPost.Date) return null

  return <BackPageLinkClient />
}
