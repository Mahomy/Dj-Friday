import React from 'react';
import AnimatedSection from './AnimatedSection';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-light-bg scroll-mt-20 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="text-gradient">Fortunela Sounds</span>
            </h2>
            <p className="text-medium-text mb-6 leading-relaxed">
              Based in Soshanguve South, Fortunela Sounds & Records is your premier partner for event entertainment. We specialize in providing high-quality sound hire and professional DJ services for a wide range of events, from private parties to corporate functions.
            </p>
            <p className="text-medium-text mb-8 leading-relaxed">
              Our commitment is to deliver an exceptional audio experience. With top-of-the-line equipment from industry leaders like Pioneer and Behringer, we ensure crystal-clear sound that brings your event to life. We handle everything, including transport and setup, so you can focus on enjoying the moment.
            </p>
             <a href="#contact" className="bg-gradient-to-r from-brand-blue to-brand-purple text-white font-bold py-3 px-8 rounded-full hover:scale-105 transform transition-transform duration-300 inline-block">
              Get a Free Quote
            </a>
          </AnimatedSection>
          <AnimatedSection className="order-1 md:order-2" delay={200}>
            <img src="https://picsum.photos/seed/djlife/600/500" alt="DJ performing" className="rounded-lg shadow-2xl w-full h-auto object-cover" />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;
