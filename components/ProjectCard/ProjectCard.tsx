import React, { useMemo } from "react";
import { IProject } from "../../data";
import Button from "../button/Button";
import styles from "./ProjectCard.module.scss";
import GithubIcon from "../../assets/particles/github.svg";
import { openLink } from "../../utils/util";

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
      className={`${styles.ProjectCard} ${styles[`card-${numPosition}`]}`}
      style={{ backgroundImage: `url('${project.image}')` }}
    >
      <div className={styles.mask}></div>
      <div className={`${styles['num']} ${styles[`num-${numPosition}`]}`}>
        {String(number).padStart(2, "0")}
      </div>

      <div className={styles.content}>
        <h3>{project.title}</h3>
        <h5>{project.description}</h5>
        <div className={styles.links}>

          {project.link &&
            <Button
              text="Live Preview"
              onClick={() => {
                openLink(project.link!);
              }}
            />}

          <div className={styles.github} onClick={() => openLink(project.github)}><GithubIcon /></div>
        </div>
      </div>

      <div className={`${styles['tech-stack']}`}>
        {project.techStack.map((icon, idx) => <div key={`techStack-${idx}`}>{icon}</div>)}
      </div>
    </a>
  );
};

export default ProjectCard;
