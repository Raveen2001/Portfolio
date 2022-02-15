import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Particles from "react-tsparticles";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Raveen</title>
        <meta name="description" content="Portfolio of Raveen" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Particles
          id="tsparticles"
          options={{
            background: {
              color: {
                value: "#252934",
              },
            },
            fpsLimit: 360,
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                repulse: {
                  distance: 100,
                  duration: 0.1,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.1,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 50,
              },
              opacity: {
                value: 0.4,
              },
              shape: {
                type: "circle",
              },
              size: {
                random: true,
                value: 4,
              },
            },
            detectRetina: true,
          }}
        />
      </main>
    </div>
  );
};

export default Home;
