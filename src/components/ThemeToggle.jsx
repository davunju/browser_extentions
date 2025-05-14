import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      root.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav>
      <div className="flex justify-between items-center p-3 ring ring-neutral-200 bg-white dark:bg-neutral-800 dark:ring-0 rounded-xl mb-5">
        {darkMode ? (
          <img src="/logo_white_text.svg" />
        ) : (
          <img src="/logo.svg" alt="" className="" />
        )}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-3 bg-neutral-100 dark:bg-neutral-700 cursor-pointer hover:bg-neutral-300 dark:hover:bg-neutral-700 hover:ring ring-neutral-400 rounded-lg focus:outline-1 focus:outline-offset-2 focus:outline-red-700"
        >
          {darkMode ? (
            <img src="/icon-sun.svg" />
          ) : (
            <img src="/icon-moon.svg" />
          )}
        </button>
      </div>
    </nav>
  );
}
