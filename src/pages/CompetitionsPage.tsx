import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Video, MessageSquare, PenTool, Brain, Search, Presentation, BookOpen, Trophy, Calendar, Users, Clock, MapPin, X, Phone } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';

interface Competition {
  id: string;
  title: string;
  icon: JSX.Element;
  description: string;
  image: string;
  details: {
    rules: string[];
    eligibility?: string[];
    guidelines?: string[];
    contact?: {
      name: string;
      phone: string;
    };
    date?: string;
    fee?: string;
    venue?: string;
    topic?: string;
    theme?: string;
  };
}

const CompetitionsPage: React.FC = () => {
  const [selectedCompetition, setSelectedCompetition] = useState<Competition | null>(null);

  const competitions: Competition[] = [
    {
      id: 'build-diagnosis',
      title: 'Build the Diagnosis',
      icon: <Brain className="h-8 w-8" />,
      description: 'Case based diagnostic puzzle combining history, signs, labs and reasoning.',
      image: '/competitions/Diagnosis.jpg',
      details: {
        rules: [
          'All UG students can participate (including interns)',
          'A team should be of four members',
          'Case-based diagnostic challenges',
          'Combines patient history, clinical signs, lab results',
          'Tests clinical reasoning and problem-solving skills'
        ],
        fee: '100/-',
        contact: {
          name: 'Contact Coordinator',
          phone: '+91 7658943811'
        }
      }
    },
    {
      id: 'debate',
      title: 'Medical Debate',
      icon: <MessageSquare className="h-8 w-8" />,
      description: 'Engage in thought-provoking discussions on current medical topics.',
      image: '/competitions/Medical debate.jpeg',
      details: {
        rules: [
          'Three-round structured debate',
          'Opening statement',
          'Questioning and rebuttal',
          'Closing statement',
          'Personal attacks are not encouraged'
        ],
        guidelines: [
          'Judged based on relevance',
          'Language and structure',
          'Audience connection'
        ],
        contact: {
          name: 'Jaideep',
          phone: '9010238700'
        },
        topic: 'Euthanasia: Compassionate Choice or Moral Misstep'
      }
    },
    {
      id: 'essay',
      title: 'Essay Writing',
      icon: <PenTool className="h-8 w-8" />,
      description: 'Express your thoughts on medical topics through compelling essays.',
      image: '/competitions/essaywriting.jpeg',
      details: {
        topic: 'De-Stigmatising the Demon: Reframing HIV Beyond Fear and Prejudice',
        contact: {
          name: 'Renuka Priya',
          phone: '9573870164'
        }
      }
    },
    {
      id: 'reels',
      title: 'Medical Reels',
      icon: <Video className="h-8 w-8" />,
      description: 'Create engaging short-form medical content.',
      image: '/competitions/Medical Reels.jpeg',
      details: {
        rules: [
          'Animations are not accepted',
          'Abusive language & censored content not allowed',
          'Top 3 films will be aired on Movie Night (20th June)',
          'Submit by 18th June'
        ],
        guidelines: [
          'Judged based on content',
          'Expression',
          'Cinematography',
          'Acting and delivery of speech'
        ],
        contact: {
          name: 'Atchuth Ram',
          phone: '8523863076'
        }
      }
    },
    {
      id: 'photography',
      title: 'Photography Competition',
      icon: <Camera className="h-8 w-8" />,
      description: 'Capture the essence of medical life through your lens.',
      image: '/competitions/Photography.jpeg',
      details: {
        theme: 'Our Campus',
        rules: [
          'Describe your images in 2 lines',
          'Photo must be taken within one week',
          'Submit by 18th June'
        ],
        contact: {
          name: 'Farooq',
          phone: '9392803340'
        }
      }
    }
  ];

  return (
    <>
      <Helmet>
        <title>Competitions | ADHYAYAN 2025</title>
        <meta name="description" content="Participate in various medical competitions at ADHYAYAN 2025. Showcase your skills, win prizes, and gain recognition." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg')] opacity-20 bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-gray-900/80"></div>
        <div className="container relative">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-montserrat font-bold mb-6">Medical Competitions</h1>
            <p className="text-xl text-gray-light">
              Showcase your talents, compete with peers, and win exciting prizes
            </p>
          </motion.div>
        </div>
      </section>

      {/* Competitions Grid */}
      <section className="section bg-white">
        <div className="container">
          <SectionTitle
            subtitle="Compete & Win"
            title="Featured Competitions"
            alignment="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {competitions.map((competition, index) => (
              <motion.div
                key={competition.id}
                className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={competition.image}
                    alt={competition.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-full bg-accent/10 text-accent">
                      {competition.icon}
                    </div>
                    <h3 className="text-xl font-montserrat font-semibold">
                      {competition.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray mb-6">
                    {competition.description}
                  </p>

                  <button 
                    onClick={() => setSelectedCompetition(competition)}
                    className="w-full btn-primary"
                  >
                    Learn More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Competition Details Modal */}
      <AnimatePresence>
        {selectedCompetition && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCompetition(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              <div className="relative">
                <button
                  onClick={() => setSelectedCompetition(null)}
                  className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>

                <div className="p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-full bg-accent/10 text-accent">
                      {selectedCompetition.icon}
                    </div>
                    <h3 className="text-2xl font-montserrat font-semibold">
                      {selectedCompetition.title}
                    </h3>
                  </div>

                  {selectedCompetition.details.topic && (
                    <div className="mb-6">
                      <h4 className="font-montserrat font-semibold mb-2">Topic</h4>
                      <p className="text-gray-700">{selectedCompetition.details.topic}</p>
                    </div>
                  )}

                  {selectedCompetition.details.rules && (
                    <div className="mb-6">
                      <h4 className="font-montserrat font-semibold mb-2">Rules</h4>
                      <ul className="space-y-2">
                        {selectedCompetition.details.rules.map((rule, index) => (
                          <li key={index} className="flex items-start">
                            <span className="h-2 w-2 bg-accent rounded-full mr-3 mt-2"></span>
                            <span className="text-gray-700">{rule}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {selectedCompetition.details.guidelines && (
                    <div className="mb-6">
                      <h4 className="font-montserrat font-semibold mb-2">Guidelines</h4>
                      <ul className="space-y-2">
                        {selectedCompetition.details.guidelines.map((guideline, index) => (
                          <li key={index} className="flex items-start">
                            <span className="h-2 w-2 bg-accent rounded-full mr-3 mt-2"></span>
                            <span className="text-gray-700">{guideline}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {selectedCompetition.details.fee && (
                    <div className="mb-6">
                      <h4 className="font-montserrat font-semibold mb-2">Registration Fee</h4>
                      <p className="text-2xl font-bold text-accent">₹{selectedCompetition.details.fee}</p>
                    </div>
                  )}

                  {selectedCompetition.details.contact && (
                    <div className="mb-6">
                      <h4 className="font-montserrat font-semibold mb-2">Contact</h4>
                      <div className="flex items-center gap-2">
                        <Phone className="h-5 w-5 text-accent" />
                        <span>{selectedCompetition.details.contact.name}:</span>
                        <a 
                          href={`tel:${selectedCompetition.details.contact.phone}`}
                          className="text-accent hover:underline"
                        >
                          {selectedCompetition.details.contact.phone}
                        </a>
                      </div>
                    </div>
                  )}

                  <button className="w-full btn-primary mt-4">
                    Register Now
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Prizes Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <SectionTitle
            subtitle="Rewards"
            title="Prizes & Recognition"
            alignment="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {['First', 'Second', 'Third'].map((position, index) => (
              <motion.div
                key={position}
                className="card p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-4">
                  <Trophy className={`h-12 w-12 ${index === 0 ? 'text-yellow-500' : index === 1 ? 'text-gray-400' : 'text-orange-500'}`} />
                </div>
                <h3 className="text-xl font-montserrat font-semibold mb-2">{position} Prize</h3>
                <p className="text-sm text-gray">
                  {index === 0 ? 'Trophy + Certificate + Cash Prize' :
                   index === 1 ? 'Medal + Certificate + Cash Prize' :
                   'Medal + Certificate + Cash Prize'}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6">
            Ready to Showcase Your Talent?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-gray-light">
            Register now to participate in our competitions. Limited spots available!
          </p>
          <button className="btn-primary">
            Register Now
          </button>
        </div>
      </section>
    </>
  );
};

export default CompetitionsPage;