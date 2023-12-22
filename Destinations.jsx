// src/pages/Destinations.js
import React from 'react';
import DestinationCard from '../Components/DestinationCard';

const Destinations = () => {
  const destinations = [
    { id: 1, name: 'Beach Paradise', description: 'Relax on beautiful sandy beaches.' },
    { id: 2, name: 'Mountain Retreat', description: 'Escape to the serenity of the mountains.' },
    // Add more destinations as needed
  ];

  return (
    <div>
      <h2>Explore Destinations</h2>
      <div className="destination-list">
        {destinations.map(destination => (
          <DestinationCard key={destination.id} destination={destination} />
        ))}
      </div>
    </div>
  );
}

export default Destinations;
