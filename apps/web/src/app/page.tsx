import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";

const HERO_IMAGES = [
  "/landing/YS-FAA.png",
  "/landing/YS-FC.png",
  "/landing/YS-MA.png",
  "/landing/YS-MC.png",
  "/landing/YS_FA.png",
  "/landing/YS_MAA.png",
];

const noiseStyle = {
  backgroundImage:
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)' opacity='0.12'/%3E%3C/svg%3E\")",
};

interface HomePageProps {
  searchParams?: {
    minimal?: string;
  };
}

export default function Home({ searchParams }: HomePageProps) {
  const isMinimal = searchParams?.minimal === "1";

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#F7F1E7] text-[#1F1711]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-72 w-[48rem] -translate-x-1/2 rounded-full bg-white/70 blur-3xl" />
        <div className="absolute bottom-[-6rem] right-[-4rem] h-72 w-72 rounded-full bg-[#F8C6A6]/50 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.18] mix-blend-multiply"
          style={noiseStyle}
        />
      </div>
      {isMinimal ? (
        <div className="relative flex min-h-screen items-center justify-center px-6 text-center">
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[#1E1711] sm:text-5xl lg:text-6xl">
            Fix your budget in minutes.
          </h1>
        </div>
      ) : (
        <div className="relative pb-20">
          <Header />
          <Hero imageSrcs={HERO_IMAGES} />
        </div>
      )}
    </main>
  );
}
