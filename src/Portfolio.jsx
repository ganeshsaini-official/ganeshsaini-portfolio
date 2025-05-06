import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ScrollToTop from "./components/ScrollToTop";
import { Card } from "./components/ui/card";
import { Button } from "./components/ui/button";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const skills = [
  { 
    name: "HTML5", 
    img: process.env.PUBLIC_URL + "/skills/html.png" 
  },
  { 
    name: "CSS3", 
    img: process.env.PUBLIC_URL + "/skills/css.png" 
  },
  { 
    name: "JavaScript", 
    img: process.env.PUBLIC_URL + "/skills/js.png" 
  },
  { 
    name: "React", 
    img: process.env.PUBLIC_URL + "/skills/reacticon.png" 
  },
  { 
    name: "Tailwind", 
    img: process.env.PUBLIC_URL + "/skills/tailwind.jpg" 
  },
  { 
    name: "Bootstrap", 
    img: process.env.PUBLIC_URL + "/skills/bootstrapicon.png" 
  },
  { 
    name: "Git", 
    img: process.env.PUBLIC_URL + "/skills/giticon.png" 
  },
  { 
    name: "GitHub", 
    img: process.env.PUBLIC_URL + "/skills/github.png" 
  },
];

const projects = [
  { 
    title: "Spotify Clone",
    img: process.env.PUBLIC_URL + "/ProjectImg/spotifyIcon.png",
    link: "https://ganeshsaini-official.github.io/spotify-clone/",
    description: "Spotify web player clone with responsive design"
  },
  { 
    title: "Weather App", 
    img: process.env.PUBLIC_URL + "/ProjectImg/WeatherApp.png",
    link: "https://ganeshsaini-official.github.io/weather-app/",
    description: "Live weather using OpenWeatherMap API"
  },
  { 
    title: "Currency Converter ", 
    img: process.env.PUBLIC_URL + "/ProjectImg/CurrencyConverter.png",
    link: "https://ganeshsaini-official.github.io/Currency-Converter/",
    description: "A simple and responsive Currency Converter that allows users to quickly convert amounts between different currencies in real-time."
  },
  { 
    title: "Todo-List-App",
    img: process.env.PUBLIC_URL + "/ProjectImg/ToDo.png",
    link: "https://ganeshsaini-official.github.io/Todo-List-App/",
    description:"A simple and responsive To-Do List app built with React.js and TailwindCSS. It allows users to add, edit, delete, and mark tasks as completed, helping them stay organized and productive."
  },
  { 
    title: "The Ganesh Restaurant ", 
    img: process.env.PUBLIC_URL + "/ProjectImg/Restimg.png",
    link: " https://ganeshsaini-official.github.io/The-Ganesh-Restaurant/",
    description: " A responsive restaurant website built with pure JavaScript, HTML, and CSS, featuring a dynamic menu, interactive about section, and working contact form."
  }
];

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);
  
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const formClasses = "w-full px-4 py-2 rounded-lg border focus:outline-none bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white";

  // Image error handler
  const handleImageError = (e) => {
    e.target.style.display = 'none';
    console.error('Failed to load image:', e.target.src);
  };

  return (
    <main className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
      <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />

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
  <div className="flex flex-col items-center gap-4 mt-6">
    <a href="./GaneshResume.pdf" download>
      <Button>Download Resume</Button>
    </a>
    <div className="flex gap-6"> 
      <a 
        href="https://github.com/ganeshsaini-official" 
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 transition-colors"
      >
        <img 
          src={process.env.PUBLIC_URL + "/skills/github.png"} 
          alt="GitHub" 
          className="w-6 h-6" 
        />
        <span>GitHub Profile</span>
      </a>
      <a 
        href="https://www.linkedin.com/in/ganesh-saini-393741289/" 
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 transition-colors"
      >
        <img 
          src={process.env.PUBLIC_URL + "/skills/linkedin.png"} 
          alt="LinkedIn" 
          className="w-6 h-6" 
        />
        <span>LinkedIn Profile</span>
      </a>
    </div>
  </div>
</section>

        <section id="skills" className="py-10">
          <h2 className="text-3xl font-semibold mb-6 text-center">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {skills.map(({ name, img }) => (
              <Card
                key={name}
                className="p-4 text-center bg-gray-100 dark:bg-gray-800 flex flex-col items-center"
              >
                <motion.img 
                  src={img} 
                  alt={`${name} logo`}
                  className="w-16 h-16 object-contain mb-2"
                  onError={handleImageError}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring" }}
                />
                <span className="font-medium mt-2">{name}</span>
              </Card>
            ))}
          </div>
        </section>
  {/* Projects Section - Images should be in public/ProjectImg */}
        <section id="projects" className="py-10">
          <h2 className="text-3xl font-semibold mb-6 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map(({ title, img, link, description }) => (
              <Card key={title} className="p-4 bg-gray-100 dark:bg-gray-800">
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <motion.img
                    src={img}
                    alt={title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring" }}
                  />
                </a>
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="text-gray-400 mt-2">{description}</p>
                <Button variant="secondary" className="mt-4" asChild>
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    View Live
                  </a>
                </Button>
              </Card>
            ))}
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
            <Card className="p-6 bg-gray-100 dark:bg-gray-800">
              <h3 className="text-xl font-bold mb-2">Salesforce Workshop</h3>
              <p className="text-gray-400">
                Completed Salesforce Workshop by Learn with Softshala (April 2025)
              </p>
            </Card>
            <Card className="p-6 bg-gray-100 dark:bg-gray-800">
              <h3 className="text-xl font-bold mb-2">React Projects</h3>
              <p className="text-gray-400">
                Built multiple React projects including e-commerce UI and Weather App
              </p>
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
          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Message sent! 🚀");
            }}
          >
            <input type="text" placeholder="Your Name" required className={formClasses} />
            <input type="email" placeholder="Your Email" required className={formClasses} />
            <textarea rows="5" placeholder="Your Message" required className={formClasses} />
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