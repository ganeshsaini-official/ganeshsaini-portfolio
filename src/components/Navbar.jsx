// src/components/Navbar.jsx
import { Button } from "./ui/button";

//  Step 1: Links ko ek const array bana lo
const links = ["About", "Skills", "Projects", "Achievements", "Testimonials", "Contact"];

export default function Navbar({ darkMode, toggleDarkMode }) {
  return (
    <nav className={`fixed top-0 left-0 w-full z-50 px-6 py-3 flex justify-between items-center glass ${darkMode ? "text-white" : "text-gray-900"}`}>
      <h1 className="text-xl font-bold">Ganesh Saini</h1>

      {/* Step 2: Links loop */}
      <div className="flex items-center gap-6">
        {links.map((section) => (
          <a
            key={section}
            href={`#${section.toLowerCase()}`}
            className="hover:underline"
          >
            {section}
          </a>
        ))}

        {/* Step 3: Toggle dark mode button */}
        <Button onClick={toggleDarkMode} className="ml-4">
          {darkMode ? "☀️" : "🌙"}
        </Button>
      </div>
    </nav>
  );
}
