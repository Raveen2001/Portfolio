import { useState } from "react";
import { IWork } from "../../data";
import styles from "./TimelineCard.module.scss";
import { openModalFor } from "../../utils/gsap";

const TimelineCard: React.FC<IWork> = (data) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <>
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
          <button
            className={styles.readMore}
            onClick={() => openModalFor("WorkExperienceModal")}
          >
            Read more
          </button>
        </div>
      </div>
    </>
  );
};

export default TimelineCard;
