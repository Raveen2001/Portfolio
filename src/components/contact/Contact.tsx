import React from "react";
import Button from "../button/Button";
import { ReactComponent as TSIcon } from "../../assets/particles/typescript.svg";
import { ReactComponent as ReactIcon } from "../../assets/particles/react.svg";
import { ReactComponent as KubernetesIcon } from "../../assets/particles/kubernetes.svg";
import { ReactComponent as NodeIcon } from "./assets/particles/node.svg";
import "./Contact.scss";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { PARTICLES } from "../../PARTICLES";
import "@splidejs/splide/dist/css/splide.min.css";

const Contact = () => {
  return (
    <div className="Contact">
      <div className="container">
        <div className="left">
          <div className="about">
            <h3>About Me.</h3>
            <p>Interactive Front-end developer</p>
            <span>
              I'm Riccardo Zanutta, a 22-year-old Italian{" "}
              <strong>Freelance Front-end developer</strong>. I'm a weird guy
              who likes making weird things with web technologies. I like to
              resolve design problems, create smart user interface and imagine
              useful interaction, developing rich web experiences & web
              applications. When not working or futzing around with code, I
              study how to escape from University. Actually for hire
            </span>

            <div>
              <Splide
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
                    pauseOnFocus: false,
                    rewind: false,
                    speed: 1,
                  },
                }}
                extensions={{ AutoScroll }}
              >
                {PARTICLES.map((particle) => {
                  return (
                    <SplideSlide>
                      <div className="skill">
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
        <div className="right">
          <div className="close">
            <span className="line l1"></span>
            <span className="line l2"></span>
          </div>
          <form className="form">
            <h3>Let's talk.</h3>
            <p>New projects, freelance inquiry or even a coffee.</p>
            <label htmlFor="name">Name*</label>
            <div className="input">
              <input type="text" id="name" />
            </div>
            <label htmlFor="email">E-mail*</label>
            <div className="input">
              <input type="email" id="email" />
            </div>
            <label htmlFor="message">Message*</label>
            <div className="input textarea">
              <textarea id="message" />
            </div>
            <Button className="button" text="Send Message" onClick={() => {}} />
          </form>
          <h1 className="bg">Contact</h1>
        </div>
      </div>
    </div>
  );
};

export default Contact;
