import { Moon, Sun } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

interface ThemeToggleProps {
  className?: string;
}

export default function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`relative p-2.5 rounded-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-precision-accent focus:ring-opacity-50 touch-manipulation group ${className}`}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {/* Light mode icon */}
      <Sun
        className={`w-5 h-5 transition-all duration-300 ${
          theme === "light"
            ? "rotate-0 scale-100 text-yellow-500"
            : "rotate-90 scale-0 absolute top-2.5 left-2.5 text-gray-400"
        }`}
        aria-hidden="true"
      />

      {/* Dark mode icon */}
      <Moon
        className={`w-5 h-5 transition-all duration-300 ${
          theme === "dark"
            ? "rotate-0 scale-100 text-blue-400"
            : "-rotate-90 scale-0 absolute top-2.5 left-2.5 text-gray-400"
        }`}
        aria-hidden="true"
      />

      {/* Visual indicator background */}
      <span
        className={`absolute inset-0 rounded-lg transition-colors duration-300 -z-10 ${
          theme === "light"
            ? "bg-yellow-50 dark:bg-yellow-900/20"
            : "bg-blue-50 dark:bg-blue-900/20"
        } opacity-0 group-hover:opacity-100`}
      />
    </button>
  );
}
