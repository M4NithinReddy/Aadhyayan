import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Mail, Phone, MapPin, LightbulbIcon } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const navItems = [
    { name: 'About', path: '/about' },
    { name: 'Schedule', path: '/schedule' },
    { name: 'Workshops', path: '/workshops' },
    { name: 'Competitions', path: '/competitions' },
    { name: 'Registration', path: '/registration' },
    { name: 'Accommodation', path: '/accommodation' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 font-montserrat font-bold text-xl">
              <LightbulbIcon className="h-6 w-6 text-accent" />
              <span>ADHYAYAN 2025</span>
            </Link>
            <p className="text-gray-light text-sm mt-4">
              A Festival of Fire, A Symphony of Scholars. The flagship hackathon hosted by Andhra Medical College, Visakhapatnam.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://www.instagram.com/andhra_medical_college?igsh=MXAzYW1pdW8zZGx4MA%3D%3D&utm_source=qr" className="text-white hover:text-accent transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://www.instagram.com/adhyayan_.25?igsh=MXN0eDNkNnlsamtidQ==" className="text-white hover:text-accent transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-montserrat font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path} 
                    className="text-gray-light hover:text-accent transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-montserrat font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <Mail size={18} className="text-accent shrink-0 mt-1" />
                <span className="text-gray-light">andhramedicalcollege100@gmail.com</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Phone size={18} className="text-accent shrink-0 mt-1" />
                <span className="text-gray-light">+91 7658943811 </span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <MapPin size={18} className="text-accent shrink-0 mt-1" />
                <span className="text-gray-light">
                  Andhra Medical College, Maharanipeta, Visakhapatnam, Andhra Pradesh - 530002
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-montserrat font-semibold mb-4">Stay Updated</h4>
            <p className="text-gray-light text-sm mb-4">
              Subscribe to our newsletter for the latest updates on ADHYAYAN 2025.
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 bg-gray-dark text-white placeholder-gray-light rounded focus:outline-none focus:ring-2 focus:ring-accent text-sm"
                required
              />
              <button
                type="submit"
                className="btn-primary text-sm py-2"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-dark mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-light text-sm">
            © {currentYear} ADHYAYAN 2025, Andhra Medical College. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
