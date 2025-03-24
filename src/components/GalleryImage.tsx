
import React, { useState, useEffect, useRef } from 'react';

interface GalleryImageProps {
  src: string;
  alt: string;
  index: number;
}

const GalleryImage: React.FC<GalleryImageProps> = ({ src, alt, index }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (imageRef.current) {
      observer.observe(imageRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  const handleImageLoad = () => {
    setIsLoaded(true);
  };
  
  return (
    <div 
      ref={imageRef}
      className="image-wrapper overflow-hidden rounded-lg aspect-square relative opacity-0 animate-scale-in"
      style={{ 
        animationDelay: `${0.1 + index * 0.05}s`,
        animationPlayState: isInView ? 'running' : 'paused'
      }}
    >
      {!isLoaded && (
        <div className="absolute inset-0 bg-miczone-gray animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-miczone-accent/30 border-t-miczone-accent rounded-full animate-spin"></div>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
        style={{ opacity: isLoaded ? 1 : 0 }}
        loading="lazy"
        onLoad={handleImageLoad}
      />
    </div>
  );
};

export default GalleryImage;
