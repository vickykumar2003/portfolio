import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '@/data/project';

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
              slug={project.slug}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              github={project.github}
              demo={project.demo}
              image={project.image}
              feature={project.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
