import type { NextPage } from "next";
import Head from "next/head";
import ParticlesBg from "../components/home/particle";
import Image from "next/image";
import HomeComponent from "../components/home/home.component";
import ProjectComponent from "../components/projects/projects.components";

const Home: NextPage = () => {
  return (
    <div className="m-0 p-0">
      <Head>
        <title>Raveen</title>
        <meta name="description" content="Portfolio of Raveen" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HomeComponent />
        <ProjectComponent />
      </main>
    </div>
  );
};

export default Home;
