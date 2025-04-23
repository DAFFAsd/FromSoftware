import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedGames from './components/FeaturedGames'
import GameShowcase from './components/GameShowcase'
import About from './components/About'
import Footer from './components/Footer'

function App() {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <div className={`${darkMode ? 'bg-black text-white' : 'bg-gray-100 text-gray-900'} min-h-screen transition-colors duration-300`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <FeaturedGames />
      <GameShowcase />
      <About />
      <Footer />
    </div>
  )
}

export default App 