import React from "react";
import "./Portfolio.css"
import IMG from "../../assets/portfolioImg.png"
import LinkedInImg from "../../assets/linkedinclone.png"
import ChatImg from "../../assets/chatapp.png"
import NYTimes from "../../assets/newyorktimes.jpeg"

const Portfolio = () => {

    const payload = [
        {
            id: 1,
            image: LinkedInImg,
            title: "Clone of LinkedIn",
            github: "https://github.com/paarugsethi/linkedin-clone",
            demo: ""
        },
        {
            id: 2,
            image: ChatImg,
            title: "Chat Application",
            github: "https://github.com/paarugsethi/ChatApp",
            demo: "https://chatapp-sable.vercel.app/"
        },
        {
            id: 3,
            image: NYTimes,
            title: "Clone of the New York Times",
            github: "https://github.com/paarugsethi/NY-Times-Clone",
            demo: ""
        }
        // {
        //     id: 4,
        //     image: IMG,
        //     title: "This is a portfolio item title",
        //     github: "https://github.com",
        //     demo: "https://twitter.com/paarugsethi"
        // },
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