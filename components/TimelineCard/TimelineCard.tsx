import { IWork } from "../../data";
import styles from "./TimelineCard.module.scss";

const TimelineCard: React.FC<IWork> = (data) => {
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
        <div className={styles.description}>{data.description}</div>
      </div>
    </div>
  );
};

export default TimelineCard;
