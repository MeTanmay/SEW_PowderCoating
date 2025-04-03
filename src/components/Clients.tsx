import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaBuilding } from 'react-icons/fa'

const Clients = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const clients = [
    {
      name: "Schneider Electric India Pvt Ltd",
      location: "Ahmednagar"
    },
    {
      name: "Unitech Pvt Ltd",
      location: "Pune"
    },
    {
      name: "Vishgral Industries",
      location: "Ahmednagar"
    },
    {
      name: "SharpEdge Engineering",
      location: "Ahmednagar"
    },
    {
      name: "GSK Fabtech",
      location: "Nasik"
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
    <section id="clients" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4" ref={ref}>
        <h2 className="section-title">Our Clients</h2>
        <p className="text-center text-gray-600 mb-12">Trusted by Leading Companies Across India</p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {clients.map((client, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center">
                <div className="bg-primary/10 rounded-full p-3 mr-4">
                  <FaBuilding className="text-2xl text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary">{client.name}</h3>
                  <p className="text-gray-600">{client.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          {/* <p className="text-gray-600">Join our growing list of satisfied clients</p>
          <a href="#contact" className="btn-primary inline-block mt-4">Contact Us</a> */}
        </motion.div>
      </div>
    </section>
  )
}

export default Clients