import "./App.scss";
import { ReactComponent as Logo } from "./assets/logo.svg";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import Particles from "./components/particles/Particles";
import Topbar from "./components/topbar/Topbar";
import "./Theme.scss";
function App() {
  return (
    <div className="App">
      <Topbar />
      <Particles />
      {/* <Home /> */}
      <Contact />
    </div>
  );
}

export default App;
