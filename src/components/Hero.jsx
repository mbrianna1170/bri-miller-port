import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Hero.module.css'

const WORDS = ['return to.', 'trust.', 'enjoy.']
const INTERVAL = 2000

// the main line plus two fading "echoes" underneath it
const LINES = [
  { className: styles.main, delay: 0.2 },
  { className: styles.echo1, delay: 0.55 },
  { className: styles.echo2, delay: 0.8 },
]

function HeroLine({ word, wordKey, className, delay, ariaHidden }) {
  return (
    <motion.p
      className={`${styles.line} ${className} jitter`}
      style={{ animationDelay: `${delay}s` }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay, ease: 'easeOut' }}
      aria-hidden={ariaHidden}
    >
      hi, i'm bri and i design experiences people{' '}
      <span className={styles.wordWrapper}>
        <AnimatePresence mode="wait">
          <motion.em
            key={wordKey}
            className={styles.word}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            {word}
          </motion.em>
        </AnimatePresence>
      </span>
    </motion.p>
  )
}

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
      <h1 className={styles.srOnly}>Bri Miller, UX/UI designer</h1>
      <div className={styles.lines}>
        {LINES.map((line, i) => (
          <HeroLine
            key={i}
            word={WORDS[index]}
            wordKey={index}
            className={line.className}
            delay={line.delay}
            ariaHidden={i > 0}
          />
        ))}
      </div>
      <motion.p
        className={styles.tagline}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        ux/ui designer · based wherever wi-fi is good
      </motion.p>
    </section>
  )
}
