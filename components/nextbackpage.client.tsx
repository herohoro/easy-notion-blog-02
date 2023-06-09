'use client'
import Link from 'next/link'
import {
  getBeforeLink,
  getTagBeforeLink,
  getCategoryBeforeLink,
} from '../lib/blog-helpers'
import styles from '../styles/blog-parts.module.css'

export const NextBackPageLinkClient = ({
  lastPostDate,
  tag = '',
  category = '',
}) => {
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
              ? getTagBeforeLink(tag, lastPostDate)
              : category
              ? getCategoryBeforeLink(category, lastPostDate)
              : getBeforeLink(lastPostDate)
          }
          passHref
        >
          <div className={styles.nextPageLink}>Next ＞</div>
        </Link>
      </div>
    </div>
  )
}
