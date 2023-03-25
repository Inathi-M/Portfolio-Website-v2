import React from "react";
import "./courses.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";
const Courses = () => {
  return (
    <section id="courses">
      <h5>Coursework completed in University</h5>
      <h2>Courses</h2>

      <div className="container courses__container">
        <article className="course">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
            <h5 className="client__name">Ernerst Achiever</h5>
            <small className="client__review">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae,
              nostrum dolorem odio incidunt nesciunt ipsam placeat aliquam ut,
              dicta fugit quaerat rem! Vitae dignissimos est reprehenderit
              dolorum enim incidunt veritatis!
            </small>
          </div>
        </article>
        <article className="course">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
            <h5 className="client__name">Ernerst Achiever</h5>
            <small className="client__review">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae,
              nostrum dolorem odio incidunt nesciunt ipsam placeat aliquam ut,
              dicta fugit quaerat rem! Vitae dignissimos est reprehenderit
              dolorum enim incidunt veritatis!
            </small>
          </div>
        </article>
        <article className="course">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
            <h5 className="client__name">Ernerst Achiever</h5>
            <small className="client__review">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae,
              nostrum dolorem odio incidunt nesciunt ipsam placeat aliquam ut,
              dicta fugit quaerat rem! Vitae dignissimos est reprehenderit
              dolorum enim incidunt veritatis!
            </small>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Courses;
