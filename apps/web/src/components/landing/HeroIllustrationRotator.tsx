"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

import IllustrationFrame from "./IllustrationFrame";

interface HeroIllustrationRotatorProps {
  imageSrcs: string[];
  alt: string;
}

const ROTATION_INTERVAL_MS = 4000;

export default function HeroIllustrationRotator({
  imageSrcs,
  alt,
}: HeroIllustrationRotatorProps) {
  const safeImageSrcs = useMemo(
    () => (imageSrcs.length > 0 ? imageSrcs : ["/landing/YS-MC.png"]),
    [imageSrcs],
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const showControls = safeImageSrcs.length > 1;
  const currentIndex =
    safeImageSrcs.length > 0 ? activeIndex % safeImageSrcs.length : 0;

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);

    handleChange();
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }

    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || isPaused || !showControls) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % safeImageSrcs.length);
    }, ROTATION_INTERVAL_MS);

    return () => window.clearInterval(intervalId);
  }, [isPaused, prefersReducedMotion, safeImageSrcs.length, showControls]);

  if (prefersReducedMotion) {
    return (
      <IllustrationFrame src={safeImageSrcs[0]} alt={alt} />
    );
  }

  return (
    <div className="space-y-4">
      <div
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <IllustrationFrame>
          {safeImageSrcs.map((src, index) => (
            <Image
              key={src}
              src={src}
              alt={alt}
              fill
              sizes="(max-width: 1024px) 100vw, 720px"
              priority={index === 0}
              className={`object-cover transition-opacity duration-700 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </IllustrationFrame>
      </div>

      {showControls ? (
        <div className="flex items-center justify-center gap-2">
          {safeImageSrcs.map((_, index) => {
            const isActive = index === currentIndex;
            return (
              <button
                key={`slide-dot-${index}`}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Show illustration ${index + 1}`}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  isActive
                    ? "bg-[#9A7D69] opacity-80"
                    : "bg-[#CBB4A3] opacity-50 hover:opacity-70"
                }`}
              />
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
