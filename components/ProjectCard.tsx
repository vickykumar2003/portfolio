import Image from 'next/image';

type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
};

export default function ProjectCard({
  title,
  description,
  technologies,
  github,
  demo,
  image,
}: ProjectCardProps) {
  return (
    <article className="group rounded-2xl border border-white/10 p-6 transition hover:-translate-y-1 hover:border-white/20">
      <div className="relative mb-6 aspect-video overflow-hidden rounded-xl">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
        />
      </div>
      <h3 className="text-2xl font-semibold">{title}</h3>

      <p className="mt-4 leading-7 text-gray-400">{description}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full bg-white/5 px-3 py-1 text-sm text-gray-300"
          >
            {technology}
          </span>
        ))}
      </div>

      <div className="mt-8 flex gap-4">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium hover:underline"
        >
          GitHub →
        </a>

        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium hover:underline"
        >
          Live Demo →
        </a>
      </div>
    </article>
  );
}
