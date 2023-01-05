import React, { useMemo } from "react";
import { IProject } from "../../data";
import Button from "../button/Button";
import "./CaseStudy.scss";

interface ICaseStudyProps {
  caseStudy: IProject;
  number: number;
}

const CaseStudy: React.FC<ICaseStudyProps> = ({ caseStudy, number }) => {
  const numPosition = useMemo(() => (number % 2 === 0 ? "left" : "right"), []);
  const contentPosition = useMemo(
    () => (number % 2 === 0 ? "right" : "left"),
    []
  );
  return (
    <a
      className={`CaseStudy card-${numPosition}`}
      style={{ backgroundImage: `url('${caseStudy.image}')` }}
    >
      <div className="mask"></div>
      <div className={`mask-num num-${numPosition}`}>
        {String(number).padStart(2, "0")}
      </div>

      <div className={`content content-${contentPosition}`}>
        <h3>{caseStudy.title}</h3>
        <h5>{caseStudy.description}</h5>
        <Button text="Case Study" onClick={() => {}} />
      </div>
    </a>
  );
};

export default CaseStudy;
