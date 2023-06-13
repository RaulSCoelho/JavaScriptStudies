"use client";
import { useTheme } from "@/hooks/useTheme";
import { Sun, Moon } from "lucide-react";

export function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className="text-skin-base focus:outline-none" onClick={toggleTheme}>
      {theme === "dark" ? <Moon size={24} /> : <Sun size={24} />}
    </button>
  );
}
