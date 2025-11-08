import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to a server
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', date: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-light-bg scroll-mt-20 overflow-hidden">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-medium-text max-w-2xl mx-auto">
              Ready to book or have a question? Fill out the form below or contact us directly.
            </p>
        </AnimatedSection>
        <div className="grid lg:grid-cols-2 gap-12">
          <AnimatedSection>
            <div className="bg-gray-800 p-8 rounded-lg shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-gradient">Booking Inquiry</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-light-text mb-2">Full Name</label>
                  <input type="text" name="name" id="name" required className="w-full bg-gray-700 border-gray-600 rounded-md py-3 px-4 text-light-text focus:ring-brand-blue focus:border-brand-blue transition" value={formData.name} onChange={handleChange} />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-light-text mb-2">Email Address</label>
                  <input type="email" name="email" id="email" required className="w-full bg-gray-700 border-gray-600 rounded-md py-3 px-4 text-light-text focus:ring-brand-blue focus:border-brand-blue transition" value={formData.email} onChange={handleChange} />
                </div>
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-light-text mb-2">Event Date</label>
                  <input type="date" name="date" id="date" required className="w-full bg-gray-700 border-gray-600 rounded-md py-3 px-4 text-light-text focus:ring-brand-blue focus:border-brand-blue transition" value={formData.date} onChange={handleChange} />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-light-text mb-2">Message</label>
                  <textarea name="message" id="message" rows={4} required className="w-full bg-gray-700 border-gray-600 rounded-md py-3 px-4 text-light-text focus:ring-brand-blue focus:border-brand-blue transition" value={formData.message} onChange={handleChange}></textarea>
                </div>
                <button type="submit" className="w-full bg-gradient-to-r from-brand-blue to-brand-purple text-white font-bold py-3 px-6 rounded-full hover:scale-105 transform transition-transform duration-300">
                  Send Message
                </button>
              </form>
            </div>
          </AnimatedSection>
          <AnimatedSection className="space-y-8" delay={200}>
            <h3 className="text-2xl font-bold text-gradient">Contact Information</h3>
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                <p className="text-lg font-semibold mb-2">Email</p>
                <a href="mailto:dialesfr@gmail.com" className="text-medium-text hover:text-brand-blue transition-colors">dialesfr@gmail.com</a>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                <p className="text-lg font-semibold mb-2">Phone</p>
                <a href="tel:+27767614519" className="text-medium-text hover:text-brand-blue transition-colors">+27 76 761 4519</a>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                <p className="text-lg font-semibold mb-2">Address</p>
                <p className="text-medium-text">27194 EXT 6, Soshanguve South, 0152, South Africa</p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                <p className="text-lg font-semibold mb-2">Booking Info</p>
                <p className="text-medium-text">A 40% deposit is required for all package bookings to secure your date.</p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
