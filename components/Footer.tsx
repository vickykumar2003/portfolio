import Link from 'next/link';
import { navLinks, profile } from '@/data/profile';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line px-5 pt-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 sm:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <p className="text-lg font-medium tracking-tight">
              {profile.name}
              <span className="text-accent">.</span>
            </p>
            <p className="mt-2 max-w-xs text-sm leading-6 text-muted">
              {profile.role} · Building modern web experiences from {profile.location}.
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="eyebrow text-[0.68rem]">Navigate</p>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              {navLinks.map(({ id, label }) => (
                <li key={id}>
                  <Link href={`/#${id}`} className="link-draw text-muted transition-colors hover:text-fg">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="eyebrow text-[0.68rem]">Elsewhere</p>
            <ul className="mt-4 grid gap-2 text-sm">
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
                <a href={`mailto:${profile.email}`} className="link-draw text-muted transition-colors hover:text-fg">
                  Email ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col-reverse items-start justify-between gap-4 border-t border-line py-6 text-xs text-faint sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {profile.name}. Built with Next.js &amp; Tailwind CSS.
          </p>
          <a href="#" className="group inline-flex items-center gap-2 transition-colors hover:text-fg">
            Back to top
            <span aria-hidden="true" className="transition-transform duration-500 ease-out-expo group-hover:-translate-y-1">
              ↑
            </span>
          </a>
        </div>
      </div>

      {/* Oversized wordmark that rises into view */}
      <p
        aria-hidden="true"
        className="parallax pointer-events-none mx-auto max-w-6xl select-none bg-linear-to-b from-white/9 to-transparent bg-clip-text text-center text-[clamp(4rem,21vw,17rem)] font-semibold leading-[0.8] tracking-[-0.06em] text-transparent [--drift:2rem]"
      >
        {profile.shortName.toLowerCase()}
      </p>
    </footer>
  );
}
