import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { ImHtmlFive2 } from "react-icons/im";
import { TbBrandCss3 } from "react-icons/tb";
import { TbBrandJavascript } from "react-icons/tb";
import { FaJava } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si"; 
import { SiPython } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";
import { BsGit } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { SiBootstrap } from "react-icons/si";
import { RiAngularjsLine } from "react-icons/ri";
import { SiCplusplus } from "react-icons/si";
import { SiCsharp } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
const Experience = () => {
  return (
    <section id="experience">
      <h2>My Techstack</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article classname="experience__details">
              <BsPatchCheckFill />
              <div>
                <h4>
                  <ImHtmlFive2 size={35} />
                </h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article classname="experience__details">
              <BsPatchCheckFill classname="experience__details-icon" />
              <div>
                <h4>
                  <TbBrandCss3 size={35} />
                </h4>
                <small className="text-light">Intermidiate</small>
              </div>
            </article>
            <article classname="experience__details">
              <BsPatchCheckFill classname="experience__details-icon" />
              <div>
                <h4>
                  <TbBrandJavascript size={35} />
                </h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article classname="experience__details">
              <BsPatchCheckFill classname="experience__details-icon" />
              <div>
                <h4>
                  <SiBootstrap size={35} />
                </h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article classname="experience__details">
              <BsPatchCheckFill classname="experience__details-icon" />
              <div>
                <h4>
                  <FaReact size={35} />
                </h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article classname="experience__details">
              <BsPatchCheckFill classname="experience__details-icon" />
              <div>
                <h4>
                  <RiAngularjsLine size={35} />
                </h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        {/*END OF FRONTEND*/}
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article classname="experience__details">
              <BsPatchCheckFill classname="experience__details-icon" />
              <div>
                <h4>
                  <IoLogoNodejs size={35} />
                </h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article classname="experience__details">
              <BsPatchCheckFill classname="experience__details-icon" />
              <div>
                <h4>
                  <SiMongodb size={35} />
                </h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article classname="experience__details">
              <BsPatchCheckFill classname="experience__details-icon" />
              <div>
                <h4>
                  <SiPython size={35} />
                </h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article classname="experience__details">
              <BsPatchCheckFill classname="experience__details-icon" />
              <div>
                <h4>
                  <SiMysql size={35} />
                </h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article classname="experience__details">
              <BsPatchCheckFill classname="experience__details-icon" />
              <div>
                <h4>
                  <FaJava size={35} />
                </h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article classname="experience__details">
              <BsPatchCheckFill classname="experience__details-icon" />
              <div>
                <h4>
                  <SiCsharp size={35} />
                </h4>
                <small className="text-light">C#</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
