import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
             <h1><span>I'm Luis Morales,</span> Web Developer based in USA.</h1>
       

             <p> I am a full stack engineer and web Developer with over 3yrs of experience worked with UNC Chapel Hill and HCL-Tech</p>
        <div className="hero-action">
            <div className="hero-connect">
              <AnchorLink className="anchor-link" offset={50} href="#contact">Connect With Me</AnchorLink>
            </div>
            <div className="hero-resume">My Resume</div>
        </div>
    </div>
  )
}

export default Hero