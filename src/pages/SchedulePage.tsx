import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';

const SchedulePage: React.FC = () => {
  const scheduleData = {
    day1: {
      date: '15',
      title: 'MED HUNT',
      sessions: []
    },
    day2: {
      date: '16',
      sessions: [
        {
          time: '9am to 12 pm',
          events: ['Ortho', 'Surgery', 'Ophthalmology', 'Debate']
        },
        {
          time: '1pm to 4 pm',
          events: ['Ortho', 'Surgery', 'Autopsy', 'Housie']
        }
      ]
    },
    day3: {
      date: '17',
      sessions: [
        {
          time: '9am to 12 pm',
          events: ['Surgery', 'Pedia', 'SPM', 'Essay writing']
        },
        {
          time: '1pm to 4 pm',
          events: ['Surgery', 'Pedia', 'Autopsy', 'OBGYN-1']
        }
      ]
    },
    day4: {
      date: '18',
      sessions: [
        {
          time: '9am to 12 pm',
          events: ['Medicine', 'ENT', 'Med Quiz']
        },
        {
          time: '1pm to 4 pm',
          events: ['Medicine', 'Autopsy', 'OBGYN-1']
        }
      ]
    },
    day5: {
      date: '19',
      sessions: [
        {
          time: '9am to 12 pm',
          events: ['Basic life support', 'Surgery']
        },
        {
          time: '1pm to 4 pm',
          events: ['Basic life support', 'Autopsy', 'OBGYN-2', 'Music Band']
        }
      ]
    },
    day6: {
      date: '20',
      sessions: [
        {
          time: '9am to 12 pm',
          events: ['Basic life support']
        },
        {
          time: '1pm to 4 pm',
          events: ['Basic life support', 'OBGYN-2', 'Movie Night']
        }
      ]
    }
  };

  return (
    <>
      <Helmet>
        <title>Schedule | MED HUNT 2025</title>
        <meta name="description" content="Detailed schedule of workshops, competitions, and events at MED HUNT 2025." />
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
            <h1 className="font-montserrat font-bold mb-6">MED HUNT Schedule</h1>
            <p className="text-xl text-gray-light">
              Six days of learning, innovation, and celebration
            </p>
          </motion.div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {Object.entries(scheduleData).map(([day, data], index) => (
              <motion.div
                key={day}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="mb-12 last:mb-0"
              >
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-24 h-24 bg-accent/10 rounded-2xl flex items-center justify-center">
                    <span className="text-4xl font-bold text-accent">{data.date}</span>
                  </div>
                  <div>
                    {data.title && (
                      <h2 className="text-3xl font-bold text-primary mb-2">{data.title}</h2>
                    )}
                  </div>
                </div>

                {data.sessions.map((session, sessionIndex) => (
                  <div key={sessionIndex} className="card p-6 mb-6 last:mb-0">
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 text-accent mr-2" />
                        <span className="font-medium">{session.time}</span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {session.events.map((event, i) => (
                          <div key={i} className="flex items-center bg-gray-50 rounded-lg p-3">
                            <span className="h-2 w-2 bg-accent rounded-full mr-3"></span>
                            <span className="text-gray-800">{event}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <SectionTitle
              subtitle="Important Information"
              title="Event Guidelines"
              alignment="center"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <div className="card p-6">
                <h3 className="font-montserrat font-semibold mb-4">Venue Information</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <MapPin className="h-5 w-5 text-accent mr-3 mt-1" />
                    <p className="text-gray">All venues are within the AMC campus</p>
                  </li>
                  <li className="flex items-start">
                    <Users className="h-5 w-5 text-accent mr-3 mt-1" />
                    <p className="text-gray">Follow signage for easy navigation</p>
                  </li>
                  <li className="flex items-start">
                    <Clock className="h-5 w-5 text-accent mr-3 mt-1" />
                    <p className="text-gray">Help desk available throughout the event</p>
                  </li>
                </ul>
              </div>

              <div className="card p-6">
                <h3 className="font-montserrat font-semibold mb-4">Registration & Check-in</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Calendar className="h-5 w-5 text-accent mr-3 mt-1" />
                    <p className="text-gray">Register for specific workshops in advance</p>
                  </li>
                  <li className="flex items-start">
                    <Users className="h-5 w-5 text-accent mr-3 mt-1" />
                    <p className="text-gray">Bring valid ID and registration confirmation</p>
                  </li>
                  <li className="flex items-start">
                    <Clock className="h-5 w-5 text-accent mr-3 mt-1" />
                    <p className="text-gray">Arrive 15 minutes before scheduled events</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6">
            Download Schedule
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-gray-light">
            Get the complete schedule on your device for offline access
          </p>
          <button className="btn-primary">
            Download PDF Schedule
          </button>
        </div>
      </section>
    </>
  );
};

export default SchedulePage;