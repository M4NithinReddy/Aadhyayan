import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';

interface EventCardProps {
  title: string;
  description: string;
  date: string;
  image: string;
  link: string;
}

const EventCard: React.FC<EventCardProps> = ({
  title,
  description,
  date,
  image,
  link,
}) => {
  return (
    <div className="card group h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-3 left-3 flex items-center text-white text-sm">
          <Calendar className="h-4 w-4 mr-2" />
          <span>{date}</span>
        </div>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="font-montserrat font-semibold text-xl mb-2">{title}</h3>
        <p className="text-gray text-sm mb-4 flex-grow">{description}</p>
        <Link 
          to={link} 
          className="inline-flex items-center text-accent font-medium text-sm transition-all group-hover:translate-x-1"
        >
          Learn More
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

export default EventCard;