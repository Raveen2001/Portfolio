import LinkedInIcon from "../../assets/linkedin.svg";
import GithubIcon from "../../assets/github.svg";
import MouseIcon from "../../assets/arrow_right.svg";

import styles from "./Home.module.scss";
import Button from "../button/Button";
import { gsapOpenContactModal } from "../../utils/gsap";

import { scrollToProjects } from "../../utils/scroll";

const Home = () => {
  return (
    <div className={styles.Home} id="Home">
      <div className={styles.main}>
        <div className={styles.left}>
          <h1 className={styles.name + " " + styles.mask}>Raveen</h1>
          <h3 className={`${styles.designation} ${styles.mask}`}>
            <i>Fullstack Web and Mobile developer</i>
          </h3>
          <Button
            className={styles.mask}
            text="About Me"
            onClick={gsapOpenContactModal}
          />
        </div>
        <div className={styles.right}>
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
      <a className={styles["bottom-content"]} onClick={scrollToProjects}>
        <span>Works</span>
        <MouseIcon width={50} height={46} />
      </a>
    </div>
  );
};

export default Home;