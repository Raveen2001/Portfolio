import React from "react";
import styles from "./WorkExperienceModal.module.scss";
import { useGlobalContext } from "../Context/GlobalContext";
import { closeModalFor } from "../../utils/gsap";

const WorkExperienceModal = () => {
  const { selectedWorkExperience } = useGlobalContext();
  return (
    <div className={styles.WorkExperienceModal} id="WorkExperienceModal">
      <div className={styles.container}>
        <div className={styles.left} id="left">
          <div
            className={styles.close}
            onClick={() => closeModalFor("WorkExperienceModal")}
          >
            <span
              className={`${styles.line} ${styles.l1} ${styles.white}`}
            ></span>
            <span
              className={`${styles.line} ${styles.l2} ${styles.white}`}
            ></span>
          </div>
          <h3 className={styles.title}>{selectedWorkExperience.name}</h3>
          <h5 className={styles.date}>{selectedWorkExperience.date}</h5>
          <h4 className={styles.description}>
            {selectedWorkExperience.description}
          </h4>

          <hr></hr>

          <div className={styles.techStack}>
            <h5 className={styles.title}>Tech-stacks Used</h5>
            <div className={styles.scrollContainer}>
              <div className={styles.techContainer}>
                {selectedWorkExperience.techStacks.map((techStack) => (
                  <div
                    className={styles.item}
                    key={selectedWorkExperience.name + techStack.name}
                  >
                    <div className={styles.icon}>{techStack.icon}</div>
                    <h5>{techStack.name}</h5>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.right} id="right">
          <div
            className={styles.close}
            onClick={() => closeModalFor("WorkExperienceModal")}
          >
            <span className={`${styles.line} ${styles.l1}`}></span>
            <span className={`${styles.line} ${styles.l2}`}></span>
          </div>
          <h3 className={styles.title}>Work done: </h3>
          <ul>
            {selectedWorkExperience.workDone.map((work, idx) => (
              <li key={`${selectedWorkExperience.name} - work - ${idx}`}>
                {work}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WorkExperienceModal;
