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
import JavaIcon from "./assets/particles/java.svg";
import QwikIcon from "./assets/particles/qwik.svg";
import SocketIOIcon from "./assets/particles/socketio.svg";
import PostgresIcon from "./assets/particles/postgres.svg";
import ExpressIcon from "./assets/particles/express.svg";
import HereMapsIcon from "./assets/particles/here-maps.svg";
import AWSIcon from "./assets/particles/aws.svg";
import DartIcon from "./assets/particles/dart.svg";
import NodeIcon from "./assets/particles/node.svg";
import MySQLIcon from "./assets/particles/mysql.svg";
import FirestoreIcon from "./assets/particles/firestore.svg";
import StripeIcon from "./assets/particles/stripe.svg";
import DjangoIcon from "./assets/particles/django.svg";
import ReduxIcon from "./assets/particles/redux.svg";
import GitIcon from "./assets/particles/git.svg";
import GithubIcon from "./assets/particles/github.svg";
import KubernetesIcon from "./assets/particles/kubernetes.svg";
import DockerIcon from "./assets/particles/docker.svg";
import PythonIcon from "./assets/particles/python.svg";
import RedisIcon from "./assets/particles/redis.svg";
import FastAPIIcon from "./assets/particles/fastapi.svg";
import AzureIcon from "./assets/particles/azure.svg";
import PandasIcon from "./assets/particles/pandas.svg";
import NextIcon from "./assets/particles/next.svg";
import GSapIcon from "./assets/particles/gsap.svg";
import FastifyIcon from "./assets/particles/fastify.svg";
import TailwindIcon from "./assets/particles/tailwind.svg";
import TurboRepoIcon from "./assets/particles/turborepo.svg";

import { ISkill } from "./Skills";
import Image from "next/image";

export interface IProject {
  title: string;
  description: string;
  image: string;
  link?: string;
  github?: string;
  demoVideo?: string;
  techStack: JSX.Element[];
}

export const PROJECTS: IProject[] = [
  {
    title: "Portfolio",
    description: "Built using NextJs",
    image: "casestudies/portfolio.png",
    link: "https://raveen.in",
    github: "https://github.com/Raveen2001/Portfolio",
    techStack: [<NextIcon />, <TSIcon />],
  },
  {
    title: "Shop Master",
    description: "Shop Management System built using React, Fastify.",
    image: "casestudies/shop_master.png",
    demoVideo: "casestudies/shop_master.webm",
    techStack: [
      <ReactIcon />,
      <FastifyIcon />,
      <PostgresIcon />,
      <TailwindIcon />,
      <TurboRepoIcon />,
    ],
  },
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
    techStack: [<ReactIcon />, <GSapIcon />],
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
  techStacks: ISkill[];
  workDone: string[];
}

