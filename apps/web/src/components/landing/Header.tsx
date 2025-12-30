import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-4 z-50 px-4">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between rounded-full bg-[#F9F4EE]/90 px-6 py-3 shadow-[0_10px_30px_rgba(70,50,35,0.12)] ring-1 ring-black/5 backdrop-blur">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FDE7D6] shadow-[inset_0_0_0_2px_rgba(178,90,44,0.15)]">
            <svg
              width="26"
              height="26"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <circle cx="24" cy="26" r="14" fill="#F7B58B" stroke="#B25A2C" strokeWidth="2" />
              <circle cx="16" cy="16" r="5" fill="#F7B58B" stroke="#B25A2C" strokeWidth="2" />
              <circle cx="32" cy="16" r="5" fill="#F7B58B" stroke="#B25A2C" strokeWidth="2" />
              <rect x="16" y="24" width="16" height="10" rx="5" fill="#FCE1CF" stroke="#B25A2C" strokeWidth="2" />
              <circle cx="21" cy="29" r="2" fill="#B25A2C" />
              <circle cx="27" cy="29" r="2" fill="#B25A2C" />
            </svg>
          </div>
          <span className="text-lg font-semibold tracking-tight text-[#2B211A]">Logo</span>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="#login"
            className="rounded-full px-4 py-2 text-sm font-semibold text-[#3F332A] transition hover:text-[#1F1913]"
          >
            Log in
          </Link>
          <Link
            href="#get-started"
            className="rounded-full bg-[#F57A2B] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(245,122,43,0.35)] transition hover:bg-[#E96C1F]"
          >
            Get started
          </Link>
        </div>
      </div>
    </header>
  );
}
