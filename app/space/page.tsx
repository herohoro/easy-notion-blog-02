import Link from 'next/link'
import GoogleAnalytics from '../../components/google-analytics'
import { BlogTagLink, BlogCategoryLink } from '../../components/blog-parts'
import { TwitterTimeline } from '../../components/twitter-timeLine'
import styles from '../../styles/blog.module.css'
import { getAllTags, getAllCategorys } from '../../lib/notion/client'
import { getEditTimeStr } from '../../lib/blog-helpers'
import SecStyles from '../../styles/sec-notion.module.css'
import {
  getAllSecShinyaPosts,
  getSecShinyaMessage,
} from '../../lib/sec-notion/client'
import Image from 'next/image'

export const revalidate = 60
export const dynamic = 'force-dynamic'

const RenderPostsSpace = async () => {
  const [tags, categorys, secPosts, secMessages] = await Promise.all([
    getAllTags(),
    getAllCategorys(),
    getAllSecShinyaPosts(),
    getSecShinyaMessage(),
  ])

  return (
    <>
      <GoogleAnalytics pageTitle="Space" />
      <div className={styles.container}>
        <div className={styles.flexWraper}>
          <div className={styles.mainContent}>
            <div>
              <h3 style={{ textAlign: 'center' }}>
                \ 未だに一人で学習中 /
              </h3>
              <div className={SecStyles.fukidashi}>
                <Image
                  src="/fukidashi.png"
                  width={100}
                  height={100}
                  style={{ objectFit: 'contain' }}
                  alt=""
                />
                {secMessages.map((secMessage) => {
                  return (
                    <div className={SecStyles.fukiCard} key={secMessage.title}>
                      <p style={{ fontSize: '1.5rem' }}>
                        {' '}
                        {secMessage.description ? secMessage.description : null}
                      </p>

                      <p style={{ textAlign: 'right' }}>
                        last edit : {getEditTimeStr(secMessage.last_edit)}
                      </p>
                    </div>
                  )
                })}
              </div>
              <p>
                記録しておくとモチベが上がるので残しています🔥
              </p>
              <Image
                src="/neko.jpeg"
                width={900}
                height={300}
                style={{ objectFit: 'contain', width: '100%' }}
                alt=""
              />
              <div className={SecStyles.grid}>
                {secPosts.map((secPost) => {
                  return (
                    <div className={SecStyles.card} key={secPost.title}>
                      <div>
                        <div className={`${secPost.siteCollor}`}>
                          <p>{secPost.site}</p>
                        </div>
                      </div>
                      <h3>{secPost.date} ~</h3>
                      {secPost.URL ? (
                        <Link href={secPost.URL}>
                          <div>📝 {secPost.title}</div>
                        </Link>
                      ) : (
                        <p>📝 {secPost.title}</p>
                      )}
                      <p>
                        &#128537;{' '}
                        {secPost.description ? secPost.description : null}
                      </p>
                      <hr />
                      <p>last edit : {getEditTimeStr(secPost.last_edit)}</p>
                    </div>
                  )
                })}
              </div>
            </div>
            <iframe
              src="https://notion2charts.com/embed/4a0acf85-e27d-4abe-bca6-efff7c2db54c"
              width="100%"
              height="300"
              // frameborder="0"
            ></iframe>
            <p>▼　25分のタイマーにどうぞ〜</p>
            <div className={SecStyles.clockTimer}>
              <iframe
                src="https://www.youtube.com/embed/videoseries?list=PLUq06vyynuEUdRd1lu3ncpfTSjbogScmR"
                width="50%"
                height="300"
                // frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                // allowfullscreen
              ></iframe>
              <div className={SecStyles.pclock}>
                <iframe
                  src="https://bae.herohoro.com/clock/index.html"
                  width="40%"
                  height="200"
                  scrolling="no"
                ></iframe>
              </div>
            </div>

            <p>▼　日々の振り返りで特に残しておきたいのをPick Up!!</p>
            <iframe
              src="https://notion-cms-dusky.vercel.app"
              width="100%"
              height="600"
              // frameborder="0"
            ></iframe>
          </div>

          <div className={styles.subContent}>
            <BlogCategoryLink heading="Category List" categorys={categorys} />
            <BlogTagLink heading="Tag List" tags={tags} />
            <TwitterTimeline />
          </div>
        </div>
      </div>
    </>
  )
}

export default RenderPostsSpace
