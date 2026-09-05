import Image from 'next/image';
import Link from 'next/link';

type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
  slug: string;
  feature: string[];
};

export default function ProjectCard({
  title,
  description,
  technologies,
  github,
  demo,
  image,
  slug,
}: ProjectCardProps) {
  return (
    <article
      className="
        group relative flex h-[500px] w-full flex-col
        overflow-hidden rounded-3xl
        border border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
        transition-all duration-500
        hover:-translate-y-2
        hover:border-blue-500/40
        hover:bg-white/[0.05]
        hover:shadow-2xl
        hover:shadow-blue-500/10
      "
    >
      {/* Card glow */}
      <div
        className="
          absolute -right-20 -top-20
          h-40 w-40 rounded-full
          bg-blue-500/20 blur-3xl
          opacity-0 transition-opacity duration-500
          group-hover:opacity-100
        "
      />

      {/* Project Image */}
      <Link
        href={`/projects/${slug}`}
        className="relative block h-[185px] shrink-0 overflow-hidden"
      >
        <Image
          src={image}
          alt={title}
          fill
          sizes="320px"
          className="
            object-cover
            transition-transform duration-700
            group-hover:scale-110
          "
        />

        {/* Image overlay */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-t from-black/80 via-black/20 to-transparent
            opacity-70
            transition-opacity duration-500
            group-hover:opacity-90
          "
        />

        {/* View project */}
        <div
          className="
            absolute inset-0 flex items-center justify-center
            opacity-0 transition-all duration-500
            group-hover:opacity-100
          "
        >
          <span
            className="
              rounded-full border border-white/20
              bg-black/60 px-5 py-2
              text-sm font-medium text-white
              backdrop-blur-md
              transition-transform duration-500
              group-hover:scale-100
              scale-90
            "
          >
            View Project →
          </span>
        </div>
      </Link>

      {/* Content */}
      <div className="relative flex flex-1 flex-col p-5">

        {/* Title */}
        <Link href={`/projects/${slug}`}>
          <h3
            className="
              line-clamp-1
              text-xl font-bold text-white
              transition-colors duration-300
              group-hover:text-blue-400
            "
          >
            {title}
          </h3>
        </Link>

        {/* Description */}
        <p
          className="
            mt-3 line-clamp-3
            min-h-[72px]
            text-sm leading-6 text-gray-400
          "
        >
          {description}
        </p>

        {/* Technologies */}
        <div className="mt-4 flex min-h-[58px] flex-wrap content-start gap-2 overflow-hidden">
          {technologies.slice(0, 4).map((technology) => (
            <span
              key={technology}
              className="
                rounded-full
                border border-white/10
                bg-white/[0.04]
                px-2.5 py-1
                text-xs text-gray-400
                transition-all duration-300
                group-hover:border-blue-500/20
                group-hover:text-blue-300
              "
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-auto flex gap-2 pt-4">

          <Link
            href={`/projects/${slug}`}
            className="
              flex-1 rounded-xl
              border border-white/10
              bg-white/[0.04]
              px-3 py-2.5
              text-center text-xs font-medium text-gray-300
              transition-all duration-300
              hover:border-blue-500/40
              hover:bg-blue-500/10
              hover:text-blue-400
            "
          >
            Details
          </Link>

          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex-1 rounded-xl
              border border-white/10
              bg-white/[0.04]
              px-3 py-2.5
              text-center text-xs font-medium text-gray-300
              transition-all duration-300
              hover:border-blue-500/40
              hover:bg-blue-500/10
              hover:text-blue-400
            "
          >
            GitHub
          </a>

          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex-1 rounded-xl
              bg-blue-500
              px-3 py-2.5
              text-center text-xs font-medium text-white
              transition-all duration-300
              hover:bg-blue-400
              hover:shadow-lg
              hover:shadow-blue-500/30
            "
          >
            Live Demo
          </a>

        </div>
      </div>
    </article>
  );
}