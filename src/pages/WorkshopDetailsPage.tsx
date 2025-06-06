import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Phone, ArrowLeft, Users } from 'lucide-react';

interface Slot {
  id: string;
  time: string;
  date: string;
  paymentLink: string;
}

interface Workshop {
  id: string;
  title: string;
  description: string;
  date?: string;
  venue: string;
  price: number;
  topics: string[];
  contacts: { name: string; phone?: string; }[];
  image: string;
  slots: Slot[];
}

const workshops: Workshop[] = [
  {
    id: 'ophthalmology',
    title: 'Ophthalmology Workshop',
    description: 'Comprehensive training in eye examination and surgical techniques.',
    date: 'June 16, 2025',
    venue: 'Govt. Regional Eye Hospital, RAMA TALKIES',
    price: 599,
    topics: [
      'Know your glasses',
      'Anterior segment examination',
      'Cataract surgery on goat eye',
      'Posterior segment examination',
      'Glaucoma evaluation (Non Contact Tonometer)',
      'Computer Vision Syndrome / Dry eye evaluation',
      'Colour vision',
      'Diabetic retinopathy evaluation'
    ],
    contacts: [
      { name: 'Surya', phone: '8639630928' },
      { name: 'Rahul', phone: '9398362706' }
    ],
    image: 'https://images.pexels.com/photos/5726706/pexels-photo-5726706.jpeg',
    slots: [
      {
        id: 'ophth-1',
        time: '9:00 AM - 1:00 PM',
        date: 'June 16, 2025',
        paymentLink: 'https://rzp.io/rzp/LTz3fhU'
      }
    ]
  },
  {
    id: 'orthopaedics',
    title: 'Orthopaedics Workshop',
    description: 'Learn essential bandaging and casting techniques.',
    date: 'June 16, 2025',
    venue: 'AMCOSA',
    price: 499,
    topics: [
      'Bandage Techniques',
      'Plaster of Paris Techniques'
    ],
    contacts: [
      { name: 'Prashanth', phone: '7989543522' },
      { name: 'Thushar Manikanta', phone: '6309561947' },
      { name: 'Raji' }
    ],
    image: 'https://images.pexels.com/photos/8376160/pexels-photo-8376160.jpeg',
    slots: [
      {
        id: 'ortho-1',
        time: '9:00 AM - 1:00 PM',
        date: 'June 16, 2025',
        paymentLink: 'https://rzp.io/rzp/R7GlpMlh'
      },
      {
        id: 'ortho-2',
        time: '2:00 PM - 6:00 PM',
        date: 'June 16, 2025',
        paymentLink: 'https://rzp.io/rzp/soI2zROp'
      }
    ]
  },
  {
    id: 'anaesthesia',
    title: 'Anaesthesia Workshop',
    description: 'Comprehensive training in anaesthesia and life support.',
    venue: 'NELS Skill Lab, AMC',
    price: 449,
    topics: [
      'Basic Life Support',
      'Types of Anaesthesia',
      'Oxygen Therapy',
      'Airway Management',
      'Trauma Care',
      'IV Cannulation'
    ],
    contacts: [
      { name: 'Mahin', phone: '6303772349' },
      { name: 'Madhu Lasya' }
    ],
    image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg',
    slots: [
      {
        id: 'anaes-1',
        time: '9:00 AM - 1:00 PM',
        date: 'June 19, 2025',
        paymentLink: 'https://rzp.io/rzp/e8l5u6e0'
      },
      {
        id: 'anaes-2',
        time: '2:00 PM - 6:00 PM',
        date: 'June 19, 2025',
        paymentLink: 'https://rzp.io/rzp/SwOrByk8'
      },
      {
        id: 'anaes-3',
        time: '9:00 AM - 1:00 PM',
        date: 'June 20, 2025',
        paymentLink: 'https://rzp.io/rzp/kAgAw9Ie'
      },
      {
        id: 'anaes-4',
        time: '2:00 PM - 6:00 PM',
        date: 'June 20, 2025',
        paymentLink: 'https://rzp.io/rzp/wBshqqmL'
      }
    ]
  },
  {
    id: 'surgery',
    title: 'Surgery Workshop',
    description: 'Hands-on training in surgical techniques and wound management.',
    venue: 'AMCOSA',
    price: 499,
    topics: [
      'Suturing Techniques',
      'Incision & Drainage',
      'Wound Management & First Aid'
    ],
    contacts: [
      { name: 'Sreenu', phone: '7995538332' },
      { name: 'Sai Ganesh', phone: '9390438455' },
      { name: 'Madhulika' }
    ],
    image: 'https://images.pexels.com/photos/3259629/pexels-photo-3259629.jpeg',
    slots: [
      {
        id: 'surg-1',
        time: '9:00 AM - 1:00 PM',
        date: 'June 16, 2025',
        paymentLink: 'https://rzp.io/rzp/KTy9kPfm'
      },
      {
        id: 'surg-2',
        time: '2:00 PM - 6:00 PM',
        date: 'June 16, 2025',
        paymentLink: 'https://rzp.io/rzp/4dqnAS6'
      },
      {
        id: 'surg-3',
        time: '9:00 AM - 1:00 PM',
        date: 'June 17, 2025',
        paymentLink: 'https://rzp.io/rzp/cT7bQQi'
      },
      {
        id: 'surg-4',
        time: '2:00 PM - 6:00 PM',
        date: 'June 17, 2025',
        paymentLink: 'https://rzp.io/rzp/3iEtSBG'
      },
      {
        id: 'surg-5',
        time: '9:00 AM - 1:00 PM',
        date: 'June 19, 2025',
        paymentLink: 'https://rzp.io/rzp/xaH8TQhR'
      }
    ]
  },
  {
    id: 'ent',
    title: 'ENT Workshop',
    description: 'Comprehensive training in otorhinolaryngology procedures.',
    venue: 'Govt. ENT Hospital, Pedda Waltair',
    price: 349,
    topics: [
      'Audiometry - Hearing Assessment',
      'Anterior Nasal Packing for Epistaxis',
      'Diagnosis with Nasal Endoscopy',
      'Tracheostomy on Goat Trachea'
    ],
    contacts: [
      { name: 'Vamshi', phone: '9381581180' },
      { name: 'Sri Ganesh', phone: '70139573173899459338' },
      { name: 'Pooja' }
    ],
    image: 'https://images.pexels.com/photos/4226122/pexels-photo-4226122.jpeg',
    slots: [
      {
        id: 'ent-1',
        time: '9:00 AM - 1:00 PM',
        date: 'June 18, 2025',
        paymentLink: 'https://rzp.io/rzp/D0mEaAjz'
      }
    ]
  },
  {
    id: 'pediatrics',
    title: 'Pediatrics Workshop',
    description: 'Essential pediatric care and assessment training with hands-on practice at skill stations.',
    date: 'June 17, 2025',
    venue: 'Dept. of Pediatrics, AMC',
    price: 499,
    topics: [
      'Neonatal Resuscitation',
      'Nutritional Assessment',
      'Immunisation Schedule',
      'Feeding Tube Insertion',
      'IV Cannulation',
      "Foley's Catheterisation",
      'Lumbar Puncture',
      'ET Tube Insertion'
    ],
    contacts: [
      { name: 'Midhilesh', phone: '8712299819' },
      { name: 'Sri Ganesh', phone: '7013459338' },
      { name: 'Pooja' }
    ],
    image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg',
    slots: [
      {
        id: 'ped-1',
        time: '9:00 AM - 1:00 PM',
        date: 'June 17, 2025',
        paymentLink: 'https://pages.razorpay.com/pl_QTbulkZBsIO7uc/view'
      },
      {
        id: 'ped-2',
        time: '2:00 PM - 6:00 PM',
        date: 'June 17, 2025',
        paymentLink: 'https://pages.razorpay.com/pl_QTbwUgtbUZLXCH/view'
      }
    ]
  },
  {
    id: 'medicine',
    title: 'Medicine Workshop',
    description: 'Comprehensive medical skills and assessment training.',
    venue: 'AMCOSA',
    price: 349,
    topics: [
      'ABG',
      'Symptoms to Diagnosis',
      'ECG',
      'Skill Training',
      'Blood Pressure Measurement',
      'Capillary Glucose Testing',
      'Urine Ketone Testing',
      'ECG Recording',
      'IM, SC, IV Injection Techniques'
    ],
    contacts: [
      { name: 'Vinil', phone: '6304568005' },
      { name: 'Naveen M', phone: '86887055173' },
      { name: 'Pushpa Lasya' }
    ],
    image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg',
    slots: [
      {
        id: 'med-1',
        time: '9:00 AM - 1:00 PM',
        date: 'June 18, 2025',
        paymentLink: 'https://rzp.io/rzp/m6RavCJ'
      },
      {
        id: 'med-2',
        time: '2:00 PM - 6:00 PM',
        date: 'June 18, 2025',
        paymentLink: 'https://rzp.io/rzp/dDHgBZRX'
      }
    ]
  },
  {
    id: 'fmt',
    title: 'Forensic Medicine Workshop',
    description: 'Hands-on forensic medicine and autopsy training.',
    venue: 'Mortuary, Dept. of FMT, AMC KGH',
    price: 649,
    topics: [
      'Live Autopsy',
      'Foetal Autopsy',
      '5 Persons per Demonstration',
      'Organ Dissection'
    ],
    contacts: [
      { name: 'Durga Prasad', phone: '9966639392' },
      { name: 'Vivek', phone: '9492702886' }
    ],
    image: 'https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg',
    slots: [
      {
        id: 'fmt-1',
        time: '2:00 PM - 6:00 PM',
        date: 'June 16, 2025',
        paymentLink: 'https://rzp.io/rzp/X9j99EsV'
      },
      {
        id: 'fmt-2',
        time: '2:00 PM - 6:00 PM',
        date: 'June 17, 2025',
        paymentLink: 'https://rzp.io/rzp/FvbCf0gd'
      },
      {
        id: 'fmt-3',
        time: '2:00 PM - 6:00 PM',
        date: 'June 18, 2025',
        paymentLink: 'https://rzp.io/rzp/k24gwOO0'
      },
      {
        id: 'fmt-4',
        time: '2:00 PM - 6:00 PM',
        date: 'June 19, 2025',
        paymentLink: 'https://rzp.io/rzp/rYPb6G0'
      }
    ]
  },
  {
    id: 'community',
    title: 'Community Medicine Workshop',
    description: 'Training in community health and preventive medicine.',
    venue: 'AMCOSA',
    price: 349,
    topics: [],
    contacts: [],
    image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg',
    slots: [
      {
        id: 'comm-1',
        time: '9:00 AM - 1:00 PM',
        date: 'June 17, 2025',
        paymentLink: 'https://rzp.io/rzp/bQzDEzrD'
      },
      {
        id: 'comm-2',
        time: '9:00 AM - 1:00 PM',
        date: 'June 18, 2025',
        paymentLink: 'https://rzp.io/rzp/l9lFWDo'
      }
    ]
  },
  {
    id: 'obgyn1',
    title: 'ObGyn Workshop - 1',
    description: 'Essential obstetric and gynecological procedures training.',
    venue: 'AMCOSA',
    price: 299,
    topics: [
      'Instrumental Delivery',
      'Intrauterine Device Insertion',
      'Shoulder Dystocia',
      'Pap Smear',
      'Episiotomy'
    ],
    contacts: [
      { name: 'Abhishek', phone: '9390774710' },
      { name: 'Siva Sankar', phone: '7032797278' },
      { name: 'Geethika' },
      { name: 'Srujana' }
    ],
    image: 'https://images.pexels.com/photos/5722164/pexels-photo-5722164.jpeg',
    slots: [
      {
        id: 'obgyn1-1',
        time: '2:00 PM - 6:00 PM',
        date: 'June 17, 2025',
        paymentLink: 'https://rzp.io/rzp/fSIWRms'
      },
      {
        id: 'obgyn1-2',
        time: '2:00 PM - 6:00 PM',
        date: 'June 18, 2025',
        paymentLink: 'https://rzp.io/rzp/b6rygR2'
      }
    ]
  },
  {
    id: 'obgyn2',
    title: 'ObGyn Workshop - 2',
    description: 'Advanced obstetric and gynecological procedures training.',
    venue: 'AMCOSA',
    price: 299,
    topics: [
      'Postpartum Hemorrhage Drill',
      'Eclampsia Drill',
      'Pelvic Assessment',
      'Cardiotocography',
      'Partogram'
    ],
    contacts: [
      { name: 'Abhishek', phone: '9390774710' },
      { name: 'Siva Sankar', phone: '7032797278' },
      { name: 'Geethika' }
    ],
    image: 'https://images.pexels.com/photos/5722164/pexels-photo-5722164.jpeg',
    slots: [
      {
        id: 'obgyn2-1',
        time: '2:00 PM - 6:00 PM',
        date: 'June 19, 2025',
        paymentLink: 'https://rzp.io/rzp/Fo026as'
      },
      {
        id: 'obgyn2-2',
        time: '2:00 PM - 6:00 PM',
        date: 'June 20, 2025',
        paymentLink: 'https://rzp.io/rzp/pYaUKds'
      }
    ]
  }
];

const WorkshopDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const workshop = workshops.find(w => w.id === id);

  if (!workshop) {
    return (
      <div className="min-h-screen pt-32 pb-20">
        <div className="container">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Workshop not found</h1>
            <Link to="/workshops" className="text-accent hover:underline">
              Back to Workshops
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{workshop.title} | ADHYAYAN 2025</title>
        <meta name="description" content={workshop.description} />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary to-gray-900 text-white">
        <div className="container">
          <Link 
            to="/workshops"
            className="inline-flex items-center text-white hover:text-accent mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Workshops
          </Link>

          <motion.div 
            className="max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
              {workshop.title}
            </h1>
            <p className="text-xl text-gray-light mb-8">
              {workshop.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {workshop.date && (
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-accent mr-3" />
                  <span>{workshop.date}</span>
                </div>
              )}
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-accent mr-3" />
                <span>{workshop.venue}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Workshop Details */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {workshop.topics.length > 0 && (
                <div className="card p-6">
                  <h2 className="text-2xl font-montserrat font-semibold mb-4">
                    Topics Covered
                  </h2>
                  <ul className="space-y-3">
                    {workshop.topics.map((topic, index) => (
                      <li key={index} className="flex items-start">
                        <span className="h-2 w-2 bg-accent rounded-full mr-3 mt-2"></span>
                        <span className="text-gray-dark">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="card p-6">
                <h2 className="text-2xl font-montserrat font-semibold mb-4">
                  Available Slots
                </h2>
                <div className="space-y-4">
                  {workshop.slots.map((slot) => (
                    <div 
                      key={slot.id}
                      className="border rounded-lg p-4 hover:border-accent transition-colors"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <Clock className="h-5 w-5 text-accent mr-2" />
                          <span className="font-medium">{slot.time}</span>
                        </div>
                        <span className="text-gray">{slot.date}</span>
                      </div>
                      <div className="flex items-center justify-end mt-4">
                        <a 
                          href={slot.paymentLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary text-sm px-6 py-2"
                        >
                          Register Now
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="card p-6">
                <h3 className="font-montserrat font-semibold mb-4">
                  Registration Fee
                </h3>
                <p className="text-3xl font-bold text-accent">₹{workshop.price}</p>
              </div>

              {workshop.contacts && workshop.contacts.length > 0 && (
                <div className="card p-6">
                  <h3 className="font-montserrat font-semibold mb-4">
                    Contact for Queries
                  </h3>
                  <div className="space-y-3">
                    {workshop.contacts.map((contact, index) => (
                      <div key={index} className="flex items-center">
                        <Phone className="h-4 w-4 text-accent mr-2" />
                        <span>{contact.name}</span>
                        {contact.phone && (
                          <a 
                            href={`tel:${contact.phone}`}
                            className="ml-2 text-accent hover:underline"
                          >
                            {contact.phone}
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkshopDetailsPage;