import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { FaPhone, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-primary shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="hidden md:flex justify-end items-center mb-2 text-white text-sm">
          <div className="flex items-center mr-6">
            <FaPhone className="mr-2 text-secondary" />
            <span>+91-8888829811</span>
          </div>
          <div className="flex items-center">
            <FaEnvelope className="mr-2 text-secondary" />
            <span>subhashankit73@gmail.com</span>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
          <img 
            src="/sew-logo-4.png" 
            alt="SEW Logo" 
            className="h-16 md:h-18 mr-4" // Increased logo size
          />
            <div className="flex flex-col">
              <span className="text-white font-bold text-2xl md:text-2xl">SEW</span>
              <span className="text-white text-sm md:text-sm">Sanjeevani Engineering Works</span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="home" smooth={true} duration={500} className="nav-link text-xl">Home</Link>
            <Link to="services" smooth={true} duration={500} className="nav-link">Services</Link>
            <Link to="about" smooth={true} duration={500} className="nav-link">About</Link>
            <Link to="gallery" smooth={true} duration={500} className="nav-link">Gallery</Link>
            <Link to="videos" smooth={true} duration={500} className="nav-link">Videos</Link>
            {/* <Link to="testimonials" smooth={true} duration={500} className="nav-link">Testimonials</Link> */}
            <Link to="contact" smooth={true} duration={500} className="nav-link">Contact</Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.nav 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-primary mt-4 py-4 rounded-lg"
          >
            <div className="flex flex-col space-y-4 px-4">
              <Link to="home" smooth={true} duration={500} className="nav-link" onClick={toggleMobileMenu}>Home</Link>
              <Link to="services" smooth={true} duration={500} className="nav-link" onClick={toggleMobileMenu}>Services</Link>
              <Link to="about" smooth={true} duration={500} className="nav-link" onClick={toggleMobileMenu}>About</Link>
              <Link to="gallery" smooth={true} duration={500} className="nav-link" onClick={toggleMobileMenu}>Gallery</Link>
              <Link to="videos" smooth={true} duration={500} className="nav-link" onClick={toggleMobileMenu}>Videos</Link>
              <Link to="testimonials" smooth={true} duration={500} className="nav-link" onClick={toggleMobileMenu}>Testimonials</Link>
              <Link to="contact" smooth={true} duration={500} className="nav-link" onClick={toggleMobileMenu}>Contact</Link>
            </div>
          </motion.nav>
        )}
      </div>
    </header>
  )
}

export default Navbar