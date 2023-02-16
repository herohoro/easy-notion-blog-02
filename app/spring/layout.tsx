import HeaderTsuku from '../../components/header-tsuku'
import Footer from '../../components/footer'
import '../../styles/global.css'
import '../../styles/syntax-coloring.css'
import styles from '../../styles/shared.module.css'

const SpringLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="ja" prefix="og: https://ogp.me/ns#">
    <head>
      <link
        href="https://fonts.googleapis.com/css2?family=Kiwi+Maru&family=Yomogi&family=Zen+Maru+Gothic&display=swap"
        rel="stylesheet"
      />
    </head>
    <body>
      <div className={styles.container}>
        <div className={styles.content}>{children}</div>
        {/* <Footer /> */}
      </div>
    </body>
  </html>
)

export default SpringLayout
