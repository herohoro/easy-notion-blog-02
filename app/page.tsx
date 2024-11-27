import type { Metadata } from 'next'
import {
  NEXT_PUBLIC_URL,
  NEXT_PUBLIC_SITE_TITLE,
  NEXT_PUBLIC_SITE_DESCRIPTION,
} from './server-constants'
import Transition from '../components/spring/transition'
import styles from '../styles/page.module.css'

export const revalidate = 60
// export const dynamic = 'force-dynamic'

export async function generateMetadata(): Promise<Metadata> {
  const title = NEXT_PUBLIC_SITE_TITLE
  const description = NEXT_PUBLIC_SITE_DESCRIPTION
  const url = NEXT_PUBLIC_URL ? new URL(NEXT_PUBLIC_URL) : undefined
  const images = NEXT_PUBLIC_URL
    ? [{ url: new URL('/hero-room.jpg', NEXT_PUBLIC_URL) }]
    : []

  const metadata: Metadata = {
    openGraph: {
      title: title,
      description: description,
      url: url,
      siteName: title,
      type: 'website',
      images: images,
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      images: images,
    },
    alternates: {
      canonical: url,
    },
  }

  return metadata
}

const RootPage = async () => {
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

export default RootPage
