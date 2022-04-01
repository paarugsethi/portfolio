import React from "react";
import "./Contact.css"
import {MdOutlineEmail} from "react-icons/md";
import {AiOutlineTwitter} from "react-icons/ai";
import {FaTelegramPlane} from "react-icons/fa";
import emailjs from "emailjs-com";
import { useRef } from "react";

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_hv5au1m', 'template_5eubxlc', form.current, 'vYpVci126Kp-QXrDb')
        
        e.target.reset();
    };

    return(
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className=".contact__option-icon"/>
                        <h4>Email</h4>
                        <h5>paarugsethi@gmail.com</h5>
                        <a href="mailto:paarugsethi@gmail.com" rel="noreferrer" target="_blank">Send a message</a>
                    </article>

                    <article className="contact__option">
                        <AiOutlineTwitter className=".contact__option-icon"/>
                        <h4>Twitter</h4>
                        <h5>@paarugsethi</h5>
                        <a href="https://twitter.com/paarugsethi" rel="noreferrer" target="_blank">Send a DM</a>
                    </article>

                    <article className="contact__option">
                        <FaTelegramPlane className=".contact__option-icon"/>
                        <h4>Telegram</h4>
                        <h5>@paarugsethi</h5>
                        <a href="https://www.telegram.me/paarugsethi" rel="noreferrer" target="_blank">Send a message</a>
                    </article>
                </div>

                <form onSubmit={sendEmail} ref={form}>
                    <input type="text" name="name" placeholder="Your Name" required/>
                    <input type="email" name="email" placeholder="Your Email" required/>
                    <textarea name="message" rows="7" placeholder="Your Message" required />
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact;