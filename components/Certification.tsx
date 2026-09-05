function Certification() {
  const certifications = [
    {
      title: 'React.js Certification',
      issuer: 'Your Certification Platform',
      date: '2025',
      description:
        'Completed certification covering React fundamentals, components, hooks, state management, and modern frontend development.',
      link: '#',
    },
    {
      title: 'JavaScript Certification',
      issuer: 'Your Certification Platform',
      date: '2025',
      description:
        'Demonstrated knowledge of JavaScript fundamentals, ES6+, asynchronous programming, and DOM manipulation.',
      link: '#',
    },
  ];

  return (
    <section
      id="certifications"
      className="relative overflow-hidden px-6 py-20"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-0 top-1/3 -z-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-[130px]" />

      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-10">
          <p className="mb-2 text-sm font-semibold tracking-[0.2em] text-blue-400">
            CERTIFICATIONS
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Certifications & Achievements
          </h2>

          <p className="mt-3 max-w-2xl text-base leading-7 text-gray-400">
            Certifications and achievements that highlight my continuous
            learning and technical growth.
          </p>
        </div>

        {/* Horizontal Scroll */}
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory">
            {certifications.map((cert) => (
              <article
                key={`${cert.title}-${cert.issuer}`}
                className="
                  group relative
                  flex min-h-[330px]
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
                {/* Glow */}
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
                  {/* Certificate Icon */}
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
                    🏆
                  </div>

                  {/* Date */}
                  <span
                    className="
                      rounded-full
                      border border-white/10
                      bg-black/30
                      px-3 py-1.5
                      text-xs text-gray-400
                      transition-all duration-300
                      group-hover:border-blue-500/30
                      group-hover:text-blue-300
                    "
                  >
                    {cert.date}
                  </span>
                </div>

                {/* Title */}
                <div className="relative mt-6">
                  <h3
                    className="
                      text-xl font-bold text-white
                      transition-colors duration-300
                      group-hover:text-blue-400
                    "
                  >
                    {cert.title}
                  </h3>

                  <p className="mt-2 text-sm font-medium text-blue-400/80">
                    {cert.issuer}
                  </p>
                </div>

                {/* Divider */}
                <div className="my-5 h-px bg-white/10" />

                {/* Description */}
                <p className="text-sm leading-6 text-gray-400">
                  {cert.description}
                </p>

                {/* Bottom */}
                <div className="mt-auto flex items-center justify-between gap-4 pt-6">
                  <div className="flex items-center gap-2">
                    <span className="h-1 w-8 rounded-full bg-blue-500 transition-all duration-500 group-hover:w-12 group-hover:bg-cyan-400" />

                    <span className="text-xs text-gray-600">
                      Verified Credential
                    </span>
                  </div>

                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      rounded-xl
                      border border-blue-500/20
                      bg-blue-500/10
                      px-3 py-2
                      text-xs font-medium
                      text-blue-400
                      transition-all duration-300
                      hover:border-blue-500/40
                      hover:bg-blue-500/20
                      hover:text-blue-300
                    "
                  >
                    View ↗
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Scroll hint */}
          <div className="mt-2 flex items-center justify-center gap-2 text-xs text-gray-600">
            <span>Scroll to explore certifications</span>
            <span className="text-blue-400">→</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certification;
