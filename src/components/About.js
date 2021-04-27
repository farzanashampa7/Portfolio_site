import React from "react";
import Shampa from "../assets/images/Farzana_Shampa.jpg";
import "./About.scss";

function About() {
  return (
    <div className="about">
      <div className="about__info">
        <div>
          <p className="about__hello">Hello, I am</p>
          <h1 className="about__header">Farzana Akter Shampa</h1>
          <h3 className="about__sub-header">Web Developer</h3>
          <p className="about__text">
            I'm a web developer from Toronto dedicated to building creative
            websites and continuing to learn new skills in web development.
            Currently looking for new employment opportunities.
          </p>
        </div>
        <img className="about__image" src={Shampa} alt="Farzana" />
      </div>
    </div>
  );
}

export default About;
