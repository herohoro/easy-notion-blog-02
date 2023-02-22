import MyCompoPalla from './MyCompoPalla'

import styles from '../../styles/page.module.css'

export const revalidate = 60
export const dynamic = 'force-dynamic'

const SpringPage = async () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.onlyContent}>
          <MyCompoPalla />
        </div>
      </div>
    </>
  )
}

export default SpringPage
