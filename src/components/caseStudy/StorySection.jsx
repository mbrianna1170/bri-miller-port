import { motion } from 'framer-motion'
import VisualSlot from './VisualSlot'
import Sitemap from './Sitemap'
import DesignBoard from './DesignBoard'
import NoteCard from './NoteCard'
import FlowSteps from './FlowSteps'
import styles from './CaseStudy.module.css'

// same gentle fade-up as the featured project blocks
const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: 'easeOut' },
}

const pad = (n) => String(n).padStart(2, '0')

function Intro({ section, number }) {
  return (
    <div className={styles.intro}>
      <p className={styles.label}>
        <span className={styles.num}>{pad(number)}</span>
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

// an image slot, or a small card / flow when the visual is words, not pixels
function Visual({ visual, ...slotProps }) {
  if (visual.kind === 'note') return <NoteCard {...visual} />
  // frames side by side, e.g. original vs. redesign (two or three across)
  if (visual.kind === 'pair') {
    return (
      <div className={styles.pair} style={{ '--n': visual.items.length }}>
        {visual.items.map((item, i) => (
          <VisualSlot key={item.caption || i} {...slotProps} {...item} />
        ))}
      </div>
    )
  }
  if (visual.kind === 'flow') {
    return (
      <div className={styles.flowCard}>
        <FlowSteps steps={visual.steps} />
        {visual.note && <p className={styles.caption}>{visual.note}</p>}
      </div>
    )
  }
  return <VisualSlot {...slotProps} {...visual} />
}

// one numbered chapter of the story. `layout` picks how its visuals sit:
// split (text beside a visual, alternating sides), sitemap, personas, design (board),
// process (flow steps, notes, visual gallery), decisions (small text + screenshot rows),
// findings (testing results with before/after), showcase (final screens), cards.
export default function StorySection({ section, number, site, flipped }) {
  const { layout } = section

  if (layout === 'split') {
    // three screens side by side need more room than the text
    const wide = section.visual.kind === 'pair' && section.visual.items.length > 2
    return (
      <motion.section
        className={`${styles.section} ${styles.split} ${flipped ? styles.flipped : ''} ${wide ? styles.splitWide : ''}`}
        {...fadeUp}
      >
        <Intro section={section} number={number} />
        <div className={styles.splitVisual}>
          <Visual visual={section.visual} ratio="4 / 5" />
        </div>
      </motion.section>
    )
  }

  if (layout === 'showcase') {
    return (
      <motion.section className={`${styles.section} ${styles.showcase}`} {...fadeUp}>
        <div className={`section-banner ${styles.showcaseBanner}`}>
          <span className="kicker">{pad(number)} · {section.label.toLowerCase()}</span>
          {section.headline} {section.highlight}
        </div>
        {section.body && (
          <div className={`${styles.body} ${styles.centered}`}>
            {section.body.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
          </div>
        )}

        {/* long phone screens in a staggered row, the bigger ones up front */}
        {section.stagger && (
          <div className={styles.stagger}>
            {section.stagger.map((shot, i) => (
              <VisualSlot
                key={shot.caption || i}
                ratio="auto"
                {...shot}
                className={`${styles.staggerItem} ${shot.size === 'lg' ? styles.staggerLg : ''}`}
              />
            ))}
          </div>
        )}

        {/* one big screen in the middle, supporting screens either side */}
        {section.feature && (
          <div className={styles.kiosk}>
            <VisualSlot {...section.feature} fit="contain" ratio={section.ratio} className={styles.kioskFeature} />
            {section.screens.map((shot, i) => (
              <VisualSlot key={shot.caption || i} {...shot} fit="contain" ratio={section.ratio} />
            ))}
          </div>
        )}

        {section.desktop && (
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
        )}
        {section.mobile && (
          <div className={styles.mobileRow}>
            {section.mobile.map((shot, i) => (
              <VisualSlot key={shot.label || i} {...shot} fit="contain" ratio="9 / 19" />
            ))}
          </div>
        )}
        {section.links && (
          <div className={styles.links}>
            {section.links.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className={styles.pill}>
                {link.text} <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        )}
      </motion.section>
    )
  }

  return (
    <motion.section className={styles.section} {...fadeUp}>
      <Intro section={section} number={number} />

      {layout === 'sitemap' && <Sitemap pages={section.pages} site={site} />}

      {layout === 'personas' && (
        <div className={styles.personas}>
          {section.personas.map((p) => <NoteCard key={p.title} {...p} />)}
        </div>
      )}

      {layout === 'design' && (
        <>
          {section.notes && (
            <ul className={styles.chips}>
              {section.notes.map((note) => <li key={note}>{note}</li>)}
            </ul>
          )}
          <DesignBoard design={section.design} />
        </>
      )}

      {layout === 'process' && (
        <>
          {section.pages && <Sitemap pages={section.pages} site={section.site || site} />}
          {section.flow && (
            <div className={styles.flowCard}>
              <FlowSteps steps={section.flow} />
            </div>
          )}
          {section.notes && (
            <ul className={styles.chips}>
              {section.notes.map((note) => <li key={note}>{note}</li>)}
            </ul>
          )}
          {section.gallery?.map((group) => (
            <div key={group.title} className={styles.gallery}>
              <h3 className={styles.smallTitle}>{group.title}</h3>
              <div
                className={styles.galleryRow}
                style={{ '--cols': group.cols || group.items.length, maxWidth: group.maxWidth, marginInline: group.maxWidth && 'auto' }}
              >
                {group.items.map((item, i) => (
                  <VisualSlot key={item.caption || i} fit="contain" ratio={group.ratio} {...item} />
                ))}
              </div>
            </div>
          ))}
        </>
      )}

      {layout === 'decisions' && (
        <div className={styles.decisions}>
          {section.items.map((item, i) => (
            <div key={item.title} className={`${styles.decision} ${i % 2 ? styles.flipped : ''}`}>
              <div className={styles.decisionText}>
                <h3 className={styles.smallTitle}>{item.title}</h3>
                <p>{item.text}</p>
              </div>
              <VisualSlot fit="contain" ratio="16 / 10" {...item.visual} />
            </div>
          ))}
        </div>
      )}

      {layout === 'findings' && (
        <>
          {section.meta && (
            <ul className={styles.chips}>
              {section.meta.map((m) => <li key={m}>{m}</li>)}
            </ul>
          )}
          {section.tasks && (
            <div className={styles.tasks}>
              <p className={styles.tileLabel}>{section.tasks.title}</p>
              <ol>
                {section.tasks.items.map((t) => <li key={t}>{t}</li>)}
              </ol>
            </div>
          )}
          <div className={styles.findings}>
            {section.items.map((item, i) => (
              <div key={item.title} className={`${styles.finding} ${i % 2 ? styles.flipped : ''}`}>
                <div className={styles.decisionText}>
                  <p className={styles.findingNum}>Finding {pad(i + 1)}</p>
                  <h3 className={styles.smallTitle}>{item.title}</h3>
                  {item.notes.map(({ label, text }) => (
                    <div key={label} className={styles.findingNote}>
                      <p className={styles.tileLabel}>{label}</p>
                      <p>{text}</p>
                    </div>
                  ))}
                </div>
                {/* a flow spans the whole row, so only screens count as columns */}
                <div
                  className={styles.findingVisuals}
                  style={{ '--cols': item.visuals.filter((v) => v.kind !== 'flow').length || 1 }}
                >
                  {item.visuals.map((v, j) => (
                    <Visual key={v.caption || j} visual={v} fit="contain" ratio={section.ratio} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </>
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

      {/* a one-line "so what" that closes the section */}
      {section.takeaway && (
        <div className={styles.takeaway}>
          <p className={styles.placeholderTag}>{section.takeaway.label}</p>
          <p className={styles.takeawayText}>{section.takeaway.text}</p>
        </div>
      )}
    </motion.section>
  )
}
