;`use client`

import styles from '../styles/blog-parts.module.css'

export const BackPageLinkClient = () => {
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
      </div>
    </div>
  )
}
