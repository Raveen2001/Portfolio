import React, { useLayoutEffect, useRef } from "react";
import { ReactComponent as LinkedInIcon } from "../../assets/linkedin.svg";
import { ReactComponent as GithubIcon } from "../../assets/github.svg";
import { ReactComponent as MouseIcon } from "../../assets/arrow_right.svg";

import "./Home.scss";
import Button from "../button/Button";
import { gsapOpenContactModal } from "../../utils/gsap";
import Particles from "../particles/Particles";
import { scrollToCaseStudy } from "../../utils/scroll";

const Home = () => {
  return (
    <div className="Home">
      <div className="main-content">
        <div className="left">
          <h1 className="name mask">Raveen</h1>
          <h3 className="designation mask">
            <i>Fullstack Web and Mobile developer</i>
          </h3>
          <Button
            className="mask"
            text="About Me"
            onClick={gsapOpenContactModal}
          />
        </div>
        <div className="right">
          <a
            target="_blank"
            rel="noopener"
            href="https://www.linkedin.com/in/raveen2001"
          >
            <LinkedInIcon />
          </a>
          <a
            target="_blank"
            rel="noopener"
            href="https://github.com/raveen2001"
          >
            <GithubIcon />
          </a>
        </div>
      </div>
      <a className="bottom-content" onClick={scrollToCaseStudy}>
        <span>Works</span>
        <MouseIcon width={50} height={46} />
      </a>
    </div>
  );
};

export default Home;
