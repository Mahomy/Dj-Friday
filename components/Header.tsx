import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-dark-bg/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="text-2xl font-bold text-gradient">
            FORTUNETELA SOUNDS
          </a>
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-light-text hover:text-brand-blue transition-colors duration-300 font-medium">
                {link.name}
              </a>
            ))}
          </nav>
          <a href="#contact" 
             onClick={(e) => handleLinkClick(e, '#contact')}
             className="hidden md:inline-block bg-gradient-to-r from-brand-blue to-brand-purple text-white font-bold py-2 px-6 rounded-full hover:scale-105 transform transition-transform duration-300">
            Book Now
          </a>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-light-text z-50 focus:outline-none">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 bg-dark-bg/95 backdrop-blur-lg z-40 transform transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <nav className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link, index) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`text-3xl font-bold text-light-text hover:text-brand-blue transition-all duration-300 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
              style={{ transitionDelay: `${isMenuOpen ? 150 + index * 100 : 0}ms` }}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={(e) => handleLinkClick(e, '#contact')}
            className={`mt-8 bg-gradient-to-r from-brand-blue to-brand-purple text-white font-bold py-3 px-8 rounded-full hover:scale-105 transform transition-all duration-300 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
            style={{ transitionDelay: `${isMenuOpen ? 150 + navLinks.length * 100 : 0}ms` }}
          >
            Book Now
          </a>
        </nav>
      </div>
    </>
  );
};

export default Header;