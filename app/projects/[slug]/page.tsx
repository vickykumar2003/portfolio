import { notFound } from 'next/navigation';
import { projects } from '@/data/project';
import Image from 'next/image';
import Link from 'next/link';
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
    <main className="min-h-screen bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/#projects"
          className="text-sm text-gray-400 transition hover:text-white"
        >
          ← Back to Projects
        </Link>

        <div className="mt-10">
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-10">
          <p className="text-sm text-gray-400">PROJECT</p>

          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">
            {project.title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            {project.description}
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-white/10 px-4 py-2 text-sm"
            >
              {technology}
            </span>
          ))}
        </div>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold">Key Features</h2>

          <ul className="mt-6 space-y-3">
            {project.features.map((feature) => (
              <li key={feature} className="text-gray-400">
                ✓ {feature}
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-10 flex gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/10 px-5 py-3"
          >
            GitHub
          </a>

          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white px-5 py-3 text-black"
          >
            Live Demo
          </a>
        </div>
      </div>
    </main>
  );
}
