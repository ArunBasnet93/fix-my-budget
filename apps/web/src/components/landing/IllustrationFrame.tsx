import Image from "next/image";
import type { ReactNode } from "react";

type IllustrationFrameProps =
  | {
      src: string;
      alt: string;
      children?: never;
    }
  | {
      children: ReactNode;
      src?: never;
      alt?: never;
    };

export default function IllustrationFrame(props: IllustrationFrameProps) {
  return (
    <div className="relative overflow-hidden rounded-[28px] bg-white shadow-[0_24px_60px_rgba(66,48,34,0.18)] ring-1 ring-black/5">
      <div className="relative aspect-[4/3] w-full">
        {"src" in props ? (
          <Image
            src={props.src}
            alt={props.alt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 720px"
            className="object-cover"
          />
        ) : (
          props.children
        )}
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-[#F7F1E7]" />
    </div>
  );
}
