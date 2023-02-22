import Scroll from './ScrollAnimate'

import styles from '../../styles/page.module.css'

export const revalidate = 60
export const dynamic = 'force-dynamic'

const ScrollPage = async () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.onlyContent}>
          <Scroll />
        </div>
      </div>
    </>
  )
}

export default ScrollPage
