import React, {useState, ChangeEvent, FormEvent} from "react";
import './home.css';
import profileImage from '../../src/assets/image.png'
import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaInstagramSquare , FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiExpo, SiDjango } from "react-icons/si";
import { About } from "./about";
import { Services } from "./services";
import { Works } from "./works";
import { Contact } from "./contact";
import bgif from '../assets/gif/wp3162635-gif-wallpapers.gif'
import networking from '../../src/assets/netacad.png'
import pythonCert from '../../src/assets/pythonbegginer.png'
import pythonintermediate from '../../src/assets/intermediate.png'
import web from '../../src/assets/DesignWeb.png'
import MultiActionAreaCard from "../components/card";
import GradientCover from "../components/cardoverlay";
import frontend from '../assets/frontend.jpg'
import backend from '../assets/backend.jpg'
import mobiledev from '../assets/mobiledev.jpg'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import techstack from '../components/logo';
import dashboardpic from '../assets/dashboard.png'
import sarisaristore from '../assets/cantonan.png'
import { RiReactjsFill } from "react-icons/ri";
import { Reveal } from "../components/animation";


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

  interface FormData {
    name: string;
    email: string;
    message: string;
}


export const Home = () => {
        const [menuOpen, setMenuOpen] = useState(false)
        const [formData, setFormData] = useState({
            name: '',
            email: '',
            message: ''
        });
    
        const [errors, setErrors] = useState({
            name: '',
            email: '',
            message: ''
        });
    
    
        const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            let isValid = true;
            const newErrors = { ...errors };
    
            // Validate form fields
            if (formData.name.trim() === '') {
                newErrors.name = 'Full Name is Empty';
                isValid = false;
            } else {
                newErrors.name = '';
            }
    
            if (formData.email.trim() === '') {
                newErrors.email = 'Email Address is Empty';
                isValid = false;
            } else {
                newErrors.email = '';
            }
    
            if (formData.message.trim() === '') {
                newErrors.message = 'Message is Empty';
                isValid = false;
            } else {
                newErrors.message = '';
            }
    
            // Update errors state
            setErrors(newErrors);
    
            // If form is valid, submit it
            if (isValid) {
                // Here you can send the form data to your server using fetch or any other method
                alert('Form submitted successfully!');


                const recipient = 'jaydemike21@gmail.com';
                const subject = encodeURIComponent('Contact Request');
                const body = encodeURIComponent('Hello,\n\nI would like to get in touch with you.');
        
                window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
                                 
                // Reset form data
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                });
            }
        };
    


    return(
        <div id="home">
            {/* navbar */}
            <div>
               <nav>
                    <Reveal>
                        <h1 className="title">Portfolio</h1>
                    </Reveal>
                    <div className="menu" onClick={() => {
                        setMenuOpen(!menuOpen);
                    }}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <Reveal>
                        <ul className={menuOpen ? "open" : ""}>
                            <li><a href="#home" className="active">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#works">Works</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>                        
                    </Reveal>

                </nav>   
             
            </div>

            {/* home */}
            <div className="container"  >
                <div className="container-left">
                    <Reveal>
                    <h3>Hello!</h3>
                    </Reveal>
                    <Reveal>
                    <h1>I'm Jayde Mike Engracia</h1>
                    </Reveal>
                    <Reveal>
                    <div className="animated-text">
                    Aspiring <span></span>

                    </div>
                    </Reveal>
                    <Reveal>
                    <button>Download CV!</button>
                    </Reveal>

                    <Reveal>
                    <div className="icons">
                        <ul>
                            <li><a href="https://www.facebook.com/jydmk21" target="_blank"><FaFacebook color="blue" size="3rem" /></a></li>
                            <li><a href="https://twitter.com/jydmk21" target="_blank"><FaSquareXTwitter color="black" size="3rem" /></a></li>
                            <li><a href="https://www.instagram.com/jydmk21/" target="_blank"><FaInstagramSquare color="#FD1D1D" size="3rem" /></a></li>
                            <li><a href="https://www.linkedin.com/in/jaydemike21/" target="_blank"><FaLinkedin color="blue" size="3rem" /></a></li>
                            <li><a href="https://github.com/jaydemike20" target="_blank"><FaGithub color="black" size="3rem" /></a></li>
                            

                        </ul>
                    </div>
                    </Reveal>

                    </div>

                    <Reveal>
                    <div className="container-right">
                    <img src={profileImage} alt='Mi imahe' />
                </div>

                    </Reveal>



        
            </div>

            {/* about */}
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
                            <Reveal>
                                <MultiActionAreaCard
                                title="Programming for Intermediate Users Using Python"
                                description="DICT through the DICT-LMS"
                                image={pythonintermediate}
                                
                                />
                            </Reveal>

                            <Reveal>
                                <MultiActionAreaCard
                                title="CCNAv7: Switching, Routing, and Wireless Essentials (certificate)"
                                description="Cisco Networking Academy"
                                image={networking}
                                />
                            </Reveal>
                            <Reveal>
                                <MultiActionAreaCard
                                title="Programming for Beginners Using Python"
                                description="DICT through the Modern Academics Convergence Hub (MACH)"
                                image={pythonCert}
                                />    
                            </Reveal>
                            <Reveal>
                                <MultiActionAreaCard
                                title="DICT-WD002 Using HTML and CSS to Design a Website"
                                description="DICT through the Modern Academics Convergence Hub (MACH)"
                                image={web}
                                />                       
                            </Reveal>                                
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
                            <Reveal>
                            <img src={logo} alt={`${techName} logo`} />

                            </Reveal>
                        </div>
                    ))}
                    </div>
                </div>

            </div>

            


            </div>

            {/* Services */}
            <div className="services-container" id="services">
                <div className="service-content">
                    <div className="service-header">
                        <Reveal>
                        <h3>My Services💦 </h3>
                        </Reveal>
                        <Reveal>
                        <h1>What I DO</h1>       
                        </Reveal>
                    </div>

                    <div className="services-card">


                        <div className="cardcontent">
                            <Reveal>
                            <GradientCover 
                            title="Front-End Development"
                            description="React JS (HTML, CSS, JAVASCRIPT)"
                            image={frontend}
                            />
                            </Reveal>
                        </div>
                        <div className="cardcontent">
                            <Reveal>
                            <GradientCover 
                            title="Mobile Development"
                            description="React Expo"
                            image={mobiledev}
                            />
                            </Reveal>
                        </div>                    
                        <div className="cardcontent">
                            <Reveal>
                            <GradientCover 
                            title="Backend Development"
                            description="Django REST API"
                            image={backend}
                            />
                            </Reveal>
                        </div>

                    </div>
                </div>
            </div>

            {/* Works */}
            <div className="works-container" id="works">
                <div className="works-content">

                    <div className="works-header">
                        <Reveal>
                        <h1>My Works</h1>
                        </Reveal>
                    </div>

                    <div className="worksdivider">

                        <Reveal>
                        <div className="divider">
                            <div className="picture">
                                <img src={dashboardpic} alt="Dashboard" />
                            </div>

                            <div className="description">
                                <h4>eTCMF</h4>
                                <p>eTCMF is a web and mobile application designed for electronic ticketing systems. The application incorporates OCR technology to extract information from documents, including driver's licenses and OR/CR. In this project, my primary focus lies in backend development. Additionally, I am responsible for establishing and managing the API connections between the web, mobile and our server.</p>
                                <ul>
                                    <li><RiReactjsFill className="workicons" color="#61DBFB"/></li>
                                    <li><SiExpo className="workicons" color="black" /></li>
                                    <li><SiDjango className="workicons" color="green" /></li>
                                </ul>
                                <a href="https://etcmf1.netlify.app/" target="__blank">Live Demo</a>
                                
                            </div>
                        </div>
                        </Reveal>

                        <Reveal>
                        <div className="divider">
                            <div className="picture">
                                <img src={sarisaristore} alt="Dashboard" />
                            </div>

                            <div className="description">
                                <h4>Sari-Sari Store</h4>
                                <p>Sari-Sari Store utilizes browser localStorage for agile development, facilitating rapid prototyping and iteration. Storing crucial business data locally enables quick feature testing without server-side infrastructure. This approach enables frequent updates, ensuring the app meets evolving small business needs efficiently.</p>
                                <ul>
                                    <li><RiReactjsFill className="workicons" color="#61DBFB"/></li>
                                </ul>
                                <a href="https://jaydemike20.github.io/appdev/" target="__blank">Live Demo</a>
                                
                            </div>
                        </div>

                        </Reveal>
                    </div>
                    

                </div>
            </div>

            {/* Contacts */}
            <div className="contacts-worker" id="contact">
                <div className="contact">
                    <h2>Contact Me</h2>

                    <form onSubmit={handleSubmit}>
                        <div className="input-box">
                            <div className="input-field field">
                                <input type="text" placeholder="Full Name" id="name" className="item" autoComplete="off" value={formData.name} onChange={(e) => {
                                    setFormData({
                                        ...formData, name: e.target.value
                                    })
                                }} />
                                <div className="error-txt">{errors.name}</div>
                            </div>
                            <div className="input-field field">
                                <input  type="email" placeholder="Email Address" id="email" className="item" autoComplete="off" value={formData.email} onChange={(e) => {
                                    setFormData({
                                        ...formData, email: e.target.value
                                    })
                                }} />
                                <div className="error-txt">{errors.email}</div>

                            </div>
                        </div>
                        <div className="textarea-field field">
                                <textarea name="" id="message" cols={30} rows={10} placeholder="Your Message" className="item" autoComplete="off" value={formData.message} onChange={(e) => {
                                    setFormData({
                                        ...formData, message: e.target.value
                                    })
                                }} />
                                <div className="error-txt">{errors.message}</div>

                            </div>

                            <button type="submit" className="submitbtn">Send Message</button>
                    </form>

                </div>
            </div>

        </div>


    )
}

