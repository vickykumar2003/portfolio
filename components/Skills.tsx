const skills = [
  {
    name: 'HTML',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  },
  {
    name: 'CSS',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  },
  {
    name: 'JavaScript',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  {
    name: 'TypeScript',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  },
  {
    name: 'React',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    name: 'Next.js',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  },
  {
    name: 'Tailwind CSS',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
  },
  {
    name: 'Git',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  },
  {
    name: 'GitHub',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  },
  {
    name: 'MongoDB',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  },
  {
    name: 'Java',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  },
  {
    name: 'Python',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden px-6 py-24"
    >
      {/* Background glow */}
      <div className="absolute left-0 top-1/2 -z-10 h-96 w-96 rounded-full bg-blue-500/10 blur-[140px]" />

      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-12">
          <p className="mb-2 text-sm font-semibold tracking-[0.2em] text-blue-400">
            SKILLS
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Technologies I work with
          </h2>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-400">
            Technologies and tools I use to turn ideas into modern,
            responsive and engaging digital experiences.
          </p>
        </div>

        {/* Horizontal Skills Scroll */}
        <div className="relative">

          <div className="flex gap-5 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory">

            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="skill-card group relative min-w-[190px] shrink-0 snap-start overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/40 hover:bg-blue-500/[0.06] hover:shadow-xl hover:shadow-blue-500/10"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >

                {/* Hover glow */}
                <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-blue-500/20 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Logo */}
                <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-black/40 p-4 transition-all duration-500 group-hover:scale-110 group-hover:border-blue-500/30">
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:rotate-3"
                  />
                </div>

                {/* Name */}
                <h3 className="relative mt-6 whitespace-nowrap text-base font-semibold text-gray-200 transition-colors duration-300 group-hover:text-white">
                  {skill.name}
                </h3>

                {/* Accent */}
                <div className="mt-4 h-1 w-8 rounded-full bg-blue-500 transition-all duration-500 group-hover:w-14 group-hover:bg-cyan-400" />

              </div>
            ))}

          </div>

          {/* Scroll hint */}
          <div className="mt-3 flex items-center justify-center gap-2 text-xs text-gray-600">
            <span>Scroll to explore skills</span>
            <span className="animate-pulse text-blue-400">→</span>
          </div>

        </div>

        {/* Bottom statement */}
        <div className="mt-10 text-center">
          <p className="text-sm text-gray-600">
            Always learning. Always building. Always improving. 🚀
          </p>
        </div>

      </div>
    </section>
  );
}