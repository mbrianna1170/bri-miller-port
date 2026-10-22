import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CaseStudy from './pages/CaseStudy'
import caseStudies from './data/caseStudies'

// each case study lives at its own url (e.g. /camp-woofs-wiggles);
// anything else shows the homepage. links between pages are plain page loads.
const slug = window.location.pathname.replace(/^\/+|\/+$/g, '')
const study = caseStudies[slug]

function App() {
  // arriving from a case study at /#work etc: scroll to that section once it's rendered
  useEffect(() => {
    if (study || !window.location.hash) return
    document.getElementById(window.location.hash.slice(1))?.scrollIntoView()
  }, [])

  return (
    <>
      <Navbar />
      <main>
        {study
          ? <CaseStudy study={study} />
          : (
            <>
              <Hero />
              <Projects />
              <About />
              <Contact />
            </>
          )}
      </main>
      <Footer />
    </>
  )
}

export default App
