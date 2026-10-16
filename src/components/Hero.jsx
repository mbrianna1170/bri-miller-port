import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Hero.module.css'

const WORDS = ['return to.', 'trust.', 'enjoy.']
const INTERVAL = 2000
const LONGEST_WORD = WORDS.reduce((a, b) => (b.length > a.length ? b : a))

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
          {/* invisible copy of the longest word reserves its width, so the
              rest of the line doesn't shift when the word changes */}
          <span className={styles.sizer} aria-hidden="true">{LONGEST_WORD}</span>
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
      <a href="#work" className={styles.arrow} aria-label="Scroll to featured work">
        <motion.svg
          viewBox="0 0 100 160"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        >
          {/* loopy line draws itself in, then the arrowhead pops on */}
          <motion.path
            d="M22 14 C 58 6, 84 38, 72 76 C 66 96, 40 104, 36 90 C 32 76, 54 72, 62 90 C 70 106, 72 126, 74 146"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.4, delay: 1.2, ease: 'easeInOut' }}
          />
          <motion.path
            d="M63 134 L 74 147 L 84 133"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 2.5 }}
          />
        </motion.svg>
      </a>
    </section>
  )
}
