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
            {/* <Image
              src="/hero-room.jpg"
              width={300}
              height={300}
              style={{ objectFit: 'contain', width: '100%' }}
              alt=""
            /> */}

            <div style={{ padding: '100px' }}>
              <h2
                style={{
                  fontSize: '3.25em',
                  lineHeight: '1.25',
                  fontWeight: 'bold',
                }}
              >
                {NEXT_PUBLIC_SITE_TITLE}
              </h2>
              <p
                style={{
                  fontSize: '1em',
                  lineHeight: '1.75',
                  fontWeight: '400',
                }}
              >
                Aesthetic Cocumentarian
              </p>
            </div>
            <div className={styles.buttonSection}>
              <div className={styles.buttonFlex}>
                <div
                  style={{
                    maxWidth: '100%',
                  }}
                >
                  <span>Work</span>
                </div>
              </div>
            </div>

            <div className={styles.hr}></div>
            <div
              style={{
                backgroundColor: 'rgba(31,33,49,0.3)',
                fontSize: '0.75rem',
                height: '1.375rem',
                lineHeight: '1.375rem',
                width: '100%',
                position: 'relative',
                display: 'flex',
                padding: '0 0.6rem',
                color: '#e6eb2f',
              }}
            >
              <span
                style={{
                  borderTop: 'dashed 2px',
                  height: 'inherit',
                  flexGrow: '1',
                  position: 'relative',
                  top: 'calc(50% - 1px)',
                }}
              >
                &nbsp;
              </span>
              <span style={{ padding: '0 0.6rem' }}>#work</span>
              <span
                style={{
                  borderTop: 'dashed 2px',
                  height: 'inherit',
                  flexGrow: '1',
                  position: 'relative',
                  top: 'calc(50% - 1px)',
                }}
              >
                &nbsp;
              </span>
            </div>
            <div className={styles.sectionContainer}>
              <div>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '2rem',
                  }}
                >
                  <div className={styles.galleryCard} style={{ width: '100%' }}>
                    <div
                      style={{
                        backgroundColor: '#dfdddd',
                        height: '368px',
                      }}
                    ></div>
                    <p>テキストテキスト</p>
                  </div>
                  <div className={styles.galleryCard} style={{ width: '45%' }}>
                    <div
                      style={{
                        backgroundColor: '#dfdddd',

                        height: '390px',
                      }}
                    ></div>
                    <p>テキストテキスト</p>
                  </div>
                  <div className={styles.galleryCard} style={{ width: '45%' }}>
                    <div
                      style={{
                        backgroundColor: '#dfdddd',
                        height: '390px',
                      }}
                    ></div>
                    <p>テキストテキスト</p>
                  </div>
                  <div className={styles.galleryCard} style={{ width: '45%' }}>
                    <div
                      style={{
                        backgroundColor: '#dfdddd',

                        height: '390px',
                      }}
                    ></div>
                    <p>テキストテキスト</p>
                  </div>
                  <div className={styles.galleryCard} style={{ width: '45%' }}>
                    <div
                      style={{
                        backgroundColor: '#dfdddd',
                        height: '390px',
                      }}
                    ></div>
                    <p>テキストテキスト</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.hr}></div>
            <div className={styles.sectionContainer}>
              <div
                style={{
                  height: '300px',
                  backgroundColor: '#dfdddd',
                  width: '40%',
                }}
              ></div>
              <div style={{ width: '60%', textAlign: 'left' }}>
                <h3>About</h3>
                <p>
                  テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                </p>
              </div>
            </div>
            <div className={styles.hr}></div>
            <div className={styles.buttonSection}>
              <div className={styles.buttonFlex}>
                <div
                  style={{
                    maxWidth: '100%',
                  }}
                >
                  <span>Contact</span>
                </div>
              </div>
            </div>
            <h2 style={{ marginTop: '200px' }}>これからtsukurun</h2>
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
