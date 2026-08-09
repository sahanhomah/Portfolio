import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import StackPanel from './components/StackPanel'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Cursor from './components/Cursor'
import useReveal from './hooks/useReveal'
import useSmoothScroll from './hooks/useSmoothScroll'
import './index.css'

function App() {
  useSmoothScroll()
  useReveal()

  return (
    <>
      <Cursor />

      {/*
        The whole site sits inside one rounded "card" floating on the peach
        page backdrop, matching the reference. Padding shrinks to zero on small
        screens so mobile still gets edge-to-edge content.
      */}
      <div className="min-h-screen bg-accent-page p-0 sm:p-5 lg:p-8">
        <div className="relative overflow-hidden rounded-none bg-brand-900 sm:rounded-card-lg">
          <Navbar />

          <main>
            <Hero />
            <About />
            <Skills />
            <StackPanel />
            <Projects />
            <Contact />
          </main>

          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
