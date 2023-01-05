import "./Topbar.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import ThemeSwitcher from "../theme-switcher/ThemeSwitcher";
import { gsapOpenContactModal } from "../../utils/gsap";
import {
  scrollToCaseStudy,
  scrollToExperiments,
  scrollToHome,
} from "../../utils/scroll";

const Topbar = () => {
  return (
    <div className="Topbar">
      <div className="clickable" onClick={scrollToHome}>
        <Logo width={50} height={50} fill="var(--icon-color)" />
      </div>
      <div className="menu">
        <div className="menu-item clickable" onClick={scrollToCaseStudy}>
          Casestudy
        </div>
        <div className="menu-item clickable" onClick={scrollToExperiments}>
          Experiments
        </div>
        <div className="menu-item clickable" onClick={gsapOpenContactModal}>
          Contact
        </div>

        <div className="menu-item clickable">
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
