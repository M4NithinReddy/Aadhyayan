import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calendar, Users, Award, Clock, ArrowRight, Lightbulb, Map, BookOpen, History, Star, Trophy } from 'lucide-react';
import HeroSection from '../components/home/HeroSection';
import EventCard from '../components/ui/EventCard';
import SectionTitle from '../components/ui/SectionTitle';

// Import images
import heroBackground from '../assets/images/home/hero-bg.jpg';
import legacyBackground from '../assets/images/home/legacy-bg.jpg';
import surgeryWorkshop from '../../public/workshops/Surgery.jpeg';
import anaesthesiaWorkshop from '../../public/workshops/Anesthecia.jpeg';
import orthopaedicsWorkshop from '../../public/workshops/Orthopedics.jpeg';

const HomePage: React.FC = () => {
  const legacyHighlights = [
    {
      icon: <History className="h-8 w-8 text-accent" />,
      title: 'A Century of Excellence',
      description: 'Founded in 1923, pioneering medical education in South India.',
    },
    {
      icon: <Star className="h-8 w-8 text-accent" />,
      title: 'Premier Institution',
      description: 'Largest medical college in Andhra Pradesh with modern facilities.',
    },
    {
      icon: <Trophy className="h-8 w-8 text-accent" />,
      title: 'Research Excellence',
      description: 'Driving medical advances through disciplined research and innovation.',
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: 'Healthcare Leaders',
      description: 'Training thousands of medical professionals serving globally.',
    },
  ];

  const workshops = [
    {
      id: 1,
      title: 'Surgery Workshop',
      description: 'Hands-on workshop on latest surgical techniques and procedures.',
      date: 'March 15, 2025',
      image: surgeryWorkshop,
    },
    {
      id: 2,
      title: 'Anaesthesia Workshop',
      description: 'Advanced techniques in anaesthesia administration and monitoring.',
      date: 'March 16, 2025',
      image: anaesthesiaWorkshop,
    },
    {
      id: 3,
      title: 'Orthopaedics Workshop',
      description: 'Latest advancements in orthopaedic procedures and rehabilitation.',
      date: 'March 17, 2025',
      image: orthopaedicsWorkshop,
    },
  ];


  return (
    <>
      <Helmet>
        <title>AADHYAYAN 2025 | A Festival of Fire, A Symphony of Scholars</title>
        <meta name="description" content="Join AADHYAYAN 2025 - Where dreams take shape, and ideas take flight. A celebration of thought, talent, and transformation in medical excellence." />
      </Helmet>

      <HeroSection />

      {/* Legacy Section */}
      <section className="section relative bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        <div className="absolute inset-0 bg-[url('../assets/images/home/legacy-bg.jpg')] opacity-5 bg-fixed"></div>
        <div className="container relative">
          <div className="text-center mb-12">
            <h2 className="text-accent font-playfair text-3xl md:text-4xl mb-4 tracking-wider uppercase transform hover:scale-105 transition-transform duration-300 drop-shadow-lg">
              Our Legacy
            </h2>
            <h4 className="text-1xl md:text-1xl lg:text-1xl font-playfair font-bold text-primary pb-4 leading-tight">
              A Century of Medical Excellence
            </h4>
            <div className="h-1.5 w-40 bg-gradient-to-r from-accent to-primary mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <div className="space-y-8">
              <h3 className="font-playfair text-4xl md:text-5xl font-bold leading-tight">
                <span className="block text-primary animate-fade-in">Crafting an Experience</span>
                <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse">
                  Since 1923
                </span>
              </h3>
              <div className="space-y-6">
                <p className="text-gray-dark text-lg leading-relaxed font-montserrat">
                  <span className="text-2xl text-accent font-semibold">Andhra Medical College</span> stands 
                  as one of India's oldest medical institutions, upholding rigorous academic standards since 1923. 
                  Our journey began in the British era, evolving into a cornerstone of medical excellence in South India.
                </p>
                <p className="text-gray-dark leading-relaxed">
                  Today, AMC is the largest medical college in Andhra Pradesh, with modern facilities and a 
                  full spectrum of clinical departments. Our attached teaching hospital – King George Hospital (KGH) – 
                  serves thousands of patients daily, providing students with rich practical training.
                </p>
                <p className="text-gray-dark leading-relaxed">
                  Our faculty and students have consistently driven medical advances through disciplined research 
                  and innovation. This fusion of comprehensive healthcare services and teaching reinforces AMC's 
                  reputation for excellence, making it a beacon of medical education.
                </p>
              </div>
              <div className="pt-4">
                <Link 
                  to="/about" 
                  className="btn-primary group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    Discover Our Heritage
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {legacyHighlights.map((highlight, index) => (
                <div 
                  key={index} 
                  className="card p-6 flex flex-col items-center text-center transform hover:scale-105 transition-all duration-300 bg-white/80 backdrop-blur-sm hover:shadow-xl"
                >
                  <div className="mb-4 p-3 rounded-full bg-gradient-to-br from-accent/10 to-primary/10">
                    {highlight.icon}
                  </div>
                  <h4 className="font-playfair font-bold text-lg mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {highlight.title}
                  </h4>
                  <p className="text-sm text-gray">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About AADHYAYAN Section */}
      <section className="section bg-white">
        <div className="container">
          <SectionTitle
            subtitle="About the Event"
            title="AADHYAYAN 2025"
            alignment="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-montserrat font-bold">
                A Festival of Fire, A Symphony of Scholars
              </h3>
              <p className="text-gray-dark">
                The Incendios, true to their name, burn with the flame of excellence. They have woven a fest 
                not with mere events, but with visions — of a world where learning is not a task, but a triumph; 
                not a burden, but a bliss. AADHYAYAN is more than a gathering — it is a pilgrimage of intellect.
              </p>
              <p className="text-gray-dark">
                Where dreams take shape, and ideas take flight.<br />
                A celebration of thought, talent, and transformation.<br />
                Workshops that whisper innovation,<br />
                Competitions that challenge brilliance,<br />
                Speakers that spark revolutions.
              </p>
              <div className="mt-8 p-6 bg-gradient-to-r from-primary to-gray-900 rounded-lg text-white">
                <p className="text-lg font-montserrat">
                  In Visakhapatnam's sacred soil, heart is KING GEORGE.<br />
                  Its voice is AADHYAYAN.<br />
                  The flame is INCENDIOS.<br />
                  Together they just IGNITE
                </p>
              </div>
              <div className="pt-4">
                <Link to="/about" className="btn-primary">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="card p-6 flex flex-col items-center text-center">
                <Calendar className="h-8 w-8 text-accent mb-4" />
                <h4 className="font-montserrat font-bold mb-2">5 Days of Learning</h4>
                <p className="text-sm text-gray">Workshops, competitions, and networking</p>
              </div>
              <div className="card p-6 flex flex-col items-center text-center">
                <Users className="h-8 w-8 text-accent mb-4" />
                <h4 className="font-montserrat font-bold mb-2">1000+ Participants</h4>
                <p className="text-sm text-gray">Medical students and professionals</p>
              </div>
              <div className="card p-6 flex flex-col items-center text-center">
                <Award className="h-8 w-8 text-accent mb-4" />
                <h4 className="font-montserrat font-bold mb-2">Prestigious Awards</h4>
                <p className="text-sm text-gray">Recognition for innovation</p>
              </div>
              <div className="card p-6 flex flex-col items-center text-center">
                <Lightbulb className="h-8 w-8 text-accent mb-4" />
                <h4 className="font-montserrat font-bold mb-2">Innovation Hub</h4>
                <p className="text-sm text-gray">Platform for breakthroughs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshops & Events Preview */}
      <section className="section bg-gray-50">
        <div className="container">
          <SectionTitle
            subtitle="Featured Events"
            title="Workshops & Competitions"
            alignment="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {workshops.map((workshop) => (
              <EventCard
                key={workshop.id}
                title={workshop.title}
                description={workshop.description}
                date={workshop.date}
                image={workshop.image}
                link={`/workshops#${workshop.id}`}
              />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/workshops" className="btn-secondary inline-flex items-center">
              View All Workshops
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Schedule Preview */}
      <section className="section bg-white">
        <div className="container">
          <SectionTitle
            subtitle="Event Timeline"
            title="Schedule Overview"
            alignment="center"
          />

          <div className="max-w-3xl mx-auto mt-12 space-y-6">
            <div className="card p-6 border-l-4 border-accent">
              <div className="flex items-start">
                <Clock className="h-6 w-6 text-accent mr-4 mt-1" />
                <div>
                  <h4 className="font-montserrat font-semibold">Day 1: Opening Ceremony & Keynotes</h4>
                  <p className="text-gray mt-2">
                    March 15, 2025 - Join us for the grand opening ceremony, keynote speeches by 
                    distinguished guests, and introductory workshops.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="card p-6 border-l-4 border-accent">
              <div className="flex items-start">
                <Clock className="h-6 w-6 text-accent mr-4 mt-1" />
                <div>
                  <h4 className="font-montserrat font-semibold">Day 2: Workshops & Competitions</h4>
                  <p className="text-gray mt-2">
                    March 16, 2025 - Full day of specialized workshops, hackathon begins, paper presentations, 
                    and interactive sessions with medical experts.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="card p-6 border-l-4 border-accent">
              <div className="flex items-start">
                <Clock className="h-6 w-6 text-accent mr-4 mt-1" />
                <div>
                  <h4 className="font-montserrat font-semibold">Day 3: Finals & Closing Ceremony</h4>
                  <p className="text-gray mt-2">
                    March 17, 2025 - Final presentations, judging, award ceremony, and closing remarks 
                    celebrating the achievements of all participants.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link to="/schedule" className="btn-secondary inline-flex items-center">
              View Detailed Schedule
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6">
            Ready to Join the Symphony of Scholars?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-gray-light">
            Register now to secure your spot at AADHYAYAN 2025. Limited seats available for workshops and competitions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/workshops" className="btn-primary">
              Register Now
            </Link>
            <Link to="/contact" className="btn-secondary bg-transparent text-white border-white hover:bg-white/10">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Location & Venue */}
      <section className="section bg-white">
        <div className="container">
          <SectionTitle
            subtitle="Location"
            title="Venue & Accommodation"
            alignment="center"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            <div className="space-y-6">
              <div className="flex items-start">
                <Map className="h-6 w-6 text-accent mr-4 mt-1" />
                <div>
                  <h4 className="font-montserrat font-semibold">Event Venue</h4>
                  <p className="text-gray mt-2">
                    Andhra Medical College, Maharanipeta, Visakhapatnam, Andhra Pradesh - 530002
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <BookOpen className="h-6 w-6 text-accent mr-4 mt-1" />
                <div>
                  <h4 className="font-montserrat font-semibold">Accommodation</h4>
                  <p className="text-gray mt-2">
                    Comfortable accommodation options are available for outstation participants.
                    Triple sharing AC rooms with all essential amenities.
                  </p>
                </div>
              </div>
              <div className="pt-4">
                <Link to="/accommodation" className="btn-secondary">
                  View Accommodation Details
                </Link>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden h-80 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-gray-dark font-medium text-center p-4">
                  Interactive Map would be displayed here
                  <br /><span className="text-sm text-gray">(Map integration would be implemented with Google Maps API)</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
