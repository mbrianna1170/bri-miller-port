import { useEffect } from 'react'
import VisualSlot from './VisualSlot'
import styles from './CaseStudy.module.css'

// the project's visual system on one board: palette, type, logo, imagery, ui,
// plus an optional row of finished screens. every tile is optional, and any
// tile given a placeholder `label` instead of real values shows a labeled frame.
// the project's own fonts load only while this page is open.
export default function DesignBoard({ design }) {
  const { palette, paletteSlot, fontsHref, type, specimenColor, logo, imagery, imageryLabel = 'Imagery', ui, screens } = design

  useEffect(() => {
    if (!fontsHref) return
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = fontsHref
    document.head.appendChild(link)
    return () => link.remove()
  }, [fontsHref])

  return (
    <>
      <div className={styles.board}>
        <div className={`${styles.tile} ${styles.tileWide}`}>
          <p className={styles.tileLabel}>Color</p>
          {palette
            ? (
              <ul className={styles.swatches}>
                {palette.map(({ hex, use }) => (
                  <li key={hex} className={styles.swatch}>
                    <span className={styles.chip} style={{ background: hex }} />
                    <span className={styles.hex}>{hex}</span>
                    <span className={styles.use}>{use}</span>
                  </li>
                ))}
              </ul>
            )
            : <VisualSlot {...paletteSlot} ratio="16 / 5" />}
        </div>

        <div className={styles.tile}>
          <p className={styles.tileLabel}>Typography</p>
          <ul className={styles.specimens}>
            {type.map(({ family, use, weight }) => (
              <li key={family}>
                <span
                  className={styles.specimen}
                  style={{ fontFamily: `'${family}', sans-serif`, fontWeight: weight, color: specimenColor }}
                >
                  Aa
                </span>
                <span className={styles.family}>{family}</span>
                <span className={styles.use}>{use}</span>
              </li>
            ))}
          </ul>
        </div>

        {logo && (
          <div className={styles.tile}>
            <p className={styles.tileLabel}>Logo</p>
            {logo.src
              ? <img src={logo.src} alt={logo.alt} className={styles.logoImg} />
              : <VisualSlot label={logo.label} ratio="4 / 3" />}
          </div>
        )}

        {imagery && (
          <div className={`${styles.tile} ${logo ? styles.tileWide : styles.tileFull}`}>
            <p className={styles.tileLabel}>{imageryLabel}</p>
            <div className={styles.imagery}>
              {imagery.map((img, i) => (
                <VisualSlot key={img.src || img.label || i} {...img} ratio="1 / 1" />
              ))}
            </div>
          </div>
        )}

        {ui && (
          <div className={`${styles.tile} ${styles.tileFull}`}>
            <p className={styles.tileLabel}>UI Elements</p>
            {Array.isArray(ui)
              ? (
                // several real pieces cut from the design, side by side
                <div className={styles.uiRow}>
                  {ui.map((piece, i) => (
                    <VisualSlot key={piece.caption || i} fit="contain" ratio="auto" {...piece} />
                  ))}
                </div>
              )
              : <VisualSlot {...ui} ratio="21 / 6" />}
          </div>
        )}
      </div>

      {screens && (
        <div className={`${styles.galleryRow} ${styles.boardScreens}`} style={{ '--cols': screens.items.length }}>
          {screens.items.map((shot, i) => (
            <VisualSlot key={shot.caption || i} fit="contain" ratio={screens.ratio} {...shot} />
          ))}
        </div>
      )}
    </>
  )
}
