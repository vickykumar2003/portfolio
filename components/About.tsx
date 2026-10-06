import { certifications } from '@/data/certification';
import { education } from '@/data/education';
import { experiences } from '@/data/experiences';
import { profile } from '@/data/profile';
import SectionHeading, { Accent } from './SectionHeading';

const principles = [
  { title: 'Modern development', text: 'Building responsive and scalable web applications.' },
  { title: 'Clean UI', text: 'Creating simple, intuitive and engaging interfaces.' },
  { title: 'Continuous learning', text: 'Always exploring better tools and technologies.' },
  { title: 'Problem solving', text: 'Turning real-world problems into practical solutions.' },
];

export default function About() {
  const latest = experiences[0];
  const degree = education[0];

  const facts = [
    { label: 'Based in', value: profile.location },
    { label: 'Latest role', value: `${latest.role}`, sub: `${latest.company} · ${latest.period}` },
    {
      label: 'Education',
      value: 'B.Tech, Computer Science & Engineering',
      sub: [degree.period, degree.score].filter(Boolean).join(' · '),
    },
    { label: 'Focus', value: 'Full-stack web development', sub: 'MERN · Next.js · TypeScript' },
  ];

  return (
    <section id="about" className="relative px-5 py-28 sm:px-6 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="01"
          label="About"
          title={
            <>
              More than just <Accent>a developer.</Accent>
            </>
          }
        />

        <div className="grid gap-12 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
          <div>
            <p data-reveal className="text-2xl leading-[1.45] tracking-tight text-fg sm:text-[1.75rem]">
              I enjoy turning ideas into{' '}
              <span className="text-accent">scalable, user-friendly web applications</span> with
              clean code, modern technologies and seamless frontend-to-backend experiences.
            </p>
            <p data-reveal className="mt-6 max-w-2xl text-base leading-8 text-muted [--d:100ms]">
              {profile.summary} My goal is to create experiences that are not only functional, but
              also simple, intuitive and enjoyable to use.
            </p>

            <ol className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
              {principles.map((item, index) => (
                <li key={item.title} className="group bg-ink transition-colors duration-500 hover:bg-surface">
                  <div data-reveal style={{ transitionDelay: `${index * 70}ms` }} className="p-6">
                    <span className="font-mono text-xs text-faint transition-colors group-hover:text-accent">
                      0{index + 1}
                    </span>
                    <h3 className="mt-3 font-medium">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-6 text-muted">{item.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <dl data-reveal="scale" data-spotlight className="card h-fit divide-y divide-line overflow-hidden px-6 [--d:120ms]">
            {facts.map((fact) => (
              <div key={fact.label} className="grid gap-1 py-5">
                <dt className="eyebrow text-[0.68rem]">{fact.label}</dt>
                <dd className="font-medium">{fact.value}</dd>
                {fact.sub && <dd className="text-sm text-muted">{fact.sub}</dd>}
              </div>
            ))}
            <div className="flex items-center gap-2.5 py-5 text-sm text-muted">
              <span className="status-dot" aria-hidden="true" />
              Open to full-time roles &amp; freelance work
            </div>
          </dl>
        </div>

        {/* Education + certifications */}
        <div className="mt-24 grid gap-14 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
          <div>
            <h3 data-reveal className="eyebrow">Education</h3>
            <ol className="mt-6 border-t border-line">
              {education.map((item, index) => (
                <li
                  key={`${item.institution}-${item.degree}`}
                  data-reveal
                  style={{ transitionDelay: `${index * 80}ms` }}
                  className="group grid gap-2 border-b border-line py-6 sm:grid-cols-[8.5rem_1fr] sm:gap-6"
                >
                  <span className="font-mono text-sm text-faint">{item.period}</span>
                  <div>
                    <p className="text-lg font-medium tracking-tight transition-colors group-hover:text-accent">
                      {item.degree}
                    </p>
                    <p className="mt-0.5 text-sm text-muted">
                      {item.field} · {item.institution}
                    </p>
                    <p className="mt-3 max-w-xl text-sm leading-6 text-faint">{item.description}</p>
                    {item.score && (
                      <span className="chip mt-3 border-accent/25 text-accent">{item.score}</span>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h3 data-reveal className="eyebrow">Certifications &amp; achievements</h3>
            <ul className="mt-6 grid gap-3">
              {certifications.map((cert, index) => {
                const body = (
                  <>
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-line font-display text-lg italic text-accent">
                      {cert.title.charAt(0)}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-medium">{cert.title}</span>
                      <span className="block text-sm text-muted">
                        {[cert.issuer, cert.date].filter(Boolean).join(' · ')}
                      </span>
                    </span>
                    {cert.link && <span className="text-muted transition-transform group-hover:translate-x-1">↗</span>}
                  </>
                );
                const className =
                  'card group flex items-center gap-4 rounded-2xl p-4 transition-[border-color,transform] duration-500 ease-out-expo hover:-translate-y-0.5 hover:border-white/15';

                return (
                  <li key={`${cert.title}-${cert.issuer}`} data-reveal style={{ transitionDelay: `${index * 80}ms` }}>
                    {cert.link ? (
                      <a href={cert.link} target="_blank" rel="noopener noreferrer" className={className}>
                        {body}
                      </a>
                    ) : (
                      <div className={className}>{body}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
