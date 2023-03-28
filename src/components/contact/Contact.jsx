import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__options">
            <MdOutlineEmail />
            <h4>Email</h4>
            <h5>tshaphilenkosinathi@gmail.com</h5>
            <a href="mailto:tshaphilenkosinathi@gmail.com">Send me an E-mail</a>
          </article>
          <article className="contact__options">
            <MdOutlineEmail />
            <h4>Email</h4>
            <h5>tshaphilenkosinathi@gmail.com</h5>
            <a href="mailto:tshaphilenkosinathi@gmail.com">Send me an E-mail</a>
          </article>
          <article className="contact__options">
            <MdOutlineEmail />
            <h4>Messenger</h4>
            <h5>Nkosinathi Tshaphile</h5>
            <a href="https://m.me/nkosinathi.tshaphile">Send me a DM</a>
          </article>
        </div>
        {/**END OF CONTACT OPTIONS */}
        <form action=""></form>
      </div>
    </section>
  );
};

export default Contact;
