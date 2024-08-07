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
                    <p>I am Full Stack Engineer with over 3 years of professional expeirence.Through out my career I been able to help companies with their backend using Java,Springboot,different technologies and databases.</p>
                    <p>I have also worked on migrating a legacy appliation to web development using Javascript,Node.JS,OracleSql. At the moment I really enjoying React and continuing to improve my skills</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white"/><hr style={{width:"60%"}}></hr></div>
                    <div className="about-skill"><img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" /><hr style={{width:"45%"}}></hr></div>
                    <div className="about-skill"><img src="https://img.shields.io/badge/html5%20-%23e34f26.svg?&style=for-the-badge&logo=html5&logoColor=white" /><hr style={{width:"55%"}}></hr></div>
                    <div className="about-skill"><img src="https://img.shields.io/badge/Amazon_AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white" /><hr style={{width:"30%"}}></hr></div>
                    <div className="about-skill"><img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" /><hr style={{width:"60%"}}></hr></div>
                    <div className="about-skill"><img src="https://img.shields.io/badge/Node.js-6DA55F?logo=node.js&logoColor=white" /><hr style={{width:"55%"}}></hr></div>
                    <div className="about-skill"><img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white"/><hr style={{width:"50%"}}></hr></div>
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