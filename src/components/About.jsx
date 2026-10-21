import { motion } from 'framer-motion'
import briPhoto from '../assets/bri.jpg'
import LoopyArrow from './LoopyArrow'
import styles from './About.module.css'

const SKILLS = [
  'User Research',
  'Wireframing',
  'Prototyping',
  'Usability Testing',
  'Visual Design',
  'HTML & CSS',
  'JavaScript',
  'Figma',
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
      <div className={styles.inner}>
        <h2 className="section-banner">
          <span className="kicker">(a little)</span>
          about me
        </h2>

        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <img src={briPhoto} alt="Bri Miller" className={styles.photo} />

          <div className={styles.text}>
            <h3 className={styles.headline}>
              curious about the why. <span className={styles.accent}>creative with the how.</span>
            </h3>

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
          </div>
        </motion.div>
      </div>

      <div className={styles.marqueeWrap}>
        <div className={styles.skillsIntro}>
          <LoopyArrow onView className={styles.smallArrow} />
          <h3 className={styles.skillsLabel}>skills &amp; tools</h3>
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
