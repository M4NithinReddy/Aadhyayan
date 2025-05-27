import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Bed, MapPin, Phone, Shield } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';

const AccommodationPage: React.FC = () => {
  const accommodationOptions = [
    {
      type: 'Girls Hostel',
      price: '₹500/head',
      occupancy: 'Triple Sharing',
      amenities: ['Fan', 'Attached Bathroom', 'Common Room'],
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ];

  const facilities = [
    {
      icon: <Bed className="h-6 w-6 text-accent" />,
      title: 'Basic Amenities',
      description: 'Fan and basic furniture provided'
    },
    {
      icon: <Shield className="h-6 w-6 text-accent" />,
      title: '24/7 Security',
      description: 'Round-the-clock security service'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Accommodation | AADHYAYAN 2025</title>
        <meta name="description" content="Find comfortable and affordable accommodation options for AADHYAYAN 2025 participants near Andhra Medical College, Visakhapatnam." />
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
            <h1 className="font-montserrat font-bold mb-6">Accommodation</h1>
            <p className="text-xl text-gray-light">
              Comfortable stay options for female participants
            </p>
          </motion.div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionTitle
                subtitle="Location"
                title="How to Reach"
              />

              <div className="mt-8 space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-accent mr-4 mt-1" />
                  <div>
                    <h4 className="font-montserrat font-medium mb-2">Address</h4>
                    <p className="text-gray">
                      AMCOSA, Near Zilla Parishad,
                      <br />Maharanipeta, Visakhapatnam,
                      <br />Andhra Pradesh - 530002
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-accent mr-4 mt-1" />
                  <div>
                    <h4 className="font-montserrat font-medium mb-2">Contact</h4>
                    <p className="text-gray">Sravya: +91 93920 62600</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <SectionTitle
                subtitle="Booking"
                title="How to Book"
              />

              <div className="mt-8 space-y-6">
                <div className="card p-6">
                  <h3 className="font-montserrat font-semibold mb-4">Booking Process</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center mr-3 mt-0.5">
                        <span className="h-2 w-2 rounded-full bg-accent"></span>
                      </span>
                      <p className="text-gray">Contact Sravya for accommodation booking</p>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center mr-3 mt-0.5">
                        <span className="h-2 w-2 rounded-full bg-accent"></span>
                      </span>
                      <p className="text-gray">Confirm availability and room allocation</p>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center mr-3 mt-0.5">
                        <span className="h-2 w-2 rounded-full bg-accent"></span>
                      </span>
                      <p className="text-gray">Complete payment to secure your booking</p>
                    </li>
                  </ul>
                </div>

                <div className="card p-6">
                  <h3 className="font-montserrat font-semibold mb-4">Important Notes</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center mr-3 mt-0.5">
                        <span className="h-2 w-2 rounded-full bg-accent"></span>
                      </span>
                      <p className="text-gray">Accommodation available for female participants only</p>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center mr-3 mt-0.5">
                        <span className="h-2 w-2 rounded-full bg-accent"></span>
                      </span>
                      <p className="text-gray">Valid ID proof is mandatory at check-in</p>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center mr-3 mt-0.5">
                        <span className="h-2 w-2 rounded-full bg-accent"></span>
                      </span>
                      <p className="text-gray">Early booking recommended due to limited availability</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6">
            Book Your Stay Now
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-gray-light">
            Contact Sravya to secure your accommodation during AADHYAYAN 2025.
            Limited rooms available on a first-come, first-served basis.
          </p>
          <a 
            href="tel:+919392062600" 
            className="btn-primary"
          >
            Call Now
          </a>
        </div>
      </section>
    </>
  );
};

export default AccommodationPage;