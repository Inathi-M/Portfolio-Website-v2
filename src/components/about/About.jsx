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
        <div className="about content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>6+ months Freelance</small>
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
            As a passionate software developer from Cape Town, I'm constantly
            learning and upskilling myself. I've been teaching myself a variety
            of programming languages such as JavaScript, C++, and Python, while
            also familiarizing myself with popular frameworks like Node.js,
            React, Springboot, and Angular. By building personal projects, I'm
            gaining practical experience and am determined to make myself an
            industry-ready software developer.
          </p>
          <a href="#contact" className="btn btn-primary">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
