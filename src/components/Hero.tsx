import { useState } from 'react'
import Slider from 'react-slick'
import { motion } from 'framer-motion'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: (_: any, next: number) => setCurrentSlide(next),
  }

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      title: "Premium Powder Coating Solutions",
      subtitle: "Durable, Attractive, and Environmentally Friendly"
    },
    {
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      title: "Industrial Grade Finishing",
      subtitle: "Precision and Quality in Every Coat"
    },
    {
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      title: "Custom Coating Services",
      subtitle: "Tailored Solutions for Your Specific Needs"
    }
  ]

  return (
    <section id="home" className="relative h-screen">
      <Slider {...settings} className="h-full">
        {slides.map((slide, index) => (
          <div key={index} className="relative h-screen">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ 
                backgroundImage: `url(${slide.image})`,
                filter: 'brightness(0.8)'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-transparent" />
            
            <div className="relative h-full flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-2xl ml-4 md:ml-12">
                  {currentSlide === index && (
                    <>
                      <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-heading"
                      >
                        {slide.title}
                      </motion.h1>
                      <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl md:text-2xl text-white mb-8"
                      >
                        {slide.subtitle}
                      </motion.p>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                      >
                        <a href="#contact" className="btn-primary inline-block">
                          Get a Quote
                        </a>
                      </motion.div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-white text-center"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full mx-auto mb-2 relative">
            <div className="w-1 h-2 bg-white rounded-full absolute top-1 left-1/2 transform -translate-x-1/2"></div>
          </div>
          <span className="text-sm">Scroll Down</span>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero