import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4" ref={ref}>
        <h2 className="section-title">Contact Us</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-primary mb-6">Get In Touch</h3>
            
            <div className="mb-8">
              <div className="contact-info-item">
                <FaMapMarkerAlt />
                <span>G – 122/3/6, MIDC, AHMEDNAGAR</span>
              </div>
              <div className="contact-info-item">
                <FaPhone />
                <span>+91-8888829811 / +91-8888829801 </span>
              </div>
              <div className="contact-info-item">
                <FaEnvelope />
                <span>sudhir_darshan@rediffmail.com /
                subhashankit73@gmail.com
                </span>
              </div>
              <div className="contact-info-item">
                <FaClock />
                <span>Sunday - Friday: 9:00 AM - 7:00 PM</span>
              </div>
            </div>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                    placeholder="Your Email"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-gray-700 mb-1">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                  placeholder="Subject"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button type="submit" className="btn-primary">Send Message</button>
            </form>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8 }}
            className="h-full"
          >
            <h3 className="text-2xl font-bold text-primary mb-6">Our Location</h3>
            <div className="rounded-lg overflow-hidden shadow-lg h-[500px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.5459954053154!2d74.69297058479508!3d19.171340563040413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdcbb621736f38b%3A0x90c8595b11e702eb!2sSanjeevani%20Engineering%20works!5e0!3m2!1sen!2sin!4v1743700648681!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Sanjeevani Engineering Works Location"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact