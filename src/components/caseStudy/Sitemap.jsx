import styles from './CaseStudy.module.css'

// simple sitemap: the site at the top, a branch line, then one card per page
export default function Sitemap({ pages, site }) {
  return (
    <div className={styles.sitemap}>
      <p className={styles.siteRoot}>{site}</p>
      <span className={styles.trunk} aria-hidden="true" />
      <ul className={styles.pages} style={{ '--count': pages.length }}>
        {pages.map((page) => (
          <li key={page.name} className={styles.pageCard}>
            <p className={styles.pageName}>{page.name}</p>
            {page.notes && (
              <ul className={styles.pageNotes}>
                {page.notes.map((note) => <li key={note}>{note}</li>)}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
