import { IProject } from "../../data";
import { useGlobalContext } from "../Context/GlobalContext";
import styles from "./ProjectModal.module.scss";

const ProjectModal: React.FC = () => {
  const { selectedProject } = useGlobalContext();
  return (
    <div className={styles.ProjectModal}>
      <div className={styles.container}>
        <div className={styles.left}></div>
        <div className={styles.middle}></div>
        {selectedProject.title}
      </div>
    </div>
  );
};

export default ProjectModal;
