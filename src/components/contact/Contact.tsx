import React, { useLayoutEffect, useRef } from "react";
import Button from "../button/Button";
import "./Contact.scss";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { PARTICLES } from "../../PARTICLES";
import "@splidejs/splide/dist/css/splide.min.css";
import { useGlobalContext } from "../context/GlobalContext";
import gsap from "gsap";

const Contact = () => {
  const { toggleContactModal: toggleContackModal } = useGlobalContext();

  return (
    <div className="Contact">
      <div className="container">
        <div className="left">
          <h1 className="bg">About</h1>
          <div className="about">
            <h3>About Me.</h3>
            <p>Interactive Front-end developer</p>
            <div>
              I'm Riccardo Zanutta, a 22-year-old Italian{" "}
              <strong>Freelance Front-end developer</strong>. I'm a weird guy
              who likes making weird things with web technologies. I like to
              resolve design problems, create smart user interface and imagine
              useful interaction, developing rich web experiences & web
              applications. When not working or futzing around with code, I
              study how to escape from University. Actually for hire
            </div>

            <div>
              <Splide
                onActive={(splide, component) => {
                  setTimeout(() => {
                    (component.slide.firstChild as HTMLElement).classList.add(
                      "focus"
                    );
                  }, 2000);

                  setTimeout(() => {
                    (
                      component.slide.firstChild as HTMLElement
                    ).classList.remove("focus");
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
                {PARTICLES.map((particle, idx) => {
                  return (
                    <SplideSlide key={`slide-${idx}`}>
                      <div className="skill ">
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
          <div className="close" onClick={toggleContackModal}>
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
