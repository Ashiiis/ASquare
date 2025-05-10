// ReelStrip.js
import React from 'react';
import './ReelStrip.css';

const images = [
  './photo21.jpg',
  './photo42.jpg',
  './photo22.jpg',
  './photo24.jpg',
  './photo23.jpg',
  './photo26.jpg',
  './photo27.jpg',
  './photo28.jpg',
  './photo29.jpg',
  './photo30.jpg',
  './photo31.heic',
  './photo32.jpg',
  './photo33.jpg',
  './photo34.jpg',
  './photo42.jpg',
  './photo36.jpg',
  './photo37.jpg',
  './photo38.jpg',
  './photo39.heic',
  './photo40.heic',
  
  // Add more paths as needed
];

const ReelStrip2 = () => {
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

export default ReelStrip2;
