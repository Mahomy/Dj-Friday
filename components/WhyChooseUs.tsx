import React from 'react';
import AnimatedSection from './AnimatedSection';

interface Feature {
  // Fix: Replaced JSX.Element with React.ReactNode to resolve "Cannot find namespace 'JSX'" error.
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 6l12-3" /></svg>,
    title: 'Pro-Grade Equipment',
    description: 'We use industry-standard gear from Pioneer & Behringer for flawless sound quality.',
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
    title: 'Experienced Professionals',
    description: 'Our team has the expertise to manage any event and keep the energy high.',
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    title: 'Reliable & Punctual',
    description: 'We pride ourselves on professionalism. We arrive on time, every time.',
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2 2h8a1 1 0 001-1z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16h2a1 1 0 001-1V7a1 1 0 00-1-1h-2" /></svg>,
    title: 'Transport Included',
    description: 'Hassle-free service. We deliver, set up, and pack down all equipment.',
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-light-bg overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us?</h2>
            <p className="text-medium-text max-w-2xl mx-auto mb-16">
              We are dedicated to making your event a massive success. Here’s what sets us apart.
            </p>
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
                 <AnimatedSection key={index} delay={index * 150}>
                    <div className="bg-gray-800 h-full p-8 rounded-lg text-center transition-all duration-300 hover:bg-brand-blue group hover:-translate-y-2">
                        <div className="text-brand-purple inline-block mb-4 group-hover:text-white transition-colors duration-300">
                            {feature.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                        <p className="text-medium-text group-hover:text-gray-200">{feature.description}</p>
                    </div>
                </AnimatedSection>
            ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;