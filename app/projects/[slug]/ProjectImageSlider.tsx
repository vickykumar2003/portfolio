'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

type ProjectImageSliderProps = {
  images: string[];
  title: string;
};

export default function ProjectImageSlider({
  images,
  title,
}: ProjectImageSliderProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  if (!images.length) return null;

  return (
    <div className="group relative mt-14">
      {/* Glow */}
      <div className="absolute -inset-4 rounded-3xl bg-blue-500/10 blur-2xl opacity-50 transition-opacity duration-500 group-hover:opacity-80" />

      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-2 shadow-2xl shadow-blue-500/10">
        <div className="relative aspect-video overflow-hidden rounded-2xl">
          {images.map((image, index) => (
            <Image
              key={image}
              src={image}
              alt={`${title} screenshot ${index + 1}`}
              fill
              priority={index === 0}
              sizes="(max-width: 768px) 100vw, 1200px"
              className={`object-cover transition-all duration-1000 ${
                current === index
                  ? 'scale-100 opacity-100'
                  : 'scale-105 opacity-0'
              }`}
            />
          ))}

          {/* Gradient */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

          {/* Dots */}
          {images.length > 1 && (
            <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  aria-label={`Show image ${index + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    current === index
                      ? 'w-6 bg-blue-400'
                      : 'w-2 bg-white/40 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
