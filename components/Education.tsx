'use client';

import { education } from '@/data/education';
import React, { useEffect, useRef } from 'react';

function Education() {
  const educationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const container = educationRef.current;

      if (!container) return;

      // Only handle wheel when mouse is inside education slider
      if (!container.contains(e.target as Node)) return;

      const maxScroll = container.scrollWidth - container.clientWidth;

      // No horizontal scrolling available
      if (maxScroll <= 0) return;

      const currentScroll = container.scrollLeft;

      const scrollingRight = e.deltaY > 0;
      const scrollingLeft = e.deltaY < 0;

      const canScrollRight = currentScroll < maxScroll;
      const canScrollLeft = currentScroll > 0;

      // Convert vertical mouse wheel to horizontal scroll
      if (
        (scrollingRight && canScrollRight) ||
        (scrollingLeft && canScrollLeft)
      ) {
        e.preventDefault();

        container.scrollLeft += e.deltaY * 1.5;
      }

      // At beginning/end, normal page scrolling continues
    };

    window.addEventListener('wheel', handleWheel, {
      passive: false,
    });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <section id="education" className="relative overflow-hidden px-6 py-20">
      {/* Background glow */}
      <div className="pointer-events-none absolute right-1/4 top-1/3 -z-10 h-80 w-80 rounded-full bg-blue-500/10 blur-[130px]" />

      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-10">
          <p className="mb-2 text-sm font-semibold tracking-[0.2em] text-blue-400">
            EDUCATION
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            My Education
          </h2>

          <p className="mt-3 max-w-2xl text-base leading-7 text-gray-400">
            My academic background and the foundation behind my technical
            skills.
          </p>
        </div>

        {/* Horizontal Scroll */}
        <div className="relative">
          <div
            ref={educationRef}
            className="flex gap-6 overflow-x-auto overflow-y-hidden pb-6 scrollbar-hide"
          >
            {education.map((item) => (
              <article
                key={`${item.institution}-${item.degree}`}
                className="
                  group relative
                  flex min-h-[320px]
                  w-[380px] min-w-[380px]
                  shrink-0
                  flex-col
                  overflow-hidden rounded-3xl
                  border border-white/10
                  bg-white/[0.03]
                  p-6
                  backdrop-blur-xl
                  transition-all duration-500
                  hover:-translate-y-2
                  hover:border-blue-500/40
                  hover:bg-blue-500/[0.04]
                  hover:shadow-2xl
                  hover:shadow-blue-500/10
                "
              >
                {/* Card glow */}
                <div
                  className="
                    pointer-events-none absolute
                    -right-16 -top-16
                    h-32 w-32 rounded-full
                    bg-blue-500/20
                    blur-3xl
                    opacity-0
                    transition-opacity duration-500
                    group-hover:opacity-100
                  "
                />

                {/* Top section */}
                <div className="relative flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div
                      className="
                        flex h-12 w-12 shrink-0
                        items-center justify-center
                        rounded-2xl
                        border border-blue-500/20
                        bg-blue-500/10
                        text-xl
                        transition-all duration-500
                        group-hover:scale-110
                        group-hover:border-blue-500/40
                        group-hover:bg-blue-500/20
                      "
                    >
                      {item.icon}
                    </div>

                    <div>
                      <h3 className="text-lg font-bold leading-6 text-white">
                        {item.degree}
                      </h3>

                      <p className="mt-1 text-sm font-medium text-blue-400">
                        {item.field}
                      </p>
                    </div>
                  </div>

                  {/* Period */}
                  <span
                    className="
                      shrink-0 rounded-full
                      border border-white/10
                      bg-black/30
                      px-3 py-1.5
                      text-xs text-gray-400
                      transition-all duration-300
                      group-hover:border-blue-500/30
                      group-hover:text-blue-300
                    "
                  >
                    {item.period}
                  </span>
                </div>

                {/* Divider */}
                <div className="my-5 h-px bg-white/10" />

                {/* Institution */}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-600">
                    Institution
                  </p>

                  <p className="mt-1 text-sm font-medium text-gray-300">
                    {item.institution}
                  </p>
                </div>

                {/* Description */}
                <p className="mt-5 text-sm leading-6 text-gray-400">
                  {item.description}
                </p>

                {/* Bottom accent */}
                <div className="mt-auto flex items-center gap-2 pt-6">
                  <span
                    className="
                      h-1 w-8 rounded-full
                      bg-blue-500
                      transition-all duration-500
                      group-hover:w-14
                      group-hover:bg-cyan-400
                    "
                  />

                  <span className="text-xs text-gray-600">
                    Academic Background
                  </span>
                </div>
              </article>
            ))}
          </div>

          {/* Scroll hint */}
          <div className="mt-2 flex items-center justify-center gap-2 text-xs text-gray-600">
            <span>Scroll to explore education</span>
            <span className="animate-pulse text-blue-400">→</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
