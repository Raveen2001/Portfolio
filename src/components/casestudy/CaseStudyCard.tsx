import React from "react";
import Button from "../button/Button";
import "./CaseStudyCard.scss";

const CaseStudyCard = () => {
  return (
    <a className="CaseStudyCard" style={{ backgroundImage: "url('one.jpg')" }}>
      <div className="mask"></div>
      <div className="mask-num num-right" data-index="01">
        01
      </div>

      <div className="content content-left">
        <h3>Path Visualizer</h3>
        <h5>Path Visualizer built using ReactJs</h5>
        <Button text="Case Study" onClick={() => {}} />
      </div>
    </a>
  );
};

export default CaseStudyCard;
