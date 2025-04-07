import ScrollToTop from "./components/ScrollToTop";
import { Card } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <main
      className={`min-h-screen transition-all duration-500 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* Navbar */}
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      {/* Padding Top to avoid content under navbar */}
      <div className="pt-20 px-4">
        {/* Hero Section */}
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
          <a href="/ganeshResume.pdf" download>
            <Button className="mt-6">Download Resume</Button>
          </a>
        </section>

        {/* About Section */}
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

        {/* Skills Section */}
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
                className={`p-4 text-center ${
                  darkMode ? "bg-gray-800" : "bg-gray-100"
                }`}
              >
                {skill}
              </Card>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-10">
          <h2 className="text-3xl font-semibold mb-6 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card
              className={`p-4 ${darkMode ? "bg-gray-800" : "bg-gray-100"}`}
            >
              <h3 className="text-xl font-bold">Vegetable Store</h3>
              <p className="text-gray-400">
                React based sabzi shop UI with categories and filters.
              </p>
              <Button variant="secondary" className="mt-2">
                View Live
              </Button>
            </Card>
            <Card className={`p-4 ${darkMode ? "bg-gray-800" : "bg-gray-100"}`}>
  <h3 className="text-xl font-bold">Weather App</h3>
  <p className="text-gray-400">
    Live weather using OpenWeatherMap API.
  </p>
  <a
    href="http://localhost:5173/"
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

        {/* Achievements Section */}
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
            <Card className={`p-6 ${darkMode ? "bg-gray-800" : "bg-gray-100"}`}>
              <h3 className="text-xl font-bold mb-2">Salesforce Intern</h3>
              <p className="text-gray-400">Selected for Salesforce internship starting 13 April 2025.</p>
            </Card>
            <Card className={`p-6 ${darkMode ? "bg-gray-800" : "bg-gray-100"}`}>
              <h3 className="text-xl font-bold mb-2">React Projects</h3>
              <p className="text-gray-400">Built multiple projects including a Vegetable Store UI & Weather App.</p>
            </Card>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-10">
          <h2 className="text-3xl font-semibold mb-6 text-center">Testimonials</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card
              className={`p-4 italic ${
                darkMode ? "bg-gray-800" : "bg-gray-100"
              }`}
            >
              "Ganesh is a quick learner and a dedicated developer. He did an amazing job on our project."
              <p className="mt-2 font-semibold text-right">– Rahul Sir</p>
            </Card>
            <Card
              className={`p-4 italic ${
                darkMode ? "bg-gray-800" : "bg-gray-100"
              }`}
            >
              "I loved working with Ganesh, his React skills and positive attitude are top-notch!"
              <p className="mt-2 font-semibold text-right">– Priya Sharma</p>
            </Card>
          </div>
        </section>

{/* Contact Section */}
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
      className={`w-full px-4 py-2 rounded-lg border focus:outline-none ${
        darkMode
          ? "bg-gray-800 border-gray-700 text-white"
          : "bg-gray-100 border-gray-300 text-gray-900"
      }`}
    />
    <input
      type="email"
      placeholder="Your Email"
      required
      className={`w-full px-4 py-2 rounded-lg border focus:outline-none ${
        darkMode
          ? "bg-gray-800 border-gray-700 text-white"
          : "bg-gray-100 border-gray-300 text-gray-900"
      }`}
    />
    <textarea
      rows="5"
      placeholder="Your Message"
      required
      className={`w-full px-4 py-2 rounded-lg border focus:outline-none ${
        darkMode
          ? "bg-gray-800 border-gray-700 text-white"
          : "bg-gray-100 border-gray-300 text-gray-900"
      }`}
    ></textarea>
    <Button type="submit" className="w-full">
      Send Message
    </Button>
  </form>
</section>

        
        {/* Footer */}
        <Footer darkMode={darkMode} />
      </div>
      <ScrollToTop />
    </main>
  );
}
