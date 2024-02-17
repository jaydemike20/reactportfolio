import React from "react";
import './about.css';
import { Container } from "react-bootstrap";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

import networking from '../../src/assets/netacad.png'
import pythonCert from '../../src/assets/pythonbegginer.png'
import pythonintermediate from '../../src/assets/intermediate.png'
import web from '../../src/assets/DesignWeb.png'
import Carousel from "../components/carousel";
import MultiActionAreaCard from "../components/card";

export const About = () => {

    return(
        <div className="container-about">
            
            <div className="about-header">
                <h1>👨🏻‍💻About Jayde👨🏻‍💻</h1>
                <h3>I am graduating👨🏻‍🎓 4th year I.T student in University of Science and 
    Technology of Southern Philippines.</h3>
            </div>


            <div   className="about-body">

                <div className="certificates">

                    <div className="certtitle">
                    <h3>Certificates🏅</h3>
                    <p>Here's are my e-certificate for finishing an online course!</p>
                    </div>
                    <div className='certcards'>
                            <MultiActionAreaCard
                            title="Programming for Intermediate Users Using Python"
                            description="DICT through the DICT-LMS"
                            image={pythonintermediate}
                            
                            />
                            <MultiActionAreaCard
                            title="CCNAv7: Switching, Routing, and Wireless Essentials (certificate)"
                            description="Cisco Networking Academy"
                            image={networking}
                            />
                            <MultiActionAreaCard
                            title="Programming for Beginners Using Python"
                            description="DICT through the Modern Academics Convergence Hub (MACH)"
                            image={pythonCert}
                            />    
                                                        

                            <MultiActionAreaCard
                            title="DICT-WD002 Using HTML and CSS to Design a Website"
                            description="DICT through the Modern Academics Convergence Hub (MACH)"
                            image={web}
                            />

                            




                        </div>


                </div>

                <div className="techstack">

                    <div className="certtitle">
                        <h3>Tech-Stack</h3>
                        <p>Here's are my application that I use for Development!</p>
                    </div>
                </div>

            </div>


        </div>
    )
}