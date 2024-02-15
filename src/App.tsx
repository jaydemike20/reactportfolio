import React from 'react';
import logo from './logo.svg';
import './App.css';
import profileImage from '../src/assets/image.png'
import { useState, useEffect } from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Button } from '@mui/material';
import MultiActionAreaCard from './components/card';
import networkin1 from '../src/assets/networking1.png'
import networkin2 from '../src/assets/netacad.png'
import web from '../src/assets/DesignWeb.png'
import snake from '../src/assets/pythonbegginer.png'
import { hover } from '@testing-library/user-event/dist/hover';
import { Navbar } from './components/navbar';
import { Route, Routes } from 'react-router-dom';
import { About } from './pages/about';
import { Services } from './pages/services';
import { Works } from './pages/works';
import { Contact } from './pages/contact';
import { Home } from './pages/home';


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
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/works' element={<Works />} />
        <Route path='/contact' element={<Contact />} />        
      </Routes>



      {/* <div className='banner'>

        <div className='title'>
          <h1>PORTFOLIO</h1>
        </div>

        <nav>
          <ul>
            <li><a href="#homepage">Home</a></li>
            <li><a href="#aboutpage">About</a></li>
            <li><a href="#">Service</a></li>
            <li><a href="#">Work</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
       </nav>






      </div> */}

      {/* <div className='home' id="homepage">

        <div className='lefthome'>

          <h1>{greeting}</h1>
          <h3>I'm Jayde Mike Engracia   |</h3>
          <p>Aspiring Full-Stack Developer and Software Developer 👨‍💻</p>

          <Button variant="contained" size='large'  color='warning'>Hire Me!</Button>


          <div className='icons'>
            <ul>
              <li><a href='https://www.facebook.com/jmike15' target="_blank"><FacebookIcon color="primary" sx={{ fontSize: 50, "&:hover":{
                fontSize: 40,
                color: 'black',
              } }} /></a></li>
              <li><a href='https://github.com/jaydemike20' target="_blank"><GitHubIcon  sx={{ fontSize: 50, "&:hover":{
                fontSize: 40,
                color: 'black',
              } }} /></a></li>
              <li><a href='https://www.linkedin.com/in/jayde-mike-engracia-6b6074202/' target="_blank"><LinkedInIcon color="primary" sx={{ fontSize: 50, "&:hover":{
                fontSize: 40,
                color: 'black',
              } }} /></a></li>
              <li><a href="https://www.instagram.com/jmengracia2/" target="_blank"><InstagramIcon color='error' sx={{ fontSize: 50, "&:hover":{
                fontSize: 40,
                color: 'black',
              } }}></InstagramIcon></a></li>
              <li><a href='https://twitter.com/jydmk21' target="_blank"><TwitterIcon color="primary" sx={{ fontSize: 50, "&:hover":{
                fontSize: 40,
                color: 'black',
              } }} /></a></li>
            </ul>
          </div>

        </div>

        <div className="righthome">
          <img src={profileImage} alt='Mi imahe' className='imahe' />
        </div>



      </div> */}

      {/* <div className='about' id="aboutpage">

        <div className="introabout">

          <h2>About Jayde</h2>
          <p>I am currently 4th year I.T student in University of Science and 
  Technology of Southern Philippines.</p>
        </div>

        <div className="timeline">

          <section className="col">

            <header className="title">
              <h2>Education</h2>
            </header>

            <div className="contents">
              <div className="box">
                <h4>2020-Present</h4>
                <h3>Tertiary School</h3>
                <p>University of Science and Technology of Southern Philippines (USTP)</p>
              </div>
              <div className="box">
                <h4>2019-2020</h4>
                <h3>Senior High School</h3>
                <p>Capitol University (CU)</p>
              </div>
              <div className="box">
                <h4>2017-2018</h4>
                <h3>Junior High School</h3>
                <p>Cugman National HighSchool (CNHS)</p>
              </div>
              <div className="box">
                <h4>2013-2014</h4>
                <h3>Primary School</h3>
                <p>Cugman Elementary School</p>
              </div>
            </div>

          </section>


        </div>



      </div>

      <div className="certificate">

        <div className="certtitle">
          <h3>Certificates🏅</h3>
          <p>Here's are my e-certificate for finishing an online course!</p>
        </div>

        <div className='certcards'>

        <MultiActionAreaCard
          title="DICT-WD002 Using HTML and CSS to Design a Website"
          description="DICT through the Modern Academics Convergence Hub (MACH)"
          image={web}
          />

        <MultiActionAreaCard
          title="Programming for Beginners Using Python"
          description="DICT through the Modern Academics Convergence Hub (MACH)"
          image={snake}
          />    
          
        <MultiActionAreaCard
          title="CCNAv7: Switching, Routing, and Wireless Essentials (certificate)"
          description="Cisco Networking Academy"
          image={networkin2}
          />

      </div>


          

      </div>

      <div className="service">
        <h1 style={{color:'white'}}>Service</h1>
      </div> */}

    </div>
  );
}

export default App;
