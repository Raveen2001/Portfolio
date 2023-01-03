import React from "react";
import { ReactComponent as LinkedInIcon } from "../../assets/linkedin.svg";
import { ReactComponent as GithubIcon } from "../../assets/github.svg";
import { ReactComponent as MouseIcon } from "../../assets/arrow_right.svg";

import "./Home.scss";
import Button from "../button/Button";
import Particles from "../particles/Particles";

const Home = () => {
  return (
    <div className="Home">
      <Particles />
      <div className="main-content">
        <div className="left">
          <h1 className="name">Raveen</h1>
          <h3 className="designation">
            <i>Frontend developer</i>
          </h3>
          <Button text="About Me" onClick={() => {}} />
        </div>
        <div className="right">
          <a href="#">
            <LinkedInIcon />
          </a>
          <a href="#">
            <GithubIcon />
          </a>
        </div>
      </div>
      <a className="bottom-content" href="#">
        <span>Works</span>
        <MouseIcon width={50} height={46} />
      </a>
    </div>
  );
};

export default Home;
