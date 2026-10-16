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
      <a href="mailto:millerbri.08@gmail.com" className={styles.email}>millerbri.08@gmail.com</a>
    </motion.header>
  )
}
