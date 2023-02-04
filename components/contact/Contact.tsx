import React from "react";
import Button from "../button/Button";
import styles from "./Contact.module.scss";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { SKILLS } from "../../Skills";
import "@splidejs/splide/dist/css/splide.min.css";
import { gsapCloseContactModal } from "../../utils/gsap";

const Contact = () => {
  return (
    <div className={styles.Contact} id="Contact">
      <div className={styles.container}>
        <div className={styles.right} id="right">
          <div className={styles.close} onClick={gsapCloseContactModal}>
            <span className={`${styles.line} ${styles.l1}`}></span>
            <span className={`${styles.line} ${styles.l2}`}></span>
          </div>
          <form className={styles.form}>
            <h3>Let's talk.</h3>
            <p>New projects, freelance inquiry or even a coffee.</p>
            <label htmlFor="name">Name*</label>
            <div className={styles.input}>
              <input type="text" id="name" />
            </div>
            <label htmlFor="email">E-mail*</label>
            <div className={styles.input}>
              <input type="email" id="email" />
            </div>
            <label htmlFor="message">Message*</label>
            <div className={`${styles.input} ${styles.textarea}`}>
              <textarea id="message" />
            </div>
            <Button
              className={styles.button}
              text="Send Message"
              onClick={() => {}}
              disabled={true}
            />
          </form>
          <h1 className={styles.bg}>Contact</h1>
        </div>
        <div className={styles.left} id="left">
          <h1 className={styles.bg}>About</h1>
          <div className={styles.about}>
            <h3>About Me.</h3>
            <p>Interactive Front-end developer</p>
            <div>
              I'm Raveen, a 21 year old Indian{" "}
              <strong>Fullstack Web and Mobile developer</strong>. I'm a{" "}
              <strong>cool guy </strong>
              who likes to build ideas that pop out with web and mobile
              technologies. I have <strong>4 years experience</strong> in web
              and mobile development. I like to
              <strong>
                {" "}
                create new stuffs, resolve logical problems, solving critial
                bugs
              </strong>
              . Actually for hire.
            </div>

            <Splide
              onActive={(splide, component) => {
                setTimeout(() => {
                  (component.slide.firstChild as HTMLElement).classList.add(
                    styles.focus
                  );
                }, 2000);

                setTimeout(() => {
                  (component.slide.firstChild as HTMLElement).classList.remove(
                    styles.focus
                  );
                }, 5500);
              }}
              options={{
                type: "loop",
                gap: "10px",
                drag: "free",
                arrows: false,
                pagination: false,
                perPage: 4,
                direction: "ltr",
                autoScroll: {
                  pauseOnHover: false,
                  speed: 1,
                },
                focus: 3,
              }}
              extensions={{ AutoScroll }}
            >
              {SKILLS.map((particle, idx) => {
                return (
                  <SplideSlide key={`slide-${idx}`}>
                    <div className={styles.skill}>
                      {particle.icon}
                      <h4>{particle.name}</h4>
                    </div>
                  </SplideSlide>
                );
              })}
            </Splide>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
