import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import styles from './Navbar.module.css'

// on the homepage the logo just scrolls back to the top; elsewhere it goes home
const homeHref = window.location.pathname === '/' ? '#' : '/'

// hides while scrolling down so it never covers the work,
// slides back in as soon as you scroll up
function useScrollState() {
  const [state, setState] = useState({ hidden: false, scrolled: false })
  useEffect(() => {
    let last = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      const scrolled = y > 80
      // small moves (trackpad jitter) don't flip it
      if (Math.abs(y - last) < 6) return
      setState({ hidden: scrolled && y > last, scrolled })
      last = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return state
}

export default function Navbar() {
  const { hidden, scrolled } = useScrollState()

  return (
    <motion.header
      className={`${styles.header} ${hidden ? styles.hidden : ''} ${scrolled ? styles.scrolled : ''}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <a href={homeHref} className={styles.logo}>bri miller</a>
      <nav className={styles.links}>
        <a href="/#work">work</a>
        <a href="/#about">about</a>
        <a href="/#contact">contact</a>
        <a href="/resume.pdf" download="Bri_Miller_Resume.pdf" className={styles.resume}>
          resume
        </a>
      </nav>
    </motion.header>
  )
}
