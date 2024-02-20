import React from "react";
import './about.css';
import networking from '../../src/assets/netacad.png'
import pythonCert from '../../src/assets/pythonbegginer.png'
import pythonintermediate from '../../src/assets/intermediate.png'
import web from '../../src/assets/DesignWeb.png'
import MultiActionAreaCard from "../components/card";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import techstack from '../components/logo'

const responsive = {
    desktop: {
      breakpoint: { max: 1980, min: 1576 },
      items: 3,

    },
    desktop1: {
        breakpoint: { max: 1575, min: 1152 },
        items: 2,
        partialVisibilityGutter: 70 // this is needed to tell the amount of px that should be visible.

    },
    tablet: {
      breakpoint: { max: 1365, min: 464 },
      items: 2,
      partialVisibilityGutter: 500 // this is needed to tell the amount of px that should be visible.

    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,

    }
  }

export const About = () => {

    return(
        <div className="container-about" id="about" >
            
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

                    <div className="certcards">
                        <Carousel 
                        responsive={responsive}
                        partialVisible={true}
                        >
                            <div>
                                <MultiActionAreaCard
                                title="Programming for Intermediate Users Using Python"
                                description="DICT through the DICT-LMS"
                                image={pythonintermediate}
                                
                                />
                            </div>
                            <div>
                                <MultiActionAreaCard
                                title="CCNAv7: Switching, Routing, and Wireless Essentials (certificate)"
                                description="Cisco Networking Academy"
                                image={networking}
                                />
                            </div>
                            <div>
                                <MultiActionAreaCard
                                title="Programming for Beginners Using Python"
                                description="DICT through the Modern Academics Convergence Hub (MACH)"
                                image={pythonCert}
                                />    
                            </div>
                            <div>
                                <MultiActionAreaCard
                                title="DICT-WD002 Using HTML and CSS to Design a Website"
                                description="DICT through the Modern Academics Convergence Hub (MACH)"
                                image={web}
                                />                       
                            </div>                                
                        </Carousel>

                    </div>


                </div>

                <div className="techstack">

                    <div className="certtitle">
                        <h3>My Tech Stack</h3>
                        <p>Technologies I've been working with recently</p>
                    </div>
                    <div className="logo-container">
                    {Object.entries(techstack).map(([techName, logo]) => (
                        <div className="logo" key={techName}>
                        <img src={logo} alt={`${techName} logo`} />
                        </div>
                    ))}
                    </div>
                </div>

            </div>

            


        </div>
    )
}