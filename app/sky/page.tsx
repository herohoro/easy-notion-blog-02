import Sky from './SkyParallax'

import styles from '../../styles/page.module.css'

export const revalidate = 60
export const dynamic = 'force-dynamic'

const SkyPage = async () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.onlyContent}>
          <Sky />
        </div>
      </div>
    </>
  )
}

export default SkyPage
