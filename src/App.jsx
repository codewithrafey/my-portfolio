import './App.css'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import { useContext, useEffect } from 'react'
import { ThemeContext } from './context/ThemeProvider'
import Hero from './components/hero/Hero'
import Work from './components/work/Work'
import Contact from './components/contact/Contact'
import toast, { Toaster } from 'react-hot-toast';
import Footer from './components/footer/Footer'
import Skills from './components/skills/Skills'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'

function App() {
  const { theme } = useContext(ThemeContext)

    const ScrollToTop = () => {
    const { pathname } = useLocation()

    useEffect(() => {
      window.scrollTo(0, 0)
    },[pathname])

  }


  return (
    <div className={`${theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'} relative`}>
      <Toaster />

      {/* 🔹 Global Background (blobs + dots) */}
      <div className="fixed inset-0 z-10 ">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-500/60 to-purple-500/60 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-gradient-to-br from-cyan-500/60 to-blue-500/60 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-gradient-to-br from-purple-500/60 to-cyan-500/60 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-20">
        {/* 🔹 Routing */}
        <BrowserRouter>
        <ScrollToTop/>
          <Navbar />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
