import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Slider from 'react-slick'
import { FaQuoteLeft, FaStar } from 'react-icons/fa'

const Testimonials = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  const testimonials = [
    {
      name: "John Smith",
      company: "Smith Manufacturing",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "PrecisionCoat has been our go-to powder coating provider for over 5 years. Their attention to detail and quality of work is unmatched in the industry. Highly recommended!",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      company: "Johnson Industries",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "We've been working with PrecisionCoat for our industrial coating needs, and they consistently deliver exceptional results. Their team is professional, responsive, and dedicated to quality.",
      rating: 5
    },
    {
      name: "Michael Brown",
      company: "Brown Fabrication",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      text: "The durability and finish quality of PrecisionCoat's work is outstanding. They've helped us improve our products and meet our customers' expectations consistently.",
      rating: 4
    },
    {
      name: "Emily Davis",
      company: "Davis Engineering",
      image: "https://randomuser.me/api/portraits/women/28.jpg",
      text: "PrecisionCoat provides reliable service with quick turnaround times without compromising on quality. They've become an essential partner for our business.",
      rating: 5
    }
  ]

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4" ref={ref}>
        <h2 className="section-title">What Our Clients Say</h2>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mt-12"
        >
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-4 pb-6">
                <div className="testimonial-card h-full">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="font-semibold text-lg text-primary">{testimonial.name}</h3>
                      <p className="text-gray-600 text-sm">{testimonial.company}</p>
                      <div className="flex mt-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <FaStar key={i} className="text-secondary text-sm" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <FaQuoteLeft className="text-secondary text-opacity-20 text-4xl absolute -top-2 -left-2" />
                    <p className="text-gray-700 relative z-10 pl-6">{testimonial.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials