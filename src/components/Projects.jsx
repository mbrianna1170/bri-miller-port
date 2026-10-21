import ProjectCard from './ProjectCard'
import projects from '../data/projects'
import styles from './Projects.module.css'

export default function Projects() {
  return (
    <section id="work" className={styles.section}>
      <h2 className="section-banner">featured work</h2>
      <div className={styles.grid}>
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}
