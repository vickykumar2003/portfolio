import { experiences } from '@/data/experiences';
import SectionHeading, { Accent } from './SectionHeading';

export default function Experience() {
  return (
    <section id="experience" className="relative px-5 py-28 sm:px-6 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="02"
          label="Experience"
          title={
            <>
              Where I&apos;ve <Accent>worked &amp; trained.</Accent>
            </>
          }
          intro="Internships and hands-on training across full-stack development and web security. Select a role to see the details."
        />

        <ol className="relative">
          {/* Timeline rail + scroll-linked fill */}
          <span
            aria-hidden="true"
            className="absolute bottom-6 left-[0.6875rem] top-6 w-px bg-line md:left-[14.75rem]"
          >
            <span className="timeline-fill absolute inset-0 bg-linear-to-b from-accent via-accent/70 to-accent/10" />
          </span>

          {experiences.map((item, index) => (
            <li key={`${item.company}-${item.role}`} data-reveal style={{ transitionDelay: `${index * 60}ms` }}>
              <details
                className="exp group relative pb-4 pl-10 md:pl-0"
                open={index === 0}
              >
                <summary className="relative grid cursor-pointer gap-1 rounded-2xl py-5 outline-offset-4 md:grid-cols-[12rem_1fr] md:gap-10">
                  {/* Node */}
                  <span
                    aria-hidden="true"
                    className="absolute -left-10 top-[1.6rem] grid h-[1.375rem] w-[1.375rem] place-items-center rounded-full border border-line bg-ink md:left-[14.0625rem]"
                  >
                    <span className="h-2 w-2 rounded-full bg-faint transition-colors duration-500 in-[.is-in]:bg-accent" />
                  </span>

                  <span className="font-mono text-sm text-faint md:pt-1 md:text-right">{item.period}</span>

                  <span className="flex items-start justify-between gap-4 md:pl-10">
                    <span>
                      <span className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <span className="text-xl font-medium tracking-tight transition-colors group-hover:text-accent sm:text-2xl">
                          {item.role}
                        </span>
                        <span className="chip py-0.5 text-[0.68rem]">{item.type}</span>
                        {index === 0 && (
                          <span className="chip border-accent/30 py-0.5 text-[0.68rem] text-accent">Latest</span>
                        )}
                      </span>
                      <span className="mt-1 block text-muted">{item.company}</span>
                    </span>
                    <span
                      aria-hidden="true"
                      className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line text-muted transition-[transform,color,border-color] duration-500 ease-out-expo group-open:rotate-45 group-open:border-accent/40 group-open:text-accent group-hover:border-white/20"
                    >
                      +
                    </span>
                  </span>
                </summary>

                <div className="pb-6 md:pl-[17rem]">
                  <p className="max-w-2xl leading-7 text-muted">{item.description}</p>
                  <ul className="mt-5 grid max-w-2xl gap-2.5">
                    {item.achievements.map((achievement) => (
                      <li key={achievement} className="flex gap-3 text-sm leading-6 text-fg/85">
                        <span aria-hidden="true" className="mt-2.5 h-px w-3 shrink-0 bg-accent" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                  <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
                    {item.technologies.map((tech) => (
                      <li key={tech} className="chip hover:-translate-y-0.5 hover:border-accent/40 hover:text-fg">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </details>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
