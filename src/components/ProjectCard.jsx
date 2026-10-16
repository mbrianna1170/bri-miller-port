import { motion } from 'framer-motion'
import styles from './ProjectCard.module.css'

export default function ProjectCard({ project, index }) {
  return (
    <motion.a
      href={`#${project.slug}`}
      className={styles.item}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
    >
      <div className={styles.thumb}>
        <img src={project.image} alt={project.title} className={styles.img} />
        <span className={styles.view}>view case study</span>
      </div>
      <div className={styles.meta}>
        <span className={styles.title}>{project.title}</span>
        <span className={styles.category}>{project.category.toLowerCase()}</span>
      </div>
    </motion.a>
  )
}
