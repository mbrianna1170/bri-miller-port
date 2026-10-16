import styles from './Contact.module.css'

export default function Contact() {
  return (
    <>
      <section id="contact" className={styles.section}>
        <p className={styles.line}>
          say hello: <a href="mailto:millerbri.08@gmail.com">millerbri.08@gmail.com</a>
        </p>
        <a
          href="https://www.linkedin.com/in/millerbri08/"
          target="_blank"
          rel="noreferrer"
          className={styles.social}
        >
          linkedin
        </a>
      </section>
      <footer className={styles.footer}>
        <p>thanks for stopping by bri's page — come back soon</p>
      </footer>
    </>
  )
}
