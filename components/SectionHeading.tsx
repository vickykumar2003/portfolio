import type { ReactNode } from 'react';

type SectionHeadingProps = {
  index: string;
  label: string;
  title: ReactNode;
  intro?: string;
  aside?: ReactNode;
};

export default function SectionHeading({ index, label, title, intro, aside }: SectionHeadingProps) {
  return (
    <div className="mb-14 grid gap-6 sm:mb-20 md:grid-cols-[1fr_auto] md:items-end">
      <div>
        <p data-reveal className="eyebrow flex items-center gap-3">
          <span className="text-accent">{index}</span>
          <span className="h-px w-8 bg-line" aria-hidden="true" />
          {label}
        </p>
        <h2
          data-reveal
          className="mt-5 max-w-3xl text-[clamp(2.4rem,6vw,4.5rem)] font-semibold leading-[1] tracking-[-0.04em] [--d:80ms]"
        >
          {title}
        </h2>
        {intro && (
          <p data-reveal className="mt-6 max-w-xl text-base leading-7 text-muted sm:text-lg [--d:160ms]">
            {intro}
          </p>
        )}
      </div>
      {aside}
    </div>
  );
}

/** Serif italic accent used inside section titles */
export function Accent({ children }: { children: ReactNode }) {
  return <em className="font-display font-normal tracking-normal text-accent">{children}</em>;
}
