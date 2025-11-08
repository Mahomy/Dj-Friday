import React from 'react';
import AnimatedSection from './AnimatedSection';

interface Service {
  title: string;
  price?: string;
  description: string;
  features: string[];
  highlight?: boolean;
}

const servicesData: Service[] = [
  {
    title: 'Sound Hire Kit',
    price: 'From R3000.00',
    description: 'Our comprehensive sound package, perfect for medium-sized events.',
    features: [
      '2 x Stand Speaker Tops',
      'CDJs (Pioneer) + Mixer (Behringer)',
      '1 x Double Basebin',
      '1 x Cordless Microphone',
      '1 x Powered Mixer & Power Amp',
      'Transport & Setup Included',
      '5-Hour Duration (e.g., 2PM-7PM)',
    ],
    highlight: true,
  },
  {
    title: 'Basic Party Pack',
    description: 'Ideal for smaller gatherings, birthdays, and house parties where great music is a must.',
    features: [
      '2 x Professional Speakers',
      '1 x All-in-one DJ Controller',
      '1 x Wired Microphone',
      'Basic Party Lights',
      '4-Hour DJ Set',
    ],
  },
  {
    title: 'Full Event Production',
    description: 'The ultimate experience for weddings, corporate events, and large-scale parties.',
    features: [
      'Everything in the Sound Hire Kit',
      'Professional DJ for the event duration',
      'Advanced Lighting Rig (Lasers & Strobes)',
      'Smoke/Haze Machine',
      'On-site Sound Technician',
      'Custom Playlist Consultation',
    ],
  },
];

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
    const cardClasses = service.highlight
    ? 'bg-light-bg border-2 border-brand-purple transform md:scale-110 z-10'
    : 'bg-gray-800 border border-gray-700';
    
    return (
        <div className={`rounded-xl shadow-2xl p-8 flex flex-col ${cardClasses} transition-transform duration-300 hover:scale-105 h-full relative`}>
            {service.highlight && (
                <span className="bg-brand-purple text-white text-xs font-bold px-3 py-1 rounded-full absolute -top-4 right-8">POPULAR</span>
            )}
            <h3 className="text-2xl font-bold text-gradient mb-2">{service.title}</h3>
            {service.price && <p className="text-xl font-semibold mb-4 text-white">{service.price}</p>}
            <p className="text-medium-text mb-6 flex-grow">{service.description}</p>
            <ul className="space-y-3 mb-8">
                {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                        <svg className="w-5 h-5 text-brand-blue mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
            <a href="#contact" className="mt-auto bg-gradient-to-r from-brand-blue to-brand-purple text-white font-bold py-3 px-6 rounded-full text-center hover:brightness-110 transition-all duration-300">
                Inquire Now
            </a>
        </div>
    );
};


const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-dark-bg scroll-mt-20 overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-medium-text max-w-2xl mx-auto mb-16">
              We offer flexible packages to match the scale and vibe of your event. Choose one of our popular options or contact us for a custom quote.
            </p>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 relative">
          {servicesData.map((service, index) => (
            <AnimatedSection key={index} delay={index * 150}>
                <ServiceCard service={service} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;