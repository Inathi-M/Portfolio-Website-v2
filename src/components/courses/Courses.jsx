import React from "react";
import "./courses.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

const data = [
  {
    avatar: AVTR1,
    name: "Tina Show",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, excepturi!",
  },
  {
    avatar: AVTR2,
    name: "Shatta Wale",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, excepturi!",
  },
  {
    avatar: AVTR3,
    name: "Kwame Despite",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, excepturi!",
  },
  {
    avatar: AVTR4,
    name: "Nana Ama McBrown",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, excepturi!",
  },
];

const Courses = () => {
  return (
    <section id="courses">
      <h5>Coursework completed in University</h5>
      <h2>Courses</h2>

      <div className="container courses__container">
        {data.map(({ avatar, name, review }, index) => {
          return (
            <article key={index} className="course">
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Courses;
