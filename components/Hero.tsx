
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-white text-center bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/seed/adventure/1920/1080')" }}>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">
          Discover Your Next Adventure
        </h1>
        <p className="text-lg md:text-2xl font-light drop-shadow-md">
          Unforgettable journeys to the world’s most stunning destinations.
        </p>
      </div>
    </section>
  );
};

export default Hero;
