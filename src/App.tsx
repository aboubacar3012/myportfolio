import { useState, useEffect } from 'react'

import './App.css'
import BackgroundParticles from './components/BackgroundParticles'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Education from './components/Education'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Skills from './components/Skills'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  // Observer for section scrolling to highlight active nav item
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 }
    )

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section)
    })

    return () => {
      document.querySelectorAll('section[id]').forEach((section) => {
        observer.unobserve(section)
      })
    }
  }, [])

  return (
    <div className="portfolio-container">
      <BackgroundParticles />
      <Header activeSection={activeSection} />
      
      <main className="content">
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      
      <Footer />
    </div>
  )
}

export default App
