import React from 'react';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { ChipList } from './Chips';

interface Project {
  name: string;
  description: string[];
  technologies: string[];
  image: string;
  githubLink?: string;
  liveLink?: string;
}

const projects: Project[] = [
  {
    name: "Blog Platform",
    description: [
      "A simple blogging platform with essential CRUD functionality, allowing users to create, edit, delete, and view blog posts.",
      "Implemented an advanced analytics engine for tracking user engagement, popular posts, and trends in blog interactions.",
      "Added offline mode with seamless data synchronization, and integrated third-party APIs for enhanced user experience and content management."
    ],
    technologies: ["MongoDB", "Express", "React.js", "Node.js", "ClerkAuth"],
    image: "/homegame-project.jpg",
    githubLink: "https://github.com/AZWALUWU/Blog-Platform",
    liveLink: "https://aza-blog-app.vercel.app"
  },  
  {
    name: "Threads Clone",
    description: [
      "Built a Threads-inspired social media clone with core features like user authentication, post creation, and feed management.",
      "Developed a responsive and modern UI using React.js, and optimized backend services with Node.js and Express.",
      "Implemented real-time updates for posts and interactions using Socket.io for a seamless user experience."
    ],
    technologies: ["MongoDB", "Express", "React.js", "Node.js", "ClerkAuth"],
    image: "/cafe-loyalty-project.jpg",
    githubLink: "https://github.com/AZWALUWU/Thread-Clone",
    liveLink: "https://aza-thread-clone.vercel.app"
  },
  {
    name: "E-Commerce Apps",
    description: [
      "Built a feature-rich e-commerce application using the MERN stack with a focus on scalability and performance.",
      "Implemented a secure payment system using Stripe, enabling seamless transactions with support for multiple payment methods.",
      "Integrated Clerk for user authentication, providing a seamless login and account management experience.",
      "Designed advanced product search and filtering features, personalized recommendations, and a responsive user interface."
    ],
    technologies: ["MongoDB", "Express", "React.js", "Node.js", "Stripe API", "Clerk"],
    image: "/ecommerce-app-project.jpg",
    githubLink: "https://github.com/AZWALUWU/ECommerce-Mobile-Apps",
    liveLink: "https://aza-ecommerce.vercel.app"
  }  
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-gray-100">Projects</h2>
      <ul className="space-y-12">
        {projects.map((project, index) => (
          <li key={index} className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gray-600">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 mb-4 md:mb-0 md:mr-6">
                <Image 
                  src={project.image} 
                  alt={project.name} 
                  width={300} 
                  height={200} 
                  className="rounded-lg object-cover shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-semibold mb-3 text-gray-100">{project.name}</h3>
                <ul className="space-y-2 text-gray-300 mb-4">
                  {project.description.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start">
                      <span className="mr-2 mt-1.5 text-gray-500">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <ChipList items={project.technologies} category="frameworks" />
                <div className="flex space-x-4 mt-4">
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-white transition-colors duration-300">
                      <FaGithub className="mr-2" />
                      <span>View Code</span>
                    </a>
                  )}
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-white transition-colors duration-300">
                      <FaExternalLinkAlt className="mr-2" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;