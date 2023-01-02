import React from "react";
import "./Topbar.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import ThemeSwitcher from "../theme-switcher/ThemeSwitcher";

const Topbar = () => {
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
        <a className="menu-item" href="#">
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
