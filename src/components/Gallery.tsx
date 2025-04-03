import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const Gallery = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const galleryImages = [
    {
      src: "/img42.png",
      alt: "Powder coated metal parts"
    },
    {
      src: "/img22.png",
      alt: "Industrial coating process"
    },
    {
      src: "/img12.png",
      alt: "Finished powder coated products"
    },
    {
      src: "/img55.png",
      alt: "Powder coating equipment"
    },
    // {
    //   src: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    //   alt: "Metal fabrication"
    // },
    {
      src: "/img33.png",
      alt: "Quality control inspection"
    },
    {
      src: "https://images.unsplash.com/photo-1581092787765-e31bd9f1cbfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      alt: "Quality control inspection"
    }
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
              className="gallery-item"
              variants={itemVariants}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
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