import campWoofs from './camp-woofs-wiggles'
import bowlsome from './bowlsome-smoothie'

// every case study, keyed by its url slug (e.g. /camp-woofs-wiggles).
// to add one: make a new file like camp-woofs-wiggles.js and list it here.
const caseStudies = Object.fromEntries(
  [campWoofs, bowlsome].map((study) => [study.slug, study]),
)

export default caseStudies
