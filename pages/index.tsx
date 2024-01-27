import Head from "next/head";
import { League_Spartan, Libre_Baskerville, Roboto } from "@next/font/google";
import styles from "../styles/App.module.scss";
import Home from "../components/Home/Home";
import Topbar from "../components/Topbar/Topbar";
import Particles from "../components/Particles/Particles";
import Contact from "../components/Contact/Contact";
import Projects from "../components/Projects/Projects";
import Footer from "../components/Footer/Footer";
import ProjectModal from "../components/ProjectModal/ProjectModal";
import GlobalContextProvider from "../components/Context/GlobalContext";
import WorkExperience from "../components/WorkExperience/WorkExperience";
import PageLoading from "../components/FakeLoading/PageLoading";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import Sidebar from "../components/Sidebar/Sidebar";
import WorkExperienceModal from "../components/WorkExperienceModal/WorkExperienceModal";
const leagueSpartan = League_Spartan({ subsets: ["latin"], display: "swap" });
const libreBaskerville = Roboto({
  weight: ["400"],
  subsets: ["latin"],
  style: ["italic", "normal"],
  display: "swap",
  variable: "--secondary-font",
});

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
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0;"
        />

        <link rel="icon" href="/logo.svg" />
      </Head>
      <GlobalContextProvider>
        <main
          className={`${styles.App} ${leagueSpartan.className} ${libreBaskerville.variable}`}
          id="App"
        >
          <div>
            <Topbar />
            {!isLoadingComplete && <PageLoading />}
            {isLoadingComplete && [
              <Particles key="particles" />,
              <Home key="home" />,
              <WorkExperience key="workExperience" />,
              <Projects key="projects" />,
              <Footer key="footer" />,
            ]}
            <ProjectModal />
            <Contact />
            <WorkExperienceModal />
            <Sidebar />
          </div>
        </main>
      </GlobalContextProvider>
    </>
  );
}
