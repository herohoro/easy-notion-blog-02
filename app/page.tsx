import { NEXT_PUBLIC_SITE_TITLE } from './server-constants'
import GoogleAnalytics from '../components/google-analytics'
import Transition from '../components/spring/transition'
import styles from '../styles/page.module.css'

// import Image from 'next/image'

export const revalidate = 60
export const dynamic = 'force-dynamic'

const RootPage = async () => {
  return (
    <>
      <GoogleAnalytics pageTitle={NEXT_PUBLIC_SITE_TITLE} />
      <div className={styles.container}>
        <div className={styles.onlyContent}>
          <Transition />
        </div>
      </div>
    </>
  )
}

export default RootPage
