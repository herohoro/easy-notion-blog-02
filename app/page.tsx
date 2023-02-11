import { NEXT_PUBLIC_SITE_TITLE } from './server-constants'
import GoogleAnalytics from '../components/google-analytics'
import styles from '../styles/page.module.css'

import Image from 'next/image'

export const revalidate = 60
export const dynamic = 'force-dynamic'

const RootPage = async () => {
  return (
    <>
      <GoogleAnalytics pageTitle={NEXT_PUBLIC_SITE_TITLE} />
      <div className={styles.container}>
        <div className={styles.onlyContent}>
          <div style={{ textAlign: 'center' }}>
            <Image
              src="/hero-room.jpg"
              width={300}
              height={300}
              style={{ objectFit: 'contain', width: '100%' }}
              alt=""
            />
            <h2>これからtsukurun</h2>
            <p>
              自分のやりたいことを探して
              <br />
              このページをデザインする
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default RootPage
