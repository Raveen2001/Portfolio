import React from "react";
import { PROJECTS, EXPERIMENTS } from "../../data";
import Experiment from "../experiment/Experiment";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./Project.scss";

const Projects = () => {
  return (
    <div className="Project">
      <div className="bg">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <h4>Projects</h4>
      <h2>Latest Works</h2>
      <div className="projects">
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
      <div className="experiments">
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
