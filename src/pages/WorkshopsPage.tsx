import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';

const WorkshopsPage: React.FC = () => {
  const workshops = [
    {
      id: 'ophthalmology',
      title: 'Ophthalmology Workshop',
      description: 'Comprehensive training in eye examination and surgical techniques.',
      date: 'June 16, 2025',
      venue: 'Govt. Regional Eye Hospital, RAMA TALKIES',
      price: 599,
      image: '/workshops/Ophthalmology.jpeg'
    },
    {
      id: 'orthopaedics',
      title: 'Orthopaedics Workshop',
      description: 'Learn essential bandaging and casting techniques.',
      date: 'June 16, 2025',
      time: 'AM & PM Sessions',
      venue: 'AMCOSA',
      price: 499,
      image: '/workshops/Orthopedics.jpeg'
    },
    {
      id: 'anaesthesia',
      title: 'Anaesthesia Workshop',
      description: 'Comprehensive training in anaesthesia and life support.',
      date: 'June 19-20, 2025',
      time: 'AM & PM Sessions',
      venue: 'NELS Skill Lab, AMC',
      price: 449,
      image: '/workshops/Anesthecia.jpeg'
    },
    {
      id: 'surgery',
      title: 'Surgery Workshop',
      description: 'Hands-on training in surgical techniques and wound management.',
      date: 'June 16-19, 2025',
      venue: 'AMCOSA',
      price: 499,
      image: '/workshops/Surgery.jpeg'
    },
    {
      id: 'obgyn1',
      title: 'ObGyn Workshop - 1',
      description: 'Essential obstetric and gynecological procedures training.',
      date: 'June 17-18, 2025',
      venue: 'AMCOSA',
      price: 299,
      image: '/workshops/Gynaecology.jpeg'
    },
    {
      id: 'obgyn2',
      title: 'ObGyn Workshop - 2',
      description: 'Advanced obstetric and gynecological procedures training.',
      date: 'June 19-20, 2025',
      venue: 'AMCOSA',
      price: 299,
      image: '/workshops/Gynaecology.jpeg'
    },
    {
      id: 'ent',
      title: 'ENT Workshop',
      description: 'Comprehensive training in otorhinolaryngology procedures.',
      date: 'June 18, 2025',
      venue: 'Govt. ENT Hospital, Pedda Waltair',
      price: 349,
      image: '/workshops/Ent.jpeg'
    },
    {
      id: 'pediatrics',
      title: 'Pediatrics Workshop',
      description: 'Essential pediatric care and assessment training.',
      date: 'June 17, 2025',
      venue: 'Dept. of Pediatrics, AMC',
      price: 499,
      image: '/workshops/pediatrics.jpeg'
    },
    {
      id: 'community',
      title: 'Community Medicine Workshop',
      description: 'Training in community health assessment and preventive medicine.',
      date: 'June 17-18, 2025',
      venue: 'AMCOSA',
      price: 349,
      image: '/workshops/Community Medicine.jpeg'
    },
    {
      id: 'fmt',
      title: 'Forensic Medicine Workshop',
      description: 'Hands-on forensic medicine and autopsy training.',
      date: 'June 16-19, 2025',
      venue: 'Mortuary, Dept. of FMT, AMC KGH',
      price: 649,
      image: '/workshops/Forensic Medicine.jpeg'
    },
    {
      id: 'medicine',
      title: 'Medicine Workshop',
      description: 'Comprehensive medical skills and assessment training.',
      date: 'June 18, 2025',
      venue: 'AMCOSA',
      price: 349,
      image: '/workshops/medicine.jpeg'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Workshops | ADHYAYAN 2025</title>
        <meta name="description" content="Join our specialized medical workshops at ADHYAYAN 2025. Learn from experts, gain hands-on experience, and enhance your medical skills." />
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
            <h1 className="font-montserrat font-bold mb-6">Specialized Medical Workshops</h1>
            <p className="text-xl text-gray-light">
              Enhance your skills through hands-on training sessions led by industry experts
            </p>
          </motion.div>
        </div>
      </section>

      {/* Workshops List */}
      <section className="section bg-white">
        <div className="container">
          <SectionTitle
            subtitle="Learning Opportunities"
            title="Available Workshops"
            alignment="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {workshops.map((workshop, index) => (
              <motion.div
                key={workshop.id}
                className="card overflow-hidden group hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={`/workshops/${workshop.id}`}>
                  <div className="relative h-48">
                    <img 
                      src={workshop.image} 
                      alt={workshop.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    {workshop.date && (
                      <div className="absolute bottom-3 left-3 flex items-center text-white text-sm">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{workshop.date}</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-montserrat font-semibold mb-3 group-hover:text-accent transition-colors">
                      {workshop.title}
                    </h3>
                    <p className="text-gray mb-4">{workshop.description}</p>
                    
                    <div className="space-y-3">
                      {workshop.time && (
                        <div className="flex items-center text-sm">
                          <Clock className="h-4 w-4 text-accent mr-2" />
                          <span>{workshop.time}</span>
                        </div>
                      )}
                      <div className="flex items-center text-sm">
                        <MapPin className="h-4 w-4 text-accent mr-2" />
                        <span>{workshop.venue}</span>
                      </div>
                    </div>

                    <div className="mt-6 flex items-center justify-between">
                      <span className="text-xl font-semibold text-accent">₹{workshop.price}</span>
                      <span className="inline-flex items-center text-accent font-medium group-hover:translate-x-1 transition-transform">
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop Information */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <SectionTitle
              subtitle="Important Information"
              title="Workshop Guidelines"
              alignment="center"
            />

            <div className="mt-12 space-y-6">
              <div className="card p-6">
                <h3 className="font-montserrat font-semibold mb-4">What to Bring</h3>
                <ul className="space-y-3 text-gray">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center mr-3 mt-0.5">
                      <span className="h-2 w-2 rounded-full bg-accent"></span>
                    </span>
                    <p>Valid ID proof</p>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center mr-3 mt-0.5">
                      <span className="h-2 w-2 rounded-full bg-accent"></span>
                    </span>
                    <p>Notebook and writing materials</p>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center mr-3 mt-0.5">
                      <span className="h-2 w-2 rounded-full bg-accent"></span>
                    </span>
                    <p>Any specific items mentioned in the workshop prerequisites</p>
                  </li>
                </ul>
              </div>

              <div className="card p-6">
                <h3 className="font-montserrat font-semibold mb-4">Workshop Policies</h3>
                <ul className="space-y-3 text-gray">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center mr-3 mt-0.5">
                      <span className="h-2 w-2 rounded-full bg-accent"></span>
                    </span>
                    <p>Attendance is mandatory for certificate issuance</p>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center mr-3 mt-0.5">
                      <span className="h-2 w-2 rounded-full bg-accent"></span>
                    </span>
                    <p>Rescheduling is subject to availability</p>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center mr-3 mt-0.5">
                      <span className="h-2 w-2 rounded-full bg-accent"></span>
                    </span>
                    <p>Refund policy applies as per terms and conditions</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkshopsPage;