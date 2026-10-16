import { motion } from 'framer-motion'
import styles from './ProjectCard.module.css'

export default function ProjectCard({ project, index }) {
  return (
    <motion.article
      className={styles.card}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
    >
      <div className={styles.image} style={{ backgroundColor: project.color || '#E8D5C4' }}>
        {project.image
          ? <img src={project.image} alt={project.title} className={styles.projectImg} />
          : <div className={styles.imagePlaceholder}><span>{project.title[0]}</span></div>
        }
      </div>
      <div className={styles.body}>
        <p className={styles.category}>{project.category}</p>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>
        <a href={`#${project.slug}`} className={styles.link}>
          View case study →
        </a>
      </div>
    </motion.article>
  )
}
