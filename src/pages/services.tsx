import React from "react";
import './services.css'
import GradientCover from "../components/cardoverlay";
import frontend from '../assets/frontend.jpg'
import backend from '../assets/backend.jpg'
import mobiledev from '../assets/mobiledev.jpg'

export const Services = () => {
    return(
        <div className="services-container">

            <div className="service-content">
                <div className="service-header">
                    <h3>My Services💦 </h3>
                    <h1>What I DO</h1>       
                </div>

                <div className="services-card">


                    <div className="cardcontent">
                        <GradientCover 
                        title="Front-End Development"
                        description="React JS (HTML, CSS, JAVASCRIPT)"
                        image={frontend}
                        />
                    </div>
                    <div className="cardcontent">
                        <GradientCover 
                        title="Mobile Development"
                        description="React Expo"
                        image={mobiledev}
                        />
                    </div>                    
                    <div className="cardcontent">
                        <GradientCover 
                        title="Backend Development"
                        description="Django REST API"
                        image={backend}
                        />
                    </div>





                </div>
            </div>


        </div>
    )
}