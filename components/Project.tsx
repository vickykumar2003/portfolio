import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Portfolio Website',
    description:
      'A modern personal portfolio built to showcase my skills and projects.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/',
    demo: 'https://example.com/',
    image: '/projects/portfolio.webp',
  },
  {
    title: 'Task Management App',
    description:
      'A task management application for creating and organizing daily tasks.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/',
    demo: 'https://example.com/',
    image: '/projects/task.jpeg',
  },
  {
    title: 'Weather Application',
    description:
      'A weather application that displays current weather information.',
    technologies: ['React', 'API', 'JavaScript'],
    github: 'https://github.com/',
    demo: 'https://example.com/',
    image: '/projects/weather.jpeg',
  },
];

function Project() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-medium text-gray-400">PROJECTS</p>

        <h2 className="text-3xl font-bold sm:text-4xl">
          Some things I've built
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              github={project.github}
              demo={project.demo}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
