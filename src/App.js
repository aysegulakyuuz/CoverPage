import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul className="navbar">
            <li >
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
            {/* Add remaining nav elements */}
          </ul>
              
       </nav>

        <hr />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />

          {/* Add remaining routes */}
         
        </Routes>
      </div>
    </Router>
  );
};

export default App;
