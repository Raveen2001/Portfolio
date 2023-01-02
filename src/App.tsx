import "./App.scss";
import { ReactComponent as Logo } from "./assets/logo.svg";
import Home from "./components/home/Home";
import Topbar from "./components/topbar/Topbar";
import "./Theme.scss";
function App() {
  return (
    <div className="App">
      <Topbar />
      <Home />
    </div>
  );
}

export default App;
