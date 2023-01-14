import { useEffect } from "react";
import styles from "./PageLoading.module.scss";
import { gsap } from "gsap";

const PageLoading = () => {
  useEffect(() => {
    gsap.to(`.${styles["closing-mask"]}`, {
      delay: 1.5,
      duration: 0.5,
      width: "100%",
    });

    gsap.to(`.${styles.stripes}`, {
      delay: 1.5,
      duration: 0.3,
      opacity: 0,
    });
  }, []);

  return (
    <div className={styles.PageLoading}>
      <div className={styles["closing-mask"]}></div>
      <div className={styles.stripes}>
        <div className={styles.a}></div>
        <div className={styles.b}></div>
        <div className={styles.c}></div>
      </div>
    </div>
  );
};

export default PageLoading;
