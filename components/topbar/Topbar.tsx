import styles from "./Topbar.module.scss";
import Logo from "../../assets/logo.svg";
import SidebarIcon from "../../assets/sidebar.svg";
import ThemeSwitcher from "../theme-switcher/ThemeSwitcher";
import { openModalFor, openSidebar } from "../../utils/gsap";
import {
  scrollToProjects,
  scrollToExperiments,
  scrollToHome,
  scrollToWorks,
} from "../../utils/scroll";

const Topbar = () => {
  return (
    <div className={styles.Topbar} id="Topbar">
      <div className={styles.clickable} onClick={scrollToHome}>
        <Logo width={50} height={50} fill="var(--icon-color)" />
      </div>
      <div className={styles.menu}>
        <div
          className={`${styles["menu-item"]} ${styles.clickable}`}
          onClick={scrollToWorks}
        >
          Works
        </div>
        <div
          className={`${styles["menu-item"]} ${styles.clickable}`}
          onClick={scrollToProjects}
        >
          Projects
        </div>
        <div
          className={`${styles["menu-item"]} ${styles.clickable}`}
          onClick={scrollToExperiments}
        >
          Experiments
        </div>
        <div
          className={`${styles["menu-item"]} ${styles.clickable}`}
          onClick={() => {
            window.open("/resume.pdf", "_blank");
          }}
        >
          Resume
        </div>
        <div
          className={`${styles["menu-item"]} ${styles.clickable}`}
          onClick={() => openModalFor("Contact")}
        >
          Contact
        </div>

        <div className={`${styles["menu-item"]} ${styles.clickable}`}>
          <ThemeSwitcher />
        </div>
      </div>
      <div
        className={styles.clickable + " " + styles["sidebar-icon"]}
        onClick={openSidebar}
      >
        <SidebarIcon width={50} height={50} fill="var(--icon-color)" />
      </div>
    </div>
  );
};

export default Topbar;
