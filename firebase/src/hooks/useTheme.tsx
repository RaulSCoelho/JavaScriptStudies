"use client";
import {
  ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

import { parseCookies, setCookie } from "nookies";

type Theme = "default" | "dark";

type ThemesContextProps = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemesContext = createContext({} as ThemesContextProps);

function restoreTheme() {
  const { theme } = parseCookies();
  return theme as Theme;
}

function storeTheme(theme: string) {
  setCookie(undefined, "theme", theme, {
    path: "/",
    maxAge: 2147483647,
  });
}

export function ThemesProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    const storedTheme = restoreTheme();
    if (storedTheme) return storedTheme;
    return "dark";
  });

  const toggleTheme = () => {
    setTheme(theme === "default" ? "dark" : "default");
  };

  useEffect(() => {
    const body = document.querySelector("body") as HTMLBodyElement;
    body.classList.toggle("theme-dark", theme === "dark");
    storeTheme(theme);
  }, [theme]);

  return (
    <ThemesContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemesContext.Provider>
  );
}

export function useTheme(): ThemesContextProps {
  return useContext(ThemesContext);
}
