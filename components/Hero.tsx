import Image from 'next/image';
import { profile } from '@/data/profile';
import { skillGroups } from '@/data/skills';

// Everything except fundamentals, de-duplicated (TypeScript appears in two groups)
const stack = [
  ...new Set(
    skillGroups.filter((group) => group.title !== 'Core').flatMap((group) => group.skills.map((s) => s.name)),
  ),
];

export default function Hero() {
  const [first, last] = profile.name.split(' ');

  return (
    <section id="home" className="relative flex min-h-dvh flex-col justify-center overflow-hidden pt-28 sm:pt-32">
      <div className="px-5 sm:px-6">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.25fr_1fr] lg:gap-10">
          <div>
            <p
              className="anim-rise inline-flex items-center gap-2.5 rounded-full border border-line bg-white/3 py-1.5 pl-3 pr-4 text-xs text-muted [--d:100ms]"
            >
              <span className="status-dot" aria-hidden="true" />
              Available for opportunities · {profile.location}
            </p>

            <h1 className="mt-7 text-[clamp(3.4rem,11vw,7.5rem)] font-semibold leading-[0.92] tracking-[-0.045em]">
              <span className="line">
                <span className="[--d:200ms]">{first}</span>
              </span>
              <span className="line">
                <span className="[--d:300ms]">
                  {last}
                  <span className="font-display font-normal italic tracking-normal text-accent">.</span>
                </span>
              </span>
            </h1>

            <p
              className="anim-rise mt-6 max-w-xl text-2xl leading-snug tracking-tight text-fg sm:text-3xl [--d:500ms]"
            >
              {profile.role} building{' '}
              <em className="font-display text-[1.15em] font-normal text-accent">reliable</em> web
              products — from interface to API.
            </p>

            <p className="anim-rise mt-5 max-w-lg text-base leading-7 text-muted [--d:620ms]">
              I build modern, scalable and user-friendly web applications — responsive frontends,
              robust REST APIs and solid data layers with React, Next.js, Node.js and TypeScript.
            </p>

            <div className="anim-rise mt-9 flex flex-wrap items-center gap-3 [--d:740ms]">
              <a
                href="#projects"
                data-magnetic
                className="group inline-flex items-center gap-3 rounded-full bg-fg py-3 pl-6 pr-3 text-sm font-medium text-ink transition-transform duration-500 ease-out-expo"
              >
                View my work
                <span className="grid h-7 w-7 place-items-center rounded-full bg-ink text-fg transition-transform duration-500 ease-out-expo group-hover:rotate-[-45deg]">
                  →
                </span>
              </a>
              <a
                href="#contact"
                data-magnetic
                className="rounded-full border border-line px-6 py-3 text-sm font-medium text-fg transition-[transform,border-color,background-color] duration-500 ease-out-expo hover:border-white/25 hover:bg-white/4"
              >
                Let&apos;s talk
              </a>
            </div>

            <ul className="anim-fade mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm [--d:900ms]">
              {profile.socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-draw text-muted transition-colors hover:text-fg"
                  >
                    {social.label} ↗
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={profile.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-draw text-muted transition-colors hover:text-fg"
                >
                  Resume ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Visual: portrait inside orbiting rings with a floating code card */}
          <div className="anim-float-in relative mx-auto w-full max-w-[22rem] sm:max-w-sm lg:max-w-none [--d:450ms]">
            <div className="relative aspect-square">
              <div className="orbit absolute inset-0 rounded-full border border-dashed border-white/10" aria-hidden="true">
                <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_20px_4px_rgb(109_155_255/0.5)]" />
              </div>
              <div className="orbit-reverse absolute inset-[9%] rounded-full border border-white/6" aria-hidden="true">
                <span className="absolute bottom-[14%] right-[6%] h-1.5 w-1.5 rounded-full bg-fg/70" />
              </div>

              <div className="absolute inset-[17%] overflow-hidden rounded-full border border-line bg-surface">
                <Image
                  src={profile.photo}
                  alt={`Portrait of ${profile.name}`}
                  fill
                  preload
                  sizes="(max-width: 1024px) 70vw, 360px"
                  className="object-cover object-[50%_30%] grayscale-[35%] transition-[filter] duration-700 hover:grayscale-0"
                />
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-ink/60 via-transparent to-transparent" />
              </div>

              <div
                className="anim-float-in absolute -left-2 bottom-[6%] w-[15.5rem] rounded-2xl border border-line bg-ink/80 p-4 font-mono text-[0.7rem] leading-5 shadow-2xl backdrop-blur-xl sm:-left-6 [--d:900ms]"
                aria-hidden="true"
              >
                <div className="mb-2 flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-white/15" />
                  <span className="h-2 w-2 rounded-full bg-white/15" />
                  <span className="h-2 w-2 rounded-full bg-white/15" />
                  <span className="ml-auto text-faint">developer.ts</span>
                </div>
                <p>
                  <span className="text-[#c792ea]">const</span> <span className="text-accent">vicky</span> = {'{'}
                </p>
                <p className="pl-4">
                  <span className="text-faint">role:</span> <span className="text-[#c3e88d]">&apos;Full-Stack&apos;</span>,
                </p>
                <p className="pl-4">
                  <span className="text-faint">stack:</span> <span className="text-[#c3e88d]">&apos;MERN · Next.js&apos;</span>,
                </p>
                <p className="pl-4">
                  <span className="text-faint">based:</span> <span className="text-[#c3e88d]">&apos;{profile.location.split(',')[0]}&apos;</span>,
                </p>
                <p>{'}'}</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Tech marquee */}
      <div className="anim-fade relative mt-16 border-y border-line py-4 sm:mt-20 [--d:1100ms]">
        <p className="sr-only">Technologies: {stack.join(', ')}</p>
        <div
          aria-hidden="true"
          className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
        >
          <div className="marquee-track flex w-max gap-10 whitespace-nowrap">
            {[...stack, ...stack].map((tech, index) => (
              <span key={index} className="flex items-center gap-10 text-sm text-faint">
                {tech}
                <span className="text-accent/60">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
