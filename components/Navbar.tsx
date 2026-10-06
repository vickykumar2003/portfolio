'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { navLinks, profile } from '@/data/profile';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>('home');
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    // Active section = the one crossing the upper-middle band of the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: '-40% 0px -55% 0px' },
    );
    navLinks.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6 sm:pt-4">
      <nav
        aria-label="Primary"
        className={`relative mx-auto flex max-w-6xl items-center justify-between rounded-full border px-4 py-2.5 transition-[background-color,border-color,box-shadow,max-width] duration-500 ease-out-expo sm:px-5 ${
          scrolled || open
            ? 'max-w-5xl border-line bg-ink/75 shadow-[0_10px_40px_-10px_rgb(0_0_0/0.6)] backdrop-blur-xl'
            : 'border-transparent bg-transparent'
        }`}
      >
        <Link
          href="/#home"
          className="group flex items-center gap-2 font-medium tracking-tight"
          aria-label={`${profile.name} — home`}
        >
          <span className="grid h-8 w-8 place-items-center rounded-full bg-fg font-display text-lg italic text-ink transition-transform duration-500 ease-out-expo group-hover:rotate-[-12deg]">
            v
          </span>
          <span className="hidden sm:inline">
            {profile.shortName}
            <span className="text-accent">.</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.slice(1, -1).map(({ id, label }) => (
            <li key={id}>
              <Link
                href={`/#${id}`}
                aria-current={active === id ? 'true' : undefined}
                className={`relative rounded-full px-3.5 py-1.5 text-sm transition-colors duration-300 ${
                  active === id ? 'text-fg' : 'text-muted hover:text-fg'
                }`}
              >
                {active === id && (
                  <span className="absolute inset-0 -z-10 rounded-full bg-white/7" />
                )}
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full px-3.5 py-1.5 text-sm text-muted transition-colors hover:text-fg sm:inline-block"
          >
            Resume
          </a>
          <Link
            href="/#contact"
            data-magnetic
            className="hidden rounded-full bg-fg px-4 py-2 text-sm font-medium text-ink transition-[transform,background-color] duration-500 ease-out-expo hover:bg-white md:inline-block"
          >
            Let&apos;s talk
          </Link>

          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="relative grid h-10 w-10 place-items-center rounded-full border border-line md:hidden"
          >
            <span
              className={`absolute h-px w-4 bg-fg transition-transform duration-500 ease-out-expo ${
                open ? 'rotate-45' : '-translate-y-[3px]'
              }`}
            />
            <span
              className={`absolute h-px w-4 bg-fg transition-transform duration-500 ease-out-expo ${
                open ? '-rotate-45' : 'translate-y-[3px]'
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        inert={!open}
        className={`fixed inset-0 -z-10 flex flex-col justify-between bg-ink/95 px-6 pb-10 pt-28 backdrop-blur-2xl transition-[opacity,clip-path] duration-700 ease-out-expo md:hidden ${
          open
            ? 'opacity-100 [clip-path:circle(150%_at_calc(100%-2.5rem)_2rem)]'
            : 'pointer-events-none opacity-0 [clip-path:circle(0%_at_calc(100%-2.5rem)_2rem)]'
        }`}
      >
        <ul className="space-y-1">
          {navLinks.map(({ id, label }, index) => (
            <li
              key={id}
              className={`transition-[opacity,transform] duration-700 ease-out-expo ${
                open ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}
              style={{ transitionDelay: open ? `${120 + index * 50}ms` : '0ms' }}
            >
              <Link
                href={`/#${id}`}
                onClick={() => setOpen(false)}
                aria-current={active === id ? 'true' : undefined}
                className="flex items-baseline gap-4 py-2 text-4xl font-medium tracking-tight"
              >
                <span className="font-mono text-xs text-faint">0{index + 1}</span>
                <span className={active === id ? 'text-accent' : 'text-fg'}>{label}</span>
              </Link>
            </li>
          ))}
        </ul>

        <div
          className={`flex flex-wrap gap-x-6 gap-y-3 border-t border-line pt-6 text-sm text-muted transition-opacity delay-300 duration-700 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="hover:text-fg">
            Resume ↗
          </a>
          {profile.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-fg"
            >
              {social.label} ↗
            </a>
          ))}
        </div>
      </div>

      {/* Reading progress (CSS scroll-driven, hidden where unsupported) */}
      <div className="scroll-progress pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-accent" />
    </header>
  );
}
