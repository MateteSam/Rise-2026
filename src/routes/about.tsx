import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About GWFSN — Global Women's Future Skills Network" },
      { name: "description", content: "GWFSN is an African-rooted, internationally relevant platform preparing women and girls for the changing world of work." },
      { property: "og:title", content: "About the Global Women's Future Skills Network" },
      { property: "og:description", content: "Substance over symbolism, preparation over performance, measurable progress over generic empowerment language." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-20">
      <header className="mb-12 max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-widest text-violet">About GWFSN</p>
        <h1 className="mt-3 font-serif text-5xl leading-tight text-ink md:text-6xl">
          Preparing women for the <span className="italic text-orange">changing world of work</span>.
        </h1>
      </header>

      <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
        <p>
          The <strong className="text-ink">Global Women's Future Skills Network</strong> is an African-rooted and internationally relevant platform dedicated to preparing women and girls for the changing world of work.
        </p>
        <p>
          GWFSN equips women with future-ready skills, digital confidence, workforce readiness, leadership capability and pathways into employment, enterprise and influence.
        </p>
        <p>
          The Network works with women, employers, educational institutions, development partners and allies to strengthen both individual capability and the systems that influence women's inclusion and progression.
        </p>
        <blockquote className="rounded-2xl border-l-4 border-orange bg-secondary/40 p-8">
          <p className="font-serif text-2xl not-italic text-ink">
            GWFSN stands for substance over symbolism, preparation over performance, and measurable progress over generic empowerment language.
          </p>
        </blockquote>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-4">
        {["Learn", "Lead", "Earn", "Flourish"].map((word, i) => (
          <div key={word} className={`rounded-2xl border border-border p-6 text-center ${i % 2 === 0 ? "bg-violet/5" : "bg-orange/5"}`}>
            <p className="font-serif text-3xl text-ink">{word}</p>
          </div>
        ))}
      </div>

      <div className="mt-14 flex flex-wrap gap-3">
        <Link to="/register" className="rounded-full bg-violet px-6 py-3 text-sm font-semibold text-primary-foreground">Attend Rise 2026</Link>
        <Link to="/speakers" className="rounded-full border border-ink/20 px-6 py-3 text-sm font-semibold text-ink hover:bg-ink hover:text-cream">Meet the speakers</Link>
      </div>
    </div>
  );
}