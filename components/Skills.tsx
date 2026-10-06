import Image from 'next/image';
import { skillGroups } from '@/data/skills';
import SectionHeading, { Accent } from './SectionHeading';

// Bento layout: wider cards for the larger groups
const spans = ['lg:col-span-2', '', '', 'lg:col-span-2', '', 'lg:col-span-2'];

export default function Skills() {
  return (
    <section id="skills" className="relative px-5 py-28 sm:px-6 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="03"
          label="Skills"
          title={
            <>
              The tools I <Accent>build with.</Accent>
            </>
          }
          intro="Technologies and tools I use to turn ideas into modern, responsive and reliable products — grouped by where they sit in the stack."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <div
              key={group.title}
              data-reveal
              style={{ transitionDelay: `${(index % 3) * 80}ms` }}
              className={spans[index] ?? ''}
            >
              <article data-spotlight className="card group/card flex h-full flex-col p-6 sm:p-7">
                <header className="flex items-baseline justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-medium tracking-tight">{group.title}</h3>
                    <p className="mt-1 text-sm text-muted">{group.blurb}</p>
                  </div>
                  <span className="font-mono text-xs text-faint">
                    {String(group.skills.length).padStart(2, '0')}
                  </span>
                </header>

                <ul className="mt-7 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="flex items-center gap-2.5 rounded-xl border border-line bg-ink/60 py-2 pl-2 pr-3.5 text-sm text-fg/90 transition-[transform,border-color,background-color] duration-500 ease-out-expo hover:-translate-y-1 hover:border-accent/40 hover:bg-accent-soft"
                    >
                      <span className="grid h-7 w-7 place-items-center rounded-lg bg-white/4">
                        {skill.logo ? (
                          <Image
                            src={skill.logo}
                            alt=""
                            width={18}
                            height={18}
                            unoptimized
                            loading="lazy"
                            className={`h-[18px] w-[18px] object-contain ${skill.invert ? 'invert' : ''}`}
                          />
                        ) : (
                          <span aria-hidden="true" className="font-display text-base italic text-accent">
                            {skill.name.charAt(0)}
                          </span>
                        )}
                      </span>
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          ))}
        </div>

        <p data-reveal className="mt-10 text-center font-display text-xl italic text-muted">
          Always learning. Always building. Always improving.
        </p>
      </div>
    </section>
  );
}
