import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaPlay } from 'react-icons/fa'

const VideoSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const videos = [
    {
      thumbnail: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Powder Coating Process",
      videoId: "example1"
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Industrial Application Techniques",
      videoId: "example2"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="videos" className="py-20 bg-white">
      <div className="container mx-auto px-4" ref={ref}>
        <h2 className="section-title">Watch Our Process</h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {videos.map((video, index) => (
            <motion.div 
              key={index} 
              className="relative rounded-lg overflow-hidden shadow-lg"
              variants={itemVariants}
            >
              <img 
                src={video.thumbnail} 
                alt={video.title} 
                className="w-full h-72 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <button className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110">
                  <FaPlay className="text-white ml-1" />
                </button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <h3 className="text-white text-lg font-semibold">{video.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default VideoSection