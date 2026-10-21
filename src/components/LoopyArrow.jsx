import { motion } from 'framer-motion'

// hand-drawn loopy arrow: the line draws itself in, then the arrowhead pops on.
// `onView` waits until it scrolls into view instead of starting on page load.
export default function LoopyArrow({ delay = 0, onView = false, bob = false, className }) {
  const line = {
    hidden: { pathLength: 0 },
    shown: { pathLength: 1, transition: { duration: 1.4, delay, ease: 'easeInOut' } },
  }
  const head = {
    hidden: { opacity: 0 },
    shown: { opacity: 1, transition: { duration: 0.3, delay: delay + 1.3 } },
  }
  const trigger = onView
    ? { whileInView: 'shown', viewport: { once: true, margin: '-40px' } }
    : { animate: 'shown' }

  return (
    <motion.span
      className={className}
      style={{ display: 'block' }}
      animate={bob ? { y: [0, 6, 0] } : undefined}
      transition={bob ? { duration: 2.4, repeat: Infinity, ease: 'easeInOut', delay: delay + 1.8 } : undefined}
    >
      <motion.svg
        viewBox="0 0 100 160"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ display: 'block', width: '100%', height: 'auto', overflow: 'visible' }}
        initial="hidden"
        {...trigger}
      >
        <motion.path
          d="M22 14 C 58 6, 84 38, 72 76 C 66 96, 40 104, 36 90 C 32 76, 54 72, 62 90 C 70 106, 72 126, 74 146"
          variants={line}
        />
        <motion.path d="M63 134 L 74 147 L 84 133" variants={head} />
      </motion.svg>
    </motion.span>
  )
}
