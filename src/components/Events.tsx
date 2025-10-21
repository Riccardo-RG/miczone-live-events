import React, { useState, useEffect } from "react";
import img1 from "../images/1e.png";
import img2 from "../images/2e.png";
import img3 from "../images/3e.png";
import img4 from "../images/4e.png";
import serata from "../images/serata.png";
import { Calendar, MapPin, Clock, Music } from "lucide-react";

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
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    setIsLoaded(true);
  }, []);
  const events: Event[] = [
    {
      id: 5,
      title: "Miczone Next Wave",
      artist: "Live Music & Dj Set",
      date: "25 Novembre, 2025",
      location: "Lizard Club",
      description:
        "Una serata esplosiva con musica dal vivo e dj set. Non perdere l'occasione di vivere un'esperienza unica!",
      image: serata,
      isPast: false,
    },
    {
      id: 4,
      title: "Miczone Next Wave",
      artist: "DJ SET ED ESIBIZIONI LIVE",
      date: "6 Aprile, 2025",
      location: "Lizard Club",
      description:
        "Una serata unica con esibizioni live e dj set. Un mix esplosivo di musica dal vivo.",
      image: img4,
      isPast: true,
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
    <section id="events" className="section bg-miczone-black py-24 md:py-32 relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] right-[5%] w-40 h-40 bg-miczone-accent/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-[20%] left-[10%] w-48 h-48 bg-miczone-secondary/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-[40%] left-[30%] w-1.5 h-32 bg-gradient-to-b from-transparent via-miczone-accent/30 to-transparent"></div>
        <div className="absolute top-[60%] right-[20%] w-1.5 h-40 bg-gradient-to-b from-transparent via-miczone-accent/20 to-transparent"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Sezione Eventi Futuri */}
        <div className="section-title mb-20 md:mb-24">
          <h2
            className={`${isLoaded ? "animate-fade-in" : "opacity-0"}`}
            style={{ animationDelay: "0.1s" }}
          >
            Prossimi <span className="gradient-text">Eventi</span>
          </h2>
          <p
            className={`${isLoaded ? "animate-fade-in" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            Resta aggiornato sui nostri prossimi eventi
          </p>
        </div>

        <div className="max-w-[1400px] mx-auto mb-20 px-4 sm:px-6 md:px-8">
          {futureEvents.length > 0 ? (
            futureEvents.map((event, index) => (
              <div
                key={event.id}
                className={`glass-card-accent overflow-hidden card-hover-effect backdrop-blur-xl p-6 sm:p-8 md:p-10 ${
                  isLoaded ? "animate-scale-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className="flex flex-col gap-8">
                  <div className="image-wrapper w-full relative rounded-xl overflow-hidden bg-miczone-black/30">
                    <div className="aspect-[4/5] sm:aspect-[16/9] md:aspect-[2/1] lg:aspect-[21/9] p-4 sm:p-6 md:p-8">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-contain absolute inset-0 hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="w-full pt-2 sm:pt-4 md:pt-6 flex flex-col items-center text-center">
                    <div className="flex flex-col space-y-4 sm:space-y-5 mb-6">
                      <div className="flex items-center justify-center">
                        <Calendar className="w-6 h-6 sm:w-7 sm:h-7 text-miczone-accent mr-3" />
                        <span className="text-xl sm:text-2xl font-semibold text-miczone-text-primary">
                          {event.date}
                        </span>
                      </div>
                      <div className="flex items-center justify-center">
                        <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-miczone-accent mr-3" />
                        <span className="text-xl sm:text-2xl text-miczone-text-secondary">
                          {event.location}
                        </span>
                      </div>
                      <div className="flex items-center justify-center">
                        <Music className="w-6 h-6 sm:w-7 sm:h-7 text-miczone-accent mr-3" />
                        <span className="text-xl sm:text-2xl text-miczone-text-secondary">
                          {event.artist}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-3 text-miczone-text-primary">
                      {event.title}
                    </h3>

                    {event.description && (
                      <p className="text-sm text-miczone-text-secondary mb-6 border-l-2 border-miczone-accent pl-3">
                        {event.description}
                      </p>
                    )}
                    <a
                      href="https://www.instagram.com/miczone_/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary text-lg w-full md:w-auto text-center shadow-neon"
                    >
                      Prenota Ora
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div
              className={`glass-card p-8 text-center ${
                isLoaded ? "animate-scale-in" : "opacity-0"
              }`}
              style={{ animationDelay: "0.3s" }}
            >
              <h3 className="text-xl font-bold mb-4 text-miczone-text-primary">
                Nessun evento in programma al momento
              </h3>
              <p className="text-miczone-text-secondary mb-6">
                Seguici sui social per rimanere aggiornato sui nostri prossimi
                eventi!
              </p>
              <a
                href="https://www.instagram.com/miczone_/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Seguici su Instagram
              </a>
            </div>
          )}
        </div>

        {/* Sezione Eventi Passati */}
        <div className="section-title mt-20">
          <h2
            className={`${isLoaded ? "animate-fade-in" : "opacity-0"}`}
            style={{ animationDelay: "0.1s" }}
          >
            Eventi <span className="gradient-text">Passati</span>
          </h2>
          <p
            className={`${isLoaded ? "animate-fade-in" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            Rivivi i nostri momenti più belli
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {pastEvents.map((event, index) => (
            <div
              key={event.id}
              className={`glass-card overflow-hidden card-hover-effect ${
                isLoaded ? "animate-scale-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="image-wrapper h-48 relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-contain object-center absolute inset-0"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <div className="flex flex-col space-y-2 mb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 text-miczone-accent mr-1" />
                      <span className="text-xs font-semibold text-miczone-text-primary">
                        {event.date}
                      </span>
                    </div>
                    {event.location && (
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 text-miczone-accent mr-1" />
                        <span className="text-xs text-miczone-text-secondary">
                          {event.location}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-1 text-miczone-text-primary">
                  {event.title}
                </h3>
                <p className="text-sm text-miczone-text-secondary flex items-center">
                  <Music className="w-4 h-4 text-miczone-accent mr-1" />
                  {event.artist}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
