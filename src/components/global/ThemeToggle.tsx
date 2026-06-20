import * as React from "react";
import { Laptop, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

type Theme = "light" | "dark" | "system";

const getInitialTheme = (): Theme => {
  if (typeof window === "undefined") return "system";
  const stored = localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") return stored;
  return "system";
};

export function ThemeToggle() {
  const [theme, setTheme] = React.useState<Theme>(getInitialTheme);

  React.useEffect(() => {
    const root = document.documentElement;
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const applyTheme = (targetTheme: Theme) => {
      if (targetTheme === "system") {
        const systemTheme = mediaQuery.matches ? "dark" : "light";
        root.classList.toggle("dark", systemTheme === "dark");
        localStorage.removeItem("theme");
      } else {
        root.classList.toggle("dark", targetTheme === "dark");
        localStorage.setItem("theme", targetTheme);
      }
    };

    applyTheme(theme);

    const handleSystemChange = () => {
      if (theme === "system") applyTheme("system");
    };

    mediaQuery.addEventListener("change", handleSystemChange);
    return () => mediaQuery.removeEventListener("change", handleSystemChange);
  }, [theme]);

  return (
    <div
      role="radiogroup"
      aria-label="Theme selection"
      className="inline-flex h-9 items-center rounded-full border border-border/50 bg-secondary/50 p-1"
    >
      <button
        role="radio"
        aria-checked={theme === "light"}
        aria-label="Light mode"
        onClick={() => setTheme("light")}
        className={cn(
          "flex size-7 items-center justify-center rounded-full transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-primary",
          theme === "light"
            ? "bg-background text-foreground shadow-sm"
            : "text-muted-foreground hover:text-foreground"
        )}
      >
        <Sun className="size-4" />
      </button>

      <button
        role="radio"
        aria-checked={theme === "system"}
        aria-label="System mode"
        onClick={() => setTheme("system")}
        className={cn(
          "flex size-7 items-center justify-center rounded-full transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-primary",
          theme === "system"
            ? "bg-background text-foreground shadow-sm"
            : "text-muted-foreground hover:text-foreground"
        )}
      >
        <Laptop className="size-4" />
      </button>

      <button
        role="radio"
        aria-checked={theme === "dark"}
        aria-label="Dark mode"
        onClick={() => setTheme("dark")}
        className={cn(
          "flex size-7 items-center justify-center rounded-full transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-primary",
          theme === "dark"
            ? "bg-background text-foreground shadow-sm"
            : "text-muted-foreground hover:text-foreground"
        )}
      >
        <Moon className="size-4" />
      </button>
    </div>
  );
}
