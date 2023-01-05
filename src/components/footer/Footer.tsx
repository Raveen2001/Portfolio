import React from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { scrollToHome } from "../../utils/scroll";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="Footer">
      <a className="logo" onClick={scrollToHome}>
        <Logo />
      </a>

      <div className="menu">
        <a
          target="_blank"
          rel="noopener"
          className="menu-item"
          href="mailto: raveenanbarasan@outlook.com"
        >
          Gmail
        </a>
        <a
          target="_blank"
          rel="noopener"
          className="menu-item"
          href="https://www.linkedin.com/in/raveen2001"
        >
          LinkedIn
        </a>
        <a
          target="_blank"
          rel="noopener"
          className="menu-item"
          href="https://github.com/raveen2001"
        >
          Github
        </a>
      </div>

      <p>© 2023 Raveen</p>
      <p>
        This site is under construction and all features may not work as
        intended
      </p>
    </div>
  );
};

export default Footer;
