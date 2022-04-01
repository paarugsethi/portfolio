import React from 'react'
import {BsLinkedin} from "react-icons/bs";
import {FaGithub} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href='https://in.linkedin.com/in/paarugsethi' target="_blank" rel='noreferrer'><BsLinkedin/></a>
        <a href='https://github.com/paarugsethi' target="_blank" rel='noreferrer'><FaGithub/></a>
        <a href='https://twitter.com/paarugsethi' target="_blank" rel='noreferrer'><FaTwitter/></a>        
    </div>
  )
}

export default HeaderSocial;