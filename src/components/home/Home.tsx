import React from "react";
import { ReactComponent as LinkedInIcon } from "../../assets/linkedin.svg";
import { ReactComponent as GithubIcon } from "../../assets/github.svg";

import "./Home.scss";

const Home = () => {
  return (
    <div className="Home">
      <div className="main-content">
        <h1>Raveen</h1>
        <i>Frontend developer</i>
        <button>Hello</button>
      </div>
      <div className="side-content">
        <a href="#">
          <LinkedInIcon />
        </a>
        <a href="#">
          <GithubIcon />
        </a>
      </div>
    </div>
  );
};

export default Home;
