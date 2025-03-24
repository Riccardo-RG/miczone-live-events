
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Events from '../components/Events';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';

const Index: React.FC = () => {
  // Define sections for navigation
  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'events', label: 'Events' },
    { id: 'gallery', label: 'Gallery' }
  ];
  
  // Disable scroll restoration to prevent jumping on navigation
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    
    // Scroll to top on first load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-miczone-dark text-white">
      <Navbar sections={sections} />
      <Hero />
      <Events />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Index;
