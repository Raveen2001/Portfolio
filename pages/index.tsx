import type { NextPage } from "next";
import Head from "next/head";
import ContactComponent from "../components/contact/contact.component";
import FooterComponent from "../components/footer/footer.component";
import HomeComponent from "../components/home/home.component";
import ProjectsComponent from "../components/projects/projects.components";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Raveen</title>
        <meta name="description" content="Portfolio of Raveen" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HomeComponent />
        <ProjectsComponent />
        <ContactComponent />
        <FooterComponent />
      </main>
    </div>
  );
};

export default Home;
