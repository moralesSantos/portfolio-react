import React from "react";
import "./Footer.css";
import foot_logo from "../../assets/footer_logo.svg";
import user_icon from "../../assets/user_icon.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={foot_logo} alt="" />
          <p>I am a frontend developer from NC, USA with over 3 years of professional experience</p>
        </div>
        {/* <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={user_icon} alt="" />
                <input type="email" placeholder="Enter your email"/>
            </div>
            <div className="footer-subscribe">Subscribe</div>
        </div> */}
      </div>
      <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">© 2024 Luis Morales. All Rights Reserved</p>
            <div className="footer-bottom-right">
                <p>Terms of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  );
};

export default Footer;
