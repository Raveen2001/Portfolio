import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import Topbar from "./components/topbar/Topbar";
import "./Theme.scss";
import "./App.scss";
import Projects from "./components/projects/Project";
import Particles from "./components/particles/Particles";
import Footer from "./components/footer/Footer";
import ModalParticles from "./components/ModalParticles/ModalParticles";
function App() {
  return (
    <div className="App">
      <Topbar />
      {/* <ModalParticles /> */}
      <Particles />
      <Home />
      <Projects />
      <Footer />
      <Contact />
    </div>
  );
}

export default App;
