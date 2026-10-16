import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="#" className={styles.name}>bri miller</a>
      <p className={styles.copy}>© {new Date().getFullYear()} Bri Miller · All rights reserved</p>
      <nav className={styles.links}>
        <a href="https://www.linkedin.com/in/millerbri08/" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="/resume.pdf" target="_blank" rel="noreferrer">Résumé</a>
        <a href="#work">Work</a>
      </nav>
    </footer>
  )
}
