import { Document, Page } from "react-pdf";
import { closeModalFor } from "../../utils/gsap";
import { useGlobalContext } from "../Context/GlobalContext";
import styles from "./styles.module.scss";
import { PDFViewer } from "../PDFViewer/PDFViewer";

const AchievementModal: React.FC = () => {
  const { selectedAchievement } = useGlobalContext();
  return (
    <div className={styles.AchievementModal} id="AchievementModal">
      <div className={styles.container} id="main">
        <div
          className={styles.close}
          onClick={() => closeModalFor("AchievementModal")}
        >
          <span className={`${styles.line} ${styles.l1}`}></span>
          <span className={`${styles.line} ${styles.l2}`}></span>
        </div>

        <div className={styles.header}>
          <h1>{selectedAchievement.title}</h1>
          <p>{selectedAchievement.description}</p>
        </div>
        <div className={styles.pdf}>
          <div className={styles.container}>
            <PDFViewer file={selectedAchievement.pdf} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementModal;
