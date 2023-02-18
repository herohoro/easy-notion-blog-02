import { NEXT_PUBLIC_SITE_TITLE } from './server-constants'
import GoogleAnalytics from '../components/google-analytics'
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
          <h2 style={{ marginTop: '200px' }}>これからtsukurun</h2>
          <p>
            自分のやりたいことを探して
            <br />
            このページをデザインする
          </p>
        </div>
      </div>
    </>
  )
}

export default RootPage
