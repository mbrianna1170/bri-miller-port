import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Hero.module.css'

const WORDS = ['return to.', 'trust.', 'enjoy.']
const INTERVAL = 1600

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: 'easeOut' },
})

export default function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % WORDS.length)
    }, INTERVAL)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <motion.p className={styles.eyebrow} {...fadeUp(0.2)}>
          UX/UI Designer 📍 based wherever Wi-Fi is good
        </motion.p>
        <motion.h1 className={styles.headline} {...fadeUp(0.4)}>
          Designing experiences <br />
          <span className={styles.rotatingLine}>
            people{' '}
            <span className={styles.rotatingWrapper}>
              <AnimatePresence mode="wait">
                <motion.em
                  key={index}
                  className={styles.rotatingWord}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                >
                  {WORDS[index]}
                </motion.em>
              </AnimatePresence>
            </span>
          </span>
        </motion.h1>
        <motion.p className={styles.sub} {...fadeUp(0.6)}>
          I blend user insight with bold, intentional design to build things that feel as good as they look.
        </motion.p>
        <motion.div className={styles.cta} {...fadeUp(0.8)}>
          <a href="#work" className={styles.btnPrimary}>See my work ↓</a>
          <a href="#contact" className={styles.btnSecondary}>Get in touch</a>
        </motion.div>
      </div>

      <motion.div
        className={styles.blob}
        animate={{ scale: [1, 1.05, 1], rotate: [0, 6, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
    </section>
  )
}
