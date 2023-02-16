import MyCompoPalla from './MyCompoPalla'
import ContentBlock02 from './pallaContent02'
import styles from '../../styles/page.module.css'

export const revalidate = 60
export const dynamic = 'force-dynamic'

const SpringPage = async () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.onlyContent}>
          <MyCompoPalla />
          {/* <div
            style={{
              width: '100%',
              height: '352px',
              backgroundColor: '#fc8b534b',
            }}
          ></div> */}
          {/* <ContentBlock02 /> */}
        </div>
      </div>
    </>
  )
}

export default SpringPage
