import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import Topbar from "./components/topbar/Topbar";
import "./Theme.scss";
import "./App.scss";
import Project from "./components/projects/Project";
import Particles from "./components/particles/Particles";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div className="App">
      <Topbar />
      <Particles />
      <Home />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
