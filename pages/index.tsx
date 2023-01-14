import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.scss";
import Home from "../components/home/Home";
import Topbar from "../components/topbar/Topbar";
import Particles from "../components/particles/Particles";
import Contact from "../components/contact/Contact";
import Projects from "../components/projects/Projects";
import Footer from "../components/footer/Footer";
import ProjectModal from "../components/ProjectModal/ProjectModal";
import GlobalContextProvider from "../components/context/GlobalContext";
import WorkExperience from "../components/WorkExperience/WorkExperience";

const inter = Inter({ subsets: ["latin"] });

export default function App() {
  return (
    <>
      <Head>
        <title>Raveen - Fullstack Developer</title>
        <meta
          name="description"
          content="This is my portfolio where I showcase my project and works"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <GlobalContextProvider>
        <main className={styles.App}>
          <Topbar />
          <Particles />
          <Home />
          <WorkExperience />
          <Projects />
          <Footer />
          <Contact />
          {/* <ProjectModal/> */}
        </main>
      </GlobalContextProvider>
    </>
  );
}
