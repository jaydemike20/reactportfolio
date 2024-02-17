import React, { useState } from 'react';
import { Box, Typography, LinearProgress } from '@mui/material';

const certificates = [
  { title: 'Certificate 1', progress: 80 },
  { title: 'Certificate 2', progress: 60 },
  { title: 'Certificate 3', progress: 90 },
];

const techStack = ['React JS', 'React Expo', 'Node.js', 'Express.js', 'MongoDB'];

const Carousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleNextSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide === 1 ? 0 : prevSlide + 1));
  };

  const handlePrevSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide === 0 ? 1 : prevSlide - 1));
  };

  return (
    <div className="carousel-container">
      <div className={`slide ${activeSlide === 0 ? 'active' : ''}`}>
        <Typography variant="h4" gutterBottom>Certificates🏅</Typography>
        {certificates.map((certificate, index) => (
          <Box key={index} mb={2}>
            <Typography variant="h6">{certificate.title}</Typography>
            <LinearProgress variant="determinate" value={certificate.progress} />
          </Box>
        ))}
      </div>
      <div className={`slide ${activeSlide === 1 ? 'active' : ''}`}>
        <Typography variant="h4" gutterBottom>Tech Stack</Typography>
        <ul>
          {techStack.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>
      <button onClick={handlePrevSlide}>Previous</button>
      <button onClick={handleNextSlide}>Next</button>
    </div>
  );
};

export default Carousel;