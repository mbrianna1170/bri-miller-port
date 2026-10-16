import { motion } from 'framer-motion'
import briPhoto from '../assets/bri.jpg'
import styles from './About.module.css'

const LINES = [
  'a background in customer experience, reading tickets and spotting patterns.',
  <>drawn to the <em>why</em> behind user behavior.</>,
  "ask me about chick-fil-a's ketchup packets.",
]

const SKILLS = ['Figma', 'User Research', 'Prototyping', 'Wireframing', 'Design Systems', 'Usability Testing']

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <motion.div
        className={styles.inner}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8 }}
      >
        <img src={briPhoto} alt="Bri Miller" className={styles.photo} />
        <div className={styles.lines}>
          {LINES.map((line, i) => (
            <p key={i} className={styles.line}>
              {line}
            </p>
          ))}
        </div>
        <ul className={styles.skills}>
          {SKILLS.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </motion.div>
    </section>
  )
}
