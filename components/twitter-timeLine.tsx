'use client'

import { TwitterTimelineEmbed } from 'react-twitter-embed'

import styles from '../styles/blog-parts.module.css'

export const TwitterTimeline = () => (
  <div className={styles.twitterTimeline}>
    <h3>Twitter Timeline</h3>
    <hr />
    <p>フォロー大歓迎＼(^o^)／</p>
    <TwitterTimelineEmbed
      noFooter
      noHeader
      options={{
        height: 400,
        width: 400,
      }}
      screenName="mineral_30"
      sourceType="profile"
    />
  </div>
)
