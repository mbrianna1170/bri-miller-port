import { motion } from 'framer-motion'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <motion.header
      className={styles.header}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <a href="#" className={styles.logo}>bri miller</a>
      <nav className={styles.links}>
        <a href="#work">work</a>
        <a href="#about">about</a>
        <a href="#contact">contact</a>
        <a href="/resume.pdf" target="_blank" rel="noreferrer" className={styles.resume}>
          resume
        </a>
      </nav>
    </motion.header>
  )
}
