import { motion } from 'framer-motion'
import briPhoto from '../assets/bri.jpg'
import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <motion.div
        className={styles.inner}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7 }}
      >
        <div className={styles.text}>
          <p className={styles.eyebrow}>About me</p>
          <h2 className={styles.heading}>
            I design with empathy <br />
            <em>and a little bit of fun.</em>
          </h2>
          <p className={styles.bio}>
            Hi, I'm Bri — a UX/UI designer with a background in customer experience, spending time on the support side of e-commerce, reading through tickets, spotting patterns, and watching how real people struggle with digital products in real time.
          </p>
          <p className={styles.bio}>
            That experience shapes how I approach design — I'm drawn to the <em>why</em> behind user behavior, and I care a lot about the small details that make something feel easy to use. I'm currently growing into UX research and product experience, where I can keep turning user insights into better decisions.
          </p>
          <p className={styles.bio}>
            Ask me about Odele's clarifying shampoo bottle or Chick-fil-A's ketchup packets — proof that the simplest designs are often the most brilliant.
          </p>
          <div className={styles.skills}>
            {['Figma', 'User Research', 'Prototyping', 'Wireframing', 'Design Systems', 'Usability Testing'].map((s) => (
              <span key={s} className={styles.skill}>{s}</span>
            ))}
          </div>
        </div>
        <div className={styles.imageArea}>
          <img src={briPhoto} alt="Bri Miller" className={styles.photo} />
          <div className={styles.decorDot} />
        </div>
      </motion.div>
    </section>
  )
}
