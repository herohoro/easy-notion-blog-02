import {
  NEXT_PUBLIC_URL,
  NEXT_PUBLIC_SITE_TITLE,
  NEXT_PUBLIC_SITE_DESCRIPTION,
} from '../app/server-constants'

const DocumentHead = ({
  title = '',
  description = '',
  path = '',
  urlOgImage = '',
}) => {
  const defaultImageURL = new URL('/hero-room.jpg', NEXT_PUBLIC_URL)
  return (
    <>
      <title>
        {title
          ? `${title} - ${NEXT_PUBLIC_SITE_TITLE}`
          : NEXT_PUBLIC_SITE_TITLE}
      </title>
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <meta
        name="description"
        content={description ? description : NEXT_PUBLIC_SITE_DESCRIPTION}
      />
      {NEXT_PUBLIC_URL ? (
        <meta
          property="og:url"
          content={new URL(path, NEXT_PUBLIC_URL).toString()}
        />
      ) : null}
      <meta
        property="og:title"
        content={title ? title : NEXT_PUBLIC_SITE_TITLE}
      />
      <meta
        property="og:description"
        content={description ? description : NEXT_PUBLIC_SITE_DESCRIPTION}
      />
      <meta property="og:site_name" content={NEXT_PUBLIC_SITE_TITLE} />
      {urlOgImage ? (
        <meta property="og:image" content={urlOgImage} />
      ) : NEXT_PUBLIC_URL ? (
        <meta property="og:image" content={defaultImageURL.toString()} />
      ) : null}
      <meta name="twitter:card" content="summary_large_image" />
      {urlOgImage ? (
        <meta name="twitter:image" content={urlOgImage} />
      ) : NEXT_PUBLIC_URL ? (
        <meta name="twitter:image" content={defaultImageURL.toString()} />
      ) : null}
      {NEXT_PUBLIC_URL ? (
        <link
          rel="canonical"
          href={new URL(path, NEXT_PUBLIC_URL).toString()}
        />
      ) : null}
    </>
  )
}
export default DocumentHead
