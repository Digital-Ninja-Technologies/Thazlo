import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const [theme, setTheme] = React.useState<"light" | "dark">(() => {
    if (typeof document !== "undefined") {
      return document.documentElement.classList.contains("dark") ? "dark" : "light";
    }
    return "light";
  });

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className={cn(
        "fixed bottom-6 right-6 z-60 flex size-10 items-center justify-center rounded-full border border-border bg-background shadow-lg transition-transform hover:scale-105 active:scale-95 md:bottom-8 md:right-6"
      )}
    >
      <Sun className="size-4 text-primary rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute size-4 text-primary rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 duration-500" />
    </button>
  );
}
