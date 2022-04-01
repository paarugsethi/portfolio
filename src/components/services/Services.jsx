import React from "react";
import "./Services.css"
import {BiCheck} from "react-icons/bi";

const Services = () => {
    return(
        <section id="services">
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className="container services__container">
                <article className="service">
                    <div className="service__head">
                        <h3>Web Development</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <BiCheck className="service_list-icon" />
                            <p>Proficient in front-end languages such as HTML, CSS, Javascript and React.</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon" />
                            <p>Experienced in making functional front-end applications.</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon" />
                            <p>Database management at the back-end.</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon" />
                            <p>Web applications optimised for performance.</p>
                        </li>
                        {/* <li>
                            <BiCheck className="service_list-icon" />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li> */}
                    </ul>
                </article>
                {/* UI/UX END */}


                <article className="service">
                    <div className="service__head">
                        <h3>Marketing</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <BiCheck className="service_list-icon" />
                            <p>Experienced in carrying out marketing campaigns.</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon" />
                            <p>SEO marketing.</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon" />
                            <p>Management of content on all social media platforms.</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon" />
                            <p>Comprehensive market analysis and planning.</p>
                        </li>
                        {/* <li>
                            <BiCheck className="service_list-icon" />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li> */}
                    </ul>
                </article>


                <article className="service">
                    <div className="service__head">
                        <h3>Content Creation</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <BiCheck className="service_list-icon" />
                            <p>Deep dives and long-form content.</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon" />
                            <p>Experienced with having a podcast and a youtube channel.</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon" />
                            <p>Social media content on all platforms.</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon" />
                            <p>Understanding of reach and social media ads.</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon" />
                            <p>Ideation and social media strategy for brands.</p>
                        </li>
                    </ul>
                </article>

            </div>
        </section>
    )
}

export default Services;