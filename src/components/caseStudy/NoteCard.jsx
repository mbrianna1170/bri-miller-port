import styles from './CaseStudy.module.css'

// a compact titled card of short lists: a project brief, a user persona, etc.
// used in place of an image when the story is better told in a few words.
export default function NoteCard({ tag, title, groups }) {
  return (
    <div className={styles.noteCard}>
      <p className={styles.placeholderTag}>{tag}</p>
      <p className={styles.noteTitle}>{title}</p>
      {groups.map(({ label, items }) => (
        <div key={label} className={styles.noteGroup}>
          <p className={styles.tileLabel}>{label}</p>
          <ul>
            {items.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      ))}
    </div>
  )
}
