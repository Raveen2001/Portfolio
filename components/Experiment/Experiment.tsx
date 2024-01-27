import React from "react";
import { IProject } from "../../data";
import styles from "./Experiment.module.scss";
interface IExperimentProps {
  experiment: IProject;
  number: number;
}

const Experiment: React.FC<IExperimentProps> = ({ experiment, number }) => {
  return (
    <div
      className={styles.Experiment}
      onClick={() => {
        window.open(experiment.github, "_blank");
      }}
    >
      <div
        className={styles.image}
        style={{ backgroundImage: `url('${experiment.image}')` }}
      />

      <div className={styles.content}>
        <div className={styles.title}>
          <h3>{experiment.title}</h3>
          <h6>{experiment.description}</h6>
        </div>
        <div
          className={styles.line}
          data-index={String(number).padStart(2, "0")}
        ></div>
      </div>
    </div>
  );
};

export default Experiment;
