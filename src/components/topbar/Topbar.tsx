import "./Topbar.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import ThemeSwitcher from "../theme-switcher/ThemeSwitcher";
import { useGlobalContext } from "../context/GlobalContext";

const Topbar = () => {
  const { toggleContactModal: toggleContackModal } = useGlobalContext();
  return (
    <div className="Topbar">
      <div>
        <Logo width={50} height={50} fill="var(--icon-color)" />
      </div>
      <div className="menu">
        <a className="menu-item" href="#">
          Casestudy
        </a>
        <a className="menu-item" href="#">
          Experiments
        </a>
        <a className="menu-item clickable" onClick={toggleContackModal}>
          Contact
        </a>

        <div className="menu-item clickable">
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
