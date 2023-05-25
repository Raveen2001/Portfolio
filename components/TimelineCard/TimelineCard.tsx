import { IWork } from "../../data";
import styles from "./TimelineCard.module.scss";
import { openModalFor } from "../../utils/gsap";
import { useGlobalContext } from "../context/GlobalContext";

const TimelineCard: React.FC<IWork> = (data) => {
  const { setSelectedWorkExperience } = useGlobalContext();
  return (
    <div className={styles.TimelineCard}>
      <div className={styles.left}>
        <div className={styles.title}>{data.name}</div>
        <div className={styles.date}>{data.date}</div>
      </div>

      <div className={styles.center}>
        <div className={styles.line}></div>
        <div className={styles.circle}></div>
        <div className={styles.line}></div>
      </div>

      <div className={styles.right}>
        <div className={styles.title}>{data.designation}</div>
        {/* <div className={styles.description}>{data.description}</div> */}
        <button
          className={styles.more}
          onClick={() => {
            setSelectedWorkExperience(data);
            openModalFor("WorkExperienceModal");
          }}
        >
          Know more
        </button>
      </div>
    </div>
  );
};

export default TimelineCard;
