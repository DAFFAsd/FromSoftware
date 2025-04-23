import './App.css'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import GameShowcase from './components/GameShowcase'
import FeaturedGames from './components/FeaturedGames'
import About from './components/About'
import Footer from './components/Footer'

// Import audio
import bgMusic from './assets/audio/music.mp3'

function App() {
  useEffect(() => {
    const audioElement = new Audio(bgMusic)
    audioElement.loop = true
    audioElement.volume = 0.3
    audioElement.currentTime = 14 // mulai dari detik ke-14 gara2 tolol bat audionya ada suara klik dari youtuber

    const playAudio = () => {
      audioElement.play()
        .catch((e) => {
          console.log('Audio playback failed:', e)
        })
    }
    document.addEventListener('click', playAudio, { once: true })

    return () => {
      audioElement.pause()
      document.removeEventListener('click', playAudio)
    }
  }, [])

  return (
    <div className="relative bg-black text-white">
      {/* Background audio */}
      <audio src={bgMusic} loop id="background-music" />
      
      <Navbar />
      <Hero />
      <GameShowcase />
      <FeaturedGames />
      <About />
      <Footer />
    </div>
  )
}

export default App
