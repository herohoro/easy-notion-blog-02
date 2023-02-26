import HeaderTsuku from '../components/header-tsuku'
import {
  NEXT_PUBLIC_SITE_TITLE,
  NEXT_PUBLIC_SITE_DESCRIPTION,
} from './server-constants'
import Footer from '../components/footer'
import '../styles/global.css'
import '../styles/syntax-coloring.css'
import styles from '../styles/shared.module.css'

export const metadata = {
  title: NEXT_PUBLIC_SITE_TITLE,
  description: NEXT_PUBLIC_SITE_DESCRIPTION,
}

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="ja" prefix="og: https://ogp.me/ns#">
    <head>
      <link
        href="https://fonts.googleapis.com/css2?family=Kiwi+Maru&family=Yomogi&family=Zen+Maru+Gothic&display=swap"
        rel="stylesheet"
      />
    </head>
    <body>
      <div className={styles.container}>
        <HeaderTsuku />
        <div className={styles.content}>{children}</div>
        <Footer />
      </div>
    </body>
  </html>
)

export default RootLayout
