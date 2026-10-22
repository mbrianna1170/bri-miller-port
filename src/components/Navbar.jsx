import { motion } from 'framer-motion'
import styles from './Navbar.module.css'

// on the homepage the logo just scrolls back to the top; elsewhere it goes home
const homeHref = window.location.pathname === '/' ? '#' : '/'

export default function Navbar() {
  return (
    <motion.header
      className={styles.header}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <a href={homeHref} className={styles.logo}>bri miller</a>
      <nav className={styles.links}>
        <a href="/#work">work</a>
        <a href="/#about">about</a>
        <a href="/#contact">contact</a>
        <a href="/resume.pdf" target="_blank" rel="noreferrer" className={styles.resume}>
          resume
        </a>
      </nav>
    </motion.header>
  )
}
