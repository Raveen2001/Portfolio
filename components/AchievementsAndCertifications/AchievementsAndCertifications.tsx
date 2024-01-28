import { FC, useEffect, useRef } from "react";
import styles from "./styles.module.scss";
import { ACHIEVEMENTS } from "../../data";
import Card from "./Card/Card";

const AchievementsAndCertifications: FC = () => {
  const containerRef = useRef<any>();
  const maskRef = useRef<any>();

  // add intersection observer to animate the certifications.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            maskRef.current.classList.add(styles["reveal"]);
          }
        });
      },
      { threshold: 0.8 }
    );

    observer.observe(containerRef.current);
  }, []);

  return (
    <div
      className={styles.AchievementsAndCertifications}
      id="AchievementsAndCertifications"
    >
      <h4>Achievements & Certifications</h4>
      <h2>Honours.</h2>
      <div className={styles.container} ref={containerRef}>
        <div className={styles.mask} ref={maskRef}></div>
        {ACHIEVEMENTS.map((achievement, idx) => (
          <Card
            achievement={achievement}
            number={idx + 1}
            key={`achievement-${idx}`}
          />
        ))}
      </div>
    </div>
  );
};

export default AchievementsAndCertifications;
