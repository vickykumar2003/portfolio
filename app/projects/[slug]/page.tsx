import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ProjectVisual from '@/components/ProjectVisual';
import { projects } from '@/data/project';

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return project ? { title: project.title, description: project.description } : {};
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const index = projects.findIndex((project) => project.slug === slug);

  if (index === -1) {
    notFound();
  }

  const project = projects[index];
  const next = projects[(index + 1) % projects.length];
  const links = [
    { label: 'Live demo', href: project.demo },
    { label: 'GitHub', href: project.github },
  ].filter((link): link is { label: string; href: string } => Boolean(link.href));

  return (
    <>
      <Navbar />
      <main className="px-5 pb-24 pt-32 sm:px-6 sm:pt-40">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/#projects"
            className="anim-fade group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-fg"
          >
            <span aria-hidden="true" className="transition-transform duration-500 ease-out-expo group-hover:-translate-x-1">
              ←
            </span>
            All projects
          </Link>

          <header className="mt-10 grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-end">
            <div>
              <p className="eyebrow anim-rise [--d:80ms]">
                <span className="text-accent">{String(index + 1).padStart(2, '0')}</span> — {project.tagline}
              </p>
              <h1 className="mt-5 text-[clamp(2.75rem,8vw,6rem)] font-semibold leading-[0.95] tracking-[-0.045em]">
                <span className="line">
                  <span className="[--d:150ms]">{project.title}</span>
                </span>
              </h1>
            </div>
            <div className="anim-rise [--d:300ms]">
              <p className="text-lg leading-8 text-muted">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {links.map((link, linkIndex) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-magnetic
                    className={`rounded-full px-5 py-2.5 text-sm font-medium transition-transform duration-500 ease-out-expo ${
                      linkIndex === 0 ? 'bg-fg text-ink' : 'border border-line text-fg hover:border-white/25'
                    }`}
                  >
                    {link.label} ↗
                  </a>
                ))}
                <Link
                  href="/#contact"
                  className="rounded-full border border-line px-5 py-2.5 text-sm font-medium text-fg transition-colors hover:border-white/25"
                >
                  Ask me about it
                </Link>
              </div>
            </div>
          </header>

          <div data-reveal="mock" data-tilt className="mock-host group mt-14">
            <div className="tilt-target overflow-hidden rounded-3xl border border-line">
              <ProjectVisual project={project} />
            </div>
          </div>

          <div className="mt-20 grid gap-14 lg:grid-cols-[1.4fr_1fr]">
            <div className="space-y-16">
              <section>
                <h2 data-reveal className="eyebrow">What I built</h2>
                <ol className="mt-6 border-t border-line">
                  {project.contributions.map((item, itemIndex) => (
                    <li
                      key={item}
                      data-reveal
                      style={{ transitionDelay: `${itemIndex * 70}ms` }}
                      className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-line py-5"
                    >
                      <span className="font-mono text-sm text-faint">{String(itemIndex + 1).padStart(2, '0')}</span>
                      <p className="text-lg leading-7 tracking-tight">{item}</p>
                    </li>
                  ))}
                </ol>
              </section>

              <section>
                <h2 data-reveal className="eyebrow">Key features</h2>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {project.features.map((feature, featureIndex) => (
                    <li key={feature} data-reveal style={{ transitionDelay: `${featureIndex * 60}ms` }}>
                      <div className="card flex h-full items-center gap-3 rounded-2xl p-5 text-sm text-fg/90">
                        <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: project.accent }} />
                        {feature}
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <aside data-reveal className="lg:sticky lg:top-28 lg:h-fit">
              <div className="card p-6">
                <h2 className="eyebrow">Tech stack</h2>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <li key={tech} className="chip text-sm text-fg/85">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>

          <Link
            href={`/projects/${next.slug}`}
            data-cursor="Next"
            className="group mt-28 block border-t border-line pt-10"
          >
            <span className="eyebrow">Next project</span>
            <span className="mt-4 flex items-center justify-between gap-6">
              <span className="text-[clamp(2rem,6vw,4.5rem)] font-semibold leading-none tracking-[-0.04em] transition-colors duration-500 group-hover:text-accent">
                {next.title}
              </span>
              <span
                aria-hidden="true"
                className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-line text-xl transition-[transform,background-color,color] duration-500 ease-out-expo group-hover:rotate-[-45deg] group-hover:bg-fg group-hover:text-ink sm:h-20 sm:w-20"
              >
                →
              </span>
            </span>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
