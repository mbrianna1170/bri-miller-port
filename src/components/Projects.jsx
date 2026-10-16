import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProjectCard from './ProjectCard'
import projects from '../data/projects'
import styles from './Projects.module.css'

const PREVIEW_COUNT = projects.length


export default function Projects() {
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? projects : projects.slice(0, PREVIEW_COUNT)

  return (
    <section id="work" className={styles.section}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className={styles.eyebrow}>Selected Work</p>
        <h2 className={styles.heading}>
          Projects that <em>made an impact.</em>
        </h2>
      </motion.div>

      <div className={styles.grid}>
        <AnimatePresence>
          {visible.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </AnimatePresence>
      </div>

      {!showAll && PREVIEW_COUNT < projects.length && (
        <motion.div
          className={styles.seeMore}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <button className={styles.seeMoreBtn} onClick={() => setShowAll(true)}>
            See all projects ({projects.length - PREVIEW_COUNT} more)
          </button>
        </motion.div>
      )}
    </section>
  )
}
