import React from "react";
import "./Footer.css";
import {BsLinkedin} from "react-icons/bs";
import {FaGithub} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {SiSubstack} from "react-icons/si";
import {GiMirrorMirror} from "react-icons/gi";
import {FaInstagram} from "react-icons/fa";

const Footer = () => {
    return(
        <footer>
            <a href="#" className="footer__logo">You've seen everything.</a>

            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href='https://in.linkedin.com/in/paarugsethi' target="_blank" rel='noreferrer'><BsLinkedin/></a>
                <a href='https://github.com/paarugsethi' target="_blank" rel='noreferrer'><FaGithub/></a>
                <a href='https://twitter.com/paarugsethi' target="_blank" rel='noreferrer'><FaTwitter/></a>
                <a href='https://instagram.com/paarugsethi' target="_blank" rel='noreferrer'><FaInstagram/></a> 
                <a href='https://paarugsethi.substack.com' target="_blank" rel='noreferrer'><SiSubstack/></a>
                <a href='https://mirror.xyz/paarug.eth' target="_blank" rel='noreferrer'><GiMirrorMirror/></a>
            </div>

            <div className="footer__copyright">
                <small>Paarug Sethi. March 2021.</small>
            </div>
        </footer>
    )
}

export default Footer;