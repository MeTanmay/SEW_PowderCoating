import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Sanjeevani Engineering Works
</h3>
            <p className="text-gray-300 mb-4">
              Providing premium powder coating services with unmatched quality and durability. Your trusted partner for all industrial coating needs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="social-icon">
                <FaFacebookF />
              </a>
              <a href="#" className="social-icon">
                <FaTwitter />
              </a>
              <a href="#" className="social-icon">
                <FaInstagram />
              </a>
              <a href="#" className="social-icon">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="footer-link">Home</a></li>
              <li><a href="#services" className="footer-link">Services</a></li>
              <li><a href="#about" className="footer-link">About Us</a></li>
              <li><a href="#gallery" className="footer-link">Gallery</a></li>
              <li><a href="#testimonials" className="footer-link">Testimonials</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="footer-link">Industrial Powder Coating</a></li>
              <li><a href="#" className="footer-link">Custom Color Solutions</a></li>
              <li><a href="#" className="footer-link">Protective Coatings</a></li>
              <li><a href="#" className="footer-link">Metal Finishing</a></li>
              <li><a href="#" className="footer-link">Quality Inspection</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-secondary mt-1 mr-3" />
                <span> G, 122/3/6, Salban Road, near Kisan Duch, MIDC, Ahilya Nagar, Nagar, Maharashtra 414111</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-secondary mr-3" />
                <span>91-8888829811 / +91-8888829801</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-secondary mr-3" />
                <span>sudhir_darshan@rediffmail.com / subhashankit73@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Sanjeevani Engineering Works. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer