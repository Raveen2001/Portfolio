import React, { useCallback, useEffect, useMemo } from "react";
import { throttle } from "lodash";
import "./ModalParticles.scss";
import P1 from "../../assets/shapes/1.svg";
import P2 from "../../assets/shapes/2.svg";
import P3 from "../../assets/shapes/3.svg";
import P4 from "../../assets/shapes/4.svg";
import P5 from "../../assets/shapes/5.svg";

const ModalParticles = () => {
  useEffect(() => {
    const rightMovement = [0, 3, 5, 6, 8];
    const onMouseMove = throttle((ev: MouseEvent) => {
      const particles = document.querySelectorAll<HTMLElement>(".particle");
      const xOffset = ev.clientX * 0.06;
      const yOffset = ev.clientY * 0.08;
      particles?.forEach((particle, idx) => {
        if (rightMovement.includes(idx)) {
          particle.style.transform = `translate3d(${xOffset}px, ${-yOffset}px, 0)`;
        } else {
          particle.style.transform = `translate3d(${-xOffset}px, ${yOffset}px, 0)`;
        }
      });
    }, 100);
    document.addEventListener("mousemove", onMouseMove);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);
  return (
    <div className="ModalParticles">
      <div className="canvas">
        <div className="particle" id="p1">
          <P1 />
        </div>
        <div className="particle" id="p2">
          <P2 />
        </div>
        <div className="particle" id="p3">
          <P3 />
        </div>
        <div className="particle" id="p4">
          <P4 />
        </div>
        <div className="particle" id="p5">
          <P5 />
        </div>
        <div className="particle" id="p6">
          <P1 />
        </div>
        <div className="particle" id="p7">
          <P2 />
        </div>
        <div className="particle" id="p8">
          <P3 />
        </div>
        <div className="particle" id="p9">
          <P4 />
        </div>
        <div className="particle" id="p10">
          <P5 />
        </div>
      </div>
    </div>
  );
};

export default ModalParticles;
