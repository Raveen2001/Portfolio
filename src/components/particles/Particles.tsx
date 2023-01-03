import React, { useLayoutEffect } from "react";
import { ReactComponent as Logo } from "../../assets/color_logo.svg";
import { PARTICLES } from "../../PARTICLES";
import { random } from "lodash";
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
  // useLayoutEffect(() => {
  //   const particles = document.querySelectorAll<HTMLElement>(".particle");
  //   const homeElement = document.getElementsByClassName("Home")[0];
  //   const height = homeElement.clientHeight - 200;
  //   const width = homeElement.clientWidth;

  //   const widthSegmentSize = width / 10;
  //   console.log(particles.length);

  //   for (let i = 0; i < particles.length; i++) {
  //     if (particles[i] === undefined) {
  //       continue;
  //     }
  //     if (i <= 8) {
  //       const widthSegmentSize = width / 8;
  //       const left = random(i * widthSegmentSize, (i + 1) * widthSegmentSize);
  //       const top = random(80, 120);
  //       particles[i].style.top = `${top}px`;
  //       particles[i].style.left = `${left}px`;
  //     } else if (i <= 15) {
  //       const heightSegmentSize = height / 5;
  //       i -= 10;
  //       const left = random(100, 100);
  //       const top =
  //         random(i * heightSegmentSize, (i + 1) * heightSegmentSize) + 100 / 5;
  //       i += 10;
  //       particles[i].style.left = `${left}px`;
  //       particles[i].style.top = `${top}px`;
  //     } else if (i <= 20) {
  //       const heightSegmentSize = height / 5;
  //       i -= 15;
  //       const right = random(100, 100);
  //       const top =
  //         random(i * heightSegmentSize, (i + 1) * heightSegmentSize) + 100 / 5;
  //       i += 15;
  //       particles[i].style.right = `${right}px`;
  //       particles[i].style.top = `${top}px`;
  //     } else if (i <= 30) {
  //       const widthSegmentSize = width / 8;
  //       i -= 20;
  //       const left = random(i * widthSegmentSize, (i + 1) * widthSegmentSize);
  //       const bottom = random(100, 100);
  //       i += 20;
  //       particles[i].style.left = `${left}px`;
  //       particles[i].style.bottom = `${bottom}px`;
  //     }
  //   }
  //   console.log(particles);
  // }, []);

  // useLayoutEffect(() => {
  //   const particles = document.querySelectorAll<HTMLElement>(".particle");
  //   console.log(particles);
  //   particles.forEach((particle) => {
  //     console.log(particle.clientHeight);
  //     let [height, width] = [particle.clientHeight, particle.clientWidth];

  //     particle.style.top = `${random(0, height - 50)}px`;
  //     particle.style.left = `${random(0, width - 50)}px`;
  //   });
  // }, []);

  return (
    <div className="Particles">
      <div className="background">
        <Logo></Logo>
      </div>
      {/* <div className="particles">
        {PARTICLES.map((icon, idx) => (
          <div className="particle" key={`p${idx}`} id={`p${idx}`}>
            <div className="icon">{icon}</div>
          </div>
        ))}
      </div> */}

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
