import React from "react";
import { IProject } from "../../data";
import "./Experiment.scss";
interface IExperimentProps {
  experiment: IProject;
  number: number;
}

const Experiment: React.FC<IExperimentProps> = ({ experiment, number }) => {
  return (
    <div
      className="Experiment"
      onClick={() => {
        window.open(experiment.link, "_blank");
      }}
    >
      <div
        className="image"
        style={{ backgroundImage: `url('${experiment.image}')` }}
      />

      <div className="content">
        <div className="title">
          <h3>Title</h3>
          <h6>{experiment.title}</h6>
        </div>
        <div
          className="line"
          data-index={String(number).padStart(2, "0")}
        ></div>
      </div>
    </div>
  );
};

export default Experiment;
