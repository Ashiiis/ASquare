import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './index.css';
import ReelStrip from './ReelStrip'; 
import ReelStrip2 from './ReelStrip2';
import Newspaper from './NewsPaper';
const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='container'>
        <h1 className='logo left' style={{ fontFamily: 'cursive' }}>Most Potential</h1>
        <div className='nav-links center'>
          <Link to='/dark-world'>Dark World</Link>
          <Link to='/our-plans'>Our Plans</Link>
          <Link to='/our-trips'>Our Trips</Link>
        </div>
        <h1 className='logo right' style={{ fontFamily: 'cursive' }}>Very Personal</h1>
      </div>
    </nav>
  );
};

const App = () => {
  return (
    <Router>
      <div className='app-container'>
        <Navbar />
        <div className="angled-reel reel-a">
        <ReelStrip direction="right" />
        
      </div>
      <div className="angled-reel reel-b">
        <ReelStrip2 direction="left" />
        
      </div>
      <Newspaper/>
        <Routes>
          <Route path='/' element={<div className='content'></div>} />
          <Route path='/dark-world' element={<div className='content'>Dark World Content</div>} />
          <Route path='/our-plans' element={<div className='content'>Our Plans Content</div>} />
          <Route path='/our-trips' element={<div className='content'>Our Trips Content</div>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
