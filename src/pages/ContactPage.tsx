import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';

const ContactPage: React.FC = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-accent" />,
      title: 'Email',
      details: ['andhramedicalcollege100@gmail.com']
    },
    {
      icon: <Phone className="h-6 w-6 text-accent" />,
      title: 'Phone',
      details: ['+91 7658943811'
    },
    {
      icon: <MapPin className="h-6 w-6 text-accent" />,
      title: 'Address',
      details: ['Andhra Medical College', 'Maharanipeta, Visakhapatnam', 'Andhra Pradesh - 530002']
    },
    {
      icon: <Clock className="h-6 w-6 text-accent" />,
      title: 'Office Hours',
      details: ['Monday - Friday: 9:00 AM - 5:00 PM', 'Saturday: 9:00 AM - 1:00 PM']
    }
  ];

  const socialLinks = [
    { icon: <Instagram className="h-5 w-5" />, label: 'Instagram', url: 'https://www.instagram.com/adhyayan_.25?igsh=MXN0eDNkNnlsamtidQ==' },
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us | ADHYAYAN 2025</title>
        <meta name="description" content="Get in touch with the ADHYAYAN 2025 team. We're here to help with any questions about the event, registration, or accommodation." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary to-gray-900 text-white">
        <div className="container">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-montserrat font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-light">
              Have questions? We're here to help!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <SectionTitle
                subtitle="Get in Touch"
                title="Send Us a Message"
              />
              
              <form className="mt-8 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-dark mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 rounded-lg border border-gray-light focus:outline-none focus:ring-2 focus:ring-accent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-dark mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 rounded-lg border border-gray-light focus:outline-none focus:ring-2 focus:ring-accent"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-dark mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 rounded-lg border border-gray-light focus:outline-none focus:ring-2 focus:ring-accent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-dark mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-2 rounded-lg border border-gray-light focus:outline-none focus:ring-2 focus:ring-accent"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <SectionTitle
                subtitle="Contact Information"
                title="How to Reach Us"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="card p-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        {info.icon}
                      </div>
                      <div className="ml-4">
                        <h3 className="font-montserrat font-semibold mb-2">{info.title}</h3>
                        {info.details.map((detail, i) => (
                          <p key={i} className="text-gray text-sm">{detail}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="card p-6">
                <h3 className="font-montserrat font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="p-2 rounded-full bg-gray-50 hover:bg-accent hover:text-white transition-colors"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              <div className="card p-6">
                <h3 className="font-montserrat font-semibold mb-4">FAQ</h3>
                <p className="text-gray mb-4">
                  Check our frequently asked questions for quick answers to common queries.
                </p>
                <button className="btn-secondary w-full">
                  View FAQs
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <SectionTitle
            subtitle="Location"
            title="Find Us Here"
            alignment="center"
          />

          <div className="mt-12 h-96 bg-white rounded-lg shadow-card overflow-hidden">
            {/* Map would be integrated here */}
            <div className="w-full h-full flex items-center justify-center bg-gray-100">
              <p className="text-gray-dark text-center">
                Interactive Map
                <br />
                <span className="text-sm text-gray">(Google Maps integration would be implemented here)</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
