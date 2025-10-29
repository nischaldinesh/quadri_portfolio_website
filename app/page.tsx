/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { newsItems } from "@/data/news";
import { selectedPulications } from "@/data/publications";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { SiGooglescholar } from "react-icons/si";

export default function Page() {
  const latestNews = newsItems.slice(0, 4); // show only first 4 news items
  const [open, setOpen] = useState<Record<string, boolean>>({});

  const toggle = (id: string) =>
    setOpen((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* LEFT COLUMN */}
          <aside className="md:col-span-1">
            <div className="flex flex-col items-center md:items-start">
              <div className="relative w-56 h-56 md:w-80 md:h-80 rounded-full overflow-hidden shadow-sm">
                <Image
                  src="/quadri.jpg"
                  alt="Portrait of Dr. John Quadri"
                  fill
                  sizes="(min-width: 768px) 20rem, 14rem"
                  className="object-cover"
                  priority
                />
              </div>

              <div className="mt-4 text-center md:text-left">
                <a
                  href="https://www.div-lab.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Div Lab @ OU
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
                  className="text-[#841617] hover:text-[#7f1c2b]"
                  title="X (Twitter)"
                >
                  <FaXTwitter size={28} />
                </a>
                <a
                  href="https://scholar.google.com/citations?hl=en&tzom=300&user=jw9QYJcAAAAJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Google Scholar"
                  className="text-[#841617] hover:text-[#7f1c2b]"
                  title="Google Scholar"
                >
                  <SiGooglescholar size={28} />
                </a>
                <a
                  href="https://www.linkedin.com/in/ghulamjilani1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-[#841617] hover:text-[#7f1c2b]"
                  title="LinkedIn"
                >
                  <FaLinkedin size={28} />
                </a>
              </div>
            </div>

            {/* NEWS*/}
            <div className="mt-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                News & Updates
              </h2>
              <ul className="space-y-4">
                {latestNews.map((item, index) => (
                  <li
                    key={index}
                    className=" p-4 shadow-sm hover:shadow-md transition-shadow"
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
            </div>
          </aside>

          {/* RIGHT COLUMN */}
          <section className="md:col-span-2">
            <div className="flex-1">
              <p className="text-gray-700 leading-relaxed mb-4 text-justify">
                I am an Assistant Professor in the School of Computer Science at
                the Gallogly College of Engineering, University of Oklahoma,
                where I direct the DIV-Lab. Previously, I was a Postdoctoral
                Research Fellow and CRA/CCC/NSF Computing Innovation Fellow,
                working with Dr. Danielle Albers Szafir at the University of
                North Carolina–Chapel Hill. I received my Ph.D. in Computer
                Science & Engineering in 2021, advised by Dr. Paul Rosen at the
                University of South Florida. I also hold an M.S. in Computer
                Science from the University of South Florida and a Bachelor in
                Computer Engineering from the University of Mumbai.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-justify">
                My research lies at the intersection of Information
                Visualization, Human-Computer Interaction, Machine Learning
                Models, and perception & cognition. My primary goal is to create
                a perceptual and human-centered framework to optimize
                visualization design, improving decision-making quality and
                confidence while providing objective guidance for designers. I
                borrow approaches from InfoVis and perception & cognitive
                science, applying human-centered evaluation to measure, model,
                and theorize human perception of data and visual design.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8 text-justify">
                My dissertation research received the IEEE VGTC Best
                Dissertation Award for contributing new ways to measure, model,
                and construct task-optimized visualizations. My postdoctoral
                research is supported by the NSF-CRA Computing Innovation 2021
                Fellowship. My research collaborations span various
                applications, including design-oriented perceptual research
                projects to create robust design choices, perceptual
                variability, design optimization, and information accessibility.
                Recent work on perceptual variability received a Best Paper
                Honorable Mention Award for CLAMS at IEEE VIS 2023. Along with
                my collaborators, I have received awards including an honorable
                mention for the VAST Challenge at IEEE VIS 2017, Best Short
                Paper at EuroVis 2024, and an honorable mention for a poster at
                IEEE VIS 2024.
              </p>
            </div>

            {/* SELECTED PUBLICATIONS */}
            <div className="mt-2">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 uppercase tracking-wide">
                Selected Publications
              </h2>
              <hr className="border-t-2 border-gray-200 mb-6" />
              <ul className="space-y-5">
                {selectedPulications.map((p: any) => {
                  const isOpen = !!open[p.id];
                  return (
                    <li
                      key={p.id}
                      className="bg-white p-4 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <h3 className="text-neutral-900 leading-snug font-semibold">
                        {p.title ?? p.citation}
                      </h3>

                      {p.authors ? (
                        <p className="text-neutral-700 text-sm mt-1">
                          {p.authors}
                        </p>
                      ) : null}

                      {p.mentions?.length ? (
                        <div className="flex flex-wrap gap-2 mt-2">
                          {p.mentions.map((m: string, i: number) => (
                            <span
                              key={i}
                              className="inline-flex items-center font-semibold bg-[#f0f0f0] text-amber-800 text-xs px-2 py-1 border border-[#f0f0f0]"
                            >
                              {m}
                            </span>
                          ))}
                        </div>
                      ) : null}

                      {/* Links row */}
                      <div className="flex flex-wrap items-center gap-3 mt-3">
                        {p.links?.pdf ? (
                          <Link
                            href={p.links.pdf}
                            target="_blank"
                            className="text-blue-600 hover:underline underline-offset-2 text-sm font-medium"
                          >
                            PDF
                          </Link>
                        ) : null}

                        {p.links?.abstract ? (
                          <Link
                            href={p.links.abstract}
                            target="_blank"
                            className="text-blue-600 hover:underline underline-offset-2 text-sm font-medium"
                          >
                            Abstract (external)
                          </Link>
                        ) : null}

                        {p.abstract ? (
                          <button
                            type="button"
                            onClick={() => toggle(p.id)}
                            aria-expanded={isOpen}
                            className="inline-flex items-center gap-1 rounded-sm border px-2 py-1 text-sm font-medium text-neutral-800 hover:bg-neutral-50"
                          >
                            <span>Abstract</span>
                            <span className="text-lg leading-none">
                              {isOpen ? "−" : "+"}
                            </span>
                          </button>
                        ) : null}
                      </div>

                      {p.abstract && isOpen ? (
                        <div className="mt-3 border text-justify border-neutral-200 bg-neutral-50 p-3 text-sm text-neutral-800">
                          {p.abstract}
                        </div>
                      ) : null}
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
