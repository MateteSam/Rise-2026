import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { INSIGHTS_ARTICLES } from "../lib/content";

export const Route = createFileRoute("/insights")({
  component: InsightsPage,
  head: () => ({
    meta: [
      {
        title: "Insights Hub — Ideas for the Futures Women are Building",
      },
      {
        name: "description",
        content:
          "Explore perspectives on learning, leadership and economic participation, alongside news from GWFSN and selected stories from RISE AFRICAN WOMAN.",
      },
      { property: "og:title", content: "Insights Hub — GWFSN" },
      { property: "og:url", content: "/insights" },
    ],
    links: [{ rel: "canonical", href: "/insights" }],
  }),
});

const CATEGORIES = [
  "All",
  "Future Skills",
  "Leadership",
  "Work and Enterprise",
  "Barometer",
  "GWFSN News",
] as const;

function InsightsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredArticles =
    selectedCategory === "All"
      ? INSIGHTS_ARTICLES
      : INSIGHTS_ARTICLES.filter(
          (article) =>
            article.category.toLowerCase() === selectedCategory.toLowerCase() ||
            (selectedCategory === "GWFSN News" &&
              (article.id.includes("save") || article.id.includes("introducing")))
        );

  return (
    <div className="rise-support bg-[#f8f8f8] text-[#17161c]">
      {/* Header */}
      <header className="bg-[#101010] text-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24 lg:px-12">
          <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#9da7ff]">
            Editorial Commentary & Perspectives
          </p>
          <h1 className="mt-6 max-w-5xl text-5xl font-semibold uppercase leading-[0.88] tracking-[-0.055em] sm:text-7xl lg:text-8xl">
            Ideas for the futures <span className="text-[#9da7ff]">women are building.</span>
          </h1>
          <p className="mt-8 max-w-3xl text-base leading-relaxed text-white/70 sm:text-lg">
            Explore perspectives on learning, leadership and economic participation, alongside news
            from GWFSN and selected stories from RISE AFRICAN WOMAN.
          </p>
        </div>
      </header>

      {/* Category Filter Bar */}
      <section className="border-b-2 border-[#101010] bg-white py-4 px-5">
        <div className="mx-auto flex max-w-7xl items-center gap-2 overflow-x-auto [scrollbar-width:none]">
          <span className="mr-3 text-xs font-bold uppercase tracking-widest text-[#17161c]">
            Category:
          </span>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`border-2 px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors whitespace-nowrap ${
                selectedCategory === cat
                  ? "border-[#101010] bg-[#101010] text-white"
                  : "border-transparent bg-[#f8f8f8] text-[#696779] hover:border-[#101010] hover:text-[#17161c]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Articles Grid in Original Brutalist Style */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:py-24">
        <div className="grid gap-6 border-2 border-[#101010] bg-[#101010] sm:grid-cols-2 lg:grid-cols-3">
          {filteredArticles.map((article, idx) => (
            <article
              key={article.id}
              className="flex min-h-[340px] flex-col justify-between bg-white p-8 transition-colors hover:bg-[#fbfaf8]"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-light text-[#293dff]">0{idx + 1}</span>
                  <span className="border border-[#101010] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#ff7836]">
                    {article.category}
                  </span>
                </div>
                <h2 className="mt-6 text-2xl font-semibold uppercase tracking-[-0.03em] text-[#17161c]">
                  {article.title}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-[#545454]">{article.excerpt}</p>
              </div>
              <div className="mt-8 border-t-2 border-[#101010] pt-4 flex items-center justify-between">
                <span className="text-xs text-[#696779] font-medium">{article.date}</span>
                <Link
                  to={article.link}
                  className="border-b-2 border-[#293dff] pb-0.5 text-xs font-bold uppercase tracking-[0.16em] text-[#293dff] hover:border-black hover:text-black"
                >
                  {article.linkLabel} →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
