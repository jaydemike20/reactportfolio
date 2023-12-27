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

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


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

          <Button variant="contained" size='large'  color='success'>Hire Me!</Button>


          <div className='icons'>
            <ul>
              <li><a href='#'><FacebookIcon color="primary" sx={{ fontSize: 50 }} /></a></li>
              <li><a href='#'><GitHubIcon  sx={{ fontSize: 50 }} /></a></li>
              <li><a href='#'><LinkedInIcon color="primary" sx={{ fontSize: 50 }} /></a></li>
              <li><a href="#"><InstagramIcon color='error' sx={{fontSize:50}}></InstagramIcon></a></li>
              <li><a href='#'><TwitterIcon color="primary" sx={{ fontSize: 50 }} /></a></li>
            </ul>
          </div>

        </div>

        <div className="righthome">
          <img src={profileImage} alt='Mi imahe' className='imahe' />
        </div>



      </div>

      <div className='about'>

        <div className="introabout">

          <h2>About Jayde</h2>
          <p>I am currently 4th year student in University of Science and 
  Technology of Southern Philippines.</p>
        </div>

        <div className="timeline">

          <section className="col">

            <header className="title">
              <h2>Education</h2>
            </header>

            <div className="contents">
              <div className="box">
                <h4>2013-2014</h4>
                <h3>Primary School</h3>
                <p>Cugman Elementary School</p>
              </div>
              <div className="box">
                <h4>2017-2018</h4>
                <h3>Junior High School</h3>
                <p>Cugman National HighSchool (CNHS)</p>
              </div>
              <div className="box">
                <h4>2019-2020</h4>
                <h3>Senior High School</h3>
                <p>Capitol University (CU)</p>
              </div>
              <div className="box">
                <h4>2020-present</h4>
                <h3>Tertiary School</h3>
                <p>University of Science and Technology of Southern Philippines (USTP)</p>
              </div>

            </div>

          </section>


        </div>

        <div className="certificate">

          <div className="certtitle">
            <h3>Certificates & Letters</h3>
            <p>Here's are my e-certificate for finishing a course!</p>
          </div>

          <div className='certcards'>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/static/images/cards/contemplative-reptile.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Design Web
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
              </CardActions>
            </Card>          

          </div>

        </div>

      </div>




    </div>
  );
}

export default App;
