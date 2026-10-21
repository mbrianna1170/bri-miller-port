import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <h2 className="section-banner">contact me</h2>
      <p className={styles.line}>
        say hello: <a href="mailto:millerbri.08@gmail.com">millerbri.08@gmail.com</a>
      </p>
    </section>
  )
}
