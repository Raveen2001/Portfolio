import React from "react";
import { CASESTUDIES, EXPERIMENTS } from "../../data";
import CaseStudy from "../casestudy/CaseStudy";
import Experiment from "../experiment/Experiment";
import "./Project.scss";

const Project = () => {
  return (
    <div className="Project">
      <div className="bg">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <h4>Case Studies</h4>
      <h2>Latest Works</h2>
      <div className="casestudies">
        {CASESTUDIES.map((caseStudy, idx) => (
          <CaseStudy caseStudy={caseStudy} number={idx + 1} />
        ))}
      </div>
      <h4>Experiments & Open Source</h4>
      <h2>Web is fun.</h2>
      <div className="experiments">
        {EXPERIMENTS.map((experiment, idx) => (
          <Experiment experiment={experiment} number={idx + 1} />
        ))}
      </div>
    </div>
  );
};

export default Project;
