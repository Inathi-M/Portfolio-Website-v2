import React from "react";
import "./about.css";

const About = () => {
  return (
    <section id="about">
      <h5>Get The Gist</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src="../../assets/aboutme.jpg" alt="Image of me" />
          </div>
        </div>
        <div className="about content"></div>
      </div>
    </section>
  );
};

export default About;
