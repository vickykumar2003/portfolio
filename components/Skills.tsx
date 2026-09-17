'use client';

import { skills } from '@/data/skills';
import { useEffect, useRef } from 'react';

export default function Skills() {
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const container = skillsRef.current;

      if (!container) return;

      // Only handle wheel when cursor is inside skills slider
      if (!container.contains(e.target as Node)) return;

      const maxScroll = container.scrollWidth - container.clientWidth;

      // No horizontal overflow
      if (maxScroll <= 0) return;

      const currentScroll = container.scrollLeft;

      const scrollingRight = e.deltaY > 0;
      const scrollingLeft = e.deltaY < 0;

      const canScrollRight = currentScroll < maxScroll;
      const canScrollLeft = currentScroll > 0;

      // Scroll horizontally if possible
      if (
        (scrollingRight && canScrollRight) ||
        (scrollingLeft && canScrollLeft)
      ) {
        e.preventDefault();

        container.scrollLeft += e.deltaY * 1.5;
      }

      // If we're at the beginning/end,
      // don't preventDefault → page scroll continues normally.
    };

    // Native listener with passive:false
    window.addEventListener('wheel', handleWheel, {
      passive: false,
    });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <section id="skills" className="relative px-6 py-24">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-0 top-1/2 -z-10 h-96 w-96 rounded-full bg-blue-500/10 blur-[140px]" />

      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-12">
          <p className="mb-2 text-sm font-semibold tracking-[0.2em] text-blue-400">
            SKILLS
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Technologies I work with
          </h2>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-400">
            Technologies and tools I use to turn ideas into modern, responsive
            and engaging digital experiences.
          </p>
        </div>

        {/* Horizontal Skills Scroll */}
        <div className="relative">
          <div
            ref={skillsRef}
            className="flex gap-5 overflow-x-auto overflow-y-hidden pb-6 scrollbar-hide"
          >
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="skill-card group relative min-w-[190px] shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/40 hover:bg-blue-500/[0.06] hover:shadow-xl hover:shadow-blue-500/10"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Hover glow */}
                <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-blue-500/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                {/* Logo */}
                <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-black/40 p-4 transition-all duration-500 group-hover:scale-110 group-hover:border-blue-500/30">
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className={`h-full w-full object-contain transition-transform duration-500 group-hover:rotate-3 ${
                      skill.name === 'Express.js' ||skill.name === 'GitHub' ? 'invert' : ''
                    }`}
                  />
                </div>

                {/* Name */}
                <h3 className="relative mt-6 whitespace-nowrap text-base font-semibold text-gray-200 transition-colors duration-300 group-hover:text-white">
                  {skill.name}
                </h3>

                {/* Accent */}
                <div className="mt-4 h-1 w-8 rounded-full bg-blue-500 transition-all duration-500 group-hover:w-14 group-hover:bg-cyan-400" />
              </div>
            ))}
          </div>

          {/* Scroll hint */}
          <div className="mt-3 flex items-center justify-center gap-2 text-xs text-gray-600">
            <span>Scroll to explore skills</span>
            <span className="animate-pulse text-blue-400">→</span>
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-10 text-center">
          <p className="text-sm text-gray-600">
            Always learning. Always building. Always improving. 🚀
          </p>
        </div>
      </div>
    </section>
  );
}
