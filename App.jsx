import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App