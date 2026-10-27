import { useEffect, useRef, useState } from 'react'
import styles from './Contact.module.css'

const EMAIL = 'millerbri.08@gmail.com'

const LINKS = [
  { label: 'connect', text: 'linkedin.com/in/millerbri08', href: 'https://www.linkedin.com/in/millerbri08/', external: true },
  { label: 'resume', text: 'download pdf', href: '/resume.pdf', download: 'Bri_Miller_Resume.pdf' },
]

// clicking the email copies it and says "copied!" for a moment
function CopyEmail() {
  const [copied, setCopied] = useState(false)
  const timer = useRef()
  useEffect(() => () => clearTimeout(timer.current), [])

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
    } catch {
      // older browsers: copy through a hidden text box
      const box = document.createElement('textarea')
      box.value = EMAIL
      document.body.appendChild(box)
      box.select()
      document.execCommand('copy')
      box.remove()
    }
    setCopied(true)
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button type="button" className={styles.copy} onClick={copy} aria-label={`copy email address ${EMAIL}`}>
      {/* the email keeps its width while "copied!" shows, so the line doesn't jump */}
      <span className={copied ? styles.hidden : ''}>{EMAIL}</span>
      {copied && <span className={styles.copied} aria-live="polite">copied!</span>}
    </button>
  )
}

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <h2 className="section-banner">contact me</h2>
      <ul className={styles.list}>
        <li className={styles.line}>
          say hello: <CopyEmail />
        </li>
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
