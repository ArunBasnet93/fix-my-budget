import HeroIllustrationRotator from "./HeroIllustrationRotator";

interface HeroProps {
  imageSrcs: string[];
}

export default function Hero({ imageSrcs }: HeroProps) {
  return (
    <section id="get-started" className="mx-auto w-full max-w-7xl px-6 pb-20 pt-16 sm:pt-20 lg:pt-24">
      <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="max-w-xl space-y-6">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#9A7D69]">
              Personal finance made simple
            </p>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[#1E1711] sm:text-5xl lg:text-6xl">
              Fix your budget in minutes.
            </h1>
            <p className="text-lg leading-relaxed text-[#5C4A3E] sm:text-xl">
              Track spending, plan ahead, and stay on top of bills
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#get-started"
              className="rounded-full bg-[#F57A2B] px-6 py-3 text-base font-semibold text-white shadow-[0_16px_30px_rgba(245,122,43,0.35)] transition hover:bg-[#E96C1F]"
            >
              Get started
            </a>
            <a
              id="login"
              href="#login"
              className="rounded-full border border-[#E7C2A6] bg-white/60 px-6 py-3 text-base font-semibold text-[#7B4421] shadow-[0_10px_25px_rgba(60,40,28,0.08)] transition hover:border-[#D2A17D]"
            >
              Log in
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-[#7B6759]">
            <span className="rounded-full bg-white/70 px-3 py-1 shadow-[0_6px_16px_rgba(60,40,28,0.08)]">
              2-minute setup
            </span>
            <span className="rounded-full bg-white/70 px-3 py-1 shadow-[0_6px_16px_rgba(60,40,28,0.08)]">
              No spreadsheets
            </span>
          </div>
        </div>

        <div className="w-full lg:justify-self-end lg:max-w-[44rem]">
          <HeroIllustrationRotator
            imageSrcs={imageSrcs}
            alt="Budget tracking dashboard"
          />
        </div>
      </div>
    </section>
  );
}
