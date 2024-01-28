import React, { useCallback, useEffect, useMemo } from "react";
import Logo from "../../assets/color_logo.svg";
import { throttle } from "lodash";
import styles from "./Particles.module.scss";
import TSIcon from "../../assets/particles/typescript.svg";
import ReactIcon from "../../assets/particles/react.svg";
import PythonIcon from "../../assets/particles/python.svg";
import NodeIcon from "../../assets/particles/node.svg";
import GitIcon from "../../assets/particles/git.svg";
import FirebaseIcon from "../../assets/particles/firebase.svg";
import FlutterIcon from "../../assets/particles/flutter.svg";
import PostgresIcon from "../../assets/particles/postgres.svg";
import ReduxIcon from "../../assets/particles/redux.svg";
import KubernetesIcon from "../../assets/particles/kubernetes.svg";

const Particles = () => {
  useEffect(() => {
    const rightMovement = [0, 3, 5, 6, 8];
    const onMouseMove = throttle((ev: MouseEvent) => {
      const particles = document.querySelectorAll<HTMLElement>(
        "." + styles.particle
      );
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
    <div className={styles.Particles}>
      <div className={styles.background} key="bg">
        <Logo />
      </div>
      <div className={styles.canvas}>
        <div className={styles.particle} id={styles.p1} key="p1">
          <NodeIcon />
        </div>
        <div className={styles.particle} id={styles.p2} key="p2">
          <TSIcon />
        </div>
        <div className={styles.particle} id={styles.p3} key="p3">
          <PythonIcon />
        </div>
        <div className={styles.particle} id={styles.p4} key="p4">
          <GitIcon />
        </div>
        <div className={styles.particle} id={styles.p5} key="p5">
          <ReactIcon />
        </div>
        <div className={styles.particle} id={styles.p6} key="p6">
          <FirebaseIcon />
        </div>
        <div className={styles.particle} id={styles.p7} key="p7">
          <FlutterIcon />
        </div>
        <div className={styles.particle} id={styles.p8} key="p8">
          <ReduxIcon />
        </div>
        <div className={styles.particle} id={styles.p9} key="p9">
          <KubernetesIcon />
        </div>
        <div className={styles.particle} id={styles.p10} key="p10">
          <PostgresIcon />
        </div>
      </div>
    </div>
  );
};

export default Particles;
