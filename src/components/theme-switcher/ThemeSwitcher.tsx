import React, { useLayoutEffect } from "react";
import useLocalStorage from "../../utils/useLocalStorage";
import { ReactComponent as ThemeIcon } from "../../assets/theme.svg";
import "../../Theme.scss";

type Theme = "light" | "dark";

const ThemeSwitcher = ({ ...props }) => {
  const [theme, setTheme] = useLocalStorage<Theme>("theme", "light");

  // change theme
  useLayoutEffect(() => {
    document.body.classList.remove("dark", "light");
    if (theme === "dark") document.body.classList.add("dark");
    if (theme === "light") document.body.classList.add("light");
  }, [theme]);
  return (
    <div
      className="Theme-Switcher"
      onClick={(e) => {
        e.stopPropagation();
        if (theme === "dark") setTheme("light");
        if (theme === "light") setTheme("dark");
      }}
      {...props}
    >
      <ThemeIcon fill="var(--icon-color)" width={"24"} height={"24"} />
    </div>
  );
};

export default ThemeSwitcher;
