import React, { useCallback, useEffect, useLayoutEffect, useMemo } from "react";
import { ReactComponent as Logo } from "../../assets/color_logo.svg";
import { PARTICLES } from "../../PARTICLES";
import { debounce, random, throttle } from "lodash";
import "./Particles.scss";
import { ReactComponent as TSIcon } from "../../assets/particles/typescript.svg";
import { ReactComponent as ReactIcon } from "../../assets/particles/react.svg";
import { ReactComponent as PythonIcon } from "../../assets/particles/python.svg";
import { ReactComponent as NodeIcon } from "../../assets/particles/node.svg";
import { ReactComponent as GitIcon } from "../../assets/particles/git.svg";
import { ReactComponent as FirebaseIcon } from "../../assets/particles/firebase.svg";
import { ReactComponent as FlutterIcon } from "../../assets/particles/flutter.svg";
import { ReactComponent as PostgresIcon } from "../../assets/particles/postgres.svg";
import { ReactComponent as ReduxIcon } from "../../assets/particles/redux.svg";
import { ReactComponent as KubernetesIcon } from "../../assets/particles/kubernetes.svg";

const Particles = () => {
  const particles = useMemo(
    () => document.querySelectorAll<HTMLElement>(".particle"),
    []
  );
  const onMouseMove = useCallback(
    throttle((ev: MouseEvent) => {
      const xOffset = ev.clientX * 0.06;
      const yOffset = ev.clientY * 0.08;
      // console.log("1");
      particles.forEach((particle, idx) => {
        if (idx % 2 === 0) {
          particle.style.transform = `translate3d(${xOffset}px, ${-yOffset}px, 0)`;
        } else {
          particle.style.transform = `translate3d(${-xOffset}px, ${yOffset}px, 0)`;
        }
      });
    }, 100),
    []
  );

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);
  return (
    <div className="Particles">
      <div className="background">
        <Logo></Logo>
      </div>
      <div className="canvas">
        <div className="particle" id="p1">
          <NodeIcon />
        </div>
        <div className="particle" id="p2">
          <TSIcon />
        </div>
        <div className="particle" id="p3">
          <PythonIcon />
        </div>
        <div className="particle" id="p4">
          <GitIcon />
        </div>
        <div className="particle" id="p5">
          <ReactIcon />
        </div>
        <div className="particle" id="p6">
          <FirebaseIcon />
        </div>
        <div className="particle" id="p7">
          <FlutterIcon />
        </div>
        <div className="particle" id="p8">
          <ReduxIcon />
        </div>
        <div className="particle" id="p9">
          <KubernetesIcon />
        </div>
        <div className="particle" id="p10">
          <PostgresIcon />
        </div>
      </div>
    </div>
  );
};

export default Particles;
