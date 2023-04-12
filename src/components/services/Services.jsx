import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";
const Services = () => {
  return (
    <section id="services">
      <h5>What I Have To Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Adobe photoshop experience.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Creating logos and branding using Adobe Photoshop.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Creating High Fidelity prototypes using Figma.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Creating High Fidelity prototypes using Sketch.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Creating Low Fidelity prototypes with hand sketching.</p>
            </li>
          </ul>
        </article>
        {/*End of UI/UX*/}

        <article className="service">
          <div className="service__head">
            <h3>Mobile Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Creating mobile applications using Java.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Creating mobile applications using Python.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Creating mobile applications using Kotlin.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Maintaining existing applications.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Adding new features to existing mobile applications.</p>
            </li>
          </ul>
        </article>
        {/*End of something*/}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Using CSS3 for Frontend Development.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Using HTML5 for Frontend Development.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Using React/Angular as frameworks to implement web applications.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Using Javascript for FrontEnd development, along with CSS3 AND
                HTML5.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Using MongoDB/MySql for backend development.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
