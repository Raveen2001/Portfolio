import type { NextPage } from "next";
import Head from "next/head";
import ParticlesBg from "../components/home/particle";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="m-0 p-0">
      <Head>
        <title>Raveen</title>
        <meta name="description" content="Portfolio of Raveen" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="flex flex-col justify-center items-center w-screen h-screen">
          <div className="flex flex-row">
            <div className="mr-2 text-5xl text-secondary">Hello, I'm</div>
            <div className="text-primary text-5xl">Raveen</div>
          </div>
          <div className="text-white text-5xl mt-3">
            I'm a full-stack developer
          </div>
          <div className="mb-20"></div>
          <a
            className="group outline outline-2 outline-secondary px-4 py-2 hover:bg-primary hover:outline-primary transition-all duration-500"
            href="#"
          >
            <div className="flex justify-center items-center">
              <div className="text-2xl text-secondary">View works</div>
              <div className="text-2xl text-secondary ml-4 group-hover:rotate-90 transition-all duration-500">-></div>
            </div>
          </a>
        </div>
        <ParticlesBg></ParticlesBg>
      </main>
    </div>
  );
};

export default Home;