export const WORK_TIMELINE: IWork[] = [
  {
    name: "Maersk Global Services Private Limited",
    date: "May 2022 - Present",
    designation: "Associate Software Engineer",
    description:
      'Engaged in the "Fleet Energy" project, emphasizing the optimization of fuel utilization in ships through data analysis obtained from the ship\'s engine. Contributed to improving fuel efficiency by leveraging data-driven insights to identify areas for optimization and implement measures to enhance fuel consumption management in the maritime industry.',
    techStacks: [
      { icon: <ReactIcon />, name: "ReactJs" },
      { icon: <TSIcon />, name: "Typescript" },
      { icon: <FastAPIIcon />, name: "FastAPI" },
      { icon: <PandasIcon />, name: "Pandas" },
      { icon: <PythonIcon />, name: "Python" },
      { icon: <PostgresIcon />, name: "PostgreSQL" },
      { icon: <RedisIcon />, name: "RedisDB" },
      { icon: <GitIcon />, name: "GIT" },
      { icon: <GithubActionsIcon />, name: "GitHub Actions" },
      { icon: <DockerIcon />, name: "Docker" },
      { icon: <KubernetesIcon />, name: "Kubernetes" },
      {
        icon: <NginxIcon />,
        name: "Nginx",
      },
      { icon: <AzureIcon />, name: "Azure" },
      {
        icon: <Image src="/grafana.png" width={40} height={40} alt="grafana" />,
        name: "Grafana",
      },
    ],

    workDone: [
      "Developed a robust syncing mechanism that effectively synchronizes missed vessel reports, significantly enhancing the accuracy of the analysis performed. This implementation ensures that all relevant data is accurately captured and integrated into the analysis process, resulting in more precise and reliable insights.",
      "Implemented deep linking functionality in the application, enabling the pre-application of filters when navigating through a link. This feature ensures a seamless user experience by automatically applying specific filters or configurations based on the provided deep link, simplifying user interactions and improving usability.",
      "Achieved enhanced database security by implementing user authentication and role-based access control. By creating new user accounts and assigning specific roles, the database was fortified against unauthorized access, ensuring data integrity and confidentiality.",
      "Leveraged Pandas to handle and analyze massive datasets, employing powerful data manipulation techniques. Utilized the processed data to generate interactive graphs and tables in the front-end, providing insightful visualizations for effective data representation and analysis.",
      "Implemented Tanstack Table with virtualized rows, improving front-end performance and receiving accolades from users and fellow developers.",
      "Implemented E-chart library to develop a synchronized scrollable chart, enabling seamless scrolling and synchronization across multiple charts. This implementation enhanced the visual representation and analysis of data, offering users a synchronized and interactive charting experience.",
      "Developed an advanced search feature that incorporates real-time suggestions as users type in the search bar. This implementation enables users to receive instant suggestions and refine their search queries on the fly, enhancing the search experience and providing more accurate and relevant results.",
      "Implemented interactive in-app tours to assist new users in understanding and navigating the application. These tours provide step-by-step guidance, enabling users to quickly grasp the application's features and maximize their overall user experience.",
    ],
  },

  {
    name: "Camaford",
    date: "Dec 2021 - Apr 2022",
    designation: "Student + Freelancer: Fullstack Android Developer",
    description:
      "Created a dynamic Android application catering to the photographers' community, providing a platform to showcase their portfolios, connect with potential clients, and facilitate equipment rental or sale transactions. The application serves as a comprehensive hub for photographers to promote their work and expand their professional opportunities.",
    techStacks: [
      {
        icon: <AndroidIcon />,
        name: "Android",
      },

      {
        icon: <FlutterIcon />,
        name: "Flutter",
      },
      {
        icon: <DartIcon />,
        name: "Dart",
      },
      {
        icon: <FirebaseIcon />,
        name: "Firebase",
      },
      {
        icon: <FirestoreIcon />,
        name: "Firestore",
      },
      {
        icon: <AWSIcon />,
        name: "AWS",
      },
      { icon: <HereMapsIcon />, name: "Here Maps" },
      {
        icon: <GitIcon />,
        name: "Git",
      },
    ],
    workDone: [
      "Integrated HereMaps into the application to provide location-based search functionality, enabling users to search for specific places or services based on their geographical location. Additionally, implemented a categorization system that classifies users into eight distinct categories based on their respective locations, enhancing personalized user experiences and tailored services.",
      "Leveraged the power of Firebase Cloud Messaging to deliver personalized notifications to users belonging to their respective categories. This implementation allowed for targeted communication, ensuring that users receive relevant and customized notifications based on their specific category, thereby enhancing engagement and user experience.",
      "Utilized GetX as the state management tool, showcasing proficiency in writing efficient and readable code that garnered recognition and appreciation from fellow developers. The implementation of GetX facilitated seamless state management, contributing to a robust and maintainable codebase.",
      "Successfully implemented image compression techniques for user-uploaded images, optimizing file sizes while maintaining acceptable visual quality. Leveraging AWS S3 for storage, the application efficiently stored the compressed images, reducing storage space requirements and enhancing overall performance.",
      "Developed a comprehensive blog module that empowers administrators to create and publish photography-related blog posts for users. This allowed admin to share valuable insights, tips, and inspiration with the photography community, fostering engagement and knowledge-sharing.",
      "Implemented a robust advertisement module within the application, enabling the posting of in-app advertisements to generate revenue.",
    ],
  },

  {
    name: "Arima Labs",
    date: "May 2021 - Nov 2021",
    designation: "Student + Freelancer: Fullstack Web Developer",
    description:
      "Developed an advanced dashboard equipped with a machine learning model that enables officials to effectively monitor and track vehicles passing through traffic signals. The dashboard not only records the vehicles but also captures instances of traffic rule violations, ensuring enhanced enforcement of regulations and promoting safer road conditions.",
    techStacks: [
      { icon: <ReactIcon />, name: "ReactJs" },
      { icon: <TSIcon />, name: "Typescript" },
      {
        icon: <DjangoIcon />,
        name: "Django",
      },
      { icon: <PythonIcon />, name: "Python" },
      {
        icon: <Image src="/mysql.png" width={40} height={40} alt="mysql" />,
        name: "MySQL",
      },
      {
        icon: <NodeIcon />,
        name: "NodeJS",
      },
      {
        icon: <ReduxIcon />,
        name: "Redux",
      },

      { icon: <GitIcon />, name: "GIT" },
      { icon: <DockerIcon />, name: "Docker" },
      {
        icon: <NginxIcon />,
        name: "Nginx",
      },
      {
        icon: <GitIcon />,
        name: "Git",
      },
    ],
    workDone: [
      "Implemented a series of optimizations that resulted in a remarkable 30% improvement in search performance. This was achieved by strategically restructuring the database schema and executing optimized queries to efficiently filter search results based on specified filter conditions.",
      "Implemented a memory optimization strategy that resulted in a significant reduction of over 40% in system RAM usage. By adopting a hierarchical storage approach, images were organized and stored in a structured manner, replacing the previous method of storing all images in a single folder. This optimization enhanced system efficiency and resource utilization.",
      "Developed a robust live feed server capable of streaming real-time traffic camera footage. The server efficiently handles the transmission and distribution of live video feeds from multiple traffic cameras, ensuring seamless access to up-to-date traffic information for users.",
      "Developed a secure portal with restricted access for authorized officials, enabling exclusive utilization of the live traffic camera feed server. Implemented stringent authentication mechanisms and role-based permissions to ensure confidentiality and data protection.",
      "Containerized the entire application using Docker, simplifying the deployment process for clients and making it incredibly straightforward. This implementation received positive feedback for its ease of use and enhanced portability.",
      "Wrote clean and highly extensible code that garnered praise from fellow developers, reflecting a strong commitment to coding best practices and maintainability.",
    ],
  },
  {
    name: "PadAngels",
    date: "Jan 2021 - Apr 2021",
    designation: "Student + Freelancer: Fullstack Android Developer",
    description:
      "Created a user-friendly E-commerce application focused on catering to the needs of women during their menstrual cycles. The application provides a convenient platform for purchasing sanitary pads and other related products, ensuring a seamless and discreet shopping experience.",
    techStacks: [
      {
        icon: <AndroidIcon />,
        name: "Android",
      },
      {
        icon: <FlutterIcon />,
        name: "Flutter",
      },
      {
        icon: <DartIcon />,
        name: "Dart",
      },
      {
        icon: <FirebaseIcon />,
        name: "Firebase",
      },
      {
        icon: <FirestoreIcon />,
        name: "Firestore",
      },
      {
        icon: <StripeIcon />,
        name: "Stripe",
      },
      {
        icon: <GitIcon />,
        name: "Git",
      },
    ],
    workDone: [
      "Developed an intuitive mobile admin app for product management, incorporating features for updating, categorizing, and managing inventory. Engineered a user-friendly mobile application allowing seamless browsing and purchasing of products for enhanced user experience.",
      "Integrated login options via email, mobile number, as well as popular social media platforms like Google, Apple, and Facebook.",
      "Developed a coupon module that empowered administrators to create customized coupons and enabled users to apply those coupons during the checkout process, subject to specific criteria.",
      "Implemented online payment functionality using Stripe, allowing seamless and secure transactions on the ecommerce platform.",
      "Utilized Firebase Cloud Messaging to facilitate seamless delivery of notifications to users on the ecommerce platform.",
    ],
  },
  {
    name: "LintCloud",
    date: "May 2020 - Nov 2020",
    designation: "Student + Freelancer: Frontend Android Developer",
    description:
      "Designed and developed a comprehensive application facilitating streamlined job assignment for companies. The application includes features for creating and assigning tickets to employees, while also integrating location tracking functionality to monitor their whereabouts in real-time.",
    techStacks: [
      {
        icon: <AndroidIcon />,
        name: "Android Studio",
      },
      {
        icon: <JavaIcon />,
        name: "JAVA",
      },
      {
        icon: <GitIcon />,
        name: "Git",
      },
    ],
    workDone: [
      "Engineered a secure login module that incorporates facial recognition technology, enabling employees to authenticate themselves by capturing a selfie. The module automatically records the date, time, and location of the employee for enhanced security and accountability.",
      "Established a background worker that efficiently transmits the employee's location at regular intervals of 5 minutes following their login, ensuring seamless and automated updating of their whereabouts.",
      "Implemented real-time integration of Google Maps to visually display the dynamic positions of employees, enabling graphical representation of their locations in real-time.",
      "Created a comprehensive history tracking module that enables visualization of an employee's positions at specific times, allowing playback as a dynamic video showcasing their journey through various locations.",
      "Designed and implemented a versatile ticket management module empowering administrators to create tickets with detailed information and efficiently assign them to users.",
      "Engineered a robust report generation module capable of producing comprehensive reports enriched with graphs and tables on a daily, weekly, monthly, and customizable basis.",
      "Successfully excelled in designing complex and highly interactive components, demonstrating proficiency in creating visually appealing and functionally robust user interface elements.",
    ],
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
      "Grafana",
      "stripe",
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
