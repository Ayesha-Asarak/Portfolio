import { useState, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'
import PageLoader from './components/PageLoader'
import ScrollProgress from './components/ScrollProgress'
import ScrollToTop from './components/ScrollToTop'
import GeometricShapes from './components/GeometricShapes'
import StatsSection from './components/StatsSection'
import './App.css'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Smooth scroll configuration
    gsap.config({
      autoSleep: 60,
      force3D: true
    })
  }, [])

  useEffect(() => {
    if (!loading) {
      // Create parallax effect for sections after loading
      const sections = document.querySelectorAll('section')
      sections.forEach((section) => {
        gsap.fromTo(section,
          { opacity: 0.8 },
          {
            opacity: 1,
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse'
            }
          }
        )
      })
    }
  }, [loading])

  const handleLoadComplete = () => {
    setLoading(false)
  }

  return (
    <div className="App">
      {loading && <PageLoader onLoadComplete={handleLoadComplete} />}
      <GeometricShapes />
      <ScrollProgress />
      <Header />
      <Hero />
      <About />
      <StatsSection />
      <Experience />
        
       <Skills />
     
      <Projects />
     
      <Education />
      <Contact />
      <ScrollToTop />
    </div>
  )
}

export default App
