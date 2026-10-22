import styles from './CaseStudy.module.css'

// a frame for any case study visual. with a `src` it shows the image;
// without one it's a clearly labeled placeholder to swap out later.
// fit 'contain' floats a screenshot whole on the soft backdrop (like the project cards).
export default function VisualSlot({ src, alt = '', label, caption, fit = 'cover', ratio = '4 / 3', className = '' }) {
  return (
    <figure className={`${styles.slot} ${className}`}>
      <div
        className={`${styles.frame} ${src && fit === 'contain' ? styles.contain : ''}`}
        style={{ aspectRatio: ratio }}
      >
        {src
          ? <img src={src} alt={alt} className={styles.frameImg} loading="lazy" />
          : (
            <span className={styles.placeholder}>
              <span className={styles.placeholderTag}>placeholder</span>
              {label}
            </span>
          )}
      </div>
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  )
}
