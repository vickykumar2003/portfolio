'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

/**
 * Site-wide motion layer. Everything is driven through data attributes and
 * event delegation so sections can stay Server Components and nothing re-renders:
 *  - [data-reveal]     fades/slides in once when scrolled into view
 *  - [data-stagger]    its children cascade in once scrolled into view
 *  - [data-spotlight]  receives --mx / --my for a cursor-following glow
 *  - [data-magnetic]   gently follows the pointer (fine pointers only)
 *  - [data-tilt]       receives --px / --py (-0.5…0.5) for 3D tilt + depth parallax
 *  - [data-cursor="x"] shows label "x" in the cursor ring
 */
export default function Interactions() {
  const pathname = usePathname();
  const cursorRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  // Scroll reveals — re-scan on every route change
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>(
      '[data-reveal]:not(.is-in), [data-stagger]:not(.is-in)',
    );
    if (document.documentElement.dataset.motion !== 'on') {
      targets.forEach((el) => el.classList.add('is-in'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add('is-in');
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.08 },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  // Pointer effects: spotlight, magnetic elements, custom cursor
  useEffect(() => {
    const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const cursor = cursorRef.current;
    const label = labelRef.current;
    const useCursor = finePointer && !reducedMotion && cursor && label;

    let frame = 0;
    let x = -100;
    let y = -100;
    let cx = x;
    let cy = y;
    let magnet: HTMLElement | null = null;
    let tilt: HTMLElement | null = null;

    const resetTilt = () => {
      tilt?.style.removeProperty('--px');
      tilt?.style.removeProperty('--py');
    };

    const tick = () => {
      // Ease the ring towards the pointer for a soft trailing feel
      cx += (x - cx) * 0.2;
      cy += (y - cy) * 0.2;
      if (cursor) cursor.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      frame = Math.abs(x - cx) + Math.abs(y - cy) > 0.1 ? requestAnimationFrame(tick) : 0;
    };

    const onMove = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') return;
      x = event.clientX;
      y = event.clientY;

      const target = event.target as Element | null;
      const spot = target?.closest<HTMLElement>('[data-spotlight]');
      if (spot) {
        const rect = spot.getBoundingClientRect();
        spot.style.setProperty('--mx', `${x - rect.left}px`);
        spot.style.setProperty('--my', `${y - rect.top}px`);
      }

      if (!finePointer || reducedMotion) return;

      const nextMagnet = target?.closest<HTMLElement>('[data-magnetic]') ?? null;
      if (magnet && magnet !== nextMagnet) magnet.style.transform = '';
      magnet = nextMagnet;
      if (magnet) {
        const rect = magnet.getBoundingClientRect();
        const dx = x - (rect.left + rect.width / 2);
        const dy = y - (rect.top + rect.height / 2);
        magnet.style.transform = `translate3d(${dx * 0.18}px, ${dy * 0.28}px, 0)`;
      }

      const nextTilt = target?.closest<HTMLElement>('[data-tilt]') ?? null;
      if (tilt !== nextTilt) resetTilt();
      tilt = nextTilt;
      if (tilt) {
        const rect = tilt.getBoundingClientRect();
        tilt.style.setProperty('--px', ((x - rect.left) / rect.width - 0.5).toFixed(3));
        tilt.style.setProperty('--py', ((y - rect.top) / rect.height - 0.5).toFixed(3));
      }

      if (useCursor) {
        cursor.dataset.visible = 'true';
        const labelled = target?.closest<HTMLElement>('[data-cursor]');
        if (labelled) {
          cursor.dataset.state = 'label';
          label.textContent = labelled.dataset.cursor ?? '';
        } else if (target?.closest('a, button, summary, label, input, textarea')) {
          cursor.dataset.state = 'link';
        } else {
          delete cursor.dataset.state;
        }
        if (!frame) frame = requestAnimationFrame(tick);
      }
    };

    const onLeave = () => {
      if (cursor) cursor.dataset.visible = 'false';
      if (magnet) magnet.style.transform = '';
      magnet = null;
      resetTilt();
      tilt = null;
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    document.documentElement.addEventListener('pointerleave', onLeave);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', onMove);
      document.documentElement.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  return (
    <div ref={cursorRef} className="cursor" aria-hidden="true">
      <span ref={labelRef} className="cursor-label" />
    </div>
  );
}
