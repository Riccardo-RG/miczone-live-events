import React from "react";

import GalleryImage from "./GalleryImage";

// Importo tutte le immagini
import img2642 from "../images/IMG_2642 2.JPG";
import img2626 from "../images/IMG_2626 2.JPG";
import img2630 from "../images/IMG_2630 2.JPG";
import img2610 from "../images/IMG_2610.JPG";
import img2585 from "../images/IMG_2585 2.JPG";
import img2566 from "../images/IMG_2566 2.JPG";
import img2567 from "../images/IMG_2567 2.JPG";
import img2568 from "../images/IMG_2568 2.JPG";

const images = [
  { src: img2642, alt: "Miczone Live Event 1" },
  { src: img2626, alt: "Miczone Live Event 2" },
  { src: img2630, alt: "Miczone Live Event 3" },
  { src: img2610, alt: "Miczone Live Event 4" },
  { src: img2585, alt: "Miczone Live Event 5" },
  { src: img2566, alt: "Miczone Live Event 6" },
  { src: img2567, alt: "Miczone Live Event 7" },
  { src: img2568, alt: "Miczone Live Event 8" },
];

const Gallery: React.FC = () => {
  return (
    <section className="section !py-12" id="gallery">
      <div className="gallery-container">
        <div className="section-title mb-8">
          <h2>La Nostra Galleria</h2>
          <p>Scopri i nostri momenti più belli</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0">
          {images.map((image, index) => (
            <div key={index} className="aspect-square overflow-hidden">
              <GalleryImage src={image.src} alt={image.alt} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
