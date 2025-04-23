import { useState, useEffect } from 'react'

// Import the hero images
import eldenRingImg from '../assets/EldenRingShadowOfTheErdtree.jpg'
import armoredCoreImg from '../assets/ArmoredCore.jpeg'
import eldenRingNightReignImg from '../assets/EldenRingNightReign.png'
import bloodborneImg from '../assets/Bloodborne.jpg'
import sekiroImg from '../assets/Sekiro.jpg'
import darkSouls3Img from '../assets/DarkSouls3.jpg'
import darkSoulsRemasteredImg from '../assets/DarkSoulsRemastered.jpg'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
    {
      title: "ELDEN RING",
      subtitle: "SHADOW OF THE ERDTREE",
      image: eldenRingImg,
      description: "Journey into the realm of shadow",
      releaseStatus: "NOW AVAILABLE"
    },
    {
      title: "ARMORED CORE VI",
      subtitle: "FIRES OF RUBICON",
      image: armoredCoreImg,
      description: "Pilot your own mech in dynamic, high-speed combat",
      releaseStatus: "NOW AVAILABLE"
    },
    {
      title: "ELDEN RING",
      subtitle: "NIGHTREIGN",
      image: eldenRingNightReignImg,
      description: "Co-op action survival. Coming 2025",
      releaseStatus: "COMING 2025.05.30"
    },
    {
      title: "BLOODBORNE",
      subtitle: "HUNT YOUR NIGHTMARES",
      image: bloodborneImg,
      description: "Face your fears in the city of Yharnam",
      releaseStatus: "NOW AVAILABLE"
    },
    {
      title: "SEKIRO",
      subtitle: "SHADOWS DIE TWICE",
      image: sekiroImg,
      description: "Death is not your fate just yet",
      releaseStatus: "NOW AVAILABLE"
    },
    {
      title: "DARK SOULS III",
      subtitle: "THE FIRE FADES",
      image: darkSouls3Img,
      description: "Embrace the darkness",
      releaseStatus: "NOW AVAILABLE"
    },
    {
      title: "DARK SOULS",
      subtitle: "REMASTERED",
      image: darkSoulsRemasteredImg,
      description: "Then, there was fire",
      releaseStatus: "NOW AVAILABLE"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    
    return () => clearInterval(interval)
  }, [slides.length])

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  return (
    <div className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div 
          key={index} 
          className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          <img 
            src={slide.image} 
            alt={slide.title}
            className="h-full w-full object-cover" 
          />
          <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 lg:p-24 text-white">
            <div className="max-w-4xl text-left">
              <h2 className="text-lg md:text-2xl font-medium tracking-wider mb-1">{slide.subtitle}</h2>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">{slide.title}</h1>
              <p className="text-xl md:text-2xl mb-6 max-w-2xl">{slide.description}</p>
              <div className="flex flex-col md:flex-row gap-4">
                <button className="bg-red-800 hover:bg-red-700 text-white px-6 py-3 uppercase tracking-wider font-medium transition-colors">
                  Learn More
                </button>
                <div className="bg-white/10 backdrop-blur-sm px-6 py-3 inline-block">
                  <span className="text-red-500 font-semibold">{slide.releaseStatus}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Navigation Arrows */}
      <div className="absolute inset-y-0 left-0 flex items-center">
        <button 
          onClick={goToPrevSlide}
          className="bg-black/30 hover:bg-black/60 text-white p-2 m-4 rounded-full transition-colors focus:outline-none"
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
      </div>
      
      <div className="absolute inset-y-0 right-0 flex items-center">
        <button 
          onClick={goToNextSlide}
          className="bg-black/30 hover:bg-black/60 text-white p-2 m-4 rounded-full transition-colors focus:outline-none"
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Hero 