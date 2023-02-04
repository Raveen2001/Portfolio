import React from "react";
import { closeSidebar, gsapOpenContactModal } from "../../utils/gsap";
import {
  scrollToExperiments,
  scrollToProjects,
  scrollToWorks,
} from "../../utils/scroll";
import ThemeSwitcher from "../theme-switcher/ThemeSwitcher";
import LinkedInIcon from "../../assets/linkedin.svg";
import GithubIcon from "../../assets/github.svg";
import styles from "./Sidebar.module.scss";
const Sidebar = () => {
  const scrollTo = (fn: Function) => {
    closeSidebar();
    setTimeout(() => {
      fn();
    }, 200);
  };
  return (
    <div className={styles.Sidebar} id="Sidebar">
      <div className={styles.main} id="main">
        <div className={styles.container} id="container">
          <div className={styles.close} onClick={closeSidebar}>
            <span className={`${styles.line} ${styles.l1}`}></span>
            <span className={`${styles.line} ${styles.l2}`}></span>
          </div>
          <div className={styles.body}>
            <div
              className={`${styles["menu-item"]} ${styles.clickable}`}
              onClick={() => scrollTo(scrollToWorks)}
            >
              Works
            </div>
            <div
              className={`${styles["menu-item"]} ${styles.clickable}`}
              onClick={() => scrollTo(scrollToProjects)}
            >
              Projects
            </div>
            <div
              className={`${styles["menu-item"]} ${styles.clickable}`}
              onClick={() => scrollTo(scrollToExperiments)}
            >
              Experiments
            </div>
            <div
              className={`${styles["menu-item"]} ${styles.clickable}`}
              onClick={() => {
                closeSidebar();
                window.open("/Resume.pdf", "_blank");
              }}
            >
              Resume
            </div>
            <div
              className={`${styles["menu-item"]} ${styles.clickable}`}
              onClick={() => scrollTo(gsapOpenContactModal)}
            >
              Contact
            </div>

            <div
              className={`${styles["menu-item"]} ${styles.clickable}`}
              onClick={closeSidebar}
            >
              <ThemeSwitcher />
            </div>
          </div>
          <div className={styles.footer}>
            <a
              target="_blank"
              rel="noopener"
              href="https://www.linkedin.com/in/raveen2001"
            >
              <LinkedInIcon />
            </a>
            <a
              target="_blank"
              rel="noopener"
              href="https://github.com/raveen2001"
            >
              <GithubIcon />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.reveal} id="reveal"></div>
    </div>
  );
};

export default Sidebar;
