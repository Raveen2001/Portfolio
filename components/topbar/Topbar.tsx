import styles from "./Topbar.module.scss";
import  Logo from "../../assets/logo.svg";
import ThemeSwitcher from "../theme-switcher/ThemeSwitcher";
import { gsapOpenContactModal } from "../../utils/gsap";
import {
  scrollToCaseStudy,
  scrollToExperiments,
  scrollToHome,
} from "../../utils/scroll";

const Topbar = () => {
  return (
    <div className={styles.Topbar} id="Topbar">
      <div className={styles.clickable} onClick={scrollToHome}>
        <Logo width={50} height={50} fill="var(--icon-color)" />
      </div>
      <div className={styles.menu}>
        <div className={`${styles["menu-item"]} ${styles.clickable}`} onClick={scrollToCaseStudy}>
          Projects
        </div>
        <div className={`${styles["menu-item"]} ${styles.clickable}`} onClick={scrollToExperiments}>
          Experiments
        </div>
        <div
          className={`${styles["menu-item"]} ${styles.clickable}`}
          onClick={() => {
            window.open("/Resume.pdf", "_blank");
          }}
        >
          Resume
        </div>
        <div className={`${styles["menu-item"]} ${styles.clickable}`} onClick={gsapOpenContactModal}>
          Contact
        </div>

        <div className={`${styles["menu-item"]} ${styles.clickable}`}>
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
