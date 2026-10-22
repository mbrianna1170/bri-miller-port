import { motion } from 'framer-motion'
import VisualSlot from './VisualSlot'
import Sitemap from './Sitemap'
import DesignBoard from './DesignBoard'
import styles from './CaseStudy.module.css'

// same gentle fade-up as the featured project blocks
const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: 'easeOut' },
}

function Intro({ section, number }) {
  return (
    <div className={styles.intro}>
      <p className={styles.label}>
        <span className={styles.num}>{String(number).padStart(2, '0')}</span>
        {section.label}
      </p>
      <h2 className={styles.headline}>
        {section.headline} <span className={styles.accent}>{section.highlight}</span>
      </h2>
      {section.body && (
        <div className={styles.body}>
          {section.body.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
        </div>
      )}
    </div>
  )
}

// one numbered chapter of the story. `layout` picks how its visuals sit:
// split (text beside a visual, alternating sides), sitemap, design (board),
// decisions (small text + screenshot rows), showcase (final screens), cards.
export default function StorySection({ section, number, site, flipped }) {
  const { layout } = section

  if (layout === 'split') {
    return (
      <motion.section className={`${styles.section} ${styles.split} ${flipped ? styles.flipped : ''}`} {...fadeUp}>
        <Intro section={section} number={number} />
        <VisualSlot {...section.visual} ratio="4 / 5" className={styles.splitVisual} />
      </motion.section>
    )
  }

  if (layout === 'showcase') {
    return (
      <motion.section className={`${styles.section} ${styles.showcase}`} {...fadeUp}>
        <div className={`section-banner ${styles.showcaseBanner}`}>
          <span className="kicker">{String(number).padStart(2, '0')} · {section.label.toLowerCase()}</span>
          {section.headline} {section.highlight}
        </div>
        <div className={styles.desktopGrid}>
          {section.desktop.map((shot, i) => (
            <VisualSlot
              key={shot.caption || i}
              {...shot}
              fit="contain"
              ratio="16 / 10"
              className={i === 0 ? styles.desktopLead : ''}
            />
          ))}
        </div>
        <div className={styles.mobileRow}>
          {section.mobile.map((shot, i) => (
            <VisualSlot key={shot.label || i} {...shot} fit="contain" ratio="9 / 19" />
          ))}
        </div>
        {section.link && (
          <a href={section.link.href} target="_blank" rel="noreferrer" className={styles.pill}>
            {section.link.text} <span aria-hidden="true">↗</span>
          </a>
        )}
      </motion.section>
    )
  }

  return (
    <motion.section className={styles.section} {...fadeUp}>
      <Intro section={section} number={number} />

      {layout === 'sitemap' && <Sitemap pages={section.pages} site={site} />}

      {layout === 'design' && <DesignBoard design={section.design} />}

      {layout === 'decisions' && (
        <div className={styles.decisions}>
          {section.items.map((item, i) => (
            <div key={item.title} className={`${styles.decision} ${i % 2 ? styles.flipped : ''}`}>
              <div className={styles.decisionText}>
                <h3 className={styles.smallTitle}>{item.title}</h3>
                <p>{item.text}</p>
              </div>
              <VisualSlot {...item.visual} fit="contain" ratio="16 / 10" />
            </div>
          ))}
        </div>
      )}

      {layout === 'cards' && (
        <div className={styles.cards}>
          {section.items.map((item) => (
            <div key={item.title} className={styles.card}>
              <h3 className={styles.smallTitle}>{item.title}</h3>
              {item.text
                ? <p>{item.text}</p>
                : (
                  <p className={styles.cardPlaceholder}>
                    <span className={styles.placeholderTag}>placeholder</span>
                    {item.placeholder}
                  </p>
                )}
            </div>
          ))}
        </div>
      )}
    </motion.section>
  )
}
