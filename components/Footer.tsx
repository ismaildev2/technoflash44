
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; {new Date().getFullYear()} Discover Adventure. All rights reserved.</p>
        <p className="text-sm text-gray-400 mt-2">Crafted with passion for travel.</p>
      </div>
    </footer>
  );
};

export default Footer;
