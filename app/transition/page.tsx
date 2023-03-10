import Transition from './Transition'

import styles from '../../styles/page.module.css'

export const revalidate = 60
export const dynamic = 'force-dynamic'

const TransitionPage = async () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.onlyContent}>
          <Transition />
        </div>
      </div>
    </>
  )
}

export default TransitionPage
