import React from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="Footer">
      <a href="#" className="logo">
        <Logo />
      </a>

      <div className="menu">
        <a className="menu-item" href="#">
          Gmail
        </a>
        <a className="menu-item" href="#">
          LinkedIn
        </a>
        <a className="menu-item" href="#">
          Github
        </a>
      </div>

      <p>© 2023 Raveen</p>
    </div>
  );
};

export default Footer;
