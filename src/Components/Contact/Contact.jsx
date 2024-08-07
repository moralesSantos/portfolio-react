import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'


const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "dd84f04f-d575-4e0e-becb-02f5b4bb1ae5");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      alert(res.message)
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h2>Get in touch</h2>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h2>Let's talk</h2>
          <p>
            If you have any questions or want to keep in touch please feel free!
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" /><p>luismsantos707@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" /><p>336-639-0399</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt=""/><p>NC, United States</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name"/>
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter your email" name="email"/>
          <label htmlFor="">Write your message here</label>
          <textarea name="message" rows="8" row="8" placeholder="Enter your message" ></textarea>
          <button type="submit" className="contact-submit" >Submit now</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
