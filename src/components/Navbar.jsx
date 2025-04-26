import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const links = ["About", "Skills", "Projects", "Achievements", "Contact", "Resume"];

export default function Navbar({ darkMode, toggleDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 px-6 py-3 flex justify-between items-center glass ${darkMode ? "text-white" : "text-gray-900"}`}>
      <h1 className="text-xl font-bold">Ganesh Saini</h1>

      <div className="hidden md:flex items-center gap-6">
        {links.map((section) => (
          <a
            key={section}
            href={`#${section.toLowerCase()}`}
            className="hover:underline"
          >
            {section}
          </a>
        ))}

        <Button onClick={toggleDarkMode} className="ml-4">
          {darkMode ? "☀️" : "🌙"}
        </Button>
      </div>

      <div className="md:hidden flex items-center gap-3">
        <Button onClick={toggleDarkMode}>
          {darkMode ? "☀️" : "🌙"}
        </Button>
        <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {isOpen && (
        <div className={`absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-md md:hidden px-6 py-4 transition-all duration-300 ${darkMode ? "text-white" : "text-gray-900"}`}>
          <div className="flex flex-col gap-4">
            {links.map((section) => (
              <a
                key={section}
                href={`#${section.toLowerCase()}`}
                className="hover:underline"
                onClick={() => setIsOpen(false)}
              >
                {section}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}