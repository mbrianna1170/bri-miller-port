import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Hero.module.css'

const WORDS = ['return to.', 'trust.', 'enjoy.']
const INTERVAL = 2000

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
      <motion.h1
        className={`${styles.headline} jitter`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
      >
        hi, i'm bri and i design experiences people{' '}
        <span className={styles.wordWrapper}>
          <AnimatePresence mode="wait">
            <motion.em
              key={index}
              className={styles.word}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
            >
              {WORDS[index]}
            </motion.em>
          </AnimatePresence>
        </span>
      </motion.h1>
      <motion.p
        className={styles.tagline}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        ux/ui designer · based wherever wi-fi is good
      </motion.p>
    </section>
  )
}
