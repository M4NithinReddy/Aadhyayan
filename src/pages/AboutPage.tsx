import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BookOpen, Award, Lightbulb, Users, Building, GraduationCap, ArrowRight, Quote } from 'lucide-react';
import sandhyaImage from '../assets/images/about/dr-sandhya-devi.jpeg';
import sivanandhaImage from '../assets/images/about/dr-sivanandha.jpeg';
import manmadhaRaoImage from '../assets/images/about/dr-manmadha-rao.jpeg';
import krishnaveniImage from '../assets/images/about/dr-krishnaveni.jpeg';
import rajendraPrasadImage from '../assets/images/about/dr-rajendra-prasad.jpeg';
import campusImg1 from '../assets/images/about/1.jpeg';
import campusImg2 from '../assets/images/about/2.jpeg';
import campusImg3 from '../assets/images/about/3.jpeg';


const AboutPage: React.FC = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stats = [
    { icon: <GraduationCap />, value: '1923', label: 'Year Founded' },
    { icon: <Users />, value: '5000+', label: 'Alumni Network' },
    { icon: <Building />, value: '40+', label: 'Departments' },
    { icon: <Award />, value: '100+', label: 'Awards & Recognitions' },
  ];

  const values = [
    {
      icon: <Lightbulb className="h-8 w-8 text-accent" />,
      title: 'Innovation',
      description: 'We foster a culture of creativity and innovation, encouraging students to think outside the box and develop groundbreaking solutions to healthcare challenges.'
    },
    {
      icon: <BookOpen className="h-8 w-8 text-accent" />,
      title: 'Knowledge',
      description: 'We are committed to the pursuit of knowledge, providing our students with the latest research, techniques, and practices in medical science.'
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: 'Community',
      description: 'We believe in the power of community, creating spaces for collaboration, networking, and shared learning experiences.'
    },
    {
      icon: <Award className="h-8 w-8 text-accent" />,
      title: 'Excellence',
      description: 'We strive for excellence in all that we do, setting high standards for academic and professional achievement.'
    }
  ];

 const leadership = [
    {
      name: 'Dr. K.V.S.M.Sandhya Devi',
      position: 'Principal, AMC',
      additionalRole: 'Addl.DME',
      qualifications: 'M.D,OBG',
      image: sandhyaImage,
      quote: "Education is not just about learning; it's about transforming lives through knowledge and innovation.",
      description: 'Leading AMC with dedication and vision towards medical excellence.'
    },
    {
      name: 'Dr. P.Sivanandha',
      position: 'Superintendent, KGH',
      qualifications: 'MS,ORTHO,(FISS SWITZERLAND)',
      image: sivanandhaImage,
      quote: "Our goal is to provide the highest quality healthcare education and service to our community.",
      description: 'Overseeing hospital operations and ensuring excellence in patient care.'
    },
    {
      name: 'Dr. V. Manmadha Rao',
      position: 'Vice-principal (Academic)',
      additionalRole: 'Prof & HOD of Surgery, AMC',
      qualifications: 'MS,FIAGES',
      image: manmadhaRaoImage,
      quote: "Excellence in medical education comes through practical experience and theoretical knowledge.",
      description: 'Driving academic excellence and surgical innovation.'
    },
    {
      name: 'Dr. A.Krishnaveni',
      position: 'General Vice-Principal',
      additionalRole: 'Prof & HOD of Community Medicine, AMC',
      qualifications: 'MD',
      image: krishnaveniImage,
      quote: "Community health is the foundation of a healthy society.",
      description: 'Leading community medicine initiatives and public health programs.'
    },
    {
      name: 'Dr. Rajendra Prasad',
      position: 'Vice-Principal (Administration)',
      additionalRole: 'Prof & HOD of Pediatric Surgery, AMC',
      qualifications: 'MS, M.CH',
      image: rajendraPrasadImage,
      quote: "Administrative excellence supports academic achievement.",
      description: 'Managing administrative operations and pediatric surgical services.'
    }
  ];

   const campusMedia = [
    { type: 'image', src: campusImg1, alt: 'Historic Main Building' },
    { type: 'image', src: campusImg2, alt: 'State-of-the-art Library' },
    { type: 'image', src: campusImg3, alt: 'State-of-the-art Library' },
    { type: 'youtube', url: 'https://www.youtube.com/embed/tMqBBHvxY0g' }
  ];

  return (
    <>
      <Helmet>
        <title>About ADHYAYAN 2025 | Andhra Medical College</title>
        <meta name="description" content="Learn about ADHYAYAN 2025, the flagship hackathon of Andhra Medical College, and our mission to foster innovation in medical education." />
      </Helmet>

      <section className="min-h-[60vh] pt-32 pb-20 bg-gradient-to-b from-primary to-gray-900 text-white relative overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-[url('/src/assets/images/about/legacy-bg.jpg')] opacity-20 bg-fixed bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-gray-900/80"></div>
        <div className="container relative">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="initial"
            animate="animate"
            variants={fadeIn}
          >
            <h1 className="font-playfair font-bold mb-8 text-6xl md:text-7xl lg:text-8xl leading-tight">
              About <span className="text-accent">ADHYAYAN</span> 2025
            </h1>
            <p className="text-2xl text-gray-light font-montserrat leading-relaxed">
              A legacy of excellence, a future of innovation
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50/50"></div>
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
              Our <span className="text-accent">Leadership</span>
            </h2>
            <div className="h-1 w-24 bg-accent mx-auto"></div>
          </motion.div>

          <div className="space-y-24">
            {leadership.map((leader, index) => (
              <motion.div
                key={index}
                className="flex flex-col md:flex-row gap-12 items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className={`w-full md:w-1/2 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="relative group">
                    <div className="relative h-[500px] overflow-hidden rounded-2xl">
                      <img 
                        src={leader.image} 
                        alt={leader.name}
                        className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                </div>

                <div className={`w-full md:w-1/2 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="inline-block bg-accent/10 px-4 py-2 rounded-full">
                        <span className="text-accent font-montserrat">{leader.position}</span>
                      </div>
                      {leader.additionalRole && (
                        <div className="inline-block bg-accent/10 px-4 py-2 rounded-full ml-2">
                          <span className="text-accent font-montserrat">{leader.additionalRole}</span>
                        </div>
                      )}
                    </div>
                    
                    <h3 className="font-playfair font-bold text-4xl">{leader.name}</h3>
                    <p className="text-lg text-accent font-medium">{leader.qualifications}</p>
                    
                    <div className="flex items-start space-x-2 text-gray-600 italic">
                      <Quote className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      <p className="text-lg">{leader.quote}</p>
                    </div>

                    <p className="text-gray-700 text-lg">{leader.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">Our <span className="text-accent">Campus</span></h2>
            <div className="h-1 w-24 bg-accent mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {campusMedia.map((item, idx) => (
              <motion.div key={idx} className="overflow-hidden rounded-xl shadow-lg" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: idx * 0.2 }}>
                {item.type === 'image' && <img src={item.src} alt={item.alt} className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-700" />}
                {item.type === 'youtube' && (
                  <div className="w-full h-[400px] rounded-xl overflow-hidden">
                    <iframe className="w-full h-full" src={item.url} title="Campus Tour" frameBorder="0" allowFullScreen />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-primary text-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 border-r last:border-0 border-white/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-accent/20 rounded-full text-accent">
                    {stat.icon}
                  </div>
                </div>
                <h3 className="text-3xl font-playfair font-bold mb-2">{stat.value}</h3>
                <p className="text-gray-light text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
              Our <span className="text-accent">Values</span>
            </h2>
            <div className="h-1 w-24 bg-accent mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="card p-8 text-center h-full hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-6">
                  <div className="p-3 bg-accent/10 rounded-full">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-playfair font-bold mb-4">{value.title}</h3>
                <p className="text-gray text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/src/assets/images/about/cta-bg.jpg')] opacity-20 bg-fixed bg-cover bg-center"></div>
        <div className="container relative text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-8">
            Join Our Legacy of Excellence
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-light mb-12">
            Be part of ADHYAYAN 2025 and contribute to the future of medical innovation
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <a href="/registration" className="btn-primary text-lg px-12 py-4">
              Register Now
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
