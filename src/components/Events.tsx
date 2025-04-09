import React from "react";
import img1 from "../images/1e.png";
import img2 from "../images/2e.png";
import img3 from "../images/3e.png";
import img4 from "../images/4e.png";

interface Event {
  id: number;
  title: string;
  artist: string;
  date: string;
  location: string;
  description?: string;
  image: string;
  isPast?: boolean;
}

const Events: React.FC = () => {
  const events: Event[] = [
    {
      id: 4,
      title: "Miczone Next Wave",
      artist: "DJ SET ED ESIBIZIONI LIVE",
      date: "6 Aprile, 2025",
      location: "Lizard Club",
      description:
        "Una serata unica con esibizioni live e dj set. Un mix esplosivo di musica dal vivo.",
      image: img4,
      isPast: false,
    },
    {
      id: 1,
      title: "Next Wave",
      artist: "Live Music & Dj Set",
      date: "15 Dicembre, 2024",
      location: "",
      image: img1,
      isPast: true,
    },
    {
      id: 2,
      title: "Next Wave",
      artist: "Live Music & Dj Set",
      date: "19 Gennaio, 2025",
      location: "",
      image: img2,
      isPast: true,
    },
    {
      id: 3,
      title: "Next Wave",
      artist: "Live Music & Dj Set",
      date: "9 Febbraio, 2025",
      location: "Lizard Club",
      image: img3,
      isPast: true,
    },
  ];

  const futureEvents = events.filter((event) => !event.isPast);
  const pastEvents = events.filter((event) => event.isPast);

  return (
    <section id="events" className="section bg-miczone-black py-20">
      <div className="container-custom">
        {/* Sezione Eventi Futuri */}
        <div className="section-title mb-16">
          <h2
            className="opacity-0 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            Prossimo Evento
          </h2>
          <p
            className="opacity-0 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Non perdere la nostra prossima serata esclusiva al Lizard Club
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 mb-20">
          {futureEvents.map((event, index) => (
            <div
              key={event.id}
              className="glass-card overflow-hidden opacity-0 animate-scale-in"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="image-wrapper h-64 md:h-full">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 flex flex-col justify-center">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg text-miczone-accent font-semibold">
                      {event.date}
                    </span>
                    <span className="text-lg text-gray-400">
                      {event.location}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white">
                    {event.title}
                  </h3>
                  <p className="text-lg text-gray-400 mb-3">{event.artist}</p>
                  {event.description && (
                    <p className="text-sm text-gray-400 mb-6">
                      {event.description}
                    </p>
                  )}
                  <a
                    href="https://www.instagram.com/miczone_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-lg w-full md:w-auto text-center"
                  >
                    Prenota Ora
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sezione Eventi Passati */}
        <div className="section-title mt-20">
          <h2
            className="opacity-0 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            Eventi Passati
          </h2>
          <p
            className="opacity-0 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Rivivi i nostri momenti più belli
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {pastEvents.map((event, index) => (
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
                  <span className="text-xs text-miczone-accent font-semibold">
                    {event.date}
                  </span>
                  <span className="text-xs text-gray-400">
                    {event.location}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-1 text-white">
                  {event.title}
                </h3>
                <p className="text-sm text-gray-400">{event.artist}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
