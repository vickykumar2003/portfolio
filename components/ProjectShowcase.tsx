'use client';

import Link from 'next/link';
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';
import type { Project } from '@/data/project';

type ShowcaseItem = {
  project: Project;
  /** Server-rendered <ProjectVisual />, reused for the mobile card and the desktop stage */
  visual: ReactNode;
};

const pad = (n: number) => String(n).padStart(2, '0');

/**
 * Desktop: project details scroll on the left while a sticky stage on the right
 * wipes between each project's visual. Mobile: stacked cards, visual first.
 */
export default function ProjectShowcase({ items }: { items: ShowcaseItem[] }) {
  const [active, setActive] = useState(0);
  const listRef = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const steps = listRef.current?.querySelectorAll<HTMLElement>('[data-step]');
    if (!steps) return;
    // The step crossing the middle of the viewport is the active one
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(Number((entry.target as HTMLElement).dataset.step));
        }
      },
      { rootMargin: '-45% 0px -45% 0px' },
    );
    steps.forEach((step) => observer.observe(step));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="lg:grid lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-14">
      <ol ref={listRef}>
        {items.map(({ project, visual }, index) => {
          const href = `/projects/${project.slug}`;
          const isActive = index === active;
          const links = [
            { label: 'Live demo', href: project.demo },
            { label: 'GitHub', href: project.github },
          ].filter((link): link is { label: string; href: string } => Boolean(link.href));

          return (
            <li
              key={project.slug}
              data-step={index}
              className="border-t border-line py-14 first:border-t-0 first:pt-0 lg:flex lg:min-h-[86vh] lg:items-center lg:border-t-0 lg:py-0"
            >
              <article
                className={`group w-full transition-opacity duration-700 ${isActive ? '' : 'lg:opacity-30 lg:hover:opacity-70'}`}
              >
                {/* Mobile / tablet visual */}
                <Link
                  href={href}
                  tabIndex={-1}
                  aria-hidden="true"
                  data-reveal="mock"
                  className="mock-host mb-8 block overflow-hidden rounded-3xl border border-line lg:hidden"
                >
                  {visual}
                </Link>

                <p data-reveal className="eyebrow flex items-center gap-3">
                  <span className="text-accent">{pad(index + 1)}</span>
                  <span
                    aria-hidden="true"
                    className={`h-px bg-accent transition-[width] duration-700 ease-out-expo group-hover:w-14 ${isActive ? 'w-14' : 'w-6'}`}
                  />
                  {project.tagline}
                </p>

                <h3
                  data-reveal
                  className="mt-5 text-[clamp(2.1rem,4.2vw,3.4rem)] font-semibold leading-none tracking-[-0.04em] [--d:80ms]"
                >
                  <Link
                    href={href}
                    className="inline-block bg-[linear-gradient(currentColor,currentColor)] bg-[length:0_2px] bg-[position:0_100%] bg-no-repeat pb-1 transition-[background-size,transform] duration-700 ease-out-expo group-hover:translate-x-1 group-hover:bg-[length:100%_2px]"
                  >
                    {project.title}
                  </Link>
                </h3>

                <p data-reveal className="mt-5 max-w-md leading-7 text-muted [--d:160ms]">
                  {project.description}
                </p>

                <div data-reveal className="mt-6 [--d:220ms]">
                  <p className="eyebrow text-[0.65rem]">My contribution</p>
                  <ul className="mt-3 space-y-2">
                    {project.contributions.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-6 text-fg/80">
                        <span aria-hidden="true" className="mt-2.5 h-px w-3 shrink-0" style={{ background: project.accent }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <ul data-stagger aria-label="Technologies" className="mt-6 flex flex-wrap gap-1.5 [--d:280ms]">
                  {project.technologies.map((tech, techIndex) => (
                    <li
                      key={tech}
                      style={{ '--i': techIndex } as CSSProperties}
                      className="chip group-hover:border-white/15 group-hover:text-fg/90"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <div data-reveal className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm [--d:380ms]">
                  <Link href={href} className="group/cta inline-flex items-center gap-3 font-medium">
                    View project
                    <span
                      aria-hidden="true"
                      className="grid h-9 w-9 place-items-center rounded-full border border-line transition-[transform,background-color,color,border-color] duration-500 ease-out-expo group-hover:translate-x-1 group-hover/cta:border-fg group-hover/cta:bg-fg group-hover/cta:text-ink"
                    >
                      →
                    </span>
                  </Link>
                  {links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-draw text-muted transition-colors hover:text-fg"
                    >
                      {link.label} ↗
                    </a>
                  ))}
                </div>
              </article>
            </li>
          );
        })}
      </ol>

      {/* Desktop sticky stage */}
      <div className="hidden lg:block">
        <div className="sticky top-[max(6.5rem,calc(50vh-18rem))]">
          <div data-reveal="clip">
            <div data-tilt>
              <div className="tilt-target relative aspect-[10/7] overflow-hidden rounded-3xl border border-line bg-surface shadow-[0_40px_80px_-40px_rgb(0_0_0/0.9)]">
                {items.map(({ project, visual }, index) => (
                  <Link
                    key={project.slug}
                    href={`/projects/${project.slug}`}
                    tabIndex={-1}
                    aria-hidden="true"
                    data-cursor="View"
                    data-live={index === active}
                    className="mock-host group absolute inset-0 transition-[clip-path] duration-[1100ms] ease-out-expo"
                    style={{
                      zIndex: index,
                      clipPath: index <= active ? 'inset(0 0 0 0)' : 'inset(100% 0 0 0)',
                    }}
                  >
                    {visual}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-5 flex items-center justify-between gap-6 text-sm">
            <p className="font-mono text-faint" aria-live="polite">
              <span className="text-fg">{pad(active + 1)}</span> / {pad(items.length)}
              <span className="ml-3 text-muted">{items[active]?.project.title}</span>
            </p>
            <div className="flex gap-1.5" aria-hidden="true">
              {items.map(({ project }, index) => (
                <span
                  key={project.slug}
                  className={`h-[3px] rounded-full transition-all duration-500 ease-out-expo ${
                    index === active ? 'w-8 bg-accent' : 'w-3 bg-white/15'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
