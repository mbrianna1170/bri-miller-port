import styles from './CaseStudy.module.css'

// a numbered step-by-step flow that wraps onto new lines.
// steps marked `removed` are struck through (e.g. cut after testing).
export default function FlowSteps({ steps }) {
  return (
    <ol className={styles.flow}>
      {steps.map((step, i) => {
        const { name, removed } = typeof step === 'string' ? { name: step } : step
        return (
          <li key={name} className={`${styles.step} ${removed ? styles.removed : ''}`}>
            <span className={styles.stepNum}>{String(i + 1).padStart(2, '0')}</span>
            {name}
          </li>
        )
      })}
    </ol>
  )
}
