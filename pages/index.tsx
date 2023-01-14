import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "../styles/App.module.scss";
import Home from "../components/home/Home";
import Topbar from "../components/topbar/Topbar";
import Particles from "../components/particles/Particles";
import Contact from "../components/contact/Contact";
import Projects from "../components/projects/Projects";
import Footer from "../components/footer/Footer";
import ProjectModal from "../components/ProjectModal/ProjectModal";
import GlobalContextProvider from "../components/context/GlobalContext";
import WorkExperience from "../components/WorkExperience/WorkExperience";
import PageLoading from "../components/FakeLoading/PageLoading";
import { useEffect, useState } from "react";
import { gsap } from "gsap";

const inter = Inter({ subsets: ["latin"] });

const LOADING_TIME = 2000;
export default function App() {
  const [isLoadingComplete, setIsLoadingComplete] = useState<boolean>(false);
  useEffect(() => {
    const id = setTimeout(() => {
      setIsLoadingComplete(true);
      gsap.to("#Topbar", { y: 0 });
    }, LOADING_TIME);

    return () => {
      clearTimeout(id);
    };
  }, []);

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
        <main className={styles.App} id="App">
          <Topbar />
          {!isLoadingComplete && <PageLoading />}
          {isLoadingComplete && [
            <Particles />,
            <Home />,
            <WorkExperience />,
            <Projects />,
            <Footer />,
          ]}
          {/* <ProjectModal /> */}
          <Contact />
        </main>
      </GlobalContextProvider>
    </>
  );
}
