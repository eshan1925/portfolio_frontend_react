import React from 'react';
import { BsTwitter} from 'react-icons/bs';
import {FaGithub,FaLinkedinIn } from 'react-icons/fa';
import "./SocialMedia.css";

const redirectTwitter = () =>{
  window.location.href = "https://twitter.com/Eshanstweet";
}

const redirectGithub = () =>{
  window.location.href = "https://github.com/eshan1925";
}

const redirectLinkedIn= () =>{
  window.location.href = "https://www.linkedin.com/in/eshangupta25/";
}

const SocialMedia = () => (
  <div className="app__social">
    <div onClick={redirectTwitter} className='social__button'>
      <BsTwitter />
    </div>
    <div onClick={redirectGithub} className='social__button'>
      <FaGithub />
    </div>
    <div onClick={redirectLinkedIn} className='social__button'>
      <FaLinkedinIn />
    </div>
  </div>
);

export default SocialMedia;