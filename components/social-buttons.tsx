'use client'

import {
  FacebookIcon,
  FacebookShareButton,
  HatenaIcon,
  HatenaShareButton,
  PocketIcon,
  PocketShareButton,
  TwitterIcon,
  TwitterShareButton,
} from 'react-share'

import { sendGAEvent } from '@next/third-parties/google'
import styles from '../styles/social-buttons.module.css'
import LikeButton from './like-button'

const SocialButtons = ({ title = '', url, id = null,like=null }) => (
  <ul className={styles.socialButtons}>
    <li>
      <TwitterShareButton
        url={url}
        title={title}
        beforeOnClick={() =>
          sendGAEvent({
            event: 'share',
            method: 'twitter',
            contentType: 'article',
            itemId: id,
          })
        }
      >
        <TwitterIcon size={32} round={true} />
      </TwitterShareButton>
    </li>
    <li>
      <FacebookShareButton
        url={url}
        beforeOnClick={() =>
          sendGAEvent({
            event: 'share',
            method: 'facebook',
            contentType: 'article',
            itemId: id,
          })
        }
      >
        <FacebookIcon size={32} round={true} />
      </FacebookShareButton>
    </li>
    <li>
      <PocketShareButton
        url={url}
        title={title}
        beforeOnClick={() =>
          sendGAEvent({
            event: 'share',
            method: 'pocket',
            contentType: 'article',
            itemId: id,
          })
        }
      >
        <PocketIcon size={32} round={true} />
      </PocketShareButton>
    </li>
    <li>
      <HatenaShareButton
        url={url}
        title={title}
        beforeOnClick={() =>
          sendGAEvent({
            event: 'share',
            method: 'hatena',
            contentType: 'article',
            itemId: id,
          })
        }
      >
        <HatenaIcon size={32} round={true} />
      </HatenaShareButton>
    </li>
    <li>
      <LikeButton id={id} like={like}/>
    </li>
  </ul>
)

export default SocialButtons
