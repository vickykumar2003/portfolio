'use client';

import { experiences } from '@/data/experiences';
import React, { useEffect, useRef } from 'react';

export default function Experience() {
  const experienceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const container = experienceRef.current;

      if (!container) return;

      // Only handle wheel when mouse is inside experience slider
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

      // At beginning/end:
      // allow normal vertical page scrolling
    };

    window.addEventListener('wheel', handleWheel, {
      passive: false,
    });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <section id="experience" className="relative overflow-hidden px-6 py-24">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/4 top-1/3 -z-10 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[160px]" />

      <div className="pointer-events-none absolute right-0 top-0 -z-10 h-80 w-80 rounded-full bg-cyan-500/[0.04] blur-[140px]" />

      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="mb-12">
          <p className="mb-3 text-sm font-semibold tracking-[0.25em] text-blue-400">
            EXPERIENCE
          </p>

          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Where I've worked
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
                A look at my professional journey, responsibilities, and
                experience building modern web applications.
              </p>
            </div>

            {/* Experience count */}
            <div className="hidden shrink-0 md:block">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3 backdrop-blur-xl">
                <p className="text-xs uppercase tracking-wider text-gray-500">
                  Experience
                </p>

                <p className="mt-1 text-2xl font-bold text-white">
                  03<span className="text-blue-500">+</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Cards */}
        <div className="relative">
          <div
            ref={experienceRef}
            className="flex gap-6 overflow-x-auto overflow-y-hidden pb-8 scrollbar-hide"
          >
            {experiences.map((experience, index) => {
              const isCurrent = index === 0;

              return (
                <article
                  key={`${experience.company}-${experience.role}`}
                  className={`
        group relative
        flex min-h-[410px]
        w-[390px] min-w-[390px]
        shrink-0
        flex-col
        overflow-hidden rounded-3xl
        border
        p-7
        backdrop-blur-xl
        transition-all duration-500
        hover:-translate-y-2
        ${
          isCurrent
            ? `
              border-blue-500/40
              bg-gradient-to-br
              from-blue-500/[0.12]
              via-white/[0.04]
              to-cyan-500/[0.05]
              shadow-2xl
              shadow-blue-500/10
            `
            : `
              border-white/10
              bg-white/[0.03]
              hover:border-blue-500/30
              hover:bg-blue-500/[0.05]
              hover:shadow-2xl
              hover:shadow-blue-500/10
            `
        }
      `}
                >
                  {/* Featured glow */}
                  {isCurrent && (
                    <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-500/20 blur-[70px]" />
                  )}

                  {/* Top accent line */}
                  <div
                    className={`
                      absolute left-0 right-0 top-0 h-[2px]
                      ${
                        isCurrent
                          ? 'bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500'
                          : 'bg-blue-500/30'
                      }
                    `}
                  />

                  {/* Current badge */}
                  <div className="relative mb-6 flex items-center justify-between">
                    <span
                      className={`
                        inline-flex items-center gap-2 rounded-full
                        border px-3 py-1.5 text-[10px]
                        font-semibold uppercase tracking-wider
                        ${
                          isCurrent
                            ? 'border-blue-500/30 bg-blue-500/10 text-blue-300'
                            : 'border-white/10 bg-white/[0.03] text-gray-500'
                        }
                      `}
                    >
                      {isCurrent && (
                        <span className="relative flex h-2 w-2">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-400" />
                        </span>
                      )}

                      {isCurrent ? 'Current Role' : 'Experience'}
                    </span>

                    <span className="text-2xl font-bold text-white/10 transition-colors duration-500 group-hover:text-blue-500/20">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Role */}
                  <div className="relative">
                    <h3
                      className={`
                        text-2xl font-bold tracking-tight
                        ${isCurrent ? 'text-white' : 'text-gray-100'}
                      `}
                    >
                      {experience.role}
                    </h3>

                    <div className="mt-2 flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />

                      <p className="text-sm font-medium text-blue-300">
                        {experience.company}
                      </p>
                    </div>
                  </div>

                  {/* Date */}
                  <div className="relative mt-5">
                    <span
                      className={`
                        inline-block rounded-lg border
                        px-3 py-1.5 text-xs font-medium
                        ${
                          isCurrent
                            ? 'border-blue-500/20 bg-blue-500/10 text-blue-300'
                            : 'border-white/10 bg-black/20 text-gray-400'
                        }
                      `}
                    >
                      {experience.period}
                    </span>
                  </div>

                  {/* Divider */}
                  <div
                    className={`
                      my-6 h-px
                      ${isCurrent ? 'bg-blue-500/20' : 'bg-white/10'}
                    `}
                  />

                  {/* Description */}
                  <p className="relative text-sm leading-6 text-gray-400">
                    {experience.description}
                  </p>

                  {/* Achievements */}
                  <div className="relative mt-5 space-y-3">
                    {experience.achievements.map((achievement) => (
                      <div key={achievement} className="flex items-start gap-3">
                        <span
                          className={`
                            mt-0.5 flex h-5 w-5 shrink-0
                            items-center justify-center rounded-full
                            text-[10px] font-bold
                            transition-all duration-300
                            ${
                              isCurrent
                                ? 'bg-blue-500/15 text-blue-300 group-hover:bg-blue-500/25'
                                : 'bg-white/[0.05] text-blue-400 group-hover:bg-blue-500/15'
                            }
                          `}
                        >
                          ✓
                        </span>

                        <p className="text-sm leading-5 text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
                          {achievement}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Bottom */}
                  <div className="relative mt-auto flex items-center gap-3 pt-7">
                    <span
                      className={`
                        h-1 rounded-full transition-all duration-500
                        ${
                          isCurrent
                            ? 'w-14 bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:w-20'
                            : 'w-8 bg-blue-500 group-hover:w-14 group-hover:bg-cyan-400'
                        }
                      `}
                    />

                    <span className="text-[11px] uppercase tracking-wider text-gray-600">
                      {isCurrent
                        ? 'Currently working here'
                        : 'Professional Experience'}
                    </span>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Scroll hint */}
          <div className="mt-3 flex items-center justify-center gap-2 text-xs text-gray-600">
            <span>Scroll to explore experience</span>
            <span className="animate-pulse text-blue-400">→</span>
          </div>
        </div>
      </div>
    </section>
  );
}
