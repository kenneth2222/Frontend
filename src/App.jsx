import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutPage from './components/AboutPage';
import LandingPage from './components/LandingPage';
import SponsorPage from './components/SponsorPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/sponsor" element={<SponsorPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;