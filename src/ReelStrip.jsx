// ReelStrip.js
import React from 'react';
import './ReelStrip.css';

const images = [
  './photo1.jpg',
  './photo5.jpg',
  './photo2.jpg',
  './photo4.jpg',
  './photo3.jpg',
  './photo6.jpg',
  './photo7.jpg',
  './photo8.jpg',
  './photo44.jpg',
  './photo10.jpg',
  './photo11.jpg',
  './photo12.jpg',
  './photo13.jpg',
  './photo14.jpg',
  './photo15.jpg',
  './photo16.jpg',
  './photo17.jpg',
  './photo18.jpg',
  './photo19.jpg',
  './photo20.jpg',
  './vid1.jpg',
  
  // Add more paths as needed
];

const ReelStrip = () => {
  return (
    <div className="reel-container">
      <div className="reel-strip">
        {images.map((src, index) => (
          <div className="reel-frame" key={index}>
            <img src={src} alt={`reel-${index}`} />
          </div>
        ))}
        {/* Duplicate for seamless looping */}
        {images.map((src, index) => (
          <div className="reel-frame" key={`dup-${index}`}>
            <img src={src} alt={`reel-dup-${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReelStrip;
