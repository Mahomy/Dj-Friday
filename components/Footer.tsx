import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-8">
      <div className="container mx-auto px-6 text-center text-medium-text">
        <p>&copy; {new Date().getFullYear()} Fortunetela Sounds & Records. All Rights Reserved.</p>
        <p className="text-sm mt-2">
          Developed by Given Sithole
        </p>
      </div>
    </footer>
  );
};

export default Footer;