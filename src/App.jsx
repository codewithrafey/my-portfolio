import './App.css'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import { useContext } from 'react'
import { ThemeContext } from './context/ThemeProvider'
import Hero from './components/hero/Hero'
import Work from './components/work/Work'
import Contact from './components/contact/Contact'
import toast, { Toaster } from 'react-hot-toast';
import Footer from './components/footer/Footer'
import Skills from './components/skills/Skills'

function App() {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={`${theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'}`}>
    <Toaster />
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Work />
    <Contact />
    <Footer />
    </div>
  )
}

export default App
