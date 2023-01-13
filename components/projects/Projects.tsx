import { PROJECTS, EXPERIMENTS } from "../../data";
import Experiment from "../experiment/Experiment";
import ProjectCard from "../ProjectCard/ProjectCard";
import styles from "./Projects.module.scss";

const Projects = () => {
  return (
    <div className={styles.Projects} id="Projects">
      <div className={styles.bg}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      <h4>Projects</h4>
      <h2>Latest Works</h2>
      <div className={styles.projects}>
        {PROJECTS.map((project, idx) => (
          <ProjectCard
            project={project}
            number={idx + 1}
            key={`project-${idx}`}
          />
        ))}
      </div>
      <h4>Experiments & Open Source</h4>
      <h2>Web is fun.</h2>
      <div className={styles.experiments} id="Experiments">
        {EXPERIMENTS.map((experiment, idx) => (
          <Experiment
            experiment={experiment}
            number={idx + 1}
            key={`experiment-${idx}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
