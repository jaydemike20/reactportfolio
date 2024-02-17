import React from "react";
import './home.css';
import profileImage from '../../src/assets/image.png'
import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaInstagramSquare , FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export const Home = () => {
    return(
        <div className="container">
            <div className="container-left">
                <h3>Hello!</h3>
                <h1>I'm Jayde Mike Engracia</h1>
                <div className="animated-text">
                Aspiring <span></span>

                </div>
                <button>Download CV!</button>

                <div className="icons">
                    <ul>
                        <li><a href="https://www.facebook.com/jydmk21" target="_blank"><FaFacebook color="blue" size="3rem" /></a></li>
                        <li><a href="https://twitter.com/jydmk21" target="_blank"><FaSquareXTwitter color="black" size="3rem" /></a></li>
                        <li><a href="https://www.instagram.com/jydmk21/" target="_blank"><FaInstagramSquare color="#FD1D1D" size="3rem" /></a></li>
                        <li><a href="https://www.linkedin.com/in/jaydemike21/" target="_blank"><FaLinkedin color="blue" size="3rem" /></a></li>
                        <li><a href="https://github.com/jaydemike20" target="_blank"><FaGithub color="black" size="3rem" /></a></li>

                    </ul>
                </div>
            </div>

            <div className="container-right">
                <img src={profileImage} alt='Mi imahe' />
            </div>
        </div>

    )
}

