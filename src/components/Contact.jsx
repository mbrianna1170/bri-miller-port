import styles from './Contact.module.css'

const LINKS = [
  { label: 'say hello', text: 'millerbri.08@gmail.com', href: 'mailto:millerbri.08@gmail.com' },
  { label: 'connect', text: 'linkedin.com/in/millerbri08', href: 'https://www.linkedin.com/in/millerbri08/', external: true },
  { label: 'resume', text: 'view pdf', href: '/resume.pdf', external: true },
]

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <h2 className="section-banner">contact me</h2>
      <ul className={styles.list}>
        {LINKS.map(({ label, text, href, external }) => (
          <li key={label} className={styles.line}>
            {label}:{' '}
            <a href={href} {...(external && { target: '_blank', rel: 'noreferrer' })}>
              {text}
            </a>
            {external && <span className={styles.ext} aria-hidden="true"> ↗</span>}
          </li>
        ))}
      </ul>
    </section>
  )
}
