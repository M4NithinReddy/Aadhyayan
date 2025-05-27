import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CalendarDays } from 'lucide-react';
import logo from '../../assets/images/logo.png';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute inset-0 opacity-10 bg-[url('../../assets/images/home/hero-bg.jpg')] bg-cover bg-center"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-8"
          >
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-full">
              <img 
                src={logo}
                alt="AMC Logo" 
                className="h-16 w-16 md:h-20 md:w-20"
              />
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-white leading-tight mb-6"
          >
            ADHYAYAN 2025
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-xl md:text-2xl text-gray-light mb-2">A Festival of Fire, A Symphony of Scholars</p>
            <p className="text-accent font-montserrat font-medium text-lg md:text-xl mb-8">
              Illuminate Minds, Ignite Innovations
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center justify-center gap-2 mb-10 text-white/80"
          >
            <CalendarDays className="h-5 w-5" />
            <span className="font-montserrat">June 15-20, 2025 | Andhra Medical College, Visakhapatnam</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/workshops" className="btn-primary">
              Register Now
            </Link>
            <Link to="/schedule" className="btn-secondary bg-white/10 text-white border-white/20 hover:bg-white/20">
              View Schedule
            </Link>
          </motion.div>
        </div>

        {/* Floating elements - decorative only */}
        <motion.div
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            repeat: Infinity,
            duration: 5,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/6 w-8 h-8 rounded-full bg-accent/20 backdrop-blur-md"
        />

        <motion.div
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            repeat: Infinity,
            duration: 7,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 right-1/6 w-12 h-12 rounded-full bg-accent/30 backdrop-blur-md"
        />
      </div>
    </section>
  );
};

export default HeroSection;
