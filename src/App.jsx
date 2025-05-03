import { useState } from "react";
import ThemeToggle from "./components/ThemeToggle";

export default function App() {
  const details = [
    {
      id: 1,
      logo: "/logo-devlens.svg",
      name: "DevLens",
      description:
        "Quickly inspect page layouts and visualize element boundaries.",
      isActive: true,
    },
    {
      id: 2,
      logo: "/logo-style-spy.svg",
      name: "StyleSpy",
      description: "Instantly analyze and copy CSS from any webpage element.",
      isActive: true,
    },
    {
      id: 3,
      logo: "/logo-speed-boost.svg",
      name: "SpeedBoost",
      description:
        "Optimizes browser resource usage to accelerate page loading.",
      isActive: false,
    },
    {
      id: 4,
      logo: "/logo-json-wizard.svg",
      name: "JSONWizard",
      description:
        "Formats, validates, and prettifies JSON responses in-browser.",
      isActive: true,
    },
    {
      id: 5,
      logo: "/logo-tab-master-pro.svg",
      name: "TabMaster Pro",
      description: "Organizes browser tabs into groups and sessions.",
      isActive: true,
    },
    {
      id: 6,
      logo: "/logo-viewport-buddy.svg",
      name: "ViewportBuddy",
      description:
        "Simulates various screen resolutions directly within the browser.",
      isActive: false,
    },
    {
      id: 7,
      logo: "/logo-markup-notes.svg",
      name: "Markup Notes",
      description:
        "Enable annotation and notes directly onto webpages for collaborative debbuging.",
      isActive: true,
    },
    {
      id: 8,
      logo: "/logo-grid-guides.svg",
      name: "GridGuides",
      description:
        "Overlay customizable grids and alignment guides on any webpage.",
      isActive: false,
    },
    {
      id: 9,
      logo: "/logo-palette-picker.svg",
      name: "Palette Picker",
      description: "Instantly extracts color palettes from any webpage.",
      isActive: true,
    },
    {
      id: 10,
      logo: "/logo-link-checker.svg",
      name: "LinkChecker",
      description: "Scans and highlights broken links on any page.",
      isActive: true,
    },
    {
      id: 11,
      logo: "/logo-dom-snapshot.svg",
      name: "DOM Snapshot",
      description: "Capture and export DOM structures quickly.",
      isActive: false,
    },
    {
      id: 12,
      logo: "/logo-console-plus.svg",
      name: "ConsolePlus",
      description:
        "Enhanced developer console with advanced filtering and logging.",
      isActive: true,
    },
  ];

  const [data, setData] = useState(details);

  const removeExt = (id) => {
    setData((prev) => prev.filter((item) => item.id !== id));
  };

  const displayAll = () => {
    window.location.reload();
  };

  const displayActive = () => {
    setData((prev) => prev.filter((item) => item.isActive));
  };

  const displayInactive = () => {
    setData((prev) => prev.filter((item) => item.isActive === false));
  };

  return (
    <main className="w-full max-w-7xl mx-auto p-6">
      <div className="flex justify-between items-center p-3 ring ring-neutral-200 bg-white dark:bg-neutral-800 dark:ring-0 rounded-xl mb-5">
        <img src="/logo.svg" alt="" className="" />
        <ThemeToggle />
      </div>

      <div className="flex md:flex-row flex-col gap-5 justify-between items-center mt-12 mb-8">
        <h1 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100">
          Extentions List
        </h1>
        <div className="flex justify-between gap-5 items-center">
          <button
            onClick={() => displayAll()}
            className="bg-red-700 dark:bg-red-400 dark:text-neutral-900 dark:ring-0 text-white font-semibold py-2 px-5 ring ring-neutral-200 rounded-full cursor-pointer"
          >
            All
          </button>
          <button
            onClick={() => displayActive()}
            className="bg-white dark:bg-neutral-800 dark:ring-neutral-600 dark:text-neutral-200 font-semibold py-2 px-5 ring-1 ring-neutral-200 rounded-full cursor-pointer"
          >
            Active
          </button>
          <button
            onClick={() => displayInactive()}
            className="bg-white dark:bg-neutral-800 dark:ring-neutral-600 dark:text-neutral-200 font-semibold py-2 px-5 ring-1 ring-neutral-200 rounded-full cursor-pointer"
          >
            Inactive
          </button>
        </div>
      </div>

      <div className="">
        <ul className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-3">
          {data.map((detail) => (
            <div className="rounded-xl ring ring-neutral-200 dark:ring-neutral-600 dark:bg-neutral-800 shadow-md bg-white p-3 h-44 flex justify-between flex-col">
              <li key={detail.id} className="flex gap-5 items-start">
                <img src={detail.logo} alt="" className="size-12" />
                <div>
                  <h1 className="mb-1 font-bold text-neutral-900 dark:text-neutral-200">
                    {detail.name}
                  </h1>
                  <p className="text-neutral-500 dark:text-neutral-300">
                    {detail.description}
                  </p>
                </div>
              </li>
              <div className="flex justify-between items-center cursor-pointer">
                <button
                  onClick={() => removeExt(detail.id)}
                  className="ring ring-inset dark:text-neutral-200 ring-neutral-300 dark:ring-neutral-600 px-2 py-1 rounded-2xl text-sm cursor-pointer hover:bg-red-700 hover:text-neutral-200"
                >
                  Remove
                </button>
                {detail.isActive ? (
                  <img className="size-8" src="/toggle-on-solid.svg" />
                ) : (
                  <img className="size-8" src="/toggle-off-solid.svg" />
                )}
              </div>
            </div>
          ))}
        </ul>
      </div>
    </main>
  );
}
