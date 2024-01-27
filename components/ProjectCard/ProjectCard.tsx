import React, { useEffect, useMemo, useRef } from "react";
import { IProject } from "../../data";
import Button from "../Button/Button";
import styles from "./ProjectCard.module.scss";
import GithubIcon from "../../assets/particles/github.svg";
import { openLink } from "../../utils/util";
import { openModalFor } from "../../utils/gsap";
import { useGlobalContext } from "../Context/GlobalContext";

interface IProjectProps {
  project: IProject;
  number: number;
}

const ProjectCard: React.FC<IProjectProps> = ({ project, number }) => {
  const { setSelectedProject } = useGlobalContext();
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

          {project.demoVideo && (
            <Button
              text="Demo Video"
              onClick={() => {
                setSelectedProject(project);
                openModalFor("ProjectModal");
              }}
            />
          )}

          {project.github && (
            <div
              className={styles.github}
              onClick={() => openLink(project.github ?? "")}
            >
              <GithubIcon />
            </div>
          )}
        </div>
        {!project.github && <pre>*GIT repo is private.</pre>}
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
