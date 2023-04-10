import AndroidIcon from "./assets/particles/android.svg";
import FlutterIcon from "./assets/particles/flutter.svg";
import ReactIcon from "./assets/particles/react.svg";
import P5Icon from "./assets/particles/p5.svg";
import FirebaseIcon from "./assets/particles/firebase.svg";
import HTMLIcon from "./assets/particles/html.svg";
import CSSIcon from "./assets/particles/css.svg";
import JSIcon from "./assets/particles/js.svg";
import TSIcon from "./assets/particles/typescript.svg";
import CertBotIcon from "./assets/particles/certbot.svg";
import NginxIcon from "./assets/particles/nginx.svg";
import DigitalOceanIcon from "./assets/particles/digital-ocean.svg";
import GithubActionsIcon from "./assets/particles/github-actions.svg";
import WebRTCIcon from "./assets/particles/webrtc.svg";
import QwikIcon from "./assets/particles/qwik.svg";
import SocketIOIcon from "./assets/particles/socketio.svg";

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
    title: "Video Chat",
    description: "Built using Qwik & WebRTC",
    image: "casestudies/video-chat.png",
    link: "https://video-chat.raveen.in",
    github: "https://github.com/Raveen2001/video-chat",
    techStack: [
      <QwikIcon />,
      <TSIcon />,
      <SocketIOIcon />,
      <WebRTCIcon />,
      <GithubActionsIcon />,
      <DigitalOceanIcon />,
      <NginxIcon />,
      <CertBotIcon />,
    ],
  },
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
    designation: "Fullstack Web Developer(FE Heavy)",
    description:
      'Working on "Fleet Energy" project, focusing on optimizing efficient use of fuels in the ships by analysis the data from the engine.',
  },

  {
    name: "Camaford",
    date: "Dec 2021 - Apr 2022",
    designation: "Fullstack Android Developer",
    description:
      "Developed an Android application for the photographers community to showcase their work and get hired or rent/sell equipments.",
  },

  {
    name: "Arima Labs",
    date: "May 2021 - Nov 2021",
    designation: "Fullstack Web Developer",
    description:
      "Developed a dashboard which is backed by ML model that helps the officials to keeps track of vehicles passing through traffic signals and also captures the vechicles which violated the traffic rules & regulations.",
  },
  {
    name: "PadAngels",
    date: "Jan 2021 - Apr 2021",
    designation: "Fullstack Android Developer",
    description:
      "Developed an ecommerce application for buying sanitary pads and other products which helps women during their mensuration cycles.",
  },
  {
    name: "LintCloud",
    date: "May 2020 - Nov 2020",
    designation: "Frontend Android Developer",
    description:
      "Developed an application that help companies assign jobs to their employees by creating and assigning tickets to them and also keeps track of the employees location.",
  },
];

export const SKILLS_BY_CATEGORY: Map<string, string[]> = new Map([
  [
    "Programming Languages",
    ["Java", "Python", "JavaScript", "Dart", "C", "SQL", "PSQL"],
  ],
  [
    "Frontend",
    [
      "ReactJs",
      "NextJs",
      "Qwik",
      "Angular",
      "P5Js",
      "Redux",
      "Flutter",
      "Native Android",
    ],
  ],
  [
    "Backend",
    ["ExpressJs", "Fastify", "FastAPI", "Django", "Flask", "Firebase"],
  ],
  [
    "Databases",
    ["MySQL", "MongoDB", "PostgreSQL", "SQLite", "Cloud Firestore", "Redis"],
  ],
  [
    "DevOps",
    [
      "Git",
      "GitHub",
      "Github Actions",
      "GitHub Pages",
      "Docker",
      "Kubernetes",
      "WebRTC",
      "Digital Ocean",
      "AWS",
      "Azure",
      "Heroku",
      "Nginx",
      "Netlify",
      "Vercel",
      "CertBot",
      "Grafana",
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
      "Material UI",
      "SASS",
      "Pandas",
      "NumPy",
      "SQLAlchemy",
      "PyDantic",
      "Alembic",
      "Prisma",
      "Google Maps",
      "Here Maps",
      "GetX",
      "REST API",
      "GraphQL",
    ],
  ],
  [
    "Tools",
    [
      "Linux",
      "NeoVIM",
      "VS Code",
      "Android Studio",
      "Chrome Dev Tools",
      "Postman",
      "Figma",
    ],
  ],
]);
