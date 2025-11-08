import React from 'react';
import AnimatedSection from './AnimatedSection';

const images = [
  'https://images.unsplash.com/photo-1647160494152-4c8eb24a844b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870',
  'https://images.unsplash.com/photo-1616709062048-788acece6a51?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1031',
  'https://images.unsplash.com/photo-1519664699825-ddb2c64076bf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870',
  'https://images.unsplash.com/photo-1657271535048-f0e8ebc39746?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870',
  'https://images.unsplash.com/photo-1562046030-101e60ae2c75?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=873',
  'https://images.unsplash.com/photo-1528508670332-4c687dae6295?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=698',
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