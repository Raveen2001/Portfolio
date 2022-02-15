import type { NextPage } from "next";
import Head from "next/head";
import ParticlesBg from "../components/home/particle";
const Home: NextPage = () => {
  return (
    <div className="m-0 p-0">
      <Head>
        <title>Raveen</title>
        <meta name="description" content="Portfolio of Raveen" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h2 className="text-white">Hello world</h2>
        <ParticlesBg></ParticlesBg>
      </main>
    </div>
  );
};

export default Home;
