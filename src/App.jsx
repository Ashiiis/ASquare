import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './index.css';
import ReelStrip from './ReelStrip';
import ReelStrip2 from './ReelStrip2';
import Newspaper from './NewsPaper';
import DarkWorld from './DarkWorld';
import PlanTheDay from './Plantheday';
import OurTrips from './OurTrip';
import { Gift } from 'lucide-react'; // ✅ import Gift icon

const Navbar = ({ onGiftClick }) => {
  return (
    <nav className='navbar'>
      <div className='container'>
        <h1 className='logo left' style={{ fontFamily: 'cursive' }}>Most Potential</h1>
        <div className='nav-links center'>
          <Link to='/dark-world'>Dark World</Link>
          <Link to='/our-plans'>Our Plans</Link>
          <Link to='/our-trips'>Our Trips</Link>
        </div>
        <div className='logo right' style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Gift onClick={onGiftClick} style={{ cursor: 'pointer' }} />
          <h1 className='logo left' style={{ fontFamily: 'cursive' }}>Very Personal</h1>
        </div>
      </div>
    </nav>
  );
};

const MainContent = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const [showModal, setShowModal] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [inputPassword, setInputPassword] = useState('');

  const handleSubmit = () => {
    if (inputPassword === 'secret123') {
      setAuthenticated(true);
    }
  };

  return (
    <div className='app-container'>
      <Navbar onGiftClick={() => setShowModal(true)} />
      {isHome && (
        <>
          <div className="angled-reel reel-a">
            <ReelStrip direction="right" />
          </div>
          <div className="angled-reel reel-b">
            <ReelStrip2 direction="left" />
          </div>
          <Newspaper />
        </>
      )}

      <Routes>
        <Route path='/dark-world' element={<DarkWorld />} />
        <Route path='/our-plans' element={<PlanTheDay />} />
        <Route path='/our-trips' element={<OurTrips />} />
        <Route path='/' element={null} />
      </Routes>

      {showModal && (
        <div className="modal-backdrop">
          <div className="modal-content">
            {!authenticated ? (
              <>
                <h3>🎁 Enter Secret Password</h3>
                <input
                  type="password"
                  value={inputPassword}
                  onChange={(e) => setInputPassword(e.target.value)}
                  placeholder="Enter password"
                />
                <button onClick={handleSubmit}>Unlock</button>
                <button onClick={() => setShowModal(false)}>Close</button>
              </>
            ) : (
              <>
                <h3>📝 Secret Script</h3>
                <p>
                  "Vigenere Cipher is used to encrypt the message "
                </p>
                <button onClick={() => setShowModal(false)}>Close</button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <MainContent />
    </Router>
  );
};

export default App;
