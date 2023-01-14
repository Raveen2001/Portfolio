import AndroidIcon from "./assets/particles/android.svg";
import FlutterIcon from "./assets/particles/flutter.svg";
import ReactIcon from "./assets/particles/react.svg";
import P5Icon from "./assets/particles/p5.svg";
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
  techStack: JSX.Element[];
}

export const PROJECTS: IProject[] = [
  {
    title: "Path Visualizer",
    description: "Built using ReactJs",
    image: "casestudies/path.png",
    link: "https://visualizer.raveen.in",
    github: "https://github.com/Raveen2001/Path-Finding-Visualizer.git",
    techStack: [<ReactIcon />, <TSIcon />],
  },
  {
    title: "Sort Visualizer",
    description: "Built using P5Js",
    image: "casestudies/sort.png",
    link: "https://sort.raveen.in",
    github: "https://github.com/Raveen2001/Sorting-visualizations.git",
    techStack: [<HTMLIcon />, <CSSIcon />, <JSIcon />, <P5Icon />],
  },
  {
    title: "Bills Application",
    description: "Built using Flutter",
    image: "casestudies/bills.png",
    github: "https://github.com/Raveen2001/Bills-Application",
    techStack: [<AndroidIcon />, <FlutterIcon />, <FirebaseIcon />],
  },
  {
    title: "Stone Paper Scissor game",
    description: "Built using HTML, CSS, JS",
    image: "casestudies/stone.png",
    link: "https://sps.raveen.in",
    github: "https://github.com/Raveen2001/Stone-Paper-Scissor-game.git",
    techStack: [<HTMLIcon />, <CSSIcon />, <JSIcon />],
  },
];

export const EXPERIMENTS: IProject[] = [
  {
    title: "Android Architectural Components",
    description: "Built using Android JAVA",
    image: "experiments/architecture.png",
    github: "https://github.com/Raveen2001/Android-Architectural-Components",
    techStack: [],
  },
  {
    title: "Job Finding Website",
    description: "Built using HTML, CSS",
    image: "experiments/mystic.png",
    github: "https://mystic.raveen.in",
    techStack: [],
  },
  {
    title: "Network",
    description: "Built using JAVA",
    image: "experiments/network.png",
    github: "https://github.com/Raveen2001/AjiraNet",
    techStack: [],
  },
  {
    title: "Gesture Detection",
    description: "Built using YOLOv7",
    image: "experiments/gesture.png",
    github: "https://github.com/Raveen2001/gesture-detection",
    techStack: [],
  },
];

export interface IWork {
  name: string;
  date: string;
  designation: string;
  description: string;
}

export const WORK_TIMELINE: IWork[] = [
  {
    name: "Maersk",
    date: "May 2022 - Present",
    designation: "Software Developer Intern",
    description:
      'Working on "Fleet Energy" project, focusing on optimizing efficient use of fuels in the ships by analysis the data from the engine.',
  },

  {
    name: "Camaford",
    date: "Dec 2021 - Jan 2022",
    designation: "Fullstack Android Developer",
    description:
      "Developed an Android application for the photographers community to showcase their work and get hired or rent/sell equipments.",
  },

  {
    name: "Arima Labs",
    date: "May 2021 - July 2021",
    designation: "Fullstack Web Developer",
    description:
      "Developed a dashboard which is backed by ML model that helps the officials to keeps track of vehicles passing through traffic signals and also captures the vechicles which violated the traffic rules & regulations.",
  },
  {
    name: "PadAngels",
    date: "Jan 2021 - Mar 2021",
    designation: "Fullstack Android Developer",
    description:
      "Developed an ecommerce application for buying sanitary pads and other products which helps women during their mensuration cycles.",
  },
  {
    name: "LintCloud",
    date: "May 2020 - Sept 2022",
    designation: "Frontend Android Developer",
    description:
      "Developed an application that help companies assign jobs to their employees by creating and assigning tickets to them and also keeps track of the employees location.",
  },
];

export const SKILLS_BY_CATEGORY: Map<string, string[]> = new Map([
  [
    "Programming Languages",
    ["Java", "Python", "JavaScript", "Dart", "C", "SQL"],
  ],
  [
    "Frontend",
    [
      "ReactJs",
      "NextJs",
      "Redux",
      "Flutter",
      "Native Android",
      "Angular",
      "P5Js",
    ],
  ],
  [
    "Backend",
    [
      "NodeJs",
      "FastAPI",
      "Django",
      "ExpressJs",
      "Flask",
      "REST API",
      "GraphQL",
    ],
  ],
  ["Databases", ["MySQL", "MongoDB", "PostgreSQL", "SQLite"]],
  [
    "DevOps",
    [
      "Git",
      "GitHub",
      "Docker",
      "Kubernetes",
      "Firebase",
      "Digital Ocean",
      "AWS",
      "Azure",
      "Heroku",
    ],
  ],
  [
    "Others",
    [
      "HTML",
      "CSS",
      "TypeScript",
      "Bootstrap",
      "Tailwind CSS",
      "SASS",
      "Pandas",
      "NumPy",
      "SQLAlchemy",
      "PyDantic",
      "Google Maps",
      "Here Maps",
      "GetX",
    ],
  ],
  ["Tools", ["Linux", "VS Code", "Android Studio", "Postman", "Figma"]],
]);
