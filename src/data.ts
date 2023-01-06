export interface IProject {
  title: string;
  description: string;
  image: string;
  link: string;
}

export const PROJECTS: IProject[] = [
  {
    title: "Path Visualizer",
    description: "Built using ReactJs",
    image: "casestudies/path.png",
    link: "https://visualizer.raveen.in",
  },
  {
    title: "Sort Visualizer",
    description: "Built using P5Js",
    image: "casestudies/sort.png",
    link: "https://sort.raveen.in",
  },
  {
    title: "Bills Application",
    description: "Built using Flutter",
    image: "casestudies/bills.png",
    link: "https://github.com/Raveen2001/Bills-Application",
  },
  {
    title: "Stone Paper Scissor game",
    description: "Built using HTML, CSS, JS",
    image: "casestudies/stone.png",
    link: "https://sps.raveen.in",
  },
];

export const EXPERIMENTS: IProject[] = [
  {
    title: "Android Architectural Components",
    description: "Built using Android JAVA",
    image: "experiments/architecture.png",
    link: "https://github.com/Raveen2001/Android-Architectural-Components",
  },
  {
    title: "Job Finding Website",
    description: "Built using HTML, CSS",
    image: "experiments/mystic.png",
    link: "https://mystic.raveen.in",
  },
  {
    title: "Network",
    description: "Built using JAVA",
    image: "experiments/network.png",
    link: "https://github.com/Raveen2001/AjiraNet",
  },
  {
    title: "Gesture Detection",
    description: "Built using YOLOv7",
    image: "experiments/gesture.png",
    link: "https://github.com/Raveen2001/gesture-detection",
  },
];
