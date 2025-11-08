import React from 'react';
import AnimatedSection from './AnimatedSection';

const images = [
  'https://picsum.photos/seed/party1/600/400',
  'https://picsum.photos/seed/party2/600/400',
  'https://picsum.photos/seed/party3/600/400',
  'https://picsum.photos/seed/party4/600/400',
  'https://picsum.photos/seed/party5/600/400',
  'https://picsum.photos/seed/party6/600/400',
];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-20 md:py-32 bg-dark-bg scroll-mt-20 overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Event Gallery</h2>
            <p className="text-medium-text max-w-2xl mx-auto mb-16">
              A glimpse into the unforgettable moments we've helped create.
            </p>
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((src, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <div className="overflow-hidden rounded-lg shadow-lg group">
                <img 
                  src={src} 
                  alt={`Event gallery image ${index + 1}`} 
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
