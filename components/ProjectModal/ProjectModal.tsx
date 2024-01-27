import { IProject } from "../../data";
import { closeModalFor } from "../../utils/gsap";
import { useGlobalContext } from "../Context/GlobalContext";
import styles from "./ProjectModal.module.scss";

const ProjectModal: React.FC = () => {
  const { selectedProject } = useGlobalContext();
  return (
    <div className={styles.ProjectModal} id="ProjectModal">
      <div className={styles.container} id="main">
        <div
          className={styles.close}
          onClick={() => closeModalFor("ProjectModal")}
        >
          <span className={`${styles.line} ${styles.l1}`}></span>
          <span className={`${styles.line} ${styles.l2}`}></span>
        </div>
        {/* <div className={styles.left}></div> */}
        {/* <div className={styles.middle}></div> */}
        <div className={styles.header}>
          <h1>{selectedProject.title}</h1>
          <p>
            This project is not deployed due to server and DB maintaince cost.
          </p>
        </div>
        <video
          className={styles["demo-video"]}
          src={selectedProject.demoVideo}
          loop
          muted
          controls
        ></video>
      </div>
    </div>
  );
};

export default ProjectModal;
