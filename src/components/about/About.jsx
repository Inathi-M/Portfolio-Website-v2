import React from "react";
import "./about.css";
import meabout from "../../assets/meabout.jpg";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get The Gist</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={meabout} alt="Image of me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>1 year and 9 months.</small>
            </article>

            <article className="about__card">
              <FaAward className="about_icon" />
              <h5>Education</h5>
              <small>3+ years at UCT</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>15+ Completed</small>
            </article>
          </div>
          <p>
            I'm an intermediate Software Engineer at LexisNexis South Africa, with a year and 9 months of experience in the field.
             I have a strong foundation in C#, Javascript, and React, and the BackEnd. 
             I am passionate about software development and enjoy tackling complex challenges. 
             My goal is to continuously learn and grow as a developer while contributing to innovative projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
