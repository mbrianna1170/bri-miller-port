import { motion } from 'framer-motion'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <motion.nav
      className={styles.nav}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <span className={styles.logo}>bri miller</span>
      <div className={styles.links}>
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </motion.nav>
  )
}
