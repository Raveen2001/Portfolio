import React, { useLayoutEffect, useRef } from "react";
import { ReactComponent as LinkedInIcon } from "../../assets/linkedin.svg";
import { ReactComponent as GithubIcon } from "../../assets/github.svg";
import { ReactComponent as MouseIcon } from "../../assets/arrow_right.svg";

import "./Home.scss";
import Button from "../button/Button";
import gsap from "gsap";

const Home = () => {
  const ref = useRef<HTMLDivElement>(null);
  const gsapContext = useRef<gsap.core.Timeline>();
  useLayoutEffect(() => {
    gsap.context(() => {
      gsapContext.current = gsap
        .timeline()
        .fromTo(".mask", { opacity: 1 }, { opacity: 0 }, "0")
        .fromTo(".right", { opacity: 1 }, { opacity: 0 }, "0")
        .pause();
    }, ref);
  }, []);
  return (
    <div className="Home" ref={ref}>
      <div className="main-content">
        <div className="left">
          <h1 className="name mask">Raveen</h1>
          <h3 className="designation mask">
            <i>Frontend developer</i>
          </h3>
          <Button
            className="mask"
            text="About Me"
            onClick={() => {
              console.log(gsapContext.current);
              gsapContext.current?.play();

              setTimeout(() => {
                gsapContext.current?.reverse();
              }, 1000);
            }}
          />
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
