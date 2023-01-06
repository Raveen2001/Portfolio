import React, { useMemo } from "react";
import { IProject } from "../../data";
import Button from "../button/Button";
import "./ProjectCard.scss";

interface IProjectProps {
  project: IProject;
  number: number;
}

const ProjectCard: React.FC<IProjectProps> = ({ project, number }) => {
  const numPosition = useMemo(() => (number % 2 === 0 ? "left" : "right"), []);
  const contentPosition = useMemo(
    () => (number % 2 === 0 ? "right" : "left"),
    []
  );
  return (
    <a
      className={`ProjectCard card-${numPosition}`}
      style={{ backgroundImage: `url('${project.image}')` }}
    >
      <div className="mask"></div>
      <div className={`mask-num num-${numPosition}`}>
        {String(number).padStart(2, "0")}
      </div>

      <div className={`content content-${contentPosition}`}>
        <h3>{project.title}</h3>
        <h5>{project.description}</h5>
        <Button
          text="View Project"
          onClick={() => {
            window.open(project.link, "_blank");
          }}
        />
      </div>
    </a>
  );
};

export default ProjectCard;
