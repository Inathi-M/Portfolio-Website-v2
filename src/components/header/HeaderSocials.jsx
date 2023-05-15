import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/nkosinathi-tshaphile"
        target="_blank"
      >
        <BsLinkedin size={20} />
      </a>
      <a href="https://github.com/Inathi-M" target="_blank">
        <FaGithub size={20} />
      </a>
      <a href="https://leetcode.com/Inathi-M" target="_blank">
        <SiLeetcode size={20} />
      </a>
    </div>
  );
};

export default HeaderSocials;
