import React from "react";
import "./portfolio.css";
import Figma from "../../assets/Figma.PNG";
import TypingTutor from "../../assets/TypingTutor.PNG";
import PortPic from "../../assets/PortPic.PNG";
import Snake from "../../assets/Snake.PNG";
import MeanFilter from "../../assets/MeanFilter.PNG";

const data = [
  {
    id: 1,
    image: Snake,
    title:
      "This is a Snake Game created by C# in Visual Studio 2022. I really love this game and had fun making it. ",
    github: "https://github.com/Inathi-M/Alphabet_Book",
    demo: "https://youtu.be/Sv8yIM8txeo",
  },
  {
    id: 2,
    image: TypingTutor,
    title:
      "  Created the Falling words game using Java and the concept of Parallel Programming.",
    github: "https://github.com/Inathi-M/Typing-Tutor",
    demo: "https://youtu.be/vhUFP0zhwVo",
  },
  {
    id: 3,
    image: MeanFilter,
    title:
      "This application filters images using the principle of 2D filtering and parallel programming.",
    github: "https://github.com/Inathi-M/Portfolio-Website ",
    // demo: "",
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
