import React from "react";
import "./About.css"
import ME from "../../assets/about.jpg"
import {FaAward} from "react-icons/fa";
import {FiUsers} from "react-icons/fi";
import {VscFolderLibrary} from "react-icons/vsc";

const About = () => {
    return(
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Me Image"/>
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className="about_icon"/>
                            <h5>Experience</h5>
                            <small>1+ Years</small>
                        </article>
{/*                     
                        <article className="about__card">
                            <FiUsers className="about_icon"/>
                            <h5></h5>
                            <small>80+ Clients</small>
                        </article> */}
                
                        <article className="about__card">
                            <VscFolderLibrary className="about_icon"/>
                            <h5>Projects</h5>
                            <small>4 Complete Projects </small>
                        </article>
                    </div>

                    <p>A curious individual with a passion for attempting big things and being humbled by them. I'm intrigued by what captures human attention and love to work on projects that help people and bring value to the world, especially in the web3 space.</p>
                    <p>I'm skilled in HTML, CSS, Javascript, React.js, Redux, Express, Node.js and MongoDB. I also have a Substack and Mirror blog in which I write about everything tech, web3 and the future.</p>

                    <a href="#contact" className="btn btn-primary">Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About;