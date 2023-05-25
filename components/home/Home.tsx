import LinkedInIcon from "../../assets/linkedin.svg";
import GithubIcon from "../../assets/github.svg";
import MouseIcon from "../../assets/arrow_right.svg";

import styles from "./Home.module.scss";
import Button from "../button/Button";
import { openModalFor } from "../../utils/gsap";
import { scrollToProjects } from "../../utils/scroll";
import { RandomReveal } from "react-random-reveal";

const Home = () => {
  return (
    <div className={styles.Home} id="Home">
      <div className={styles.main}>
        <div className={styles.left}>
          <h1 className={styles.name + " " + styles.mask}>Raveen</h1>
          <h3 className={`${styles.designation} ${styles.mask}`}>
            <i>
              <RandomReveal
                duration={1.5}
                isPlaying={true}
                characters="Fullstack Web and Mobile developer"
                characterSet={["▒", "▓", "░"]}
              />
            </i>
          </h3>

          <Button
            className={styles.mask}
            text="About Me"
            onClick={() => openModalFor("Contact")}
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
      <div className={styles.experiencedIn}>
        <span>
          <RandomReveal
            duration={1.5}
            isPlaying={true}
            characters="Experienced in"
            characterSet={["▒", "▓", "░"]}
          />
        </span>

        <strong>
          <RandomReveal
            duration={1.5}
            isPlaying={true}
            characters="ReactJs, NextJs, ExpressJs, NodeJS, Pandas, SQL"
            characterSet={["▒", "▓", "░"]}
          />
        </strong>
      </div>
      <a className={styles["bottom-content"]} onClick={scrollToProjects}>
        <span>Works</span>
        <MouseIcon width={50} height={46} />
      </a>
    </div>
  );
};

export default Home;
