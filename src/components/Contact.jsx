import styles from './Contact.module.css'

const LINKS = [
  { label: 'say hello', text: 'millerbri.08@gmail.com', href: 'mailto:millerbri.08@gmail.com' },
  { label: 'connect', text: 'linkedin.com/in/millerbri08', href: 'https://www.linkedin.com/in/millerbri08/', external: true },
  { label: 'resume', text: 'download pdf', href: '/resume.pdf', download: 'Bri_Miller_Resume.pdf' },
]

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <h2 className="section-banner">contact me</h2>
      <ul className={styles.list}>
        {LINKS.map(({ label, text, href, external, download }) => (
          <li key={label} className={styles.line}>
            {label}:{' '}
            <a href={href} download={download} {...(external && { target: '_blank', rel: 'noreferrer' })}>
              {text}
            </a>
            {external && <span className={styles.ext} aria-hidden="true"> ↗</span>}
            {download && <span className={styles.ext} aria-hidden="true"> ↓</span>}
          </li>
        ))}
      </ul>
    </section>
  )
}
