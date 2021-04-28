import React from "react";
import GitHub from "../assets/icons/logo-github.svg";
import Linkedin from "../assets/icons/logo-linkedin.svg";
import Mail from "../assets/icons/mail-unread-outline.svg";
import "./Contact.scss";

function Contact() {
  return (
    <div className="contact">
      <h3 className="contact__header">Contact me</h3>
      <div className="contact__logos">
        <a href="https://github.com/farzanashampa7">
          <img className="contact__logo" src={GitHub} alt="Github" />
        </a>
        <a href="https://www.linkedin.com/in/farzana-akter-shampa/">
          <img className="contact__logo" src={Linkedin} alt="Linkedin" />
        </a>
        <a href="mailto:farzanashampa7@gmail.com">
          <img className="contact__logo" src={Mail} alt="Gmail" />
        </a>
      </div>
    </div>
  );
}

export default Contact;
