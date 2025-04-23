import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedGames from './components/FeaturedGames'
import GameShowcase from './components/GameShowcase'
import About from './components/About'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedGames />
      <GameShowcase />
      <About />
      <Footer />
    </div>
  )
}

export default App
