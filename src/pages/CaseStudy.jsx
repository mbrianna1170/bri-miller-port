import { useEffect } from 'react'
import { motion } from 'framer-motion'
import LoopyArrow from '../components/LoopyArrow'
import VisualSlot from '../components/caseStudy/VisualSlot'
import StorySection from '../components/caseStudy/StorySection'
import projects from '../data/projects'
import caseStudies from '../data/caseStudies'
import styles from '../components/caseStudy/CaseStudy.module.css'

// the reusable case study page: hero, details, numbered story, next step.
// all the words and images come from a file in src/data/caseStudies/.
export default function CaseStudy({ study }) {
  useEffect(() => {
    document.title = `${study.title} · Bri Miller`
  }, [study.title])

  // next featured project that has its own case study, if any
  const order = projects.map((p) => p.slug).filter((slug) => caseStudies[slug])
  const nextSlug = order[(order.indexOf(study.slug) + 1) % order.length]
  const next = nextSlug !== study.slug ? caseStudies[nextSlug] : null

  // split sections alternate sides, counting only the split ones
  let splitCount = 0

  return (
    <article className={styles.page}>
      <header className={styles.hero}>
        <motion.div
          className={styles.heroText}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          <p className={styles.project}>{study.title}</p>
          <p className={styles.category}>{study.category}</p>
          <h1 className={styles.heroHeadline}>
            {/* each sentence starts its own line */}
            {study.headline.split('. ').map((part, i, all) => (
              <span key={part}>{part}{i < all.length - 1 ? '.' : ''}{i < all.length - 1 && <br />}</span>
            ))}{' '}
            <span className={styles.accent}>{study.highlight}</span>
          </h1>
          <p className={styles.heroIntro}>{study.intro}</p>
        </motion.div>
        <motion.div
          className={styles.heroMedia}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.4 }}
        >
          <VisualSlot {...study.hero} ratio="4 / 3" />
        </motion.div>
      </header>

      <motion.dl
        className={styles.details}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        {study.details.map(({ label, value }) => (
          <div key={label} className={styles.detail}>
            <dt>{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </motion.dl>

      <LoopyArrow delay={1} className={styles.arrow} />

      {study.sections.map((section, i) => (
        <StorySection
          key={section.label}
          section={section}
          number={i + 1}
          site={study.title}
          flipped={section.layout === 'split' && splitCount++ % 2 === 1}
        />
      ))}

      <nav className={styles.end}>
        <a href="/#work" className={styles.pill}>
          <span aria-hidden="true">←</span> back to all work
        </a>
        {next && (
          <a href={`/${next.slug}`} className={styles.pill}>
            next: {next.title.toLowerCase()} <span aria-hidden="true">→</span>
          </a>
        )}
      </nav>
    </article>
  )
}
