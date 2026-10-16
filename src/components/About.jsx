import { motion } from 'framer-motion'
import briPhoto from '../assets/bri.jpg'
import styles from './About.module.css'

const SKILLS = [
  'Figma',
  'User Research',
  'Wireframing',
  'Prototyping',
  'Usability Testing',
  'Visual Design',
  'HTML & CSS',
  'JavaScript',
  'AI-Assisted Design & Development',
]

function Asterisk() {
  return (
    <svg className={styles.asterisk} viewBox="0 0 20 20" aria-hidden="true">
      <path d="M10 2v16M3.07 6l13.86 8M3.07 14l13.86-8" />
    </svg>
  )
}

// one full run of skills; rendered twice so the loop has no visible seam
function SkillRun({ hidden }) {
  return (
    <ul className={styles.run} aria-hidden={hidden || undefined}>
      {SKILLS.map((skill) => (
        <li key={skill} className={styles.skill}>
          <Asterisk />
          <span>{skill}</span>
        </li>
      ))}
    </ul>
  )
}

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <motion.div
        className={styles.inner}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <img src={briPhoto} alt="Bri Miller" className={styles.photo} />

        <p className={styles.label}>a little about me</p>
        <h2 className={styles.headline}>
          creative by nature. <span className={styles.accent}>intentional by design.</span>
        </h2>

        <div className={styles.body}>
          <p>
            i'm a UX/UI designer with a background in customer experience and an eye for the
            little details. years of listening to customers, solving problems, and spotting
            patterns shaped how i approach design today.
          </p>
          <p>
            i believe the best experiences balance thoughtful functionality with a little
            unexpected delight.
          </p>
        </div>

        <p className={styles.signoff}>p.s. ask me about chick-fil-a's ketchup packets.</p>
      </motion.div>

      <div className={styles.marqueeWrap}>
        <div className={styles.marqueeHeader}>
          <span>things i work with</span>
          <span>design · build · explore</span>
        </div>
        <div className={styles.marquee}>
          <div className={styles.fade}>
            <div className={styles.track}>
              <SkillRun />
              <SkillRun hidden />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
