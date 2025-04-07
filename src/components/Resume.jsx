import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Globe } from "lucide-react";

export default function Resume() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-20">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800">Ganesh Saini</h1>
          <div className="flex justify-center space-x-4 text-sm mt-2 text-gray-600">
            <div className="flex items-center space-x-1"><Mail size={16} /> <span>ganeshsaini5486@gmail.com</span></div>
            <div className="flex items-center space-x-1"><Phone size={16} /> <span>9982885486</span></div>
          </div>
          <div className="flex justify-center space-x-4 text-sm text-blue-600 mt-1">
            <a href="https://www.linkedin.com/in/ganeshsaini-393741289/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1"><Linkedin size={16} /> <span>LinkedIn</span></a>
            <a href="https://ganeshsainiofficial.github.io/ganeshsaini-portfolio/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1"><Globe size={16} /> <span>Portfolio</span></a>
          </div>
        </div>

        {/* Summary */}
        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">Summary</h2>
            <p className="text-gray-700">
              Aspiring Front-End Developer currently pursuing BCA, passionate about creating interactive and responsive web applications. Proficient in modern frontend technologies and eager to explore and implement emerging frameworks. Strong foundation in HTML, CSS, JavaScript, and React.js, with a keen interest in UI/UX design and performance optimization.
            </p>
          </CardContent>
        </Card>

        {/* Skills */}
        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">Skills</h2>
            <ul className="grid grid-cols-2 gap-2 list-disc list-inside text-gray-700">
              <li>HTML5, CSS3, JavaScript (ES6+)</li>
              <li>React.js, Tailwind CSS, Bootstrap</li>
              <li>Git, GitHub</li>
              <li>Figma</li>
              <li>API Integration</li>
              <li>Responsive Design</li>
              <li>Cross-Browser Compatibility</li>
            </ul>
          </CardContent>
        </Card>

        {/* Education */}
        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">Education</h2>
            <p className="text-gray-700">BCA (General) | The ICFAI Tech University, Jaipur<br />Status: Pursuing (2nd Year)</p>
          </CardContent>
        </Card>

        {/* Certifications */}
        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">Certifications</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>RSCIT Certification (Government Certified)</li>
              <li>Tally Prime Certification</li>
            </ul>
          </CardContent>
        </Card>

        {/* Projects */}
        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">Projects</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li><strong>Portfolio Website:</strong> Built using React.js & Tailwind CSS with animations and responsive design.</li>
              <li><strong>To-Do List App:</strong> Created with React.js and local storage to manage tasks.</li>
              <li><strong>Weather App:</strong> Real-time weather data using OpenWeather API and React.js.</li>
            </ul>
          </CardContent>
        </Card>

        {/* Achievements & Soft Skills */}
        <Card>
          <CardContent className="p-4 space-y-4">
            <div>
              <h2 className="text-xl font-semibold mb-2">Achievements</h2>
              <ul className="list-disc list-inside text-gray-700">
                <li>NSS Volunteer in 12th Grade (Social initiatives)</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">Soft Skills</h2>
              <ul className="list-disc list-inside text-gray-700">
                <li>Problem-Solving</li>
                <li>Team Collaboration</li>
                <li>Attention to Detail</li>
                <li>Quick Learning</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Additional Info */}
        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">Additional Info</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Open to internships in Front-End Development</li>
              <li>Actively learning advanced JavaScript and React.js</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
