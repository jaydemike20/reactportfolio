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

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
