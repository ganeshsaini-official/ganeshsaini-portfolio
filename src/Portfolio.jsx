import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ScrollToTop from "./components/ScrollToTop";
import { Card } from "./components/ui/card";
import { Button } from "./components/ui/button";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <main className="min-h-screen transition-all duration-500 bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <div className="pt-20 px-4">
        <section className="text-center py-20">
          <motion.h1
            className="text-5xl font-bold"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hi, I'm Ganesh Saini 👋
          </motion.h1>
          <p className="mt-4 text-xl text-gray-400">
            Front-End Developer | React
          </p>
          <a href="./GaneshResume.pdf" download>
            <Button className="mt-6">Download Resume</Button>
          </a>
        </section>

        <section id="about" className="py-16 max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl font-semibold mb-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About Me
          </motion.h2>
          <p className="text-lg text-gray-400">
            I'm Ganesh Saini, Aspiring Front-End Developer currently pursuing BCA, passionate about creating interactive and responsive web applications. Proficient in modern front-end technologies and eager to explore and implement emerging frameworks. Strong foundation in HTML, CSS, JavaScript, and React.js, with a keen interest in UI/UX design and performance optimization.
          </p>
        </section>

        <section id="skills" className="py-10">
          <h2 className="text-3xl font-semibold mb-6 text-center">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              "HTML5",
              "CSS3",
              "JavaScript",
              "React",
              "Tailwind",
              "Bootstrap",
              "Git",
              "GitHub",
            ].map((skill) => (
              <Card
                key={skill}
                className="p-4 text-center bg-gray-100 dark:bg-gray-800"
              >
                {skill}
              </Card>
            ))}
          </div>
        </section>

        <section id="projects" className="py-10">
          <h2 className="text-3xl font-semibold mb-6 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-4 bg-gray-100 dark:bg-gray-800">
              <h3 className="text-xl font-bold">Spotify Clone</h3>
              <p className="text-gray-400">
              Just built a **Spotify Clone** as a personal project while learning HTML,CSS Or JavaScript!
              </p>
            <a href="https://ganeshsaini-official.github.io/spotify-clone/"
            target="_blank"
            rel="noopener noreferrer"
            >
               <Button variant="secondary" className="mt-2">
                View Live
              </Button>
            </a>
           
            </Card>

            <Card className="p-4 bg-gray-100 dark:bg-gray-800">
              <h3 className="text-xl font-bold">Weather App</h3>
              <p className="text-gray-400">
                Live weather using OpenWeatherMap API.
              </p>
              <a
                href="https://ganeshsaini-official.github.io/weather-app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="secondary" className="mt-2">
                  View Live
                </Button>
              </a>
            </Card>
          </div>
        </section>

        <section id="achievements" className="py-16 max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl font-semibold mb-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Achievements
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card className="p-6 bg-gray-100 dark:bg-gray-800">
              <h3 className="text-xl font-bold mb-2">Salesforce Workshop</h3>
              <p className="text-gray-400">
              I’ve successfully completed a Salesforce Workshop organized by Learn with Softshala from 13th April to 15th April 2025.
              </p>
            </Card>
            <Card className="p-6 bg-gray-100 dark:bg-gray-800">
              <h3 className="text-xl font-bold mb-2">React Projects</h3>
              <p className="text-gray-400">
                Built multiple projects including a Vegetable Store UI & Weather App.
              </p>
            </Card>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 py-16 max-w-2xl mx-auto text-center">
          <motion.h2
            className="text-3xl font-semibold mb-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Contact Me 📬
          </motion.h2>
          <p className="text-gray-400 mb-8">
            Feel free to reach out via this form!
          </p>
          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Message sent! 🚀");
            }}
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full px-4 py-2 rounded-lg border focus:outline-none bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-2 rounded-lg border focus:outline-none bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              required
              className="w-full px-4 py-2 rounded-lg border focus:outline-none bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white"
            ></textarea>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </section>

        <Footer darkMode={darkMode} />
      </div>

      <ScrollToTop />
    </main>
  );
}