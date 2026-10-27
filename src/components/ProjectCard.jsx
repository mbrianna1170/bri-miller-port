import { motion } from 'framer-motion'
import caseStudies from '../data/caseStudies'
import styles from './ProjectCard.module.css'

// one featured project: big image on one side, context + CTA on the other.
// every other project flips sides so the section reads like a spread.
export default function ProjectCard({ project, index }) {
  const flipped = index % 2 === 1
  // projects with a written case study open its page; the rest stay put for now
  const href = caseStudies[project.slug] ? `/${project.slug}` : `#${project.slug}`

  return (
    <motion.article
      className={`${styles.feature} ${flipped ? styles.flipped : ''}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <a
        href={href}
        className={`${styles.media} ${styles[project.imageFit] || ''}`}
        style={project.imageBg ? { background: project.imageBg } : undefined}
        aria-label={`${project.title} case study`}
      >
        {project.image
          ? <img src={project.image} alt={project.title} className={styles.img} />
          : <span className={styles.placeholder}>image coming soon</span>
        }
      </a>

      <div className={styles.info}>
        <p className={styles.number}>{String(index + 1).padStart(2, '0')}</p>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.category}>{project.category}</p>
        <p className={styles.description}>{project.description}</p>
        <p className={styles.tags}>{project.tags.join(' · ')}</p>
        <a href={href} className={styles.cta}>
          read case study <span aria-hidden="true">→</span>
        </a>
      </div>
    </motion.article>
  )
}
