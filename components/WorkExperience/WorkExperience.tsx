import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { SKILLS_BY_CATEGORY, WORK_TIMELINE } from "../../data";
import { SKILLS } from "../../Skills";
import TimelineCard from "../TimelineCard/TimelineCard";
import styles from "./WorkExperience.module.scss";

const WorkExperience = () => {
  return (
    <div className={styles.WorkExperience} id="Works">
      <h4>Work Experience</h4>
      {/* <div className={styles.bg}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div> */}

      <div className={styles.layout}>
        <div className={styles.left}>
          {/* <h2>Timeline</h2> */}
          <div className={styles.timeline}>
            {WORK_TIMELINE.map((item, index) => (
              <TimelineCard key={index} {...item} />
            ))}
          </div>
        </div>
        <div className={styles.right}>
          {/* <h2>Skills</h2> */}
          <div className={styles.skills}>
            {Array.from(SKILLS_BY_CATEGORY.entries()).map((item, idx) => (
              <div key={`${item[0]}-${idx}`} className={styles.container}>
                <span className={styles.category}>{item[0]}: </span>
                <div className={styles["skills-container"]}>
                  {item[1].map((skill) => (
                    <div className={styles.skill} key={`${item[0]}-${skill}`}>
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
