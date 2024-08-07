import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
             <h1><span>I'm Luis Morales,</span> Web Developer based in USA.</h1>
       

             <p> I am a Full Stack Engineer and Web Developer with over 3yrs of professional experience. I worked with UNC Chapel Hill and HCL-Tech</p>
        <div className="hero-action">
            <div className="hero-connect">
              <AnchorLink className="anchor-link" offset={50} href="#contact">Connect With Me</AnchorLink>
            </div>
            <div className="hero-resume"><a href="https://moralessantos.github.io/Resume/">My Resume</a></div>
        </div>
    </div>
  )
}

export default Hero