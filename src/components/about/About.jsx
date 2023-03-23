import React from "react";
import "./about.css";
import aboutme from "../../assets/aboutme.jpg";
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
            <img src={aboutme} alt="Image of me" />
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
              <small>4+ years at UCT</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>3+ Completed</small>
            </article>
          </div>
          <p>
            I am a 22 year old Software Developer hailing from Khayelitsha, Cape
            Town. For the better part of my career, I was pursuing a Degree in
            Computer Science, majoring in Computer Science and Computer
            Engineering, however due to several factors in my personal life, my
            academic life was affected, and I recently lost my place at UCT.
            However, I have never been a quitter, and I am currently doing
            freelance work, teaching myself frameworks like Node.js, React and
            Springboot, and languages like CSS,Javascript, HTML and C++ because
            they were never the main focus at University, as I upskill myself
            through building personal projects, I hope get myself industry ready
            for my first job.
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
