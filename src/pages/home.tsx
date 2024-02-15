import React from "react";
import './home.css';
import profileImage from '../../src/assets/image.png'
import { Link } from "react-router-dom";

export const Home = () => {
    return(
        <div className="container">
            <div className="container-left">
                <h3>Hello!</h3>
                <h1>I'm Jayde Mike Engracia</h1>
                <p>Aspiring Full-Stack Developer and Software Developer 👨‍💻|</p>
                <button>Download CV!</button>


                <div className="icons">
                    <ul>
                        <li><Link to="">Facebook</Link></li>
                        <li><Link to="">Instagram</Link></li>
                        <li><Link to="">Github</Link></li>
                        <li><Link to="">Linkedin</Link></li>
                        <li><Link to="">Leetcode</Link></li>

                    </ul>
                </div>
            </div>

            <div className="container-right">
                <img src={profileImage} alt='Mi imahe' />
            </div>
        </div>

    )
}

