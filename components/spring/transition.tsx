'use client'
import React, { useState, useCallback, useRef, useEffect } from 'react'

import { useTransition, animated } from '@react-spring/web'

import styles from '../../styles/spring/transition.module.css'

export default function App() {
  const ref = useRef<ReturnType<typeof setTimeout>[]>([])
  const [items, set] = useState<string[]>([])
  const transitions = useTransition(items, {
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      transform: 'perspective(600px) rotateX(0deg)',
      color: '#f5e5d3',
    },
    enter: [
      { opacity: 1, height: 80, innerHeight: 80 },
      { transform: 'perspective(600px) rotateX(180deg)', color: '#4a1d1d45' },
      { transform: 'perspective(600px) rotateX(0deg)' },
    ],
    leave: [
      { color: '#e8b5ac' },
      { innerHeight: 0 },
      { opacity: 0, height: 0 },
    ],
    update: { color: '#9c6e76' },
  })

  const reset = useCallback(() => {
    ref.current.forEach(clearTimeout)
    ref.current = []
    set([])
    ref.current.push(
      setTimeout(() => set(['herohoro', 'ブログ', 'with Notion']), 2000)
    )
    ref.current.push(setTimeout(() => set(['herohoro', 'with Notion']), 4000))
    ref.current.push(
      setTimeout(() => set(['herohoro', 'デザイン', 'with Notion']), 6500)
    )
    ref.current.push(setTimeout(() => set(['herohoro', 'with Notion']), 8500))
    ref.current.push(
      setTimeout(() => set(['herohoro', 'Happy', 'with Notion']), 12500)
    )
    ref.current.push(setTimeout(() => set(['Happy', 'with Notion']), 15000))
  }, [])

  useEffect(() => {
    reset()
    return () => ref.current.forEach(clearTimeout)
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        {transitions(({ innerHeight, ...rest }, item) => (
          <animated.div
            className={styles.transitionsItem}
            style={rest}
            onClick={reset}
          >
            <animated.div style={{ overflow: 'hidden', height: innerHeight }}>
              {item}
            </animated.div>
          </animated.div>
        ))}
      </div>
    </div>
  )
}
