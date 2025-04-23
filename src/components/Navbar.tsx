import { useState, useEffect } from 'react'
import fromSoftLogo from '../assets/FromSoftlogo.png'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled || mobileMenuOpen 
        ? 'bg-black/95 backdrop-blur-md md:bg-black/90' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src={fromSoftLogo} 
              alt="FromSoftware" 
              className="h-5 md:h-6 w-auto mr-4" 
            />
          </div>
          
          <div className="hidden md:flex space-x-8 text-sm uppercase tracking-widest">
            <a href="#games" className="hover:text-red-600 transition-colors">Games</a>
            <a href="#about" className="hover:text-red-600 transition-colors">About</a>
            <a href="#news" className="hover:text-red-600 transition-colors">News</a>
            <a href="#support" className="hover:text-red-600 transition-colors">Support</a>
          </div>
          
          <div className="flex items-center space-x-4">
            <button 
              className="md:hidden focus:outline-none"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div 
        className={`md:hidden bg-black/95 backdrop-blur-md overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-60 opacity-100 border-b border-gray-800/50' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col space-y-4 text-sm uppercase tracking-widest">
            <a 
              href="#games" 
              className="py-2 hover:text-red-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Games
            </a>
            <a 
              href="#about" 
              className="py-2 hover:text-red-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#news" 
              className="py-2 hover:text-red-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              News
            </a>
            <a 
              href="#support" 
              className="py-2 hover:text-red-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Support
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 