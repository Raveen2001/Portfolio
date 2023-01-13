import AndroidIcon from "./assets/particles/android.svg";
import FlutterIcon from "./assets/particles/flutter.svg";
import ReactIcon from "./assets/particles/react.svg";
import P5Icon from "../../assets/particles/p5.svg";
import FirebaseIcon from "./assets/particles/firebase.svg";
import HTMLIcon from "./assets/particles/html.svg";
import CSSIcon from "./assets/particles/css.svg";
import JSIcon from "./assets/particles/js.svg";
import TSIcon from "./assets/particles/typescript.svg";

export interface IProject {
  title: string;
  description: string;
  image: string;
  link?: string;
  github: string;
  stack: JSX.Element[];
}

export const PROJECTS: IProject[] = [
  {
    title: "Path Visualizer",
    description: "Built using ReactJs",
    image: "casestudies/path.png",
    link: "https://visualizer.raveen.in",
    github: "https://github.com/Raveen2001/Path-Finding-Visualizer.git",
    stack: [<ReactIcon />, <TSIcon />],
  },
  {
    title: "Sort Visualizer",
    description: "Built using P5Js",
    image: "casestudies/sort.png",
    link: "https://sort.raveen.in",
    github: "https://github.com/Raveen2001/Sorting-visualizations.git",
    stack: [<HTMLIcon />, <CSSIcon />, <JSIcon />, <P5Icon />],
  },
  {
    title: "Bills Application",
    description: "Built using Flutter",
    image: "casestudies/bills.png",
    github: "https://github.com/Raveen2001/Bills-Application",
    stack: [<AndroidIcon />, <FlutterIcon />, <FirebaseIcon />],
  },
  {
    title: "Stone Paper Scissor game",
    description: "Built using HTML, CSS, JS",
    image: "casestudies/stone.png",
    link: "https://sps.raveen.in",
    github: "https://github.com/Raveen2001/Stone-Paper-Scissor-game.git",
    stack: [<HTMLIcon />, <CSSIcon />, <JSIcon />],
  },
];

export const EXPERIMENTS: IProject[] = [
  {
    title: "Android Architectural Components",
    description: "Built using Android JAVA",
    image: "experiments/architecture.png",
    github: "https://github.com/Raveen2001/Android-Architectural-Components",
    stack: [],
  },
  {
    title: "Job Finding Website",
    description: "Built using HTML, CSS",
    image: "experiments/mystic.png",
    github: "https://mystic.raveen.in",
    stack: [],
  },
  {
    title: "Network",
    description: "Built using JAVA",
    image: "experiments/network.png",
    github: "https://github.com/Raveen2001/AjiraNet",
    stack: [],
  },
  {
    title: "Gesture Detection",
    description: "Built using YOLOv7",
    image: "experiments/gesture.png",
    github: "https://github.com/Raveen2001/gesture-detection",
    stack: [],
  },
];
