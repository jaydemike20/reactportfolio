import React from 'react';
import logo from './logo.svg';
import './App.css';
import profileImage from '../src/assets/image.png'
import { Button } from '@mui/material';
import { useState, useEffect } from 'react';


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
      
      {/* navbar and logo */}

      <div className='banner'>

        <div className='title'>
          <h1>Jayde Mike</h1>
        </div>

        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Service</a></li>
            <li><a href="#">Work</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
       </nav>






      </div>

      <div className='home'>

        <div className='lefthome'>

          <h1>{greeting}</h1>
          <h3>I'm Jayde Mike Engracia   |</h3>
          <p>Aspiring Full-Stack Developer and Software Developer 👨‍💻</p>

          <Button variant="contained" color='success'>Hire Me!</Button>


          <div className='icons'>
            <ul>
              <li><a>Fb</a></li>
              <li><a>Twitter</a></li>
              <li><a>LinkedIn </a></li>
              <li><a>GitHub</a></li>
            </ul>
          </div>

        </div>

        <div className="righthome">
          <img src={profileImage} alt='Mi imahe' className='imahe' />
        </div>



      </div>

      <div className='about'>
        <h2>About</h2>
        <p>I am currently 4th year student in University of Science and 
Technology of Southern Philippines.</p>
      </div>




    </div>
  );
}

export default App;
