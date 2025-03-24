
import React from 'react';
import GalleryImage from './GalleryImage';

const Gallery: React.FC = () => {
  const galleryImages = [
    { id: 1, src: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80", alt: "Concert crowd with hands in the air" },
    { id: 2, src: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1774&q=80", alt: "DJ performing at nightclub" },
    { id: 3, src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80", alt: "Fans enjoying a music festival" },
    { id: 4, src: "https://images.unsplash.com/photo-1459749411175-04c550c00cca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80", alt: "Close-up of guitar player" },
    { id: 5, src: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80", alt: "Singer performing on stage" },
    { id: 6, src: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80", alt: "Festival at night with laser lights" },
    { id: 7, src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1774&q=80", alt: "Drummer performing on stage" },
    { id: 8, src: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80", alt: "Crowd at electronic music event" },
    { id: 9, src: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80", alt: "DJ equipment close-up" }
  ];

  return (
    <section id="gallery" className="section bg-miczone-dark py-20">
      <div className="container-custom">
        <div className="section-title">
          <h2 className="opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>Event Gallery</h2>
          <p className="opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>Relive our most memorable moments from past events</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 lg:gap-5 mt-12">
          {galleryImages.map((image, index) => (
            <GalleryImage 
              key={image.id}
              src={image.src}
              alt={image.alt}
              index={index}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center opacity-0 animate-fade-in" style={{ animationDelay: '0.7s' }}>
          <button className="btn-primary">View Full Gallery</button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
