import styles from './Footer.module.css'

// on the homepage the name just scrolls back to the top; elsewhere it goes home
const homeHref = window.location.pathname === '/' ? '#' : '/'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a href={homeHref} className={styles.name}>bri miller</a>
      <p className={styles.copy}>© {new Date().getFullYear()} Bri Miller · All rights reserved</p>
      <nav className={styles.links}>
        <a href="https://www.linkedin.com/in/millerbri08/" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="/resume.pdf" download="Bri_Miller_Resume.pdf">Resume</a>
        <a href="/#work">Work</a>
      </nav>
    </footer>
  )
}
