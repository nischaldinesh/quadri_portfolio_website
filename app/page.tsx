/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { newsItems } from "@/data/news";
import { selectedPulications } from "@/data/publications";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { SiGooglescholar } from "react-icons/si";
import HighlightGJQ from "@/components/HighlightGJQ";

const PREFERRED_TAG_ORDER = [
  "Best",
  "Recent",
  "Perception",
  "Design Optimization",
  "Variability",
  "Encoding",
];

export default function Page() {
  const latestNews = newsItems.slice(0, 4); // show only first 4 news items
  const [activeTag, setActiveTag] = useState<string>("Best"); // default = Best

  const visibleTags = useMemo(() => {
    const s = new Set<string>();
    selectedPulications.forEach((p: any) =>
      p.tags?.forEach((t: string) => s.add(t))
    );
    return PREFERRED_TAG_ORDER.filter((t) => s.has(t));
  }, []);

  useEffect(() => {
    if (!visibleTags.includes(activeTag)) {
      if (visibleTags.includes("Best")) setActiveTag("Best");
      else if (visibleTags.length) setActiveTag(visibleTags[0]);
    }
  }, [visibleTags, activeTag]);

  const filteredSelected = useMemo(() => {
    return selectedPulications.filter((p: any) => p.tags?.includes(activeTag));
  }, [activeTag]);

  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* LEFT COLUMN */}
          <aside className="md:col-span-1">
            <div className="flex flex-col items-center md:items-start">
              <div className="relative w-56 h-56 rounded-full md:w-80 md:h-80 overflow-hidden shadow-sm">
                <Image
                  src="/quadri.jpg"
                  alt="Portrait of Dr. John Quadri"
                  fill
                  sizes="(min-width: 768px) 20rem, 14rem"
                  className="object-cover"
                  priority
                />
              </div>

              <div className="mt-4 text-center font-sans md:text-left">
                <a
                  href="https://www.div-lab.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  DIV-Lab @ OU
                </a>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-1">
                  School of Computer Science
                  <br />
                  Gallogly College of Engineering
                  <br />
                  University of Oklahoma
                  <br />
                  Norman, OK 73019
                </p>
                <p className="font-bold mt-1">Email: quadri@ou.edu</p>
              </div>

              {/* Social Media Links */}
              <div className="flex space-x-4 mt-4">
                <a
                  href="https://x.com/jiquad"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter)"
                  className="text-black"
                  title="X (Twitter)"
                >
                  <FaXTwitter size={28} />
                </a>
                <a
                  href="https://scholar.google.com/citations?hl=en&tzom=300&user=jw9QYJcAAAAJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Google Scholar"
                  className="text-blue-600"
                  title="Google Scholar"
                >
                  <SiGooglescholar size={28} />
                </a>
                <a
                  href="https://www.linkedin.com/in/ghulamjilani1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-blue-800"
                  title="LinkedIn"
                >
                  <FaLinkedin size={28} />
                </a>
              </div>
            </div>

            {/* NEWS*/}
            <div className="mt-10 font-sans">
              <h2 className="text-2xl font-sans font-semibold text-gray-900 mb-4">
                📰 News & Updates
              </h2>
              <ul className="space-y-4">
                {latestNews.map((item, index) => (
                  <li
                    key={index}
                    className="p-4 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="font-semibold text-gray-900 text-sm sm:text-base">
                      {item.monthYear}
                    </div>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-1">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex justify-center">
                <Link href="/oldnews" className="underline text-blue-600">
                  Older News
                </Link>
              </div>
            </div>
          </aside>

          {/* RIGHT COLUMN */}
          <section className="md:col-span-2">
            <div className="flex-1 space-y-4">
              {/* About Me */}
              <section>
                <h2 className="text-2xl font-sans text-gray-900 mb-4 font-semibold tracking-wide">
                  About Me
                </h2>

                <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
                  {/* top accent */}
                  <div className="h-1 w-full bg-gradient-to-r from-[#841617] via-[#9D2235] to-[#841617]" />

                  <div className="p-4 sm:p-5 space-y-3 font-sans text-gray-800 leading-relaxed text-justify">
                    <p>
                      I am an Assistant Professor in the School of Computer
                      Science at the Gallogly College of Engineering, University
                      of Oklahoma, where I direct the DIV-Lab. Previously, I was
                      a Postdoctoral Research Fellow and CRA/CCC/NSF Computing
                      Innovation Fellow, working with Dr. Danielle Albers Szafir
                      at the University of North Carolina–Chapel Hill. I
                      received my Ph.D. in Computer Science &amp; Engineering in
                      2021, advised by Dr. Paul Rosen at the University of South
                      Florida. I also hold an M.S. in Computer Science from the
                      University of South Florida and a Bachelor in Computer
                      Engineering from the University of Mumbai.
                    </p>

                    <p>
                      My work has been recognized with the IEEE VGTC Best
                      Dissertation Award, and my postdoctoral research was
                      supported by the NSF-CRA Computing Innovation 2021
                      Fellowship. Recent collaborations received a Best Paper
                      Honorable Mention for CLAMS at IEEE VIS 2023, a Best Short
                      Paper at EuroVis 2024, and honorable mentions for the IEEE
                      VIS VAST Challenge 2017 and an IEEE VIS 2024 poster.
                    </p>
                  </div>
                </div>
              </section>

              {/* Research Vision */}
              <section>
                <h2 className="text-2xl font-sans text-gray-900 mb-4 font-semibold tracking-wide">
                  Research Vision
                </h2>

                <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
                  {/* top accent */}
                  <div className="h-1 w-full bg-gradient-to-r from-[#841617] via-[#9D2235] to-[#841617]" />

                  <div className="p-4 sm:p-5 space-y-3 text-gray-800 font-sans leading-relaxed text-justify">
                    <p>
                      My research lies at the intersection of Information
                      Visualization, Human–Computer Interaction, Machine
                      Learning models, and perception &amp; cognition. The
                      overarching goal is to build perceptual, human-centered
                      frameworks that optimize visualization design, improving
                      decision quality and confidence while offering objective
                      guidance for designers.
                    </p>

                    <p>
                      I combine methods from InfoVis and perception &amp;
                      cognitive science with human-centered evaluation to
                      measure, model, and theorize how people perceive data and
                      visual design. This agenda advances practical, empirically
                      grounded design choices and addresses core challenges such
                      as perceptual variability, design optimization, and
                      information accessibility—ultimately delivering tools and
                      principles that make complex data more understandable and
                      decisions more reliable across audiences and domains.
                    </p>
                  </div>
                </div>
              </section>
              <section>
                <h2 className="text-2xl font-sans text-gray-900 mb-4 font-semibold tracking-wide">
                  Teaching
                </h2>

                <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
                  {/* top accent */}
                  <div className="h-1 w-full bg-gradient-to-r from-[#841617] via-[#9D2235] to-[#841617]" />

                  <ul className="p-4 sm:p-5 list-disc list-inside space-y-2 text-gray-800">
                    <li>
                      <span className="font-medium font-sans text-gray-900">
                        CS 4063/5063:
                      </span>{" "}
                      Human–Computer Interaction
                    </li>
                    <li>
                      <span className="font-medium font-sans text-gray-900">
                        CS 5970:
                      </span>{" "}
                      Information Visualization
                    </li>
                  </ul>
                </div>
              </section>
            </div>

            {/* SELECTED PUBLICATIONS */}
            <div className="mt-6">
              <h2 className="text-2xl font-sans text-gray-900 mb-4 font-semibold tracking-wide">
                Selected Publications
              </h2>

              {/* Tag Chips (no "All") */}
              {visibleTags.length > 0 && (
                <div className="mb-4 flex flex-wrap items-center gap-2">
                  {visibleTags.map((tag) => {
                    const active = activeTag === tag;
                    return (
                      <button
                        key={tag}
                        onClick={() => setActiveTag(tag)}
                        className={[
                          "px-3 py-1.5 rounded-full border text-sm font-medium transition-colors",
                          active
                            ? "bg-[#9D2235] text-white border-[#9D2235]"
                            : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50",
                        ].join(" ")}
                        aria-pressed={active}
                        title={`Filter by ${tag}`}
                      >
                        {tag}
                      </button>
                    );
                  })}
                </div>
              )}

              <ul className="space-y-5">
                {filteredSelected.map((p: any) => {
                  const extraPdf =
                    p.detail?.pdf &&
                    !p.links?.some((l: any) => l.label.toLowerCase() === "pdf")
                      ? [{ label: "PDF", href: p.detail.pdf }]
                      : [];
                  const allLinks = [...(p.links || []), ...extraPdf];

                  return (
                    <li
                      key={p.slug}
                      className="bg-white p-4 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <h3 className="text-neutral-900 leading-snug font-semibold">
                        <HighlightGJQ text={p.title} />
                      </h3>

                      {/* Authors */}
                      <p className="text-neutral-700 text-sm mt-1">
                        {p.authors?.map((a: any, i: number) => (
                          <span
                            key={`${p.slug}-a-${i}`}
                            className={
                              a.highlight ? "font-semibold text-[#841617]" : ""
                            }
                          >
                            {a.name}
                            {i < p.authors.length - 1 ? ", " : ""}
                          </span>
                        ))}
                      </p>

                      {/* Venue */}
                      {/* {p.venue ? (
                        <p className="text-neutral-600 text-sm mt-1 italic">
                          {p.venue}
                        </p>
                      ) : null} */}

                      {/* Highlight badge */}
                      {p.highlight ? (
                        <div className="flex flex-wrap gap-2 mt-2">
                          <span className="inline-flex items-center font-semibold bg-[#f0f0f0] text-amber-800 text-xs px-2 py-1 border border-[#f0f0f0]">
                            {p.highlight}
                          </span>
                        </div>
                      ) : null}

                      {/* Links row */}
                      {allLinks.length ? (
                        <div className="flex flex-wrap items-center gap-3 mt-3">
                          {allLinks.map((l: any, i: number) => (
                            <Link
                              key={`${p.slug}-l-${i}`}
                              href={l.href}
                              target="_blank"
                              className="text-blue-600 hover:underline underline-offset-2 text-sm font-medium"
                            >
                              {l.label}
                            </Link>
                          ))}
                        </div>
                      ) : null}

                      {/* Tag pills (optional to display below each item)
                      {p.tags?.length ? (
                        <div className="flex flex-wrap gap-2 mt-3">
                          {p.tags.map((t: string) => (
                            <span
                              key={`${p.slug}-tag-${t}`}
                              className="text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-700 border border-gray-200"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      ) : null} */}
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
