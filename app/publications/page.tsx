"use client";
import PublicationCard from "@/components/PublicationCard";
import { publications } from "@/data/publications";
import { SiGooglescholar } from "react-icons/si";
import { useMemo, useState } from "react";

const YEAR_ORDER = [2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017];

const TAG_ORDER: string[] = [
  "All",
  // "Recent",
  "Best",
  "Annotation",
  "Comrehension",
  "Design Optimization",
  "Empirical",
  "Encoding",
  "Perception",
  "Survey",
  "Variability",
];

const HIDDEN_TAGS = new Set<string>(["Recent"]);

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

  const dedupedPublications = useMemo(() => {
    const seen = new Set<string>();
    const dups: string[] = [];
    const out: typeof publications = [];

    for (const p of publications) {
      if (seen.has(p.slug)) {
        dups.push(p.slug);
        continue;
      }
      seen.add(p.slug);
      out.push(p);
    }

    if (dups.length) {
      console.warn(
        "Duplicate publication slugs detected (keeping first):",
        Array.from(new Set(dups))
      );
    }

    return out;
  }, []);

  const { allTags, counts } = useMemo(() => {
    const counts = new Map<string, number>();

    dedupedPublications.forEach((p) => {
      p.tags?.forEach((t) => {
        if (!HIDDEN_TAGS.has(t)) {
          counts.set(t, (counts.get(t) ?? 0) + 1);
        }
      });
    });

    const orderIndex = (t: string) => {
      const idx = TAG_ORDER.indexOf(t);
      return idx === -1 ? Number.POSITIVE_INFINITY : idx;
    };

    const allTags = Array.from(counts.keys()).sort((a, b) => {
      const ai = orderIndex(a);
      const bi = orderIndex(b);
      if (ai !== bi) return ai - bi;
      return a.localeCompare(b);
    });

    return { allTags, counts };
  }, [dedupedPublications]);

  const filtered = useMemo(() => {
    if (!activeTag) return dedupedPublications;
    return dedupedPublications.filter((p) => p.tags?.includes(activeTag));
  }, [activeTag, dedupedPublications]);

  const byYear = YEAR_ORDER.map((year) => ({
    year,
    items: filtered.filter((p) => p.year === year),
  }));

  return (
    <main className="min-h-screen bg-white">
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
            title="Show all publications"
            aria-pressed={activeTag === null}
          >
            All
          </button>

          {allTags.map((tag) => {
            const active = activeTag === tag;
            // const count = counts.get(tag) ?? 0;
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
                {/* <span className={active ? "opacity-90 ml-1" : "text-gray-500 ml-1"}>
                  ({count})
                </span> */}
              </button>
            );
          })}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-12">
        {byYear.map(({ year, items }) =>
          items.length > 0 ? (
            <div key={year} className="space-y-6">
              <YearRibbon year={year} />
              <div className="space-y-6 mt-4">
                {items.map((pub) => (
                  <PublicationCard key={`${pub.slug}-${pub.year}`} pub={pub} />
                ))}
              </div>
            </div>
          ) : null
        )}
      </section>
    </main>
  );
}
