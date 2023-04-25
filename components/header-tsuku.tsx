import Link from 'next/link'
import Image from 'next/image'
import { NEXT_PUBLIC_SITE_TITLE } from '../app/server-constants'
import styles from '../styles/header-tsuku.module.css'

interface NavItem {
  label: string
  path: string
}

const HeaderTsuku = () => {
  const navItems: NavItem[] = [
    { label: 'Home', path: '/' },
    { label: 'Map', path: '/map' },
    { label: 'Blog', path: '/blog' },
    { label: 'Space', path: '/space' },
    { label: 'About', path: '/about' },
  ]

  return (
    <div className={styles.contents}>
      <header className={styles.header}>
        <h1>
          <Link href="/">
            <Image
              src="/herohoro_title.png"
              width={200}
              height={50}
              style={{ objectFit: 'contain', width: '100%' }}
              alt={NEXT_PUBLIC_SITE_TITLE}
            />
          </Link>
        </h1>

        <ul className={styles.naviContent}>
          {navItems.map(({ label, path }) => (
            <li key={label}>
              <Link href={path}>{label}</Link>
            </li>
          ))}
        </ul>
      </header>
    </div>
  )
}

export default HeaderTsuku
