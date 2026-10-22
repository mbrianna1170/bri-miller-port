import { useEffect } from 'react'
import VisualSlot from './VisualSlot'
import styles from './CaseStudy.module.css'

// the project's visual system on one board: palette, type, logo, imagery, ui.
// the project's own fonts load only while this page is open.
export default function DesignBoard({ design }) {
  const { palette, fontsHref, type, logo, imagery, ui } = design

  useEffect(() => {
    if (!fontsHref) return
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = fontsHref
    document.head.appendChild(link)
    return () => link.remove()
  }, [fontsHref])

  return (
    <div className={styles.board}>
      <div className={`${styles.tile} ${styles.tileWide}`}>
        <p className={styles.tileLabel}>Color</p>
        <ul className={styles.swatches}>
          {palette.map(({ hex, use }) => (
            <li key={hex} className={styles.swatch}>
              <span className={styles.chip} style={{ background: hex }} />
              <span className={styles.hex}>{hex}</span>
              <span className={styles.use}>{use}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.tile}>
        <p className={styles.tileLabel}>Typography</p>
        <ul className={styles.specimens}>
          {type.map(({ family, use, weight }) => (
            <li key={family}>
              <span className={styles.specimen} style={{ fontFamily: `'${family}', sans-serif`, fontWeight: weight }}>
                Aa
              </span>
              <span className={styles.family}>{family}</span>
              <span className={styles.use}>{use}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.tile}>
        <p className={styles.tileLabel}>Logo</p>
        {logo.src
          ? <img src={logo.src} alt={logo.alt} className={styles.logoImg} />
          : <VisualSlot label={logo.label} ratio="4 / 3" />}
      </div>

      <div className={`${styles.tile} ${styles.tileWide}`}>
        <p className={styles.tileLabel}>Imagery</p>
        <div className={styles.imagery}>
          {imagery.map((img, i) => (
            <VisualSlot key={img.src || i} {...img} ratio="1 / 1" />
          ))}
        </div>
      </div>

      <div className={`${styles.tile} ${styles.tileFull}`}>
        <p className={styles.tileLabel}>UI Elements</p>
        <VisualSlot {...ui} ratio="21 / 6" />
      </div>
    </div>
  )
}
