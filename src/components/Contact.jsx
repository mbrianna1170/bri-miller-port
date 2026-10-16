import { motion } from 'framer-motion'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <motion.div
        className={styles.inner}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className={styles.eyebrow}>Let's connect</p>
        <h2 className={styles.heading}>
          Let's build something <br />
          <em>great together.</em>
        </h2>
        <p className={styles.sub}>
          My inbox is always open.
        </p>
        <a href="mailto:millerbri.08@gmail.com" className={styles.emailBtn}>
          Say hello →
        </a>
        <div className={styles.socials}>
          <a href="https://www.linkedin.com/in/millerbri08/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </motion.div>
      <div className={styles.footer}>
        <p>© 2025 Bri Miller · Designed & built with love</p>
      </div>
    </section>
  )
}
