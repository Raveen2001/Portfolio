import useLocalStorage from "../../utils/useLocalStorage";
import ThemeIcon from "../../assets/theme.svg";
import styles from "./Theme.module.scss";
import { useEffect } from "react";

type Theme = "light" | "dark";

const ThemeSwitcher = ({ ...props }) => {
  const [theme, setTheme] = useLocalStorage<Theme>("theme", "dark");

  // change theme
  useEffect(() => {
    document.documentElement.classList.remove(styles["light"], styles["dark"]);
    if (theme === "dark")
      document.documentElement.classList.add(styles["dark"]);
    if (theme === "light")
      document.documentElement.classList.add(styles["light"]);
  }, [theme]);
  return (
    <div
      className={styles["Theme-Switcher"]}
      onClick={(e) => {
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
