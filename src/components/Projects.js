// src/components/Projects.js
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Vegetable Store App',
      description: 'React app to showcase sabzi categories with modern UI using Tailwind.',
      github: 'https://github.com/ganeshsaini-official/vegetable-store',
      live: 'https://ganeshsaini-official.github.io/vegetable-store',
    },
    {
      title: 'Todo Manager',
      description: 'A simple but elegant todo list manager built in React.',
      github: 'https://github.com/ganeshsaini-official/todo-manager',
      live: 'https://ganeshsaini-official.github.io/todo-manager',
    },
  ];

  return (
    <section className="bg-white py-12 px-4" id="projects">
      <h2 className="text-3xl font-bold text-center mb-10">💻 My Projects</h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-100 rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex gap-4">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:underline">
                <Github className="w-5 h-5 mr-1" /> Code
              </a>
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center text-green-600 hover:underline">
                <ExternalLink className="w-5 h-5 mr-1" /> Live
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
