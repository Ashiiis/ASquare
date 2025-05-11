// OurTrips.jsx
import React from 'react';
import './Ourtrip.css';

const tripImages = Array.from({ length: 20 }, (_, i) => `./trip${i + 1}.jpg`);

const OurTrips = () => {
  return (
    <div className="our-trips">
      <h2>🌍 Our Trips</h2>
      <div className="trip-gallery">
        {tripImages.map((src, index) => (
          <img key={index} src={src} alt={`Trip ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default OurTrips;
