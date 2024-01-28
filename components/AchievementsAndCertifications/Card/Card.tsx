import React from "react";
import { IAchievement } from "../../../data";
import styles from "./styles.module.scss";
import { openModalFor } from "../../../utils/gsap";
import { useGlobalContext } from "../../Context/GlobalContext";
interface IAchievementProps {
  achievement: IAchievement;
  number: number;
}

const Card: React.FC<IAchievementProps> = ({ achievement, number }) => {
  const { setSelectedAchievement } = useGlobalContext();
  return (
    <div
      className={styles.Card}
      onClick={() => {
        setSelectedAchievement(achievement);
        openModalFor("AchievementModal");
      }}
    >
      <img
        title={achievement.title}
        src={achievement.image}
        className={styles.image}
        alt={achievement.title}
      />

      <div className={styles.content}>
        <div className={styles.title}>
          <h3>{achievement.title}</h3>
        </div>
        <div
          className={styles.line}
          data-index={String(number).padStart(2, "0")}
        ></div>
      </div>
    </div>
  );
};

export default Card;
