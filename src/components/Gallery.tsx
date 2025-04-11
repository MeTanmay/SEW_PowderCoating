import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const Gallery = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const galleryImages = [
    {
      src: "/img42.png",
      alt: "11 Tank Pretreament Process",
      title:"11 Tank Pretreament Process"
    },
    {
      src: "/img22.png",
      alt: "After Filter Unit",
      title:"After Filter Unit"
    },
    {
      src: "/img12.png",
      alt: "Power & Free Conveyor",
      title:"Power & Free Conveyor"
    },
    {
      src: "/img33.png",
      alt: "Powder Multi cyclone Unit",
      title:"Powder Multi cyclone Unit"
    },
    {
      src: "/img7.png",
      alt: "Effluent Treatment Plant",
      title:"Effluent Treatment Plant"
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4" ref={ref}>
        <h2 className="section-title">Our Gallery</h2>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {galleryImages.map((image, index) => (
            <motion.div 
              key={index} 
              className="gallery-item relative group"
              variants={itemVariants}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-lg opacity-100">
                <h3 className="text-white text-xl font-bold">{image.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-12">
          <button className="btn-primary">View More</button>
        </div>
      </div>
    </section>
  )
}

export default Gallery