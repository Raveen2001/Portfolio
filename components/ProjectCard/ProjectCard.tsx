import React, { useEffect, useMemo, useRef } from "react";
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
  const cardRef = useRef<any>();
  const revealMaskRef = useRef<any>();
  // add intersection observer to animate the card
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            revealMaskRef.current.classList.add(styles["reveal"]);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(cardRef.current);
  }, []);

  const cardPosition = useMemo(() => (number % 2 === 0 ? "left" : "right"), []);
  return (
    <a
      className={`${styles.ProjectCard} ${styles[`card-${cardPosition}`]}`}
      style={{ backgroundImage: `url('${project.image}')` }}
      ref={cardRef}
    >
      <div className={styles["reveal-mask"]} ref={revealMaskRef}></div>
      <div className={styles.mask}></div>
      <div className={`${styles["num"]} ${styles[`num-${cardPosition}`]}`}>
        {String(number).padStart(2, "0")}
      </div>
      
      <div className={styles.content}>
        <h3>{project.title}</h3>
        <h5>{project.description}</h5>
        <div className={styles.links}>
          {project.link && (
            <Button
              text="Live Preview"
              onClick={() => {
                openLink(project.link!);
              }}
            />
          )}

          <div
            className={styles.github}
            onClick={() => openLink(project.github)}
          >
            <GithubIcon />
          </div>
        </div>
      </div>

      <div className={`${styles["tech-stack"]}`}>
        {project.techStack.map((icon, idx) => (
          <div key={`techStack-${idx}`}>{icon}</div>
        ))}
      </div>
    </a>
  );
};

export default ProjectCard;
