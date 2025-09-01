
import React from 'react';
import { DESTINATIONS } from '../constants';
import type { Destination } from '../types';

const DestinationCard: React.FC<{ destination: Destination }> = ({ destination }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 group">
      <img src={destination.imageUrl} alt={destination.name} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-2 text-gray-800">{destination.name}</h3>
        <p className="text-gray-600 mb-4">{destination.description}</p>
        <button className="w-full py-3 px-6 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95 transition-all duration-300">
          Discover More
        </button>
      </div>
    </div>
  );
};


const Destinations: React.FC = () => {
  return (
    <section id="destinations" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800">Popular Destinations</h2>
            <p className="text-lg text-gray-600 mt-2">Explore the places everyone is talking about.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {DESTINATIONS.map((dest) => (
            <DestinationCard key={dest.id} destination={dest} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
