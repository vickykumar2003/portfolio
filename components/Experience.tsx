const experiences = [
  {
    role: 'Frontend Developer',
    company: 'Company Name',
    period: '2025 — Present',
    description:
      'Building modern web applications with a strong focus on responsive design, reusable components, and smooth user experiences.',
    achievements: [
      'Built responsive interfaces using React and Next.js',
      'Created reusable and scalable UI components',
      'Integrated REST APIs and managed frontend state',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'HJ Infotech',
    period: 'March 2026 — Present',
    description:
      'Developing modern web applications across frontend and backend while focusing on performance, usability, and maintainable code.',
    achievements: [
      'Developed responsive interfaces using React and Next.js',
      'Built reusable frontend components and layouts',
      'Worked with APIs, backend services, and application state',
    ],
  },
  {
    role: 'senior fullStack Developer',
    company: 'HJ Infotech',
    period: 'March 2026 — Present',
    description:
      'Developing modern web applications across frontend and backend while focusing on performance, usability, and maintainable code.',
    achievements: [
      'Developed responsive interfaces using React and Next.js',
      'Built reusable frontend components and layouts',
      'Worked with APIs, backend services, and application state',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden px-6 py-20">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/4 top-1/3 -z-10 h-80 w-80 rounded-full bg-blue-500/10 blur-[130px]" />

      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="mb-10">
          <p className="mb-2 text-sm font-semibold tracking-[0.2em] text-blue-400">
            EXPERIENCE
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Where I've worked
          </h2>

          <p className="mt-3 max-w-2xl text-base leading-7 text-gray-400">
            A look at my professional experience, responsibilities, and
            technologies I've worked with.
          </p>
        </div>

        {/* Horizontal Scroll */}
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory">
            {experiences.map((experience, index) => (
              <article
                key={`${experience.company}-${experience.role}`}
                className="
                  group relative
                  flex min-h-[390px]
                  w-[380px] min-w-[380px]
                  shrink-0 snap-start
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

                {/* Top */}
                <div className="relative flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                      {index === 0 ? 'Experience' : 'Current Role'}
                    </p>

                    <h3 className="mt-2 text-xl font-bold text-white">
                      {experience.role}
                    </h3>

                    <p className="mt-1 text-sm font-medium text-gray-400">
                      {experience.company}
                    </p>
                  </div>

                  {/* Date */}
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
                    {experience.period}
                  </span>
                </div>

                {/* Divider */}
                <div className="my-5 h-px bg-white/10" />

                {/* Description */}
                <p className="text-sm leading-6 text-gray-400">
                  {experience.description}
                </p>

                {/* Achievements */}
                <div className="mt-5 space-y-3">
                  {experience.achievements.map((achievement) => (
                    <div key={achievement} className="flex items-start gap-3">
                      <span
                        className="
                          mt-0.5 flex h-5 w-5 shrink-0
                          items-center justify-center
                          rounded-full
                          bg-blue-500/10
                          text-[10px]
                          text-blue-400
                          transition-all duration-300
                          group-hover:bg-blue-500/20
                        "
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
                <div className="mt-auto flex items-center gap-2 pt-6">
                  <span className="h-1 w-8 rounded-full bg-blue-500 transition-all duration-500 group-hover:w-14 group-hover:bg-cyan-400" />

                  <span className="text-xs text-gray-600">
                    Professional Experience
                  </span>
                </div>
              </article>
            ))}
          </div>

          {/* Scroll hint */}
          <div className="mt-2 flex items-center justify-center gap-2 text-xs text-gray-600">
            <span>Scroll to explore experience</span>
            <span className="text-blue-400">→</span>
          </div>
        </div>
      </div>
    </section>
  );
}
