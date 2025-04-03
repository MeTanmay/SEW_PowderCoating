import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4" ref={ref}>
        <h2 className="section-title">About Us</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Powder coating facility" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-secondary text-primary p-4 rounded-lg shadow-lg">
                <p className="font-bold text-2xl">15+</p>
                <p className="text-sm">Years of Experience</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-primary mb-4">Excellence in Powder Coating and Liquid Painting</h3>
            <p className="text-gray-700 mb-4">
              At Sanjeevani Engineering Works (SEW), we are dedicated to providing the highest quality powder coating services for industrial and commercial applications. Established in December 2024, we are committed to delivering exceptional results with cutting-edge technology and expert craftsmanship.
            </p>
            <p className="text-gray-700 mb-4">
              Our state-of-the-art facility is equipped with the latest technology and operated by skilled professionals who are committed to delivering exceptional results. We take pride in our attention to detail and our ability to meet the specific requirements of each client.
            </p>
            <p className="text-gray-700 mb-6">
              We use only premium quality powder materials that are environmentally friendly and provide superior durability and finish. Our commitment to quality and customer satisfaction has earned us a reputation for excellence in the industry.
            </p>
            
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">10K+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-gray-600">Quality Assurance</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About