import Head from "next/head";
import { League_Spartan, Libre_Baskerville, Roboto } from "@next/font/google";
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
import Sidebar from "../components/sidebar/Sidebar";
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <GlobalContextProvider>
        <main
          className={`${styles.App} ${leagueSpartan.className} ${libreBaskerville.variable}`}
          id="App"
        >
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
          <WorkExperienceModal />
          <Sidebar />
        </main>
      </GlobalContextProvider>
    </>
  );
}
