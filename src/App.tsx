import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import Topbar from "./components/topbar/Topbar";
import "./Theme.scss";
import "./App.scss";
import Project from "./components/projects/Project";
import Particles from "./components/particles/Particles";
function App() {
  return (
    <div className="App">
      <Topbar />
      <Particles />
      <Home />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
