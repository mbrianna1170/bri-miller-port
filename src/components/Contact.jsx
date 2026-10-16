import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <p className={styles.line}>
        say hello: <a href="mailto:millerbri.08@gmail.com">millerbri.08@gmail.com</a>
      </p>
      <div className={styles.socials}>
        <a href="/resume.pdf" target="_blank" rel="noreferrer" className={styles.social}>
          resume ↗
        </a>
        <a
          href="https://www.linkedin.com/in/millerbri08/"
          target="_blank"
          rel="noreferrer"
          className={styles.social}
        >
          linkedin ↗
        </a>
      </div>
    </section>
  )
}
