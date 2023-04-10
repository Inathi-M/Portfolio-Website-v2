import React from "react";
import "./portfolio.css";
import Figma from "../../assets/Figma.PNG";
import TypingTutor from "../../assets/TypingTutor.PNG";
import PortPic from "../../assets/PortPic.PNG";

const data = [
  {
    id: 1,
    image: Figma,
    title:
      "I designed the High Fidelity prototype of my alphabet book app using Figma. ",
    github: "https://github.com",
    demo: "https://dribble.com",
  },
  {
    id: 2,
    image: TypingTutor,
    title:
      "  Created the Falling words game using Java and the concept of Parallel Programming.",
    github: "https://github.com",
    demo: "https://dribble.com",
  },
  {
    id: 3,
    image: PortPic,
    title:
      "Created my personal website using JavaScript, CSS3 and HTML5, and React",
    github: "https://github.com",
    demo: "https://dribble.com",
  },
];
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  GitHub
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
