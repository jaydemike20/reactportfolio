import React from "react";
import './home.css';
import { Button } from '@mui/material';
import profileImage from '../../src/assets/image.png'

export const Home = () => {
    return(
        <div className="container">
            <div className="container-left">
                <h3>Hello</h3>
                <h1>I'm Jayde Mike Engracia</h1>
                <p>Aspiring Full-Stack Developer and Software Developer 👨‍💻</p>
                <Button variant="contained" size='large'  color='warning'>Download CV!</Button>

            </div>

            <div className="container-right">
                <img src={profileImage} alt='Mi imahe' />
            </div>
        </div>

    )
}