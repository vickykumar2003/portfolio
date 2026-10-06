import Link from 'next/link';
import { projects } from '@/data/project';
import { profile } from '@/data/profile';
import ProjectShowcase from './ProjectShowcase';
import ProjectVisual from './ProjectVisual';
import SectionHeading, { Accent } from './SectionHeading';

export default function Project() {
  const featured = projects.filter((project) => project.featured);
  const more = projects.filter((project) => !project.featured);
  const github = profile.socials.find((social) => social.label === 'GitHub');

  return (
    <section id="projects" className="relative px-5 py-28 sm:px-6 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="04"
          label="Projects"
          title={
            <>
              Selected <Accent>work.</Accent>
            </>
          }
          intro="Products I've built — from an AI-powered hiring platform to full MERN applications. Images shown are placeholders until real screenshots are added."
          aside={
            <p data-reveal className="font-mono text-sm text-faint md:text-right">
              {String(projects.length).padStart(2, '0')} projects
            </p>
          }
        />

        <ProjectShowcase
          items={featured.map((project) => ({ project, visual: <ProjectVisual project={project} /> }))}
        />

        {/* More work */}
        <div className="mt-24 grid gap-5 border-t border-line pt-14 md:grid-cols-[1.4fr_1fr]">
          {more.map((project) => (
            <article key={project.slug} data-reveal className="card group overflow-hidden" data-spotlight>
              <div className="grid sm:grid-cols-[1.1fr_1fr] sm:items-center">
                <div data-reveal="mock" className="mock-host m-3 overflow-hidden rounded-2xl border border-line sm:mr-0">
                  <ProjectVisual project={project} />
                </div>
                <div className="flex flex-col p-6">
                  <p className="eyebrow text-[0.65rem]">More work · {project.tagline}</p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                    <Link href={`/projects/${project.slug}`} className="after:absolute after:inset-0 after:content-['']">
                      {project.title}
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{project.description}</p>
                  <ul className="mt-auto flex flex-wrap gap-1.5 pt-5" aria-label="Technologies">
                    {project.technologies.map((tech) => (
                      <li key={tech} className="chip">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}

          {github && (
            <a
              href={github.href}
              target="_blank"
              rel="noopener noreferrer"
              data-reveal
              data-spotlight
              className="card group flex flex-col justify-between p-8 [--d:100ms]"
            >
              <p className="eyebrow">Explore more</p>
              <div className="mt-12">
                <p className="text-3xl font-semibold tracking-tight">
                  More on <Accent>GitHub</Accent>
                </p>
                <p className="mt-2 text-sm text-muted">@{github.handle}</p>
              </div>
              <span
                aria-hidden="true"
                className="mt-8 grid h-12 w-12 place-items-center rounded-full border border-line text-lg transition-[transform,background-color,color] duration-500 ease-out-expo group-hover:-rotate-45 group-hover:bg-fg group-hover:text-ink"
              >
                →
              </span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
