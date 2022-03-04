import Head from 'next/head'
import { useRouter } from 'next/router'

import { NEXT_PUBLIC_URL } from '../lib/notion/server-constants'

export const SITE_TITLE = 'herohoroブログ'
export const SITE_DESCRIPTION =
  'Easy to start your blog. You can write on your Notion.'

const DocumentHead = ({
  title = 'herohoroブログ',
  description = 'This Notion Blog is powered by otoyo/easy-notion-blog',
  urlOgImage = 'https://herohoro.com/hero-room.jpg',
}) => {
  const { asPath, pathname } = useRouter()

  return (
    <Head>
      <title>{title ? `${title} - ${SITE_TITLE}` : SITE_TITLE}</title>
      <meta
        name="description"
        content={description ? description : SITE_DESCRIPTION}
      />
      {NEXT_PUBLIC_URL ? (
        <meta
          property="og:url"
          content={new URL(asPath, NEXT_PUBLIC_URL).toString()}
        />
      ) : null}
      <meta property="og:title" content={title ? title : SITE_TITLE} />
      <meta
        property="og:description"
        content={description ? description : SITE_DESCRIPTION}
      />
      <meta property="og:image" content={urlOgImage} />
      {/* {urlOgImage ? <meta property="og:image" content={urlOgImage} /> : null} */}
      <meta
        name="twitter:card"
        content={
          pathname === '/blog/[slug]' && urlOgImage
            ? 'summary_large_image'
            : 'summary'
        }
      />
      {urlOgImage ? <meta name="twitter:image" content={urlOgImage} /> : null}
      {NEXT_PUBLIC_URL ? (
        <link
          rel="canonical"
          href={new URL(asPath, NEXT_PUBLIC_URL).toString()}
        />
      ) : null}
    </Head>
  )
}

export default DocumentHead
