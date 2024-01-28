import useLocalStorage from "../../utils/useLocalStorage";
import ThemeIcon from "../../assets/theme.svg";
import styles from "./Theme.module.scss";
import { useEffect } from "react";

type Theme = "light" | "dark" | "default";

const ThemeSwitcher = ({ ...props }) => {
  // system theme for default value
  const [theme, setTheme] = useLocalStorage<Theme>("theme", "default");

  // detect system theme change
  useEffect(() => {
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";

    if (theme === "default") setTheme(systemTheme);

    const changeEvent = (event: MediaQueryListEvent) => {
      const newColorScheme = event.matches ? "dark" : "light";
      setTheme(newColorScheme);
    };

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", changeEvent);

    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", changeEvent);
    };
  });

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
