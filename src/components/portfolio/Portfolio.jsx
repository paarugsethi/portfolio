import React from "react";
import "./Portfolio.css"
import IMG from "../../assets/portfolioImg.png"
import LinkedInImg from "../../assets/linkedinclone.png"
import ChatImg from "../../assets/chatapp.png"
import NYTimes from "../../assets/newyorktimes.jpeg"
import ClockImg from "../../assets/Clock.png"

const Portfolio = () => {

    const payload = [
        {
            id: 1,
            image: LinkedInImg,
            title: "Clone of LinkedIn",
            techStack: "React, Redux, Javascript, HTML, CSS",
            description: "LinkedIn is an American business and employment-oriented online service that operates via websites and mobile apps. This was a group project we worked on in Unit-3 of our course. I was in charge of making the feed page and enabling users to post their statuses.",
            github: "https://github.com/paarugsethi/linkedin-clone",
            demo: ""
        },
        {
            id: 2,
            image: ChatImg,
            title: "Chat Application",
            techStack: "React, Javascript, HTML, CSS, Axios, ChatEngine.io",
            description: "A single person project of making a basic chat application in which I can create chat rooms with people by adding them as users on ChatEngine.io.",
            github: "https://github.com/paarugsethi/ChatApp",
            demo: "https://chatapp-sable.vercel.app/"
        },
        {
            id: 3,
            image: NYTimes,
            title: "Clone of the New York Times",
            techStack: "Javascript, HTML, CSS, JSON Server",
            description: "A group project of the web application of an American daily newspaper based in New York City with a worldwide readership. I was in charge of making the header, footer and news stream of the website.",
            github: "https://github.com/paarugsethi/NY-Times-Clone",
            demo: "https://satya12325.github.io/NewYorkTimeClone/"
        },
        {
            id: 4,
            image: ClockImg,
            title: "Analog Clock using JS",
            techStack: "Javascript, HTML, CSS",
            description: "A simple analog clock using plain Javascript.",
            github: "https://github.com/paarugsethi/Clock",
            demo: "https://clock-project-eta.vercel.app/"
        }
        // {
        //     id: 5,
        //     image: IMG,
        //     title: "This is a portfolio item title",
        //     github: "https://github.com",
        //     demo: "https://twitter.com/paarugsethi"
        // },
        // {
        //     id: 6,
        //     image: IMG,
        //     title: "This is a portfolio item title",
        //     github: "https://github.com",
        //     demo: "https://twitter.com/paarugsethi"
        // }
    ]

    return(
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {
                    payload.map((item) => {
                        return (
                            <article key={item.id} className="portfolio__item">
                                <div className="portfolio__item-image">
                                    <img src={item.image} alt="Portfolio"/>
                                </div>
                                <h3>{item.title}</h3>
                                <h4>Tech Stack: {item.techStack}</h4>
                                <p>{item.description}</p>
                                <div className="portfolio__item-cta">
                                    <a href={item.github} className="btn" target='_blank'>Github</a>
                                    <a href={item.demo} className="btn btn-primary" target='_blank'>Live Demo</a>
                                </div>
                            </article>
                        )
                    })
                }

            </div>
        </section>
    )
}

export default Portfolio;