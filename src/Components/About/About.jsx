import React from 'react'
import './About.css' 
import profile_img from '../../assets/about_profile.png'
import theme_pattern from '../../assets/theme_pattern.svg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h2>About Me</h2>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am Full Stack Engineer with over 3 years of professional expeirence.Through out my career I been able to help companies with their backend using Java and SpringBoot as well as different technologies and databases.</p>
                    <p>I have also worked on migrating a legacy appliation to web development using Javascript/Node.JS. At the moment I really enjoying React and mainly focusing on Front-End</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p> <hr style={{width:"50%"}}></hr></div>
                    <div className="about-skill"><p>React JS</p> <hr style={{width:"70%"}}></hr></div>
                    <div className="about-skill"><p>Javascript</p> <hr style={{width:"60%"}}></hr></div>
                    <div className="about-skill"><p>Node.js</p> <hr style={{width:"50%"}}></hr></div>
                </div>
            </div>
        </div>
        <div className="about-achievments">
            <div className="about-achievement">
                <h2>3+</h2>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h2>50+</h2>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h2>4+</h2>
                <p>BOOTCAMP/SOFTWARE COURSES COMPLETED</p>
            </div>
        </div>
    </div>
  )
}

export default About