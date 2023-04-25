import Link from 'next/link'
import {
  getBeforeLink,
  getTagBeforeLink,
  getCategoryBeforeLink,
} from '../lib/blog-helpers'
import styles from '../styles/blog-parts.module.css'

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

  const handleBack = () => {
    if (typeof window !== 'undefined') {
      window.history.back()
    }
  }

  return (
    <div className={styles.nextContainer}>
      <div className={styles.buttonSubContainer}>
        <a className={styles.backButton} onClick={handleBack}>
          {' '}
          ＜ Back{' '}
        </a>
        <Link
          href={
            tag
              ? getTagBeforeLink(tag, lastPost.Date)
              : category
              ? getCategoryBeforeLink(category, lastPost.Date)
              : getBeforeLink(lastPost.Date)
          }
          passHref
        >
          <div className={styles.nextPageLink}>Next ＞</div>
        </Link>
      </div>
    </div>
  )
}
