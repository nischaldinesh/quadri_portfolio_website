"use client";
import PublicationCard from "@/components/PublicationCard";
import { publications } from "@/data/publications";
import { SiGooglescholar } from "react-icons/si";
import { useMemo, useState } from "react";

const YEAR_ORDER = [2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017];

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
      <section className="flex gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 items-center">
        <h1 className="text-3xl sm:text-4xl font-bold italic tracking-tight text-[#841617]">
          Publications
        </h1>
        <a
          href="https://scholar.google.com/citations?hl=en&tzom=300&user=jw9QYJcAAAAJ"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Google Scholar"
          className="text-[#841617] hover:text-[#7f1c2b]"
          title="Google Scholar"
        >
          <SiGooglescholar size={38} />
        </a>
      </section>

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
        {/* Small helper text */}
        <p className="mt-2 text-xs text-gray-500">
          {activeTag
            ? `Filtering by: ${activeTag}`
            : "Showing all publications"}
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-12">
        {byYear.map(({ year, items }) =>
          items.length > 0 ? (
            <div key={year} className="space-y-6">
              <div className="w-full bg-[#9D2235] py-3 px-6 rounded-md shadow">
                <h2 className="text-xl font-semibold text-white">{year}</h2>
              </div>

              <div className="space-y-6">
                {items.map((pub) => (
                  <PublicationCard key={pub.id} pub={pub} />
                ))}
              </div>
            </div>
          ) : null
        )}
      </section>
    </main>
  );
}
