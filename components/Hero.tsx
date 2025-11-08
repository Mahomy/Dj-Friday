import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img src="https://images.unsplash.com/photo-1526979118433-63c7344f06f1?ixid=M3w0MzUxNjF8MHwxfHNlYXJjaHw1fHxzb3VuZCUyMHN5c3RlbXxlbnwwfHx8fDE3NDIyMTYzMjl8MA&ixlib=rb-4.0.3&orientation=landscape?fit=crop&crop=entropy%2Cfaces&auto=format%2Ccompress&w=1280" alt="Professional sound system speakers at an event" className="absolute inset-0 w-full h-full object-cover animate-kenburns"/>
      </div>
      <div className="relative z-20 container mx-auto px-6">
        <h1 className="text-4xl md:text-7xl font-black uppercase tracking-wider mb-4">
          <span 
            className={`inline-block transition-all duration-700 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{transitionDelay: '100ms'}}
          >
            <span className="text-gradient">Unforgettable Sound</span>
          </span>
          <span 
            className={`block transition-all duration-700 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{transitionDelay: '300ms'}}
          >
            For Your Perfect Event
          </span>
        </h1>
        <p 
            className={`text-lg md:text-2xl text-light-text mb-8 max-w-3xl mx-auto transition-all duration-700 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{transitionDelay: '500ms'}}
        >
          Professional DJ services and premium sound equipment hire to make your celebration legendary.
        </p>
        <a 
            href="#services" 
            className={`bg-gradient-to-r from-brand-blue to-brand-purple text-white font-bold py-4 px-10 rounded-full text-lg hover:scale-105 transform transition-transform duration-300 inline-block transition-all ease-out ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
            style={{transitionDelay: '700ms', transitionDuration: '500ms'}}
        >
          Explore Packages
        </a>
      </div>
    </section>
  );
};

export default Hero;