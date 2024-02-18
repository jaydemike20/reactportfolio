import React from 'react';
import logo from './logo.svg';
import './App.css';
import profileImage from '../src/assets/image.png'
import { useState, useEffect } from 'react';
import { hover } from '@testing-library/user-event/dist/hover';

import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/home';
import { About } from './pages/about';
import { Services } from './pages/services';
import { Works } from './pages/works';
import { Navbar } from './components/navbar';
import { Contact } from './pages/contact';


function App() {

  const [greeting, setGreeting] = useState('Hello! 👋');
  const greetings = ['Hello! 👋', 'Mabuhay! 👋', 'こんにちは 👋'];

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * greetings.length);
      setGreeting(greetings[randomIndex]);
    }, 3000);

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, []); // Empty dependency array ensures the effect runs only once on component mount



  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/works' element={<Works />} />
        <Route path='/contact' element={<Contact />} />        
      </Routes>

    </div>
  );
}

export default App;
