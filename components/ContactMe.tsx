'use client';

import { useState, type FormEvent } from 'react';
import { profile } from '@/data/profile';
import { Accent } from './SectionHeading';

const field =
  'w-full rounded-xl border border-line bg-ink/60 px-4 py-3 text-sm text-fg placeholder:text-faint outline-none transition-[border-color,box-shadow] duration-300 focus:border-accent/60 focus:shadow-[0_0_0_4px_rgb(109_155_255/0.12)]';

export default function ContactMe() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  // No backend: compose the message in the visitor's own email client
  const sendMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get('name') ?? '').trim();
    const subject = String(data.get('subject') ?? '').trim() || `Hello from ${name || 'your portfolio'}`;
    const body = `${String(data.get('message') ?? '').trim()}${name ? `\n\n— ${name}` : ''}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="relative overflow-hidden px-5 pb-24 pt-28 sm:px-6 sm:pt-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-24 -z-10 h-[30rem] w-[60rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[140px]"
      />

      <div className="mx-auto max-w-6xl">
        <p data-reveal className="eyebrow flex items-center gap-3">
          <span className="text-accent">05</span>
          <span className="h-px w-8 bg-line" aria-hidden="true" />
          Contact
        </p>

        <h2
          data-reveal
          className="mt-6 text-[clamp(3rem,9vw,7.5rem)] font-semibold leading-[0.95] tracking-[-0.05em] [--d:80ms]"
        >
          Let&apos;s build something <Accent>meaningful.</Accent>
        </h2>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div data-reveal className="[--d:120ms]">
            <p className="max-w-md text-lg leading-8 text-muted">
              Have a project in mind or an opportunity to discuss? Whether it&apos;s a role, a
              freelance project or just a hello — I&apos;d love to hear from you.
            </p>

            <div className="mt-10">
              <p className="eyebrow text-[0.68rem]">Email</p>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="link-draw break-all text-xl font-medium tracking-tight sm:text-2xl"
                >
                  {profile.email}
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="rounded-full border border-line px-3 py-1 text-xs text-muted transition-colors hover:border-white/20 hover:text-fg"
                >
                  <span aria-live="polite">{copied ? 'Copied ✓' : 'Copy'}</span>
                </button>
              </div>
            </div>

            <ul className="mt-10 border-t border-line">
              {profile.socials.map((social) => (
                <li key={social.label} className="border-b border-line">
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-4 py-5"
                  >
                    <span>
                      <span className="block text-lg font-medium transition-colors group-hover:text-accent">
                        {social.label}
                      </span>
                      <span className="text-sm text-faint">@{social.handle}</span>
                    </span>
                    <span
                      aria-hidden="true"
                      className="text-xl text-muted transition-transform duration-500 ease-out-expo group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-fg"
                    >
                      ↗
                    </span>
                  </a>
                </li>
              ))}
              <li className="border-b border-line">
                <a
                  href={profile.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-4 py-5"
                >
                  <span>
                    <span className="block text-lg font-medium transition-colors group-hover:text-accent">
                      Resume
                    </span>
                    <span className="text-sm text-faint">PDF</span>
                  </span>
                  <span
                    aria-hidden="true"
                    className="text-xl text-muted transition-transform duration-500 ease-out-expo group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-fg"
                  >
                    ↗
                  </span>
                </a>
              </li>
            </ul>

            <p className="mt-8 flex items-center gap-2.5 text-sm text-muted">
              <span className="status-dot" aria-hidden="true" />
              {profile.location} · open to full-time &amp; freelance opportunities
            </p>
          </div>

          <div data-reveal="scale" className="[--d:200ms]">
            <form onSubmit={sendMessage} data-spotlight className="card p-6 sm:p-8">
              <h3 className="text-xl font-medium tracking-tight">Send a message</h3>
              <p className="mt-1.5 text-sm text-muted">
                Opens your email app with the message ready to send.
              </p>

              <div className="mt-7 grid gap-5">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm text-fg/80">
                    Name
                  </label>
                  <input id="name" name="name" type="text" autoComplete="name" placeholder="Your name" className={field} />
                </div>
                <div>
                  <label htmlFor="subject" className="mb-2 block text-sm text-fg/80">
                    Subject
                  </label>
                  <input id="subject" name="subject" type="text" placeholder="Project inquiry" className={field} />
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm text-fg/80">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell me about your project or role…"
                    className={`${field} resize-none`}
                  />
                </div>
              </div>

              <button
                type="submit"
                data-magnetic
                className="group mt-7 inline-flex w-full items-center justify-center gap-3 rounded-full bg-fg py-3.5 text-sm font-medium text-ink transition-transform duration-500 ease-out-expo sm:w-auto sm:px-8"
              >
                Send message
                <span aria-hidden="true" className="transition-transform duration-500 ease-out-expo group-hover:translate-x-1">
                  →
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
