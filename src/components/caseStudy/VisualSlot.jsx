import styles from './CaseStudy.module.css'

// a frame for any case study visual. with a `src` it shows the image;
// without one it's a clearly labeled placeholder to swap out later.
// fit 'contain' floats a screenshot whole on the soft backdrop (like the project cards);
// fit 'top' crops a long scrolling screen to its top, like a phone mid-scroll.
// ratio 'auto' lets the image keep its own shape.
export default function VisualSlot({ src, alt = '', label, caption, fit = 'cover', ratio = '4 / 3', className = '' }) {
  const fitClass = src && fit === 'contain' ? styles.contain : src && fit === 'top' ? styles.top : ''
  return (
    <figure className={`${styles.slot} ${className}`}>
      <div
        className={`${styles.frame} ${fitClass}`}
        style={ratio === 'auto' ? undefined : { aspectRatio: ratio }}
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
