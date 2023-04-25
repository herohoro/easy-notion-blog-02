import styles from '../styles/blog-parts.module.css'

export const BackPageLink = ({ firstPost, posts }) => {
  if (!firstPost) return null
  if (posts.length === 0) return null

  const lastPost = posts[posts.length - 1]

  if (firstPost.Date !== lastPost.Date) return null

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
