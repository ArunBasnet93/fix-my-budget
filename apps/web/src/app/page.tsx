"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const BG_IMAGES = [
  "/landing/YS-MC.png",
  "/landing/YS_FA.png",
  "/landing/YS_MAA.png",
  "/landing/YS-FAA.png",
  "/landing/YS-FC.png",
  "/landing/YS-MA.png",
];

const ROTATE_MS = 7000;

export default function Home() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setActive((i) => (i + 1) % BG_IMAGES.length);
    }, ROTATE_MS);
    return () => clearInterval(t);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background crossfade */}
      <div className="absolute inset-0">
        {BG_IMAGES.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt=""
            fill
            priority={i === 0}
            className={[
              "object-cover",
              "transition-opacity duration-700",
              i === active ? "opacity-100" : "opacity-0",
            ].join(" ")}
          />
        ))}

        {/* Readability overlay */}
        <div className="absolute inset-0 bg-black/35" />
      </div>

      {/* Buttons only */}
      <div className="relative flex min-h-screen items-start justify-end p-6">
        <div className="flex gap-3">
          <a
            href="#get-started"
            className="rounded-md bg-white px-4 py-2 text-sm font-medium text-slate-900 hover:bg-white/90"
          >
            Get started
          </a>

          <a
            href="#login"
            className="rounded-md border border-white/40 px-4 py-2 text-sm font-medium text-white hover:border-white/70"
          >
            Log in
          </a>
        </div>
      </div>

      {/* Optional: small selector dots (still only transitions-related) */}
      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2">
        <div className="flex items-center gap-2">
          {BG_IMAGES.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Switch illustration to ${i + 1}`}
              onClick={() => setActive(i)}
              className={[
                "h-2.5 w-2.5 rounded-full",
                "border border-white/60",
                i === active ? "bg-white" : "bg-white/20 hover:bg-white/35",
              ].join(" ")}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
