import React from "react";
import "./portfolio.css";

const workHistoryData = [
    {
        id: 1,
        company: "LexisNexis South Africa",
        position: "Software Engineer",
        duration: "Jan 2024 - Present",
        description: "Improving backend systems and developing frontend features."
    },
    {
        id: 2,
        company: "Tech Solutions Inc.",
        position: "Junior Developer",
        duration: "Jun 2022 - Dec 2023",
        description: "Developed and maintained core features for multiple projects."
    },
    {
        id: 3,
        company: "Innovatech",
        position: "Intern Developer",
        duration: "Jan 2021 - May 2022",
        description: "Assisted in developing user interfaces and performing code reviews."
    }
];

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Work History</h5>
            <h2>Experience</h2>
            <div className="container portfolio__container">
                {workHistoryData.map(({ id, company, position, duration, description }) => {
                    return (
                        <article key={id} className="portfolio__item">
                            <div className="portfolio__item-content">
                                <h3>{company}</h3>
                                <h4>{position}</h4>
                                <small>{duration}</small>
                                <p>{description}</p>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default Portfolio;
