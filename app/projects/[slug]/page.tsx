import { notFound } from 'next/navigation';
import { projects } from '@/data/project';
import Image from 'next/image';
import Link from 'next/link';
import ProjectImageSlider from './ProjectImageSlider';

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] px-6 py-20 text-white">
      {/* Background glows */}
      <div className="pointer-events-none absolute left-1/4 top-20 -z-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[140px]" />

      <div className="pointer-events-none absolute right-0 top-[40%] -z-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Back button */}
        <Link
          href="/#projects"
          className="group inline-flex items-center gap-2 text-sm text-gray-500 transition-colors duration-300 hover:text-blue-400"
        >
          <span className="transition-transform duration-300 group-hover:-translate-x-1">
            ←
          </span>
          Back to Projects
        </Link>

        {/* Hero */}
        <div className="mt-10">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-blue-400">
              Project
            </span>

            <span className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs text-gray-400">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
              Completed
            </span>
          </div>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {project.title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            {project.description}
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-full bg-blue-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-400 hover:shadow-blue-500/40"
            >
              Live Demo
              <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </a>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-medium text-gray-300 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-blue-400"
            >
              GitHub ↗
            </a>
          </div>
        </div>

        {/* Project Image */}
        <div className="group relative mt-14">
          <div className="absolute -inset-4 rounded-3xl bg-blue-500/10 blur-2xl opacity-50 transition-opacity duration-500 group-hover:opacity-80" />

          <ProjectImageSlider images={project.images} title={project.title} />
        </div>

        {/* Tech Stack */}
        <section className="mt-16">
          <p className="text-sm font-semibold tracking-[0.2em] text-blue-400">
            TECHNOLOGIES
          </p>

          <h2 className="mt-2 text-2xl font-bold">Built with modern tools</h2>

          <div className="mt-6 flex flex-wrap gap-3">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-blue-400"
              >
                {technology}
              </span>
            ))}
          </div>
        </section>

        {/* Overview */}
        <section className="mt-20 grid gap-10 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] text-blue-400">
              OVERVIEW
            </p>

            <h2 className="mt-2 text-3xl font-bold">About this project</h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-gray-400">
              <p>
                This project was created to solve a real-world problem with a
                clean and intuitive digital experience. The main focus was to
                keep the interface simple while providing useful functionality
                for users.
              </p>

              <p>
                I worked on the complete frontend experience, including the
                layout, responsive design, reusable components, interactions and
                overall user experience.
              </p>

              <p>
                The application was designed with scalability and
                maintainability in mind, making it easier to add new features
                and improve the experience over time.
              </p>
            </div>
          </div>

          {/* Project Info */}
          <div className="h-fit rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
            <h3 className="text-lg font-semibold">Project Details</h3>

            <div className="mt-6 space-y-5">
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-600">
                  Role
                </p>
                <p className="mt-1 text-sm text-gray-300">Frontend Developer</p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-gray-600">
                  Type
                </p>
                <p className="mt-1 text-sm text-gray-300">Web Application</p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-gray-600">
                  Focus
                </p>
                <p className="mt-1 text-sm text-gray-300">
                  UI / UX & Performance
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-gray-600">
                  Status
                </p>
                <p className="mt-1 flex items-center gap-2 text-sm text-green-400">
                  <span className="h-2 w-2 rounded-full bg-green-400" />
                  Completed
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Challenge + Solution */}
        <section className="mt-20 grid gap-6 md:grid-cols-2">
          <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-blue-500/[0.04]">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-xl">
              🎯
            </div>

            <h2 className="text-xl font-semibold">The Challenge</h2>

            <p className="mt-4 leading-7 text-gray-400">
              The main challenge was creating an interface that could present
              information clearly without overwhelming the user. The experience
              needed to remain responsive and easy to use across different
              screen sizes.
            </p>
          </div>

          <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-cyan-500/30 hover:bg-cyan-500/[0.04]">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-xl">
              🚀
            </div>

            <h2 className="text-xl font-semibold">The Solution</h2>

            <p className="mt-4 leading-7 text-gray-400">
              I focused on a clean component-based architecture, responsive
              layouts and reusable UI elements. Subtle interactions and visual
              feedback were added to make the experience feel more engaging.
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="mt-20">
          <p className="text-sm font-semibold tracking-[0.2em] text-blue-400">
            FEATURES
          </p>

          <h2 className="mt-2 text-3xl font-bold">What I built</h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {project.features.map((feature, index) => (
              <div
                key={feature}
                className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-blue-500/[0.04]"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-sm text-blue-400">
                  {String(index + 1).padStart(2, '0')}
                </div>

                <p className="pt-1 text-sm leading-6 text-gray-400 transition-colors group-hover:text-gray-200">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Results */}
        <section className="mt-20 rounded-3xl border border-white/10 bg-gradient-to-br from-blue-500/[0.08] to-transparent p-8 sm:p-10">
          <p className="text-sm font-semibold tracking-[0.2em] text-blue-400">
            RESULTS
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            What this project demonstrates
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-gray-400">
            This project demonstrates my ability to take an idea from concept to
            a polished web experience while focusing on usability, responsive
            design, clean code and modern frontend development practices.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
              <p className="text-2xl font-bold text-white">100%</p>
              <p className="mt-1 text-sm text-gray-500">Responsive Design</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
              <p className="text-2xl font-bold text-white">Modern</p>
              <p className="mt-1 text-sm text-gray-500">UI Architecture</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
              <p className="text-2xl font-bold text-white">Clean</p>
              <p className="mt-1 text-sm text-gray-500">Component Structure</p>
            </div>
          </div>
        </section>

        {/* Bottom navigation */}
        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8">
          <Link
            href="/#projects"
            className="group text-sm text-gray-500 transition-colors hover:text-blue-400"
          >
            <span className="mr-2 transition-transform group-hover:-translate-x-1">
              ←
            </span>
            Back to all projects
          </Link>

          <div className="flex gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 px-5 py-2.5 text-sm text-gray-300 transition-all hover:border-blue-500/30 hover:text-blue-400"
            >
              GitHub ↗
            </a>

            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-blue-500 px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-blue-400 hover:shadow-lg hover:shadow-blue-500/20"
            >
              Live Demo ↗
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
