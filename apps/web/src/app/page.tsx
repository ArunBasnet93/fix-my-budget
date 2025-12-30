export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <header className="flex items-center justify-between">
          <div className="text-lg font-semibold">Fix-My-Budget</div>
          <nav className="text-sm text-slate-600">
            <a className="hover:text-slate-900" href="#features">Features</a>
            <span className="mx-3">·</span>
            <a className="hover:text-slate-900" href="#how">How it works</a>
            <span className="mx-3">·</span>
            <a className="hover:text-slate-900" href="#cta">Get started</a>
          </nav>
        </header>

        <section className="mt-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Fix your budget. Keep it fixed.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-600">
            A simple budgeting workflow that separates fixed costs from flexible spending,
            so you always know what you can safely spend today.
          </p>

          <div className="mt-10 flex flex-wrap gap-3" id="cta">
            <a
              className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:opacity-90"
              href="/app"
            >
              Open the app
            </a>
            <a
              className="rounded-md border border-slate-200 px-4 py-2 text-sm font-medium hover:bg-slate-50"
              href="#features"
            >
              See features
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-2 text-xs text-slate-500">
            <span className="rounded-full border border-slate-200 px-3 py-1">Local-first</span>
            <span className="rounded-full border border-slate-200 px-3 py-1">Postgres-ready</span>
            <span className="rounded-full border border-slate-200 px-3 py-1">Fixed vs Variable</span>
          </div>
        </section>

        <section id="features" className="mt-20 grid gap-6 sm:grid-cols-3">
          {[
            {
              title: "Fixed vs variable",
              desc: "Separate recurring obligations from flexible spending.",
            },
            {
              title: "Monthly clarity",
              desc: "One place to see income, bills, and what’s left.",
            },
            {
              title: "Budget guardrails",
              desc: "Set limits per category and spot leaks early.",
            },
          ].map((f) => (
            <div key={f.title} className="rounded-xl border border-slate-200 p-6">
              <h3 className="font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
            </div>
          ))}
        </section>

        <section id="how" className="mt-20 rounded-xl border border-slate-200 p-8">
          <h2 className="text-2xl font-semibold">How it works</h2>
          <ol className="mt-6 grid gap-4 sm:grid-cols-3">
            <li className="rounded-lg bg-slate-50 p-4">
              <div className="text-xs font-semibold text-slate-500">Step 1</div>
              <div className="mt-1 font-medium">Add income</div>
              <div className="mt-1 text-sm text-slate-600">Monthly salary, benefits, side income.</div>
            </li>
            <li className="rounded-lg bg-slate-50 p-4">
              <div className="text-xs font-semibold text-slate-500">Step 2</div>
              <div className="mt-1 font-medium">Add fixed costs</div>
              <div className="mt-1 text-sm text-slate-600">Rent, insurance, subscriptions, debt.</div>
            </li>
            <li className="rounded-lg bg-slate-50 p-4">
              <div className="text-xs font-semibold text-slate-500">Step 3</div>
              <div className="mt-1 font-medium">Plan flexible spending</div>
              <div className="mt-1 text-sm text-slate-600">Food, travel, fun—without guessing.</div>
            </li>
          </ol>
        </section>

        <footer className="mt-20 border-t border-slate-200 pt-8 text-sm text-slate-500">
          © {new Date().getFullYear()} Fix-My-Budget
        </footer>
      </div>
    </main>
  );
}
