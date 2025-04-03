import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaSprayCan, FaIndustry, FaShieldAlt } from 'react-icons/fa'

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const services = [
    {
      icon: <FaSprayCan className="text-4xl text-secondary mb-4" />,
      title: "Industrial Powder Coating",
      description: "Our industrial powder coating service provides a durable, high-quality finish for metal products. We use state-of-the-art equipment and premium powder materials to ensure exceptional results.",
    },
    
    {
      icon: <FaShieldAlt className="text-4xl text-secondary mb-4" />,
      title: "Liquid Painting",
      description: "Our industrial liquid painting service delivers a smooth, high-quality finish for diverse materials. We utilize advanced techniques and premium liquid coatings to achieve excellent durability and visual appeal.",
    },
    {
      icon: <FaIndustry className="text-4xl text-secondary mb-4" />,
      title: "Custom Color Solutions",
      description: "Choose from a wide range of colors and finishes to match your specific requirements. We offer custom color matching services to ensure your products have the exact appearance you desire.",
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4" ref={ref}>
        <h2 className="section-title">Our Services</h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="service-card p-6"
              variants={itemVariants}
            >
              <div className="text-center">
                {service.icon}
                <h3 className="text-xl font-bold mb-3 text-primary">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                <button className="mt-6 btn-primary">Learn More</button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services