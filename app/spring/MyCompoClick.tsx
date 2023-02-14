'use client'
import { useSpring, animated } from '@react-spring/web'

type Props = {
  opacity: number
  x: string
}

export default function MyCompoClick() {
  const [springs, api] = useSpring(() => ({
    from: { x: 0 },
  }))
  const handleClick = () => {
    api.start({
      from: {
        x: 0,
      },
      to: {
        x: 100,
      },
    })
  }
  return (
    <animated.div
      onClick={handleClick}
      style={{
        width: 80,
        height: 80,
        background: '#ff6d6d',
        borderRadius: 8,
        ...springs,
      }}
    />
  )
}
