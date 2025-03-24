
import React from 'react';

interface Event {
  id: number;
  title: string;
  artist: string;
  date: string;
  location: string;
  image: string;
}

const Events: React.FC = () => {
  const upcomingEvents: Event[] = [
    {
      id: 1,
      title: "Summer Beats Festival",
      artist: "Multiple Artists",
      date: "Aug 15, 2024",
      location: "Central Park",
      image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
    },
    {
      id: 2,
      title: "Night of Jazz",
      artist: "The Smooth Quartet",
      date: "Sept 3, 2024",
      location: "Blue Note Club",
      image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1772&q=80"
    },
    {
      id: 3,
      title: "Electronic Dreams",
      artist: "DJ Pulsar",
      date: "Sept 17, 2024",
      location: "Neon Arena",
      image: "https://images.unsplash.com/photo-1571751239008-50cad5827908?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
    },
    {
      id: 4,
      title: "Rock Legends Tour",
      artist: "Thunderstrike",
      date: "Oct 5, 2024",
      location: "Stadium Arena",
      image: "https://images.unsplash.com/photo-1468164016595-6108e4c60c8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
    }
  ];

  return (
    <section id="events" className="section bg-miczone-black py-20">
      <div className="container-custom">
        <div className="section-title">
          <h2 className="opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>Upcoming Events</h2>
          <p className="opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>Mark your calendar for these incredible live performances</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {upcomingEvents.map((event, index) => (
            <div 
              key={event.id} 
              className="glass-card overflow-hidden opacity-0 animate-scale-in"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="image-wrapper h-48">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-miczone-accent font-semibold">{event.date}</span>
                  <span className="text-xs text-gray-400">{event.location}</span>
                </div>
                <h3 className="text-lg font-bold mb-1 text-white">{event.title}</h3>
                <p className="text-sm text-gray-400 mb-4">{event.artist}</p>
                <button className="w-full btn-primary text-sm">Get Tickets</button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center opacity-0 animate-fade-in" style={{ animationDelay: '0.7s' }}>
          <button className="btn-primary">View All Events</button>
        </div>
      </div>
    </section>
  );
};

export default Events;
