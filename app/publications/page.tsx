"use client";
import PublicationCard from "@/components/PublicationCard";
import { publications } from "@/data/publications";
import { SiGooglescholar } from "react-icons/si";
import { useMemo, useState } from "react";

const YEAR_ORDER = [2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017];

function YearRibbon({ year }: { year: number }) {
  return (
    <div className="relative mb-2">
      <div className="bg-gradient-to-r rounded-t-2xl from-[#841617] to-[#a8201a] py-3 px-6 shadow-md">
        <h2 className="text-xl font-semibold text-white">{year}</h2>
      </div>

      <div className="absolute left-0 -bottom-2 w-0 h-0 border-l-[16px] border-l-transparent border-t-[16px] border-t-[#5a0f10]" />
    </div>
  );
}

export default function PublicationsPage() {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const allTags = useMemo(() => {
    const set = new Set<string>();
    publications.forEach((p) => p.tags?.forEach((t) => set.add(t)));
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, []);

  const filtered = useMemo(() => {
    if (!activeTag) return publications;
    return publications.filter((p) => p.tags?.includes(activeTag));
  }, [activeTag]);

  const byYear = YEAR_ORDER.map((year) => ({
    year,
    items: filtered.filter((p) => p.year === year),
  }));

  return (
    <main className="min-h-screen bg-white">
      {/* Page header */}
      <section className="flex gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 items-center">
        <h1 className="text-3xl sm:text-4xl font-semibold font-serif tracking-tight text-[#841617] [text-wrap:balance]">
          Publications
        </h1>
        <a
          href="https://scholar.google.com/citations?hl=en&tzom=300&user=jw9QYJcAAAAJ"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Google Scholar"
          className="text-blue-600"
          title="Google Scholar"
        >
          <SiGooglescholar size={38} />
        </a>
      </section>

      {/* Tags filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setActiveTag(null)}
            className={[
              "px-3 py-1.5 rounded-full border text-sm font-medium transition-colors",
              activeTag === null
                ? "bg-[#9D2235] text-white border-[#9D2235]"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50",
            ].join(" ")}
          >
            All
          </button>

          {allTags.map((tag) => {
            const active = activeTag === tag;
            return (
              <button
                key={tag}
                onClick={() => setActiveTag(active ? null : tag)}
                className={[
                  "px-3 py-1.5 rounded-full border text-sm font-medium transition-colors",
                  active
                    ? "bg-[#9D2235] text-white border-[#9D2235]"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50",
                ].join(" ")}
                title={`Filter by ${tag}`}
                aria-pressed={active}
              >
                {tag}
              </button>
            );
          })}
        </div>
      </section>

      {/* Year groups with ribbon-fold headers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-12">
        {byYear.map(({ year, items }) =>
          items.length > 0 ? (
            <div key={year} className="space-y-6">
              <YearRibbon year={year} />
              <div className="space-y-6 mt-4">
                {items.map((pub) => (
                  <PublicationCard key={pub.slug} pub={pub} />
                ))}
              </div>
            </div>
          ) : null
        )}
      </section>
    </main>
  );
}
