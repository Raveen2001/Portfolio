import { useState } from "react";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import Particles from "./components/particles/Particles";
import Topbar from "./components/topbar/Topbar";
import "./Theme.scss";
import "./App.scss";
import { useGlobalContext } from "./components/context/GlobalContext";
function App() {
  const { isContactModalOpen } = useGlobalContext();
  return (
    <div className="App">
      <Topbar />
      <Particles />
      <Home />
      <Contact />
    </div>
  );
}

export default App;
