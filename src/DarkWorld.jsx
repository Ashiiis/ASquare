import React, { useState } from 'react';
import './DarkWorld.css';

const DarkWorld = () => {
  const [fantasy, setFantasy] = useState('');
  const [isSecret, setIsSecret] = useState(false);
  const [submittedFantasy, setSubmittedFantasy] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedFantasy({ fantasy, isSecret });
    setFantasy('');
    setIsSecret(false);
  };

  return (
    <div className="darkworld-container">
      <h1>🌒 Welcome to the Dark World</h1>
      <p className="intro">
        Enter your desires, your dreams, or that whisper in your heart you’ve never spoken aloud.
      </p>

      <form onSubmit={handleSubmit} className="fantasy-form">
        <textarea
          value={fantasy}
          onChange={(e) => setFantasy(e.target.value)}
          placeholder="Write your fantasy here..."
          required
        />
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={isSecret}
            onChange={() => setIsSecret(!isSecret)}
          />
          Keep it secret
        </label>
        <button type="submit">Whisper it</button>
      </form>

      {submittedFantasy && (
        <div className="fantasy-output">
          <h3>Your Fantasy:</h3>
          <p>{submittedFantasy.fantasy}</p>
          <p className="tag">
            {submittedFantasy.isSecret ? '🔒 Secret Fantasy' : '💭 Just a Thought'}
          </p>
        </div>
      )}
    </div>
  );
};

export default DarkWorld;
