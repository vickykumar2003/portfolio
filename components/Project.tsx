'use client';

import React, { useEffect, useRef } from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '@/data/project';

function Project() {
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const container = projectsRef.current;

      if (!container) return;

      // Only handle wheel inside project slider
      if (!container.contains(e.target as Node)) return;

      const maxScroll = container.scrollWidth - container.clientWidth;

      // No horizontal overflow
      if (maxScroll <= 0) return;

      const currentScroll = container.scrollLeft;

      const scrollingRight = e.deltaY > 0;
      const scrollingLeft = e.deltaY < 0;

      const canScrollRight = currentScroll < maxScroll;
      const canScrollLeft = currentScroll > 0;

      // Convert vertical wheel → horizontal scroll
      if (
        (scrollingRight && canScrollRight) ||
        (scrollingLeft && canScrollLeft)
      ) {
        e.preventDefault();

        container.scrollLeft += e.deltaY * 1.5;
      }

      // At start/end:
      // don't preventDefault → normal page scrolling continues
    };

    window.addEventListener('wheel', handleWheel, {
      passive: false,
    });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <section id="projects" className="relative overflow-hidden px-6 py-24">
      {/* Background glow */}
      <div className="absolute right-0 top-1/3 -z-10 h-96 w-96 rounded-full bg-blue-500/10 blur-[140px]" />

      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-10">
          <p className="mb-2 text-sm font-semibold tracking-[0.2em] text-blue-400">
            PROJECTS
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Some things I've built
          </h2>

          <p className="mt-3 max-w-2xl text-lg leading-8 text-gray-400">
            A collection of projects where I turn ideas into functional, modern
            and engaging digital experiences.
          </p>
        </div>

        {/* Horizontal Projects */}
        <div className="relative">
          <div
            ref={projectsRef}
            className="flex gap-6 overflow-x-auto overflow-y-hidden pb-6 scrollbar-hide"
          >
            {projects.map((project) => (
              <div
                key={project.title}
                className="w-[320px] min-w-[320px] shrink-0"
              >
                <ProjectCard
                  slug={project.slug}
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                  github={project.github}
                  demo={project.demo}
                  image={project.image}
                  feature={project.features}
                />
              </div>
            ))}
          </div>

          {/* Scroll hint */}
          <div className="mt-2 flex items-center justify-center gap-2 text-xs text-gray-600">
            <span>Scroll to explore projects</span>
            <span className="animate-pulse text-blue-400">→</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
