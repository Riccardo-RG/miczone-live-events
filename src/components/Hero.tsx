
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="section relative flex items-center justify-center min-h-screen overflow-hidden"
      style={{
        background: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.9)), url('https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1 mb-4 text-xs font-semibold uppercase tracking-wider bg-miczone-accent text-white rounded-full animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Live Events & Performances
          </span>
          <h1 className="mb-6 text-white opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Experience The <span className="text-miczone-accent">Power</span> Of Live Music
          </h1>
          <p className="mb-8 text-gray-300 opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            MICZONE brings you the most immersive live event experiences with top artists and perfect acoustics in premium venues across the country.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <a href="#events" className="btn-primary">
              Upcoming Events
            </a>
            <a href="#gallery" className="text-white hover:text-miczone-accent transition-colors">
              Explore Gallery
            </a>
          </div>
        </div>
      </div>
      
      {/* Animated overlay elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-24 h-24 bg-miczone-accent/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-[30%] right-[15%] w-32 h-32 bg-miczone-accent/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-[40%] right-[25%] w-16 h-16 bg-miczone-accent/15 rounded-full blur-2xl animate-float"></div>
      </div>
    </section>
  );
};

export default Hero;
