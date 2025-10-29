"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/research";
import { FaFilePdf } from "react-icons/fa";

const ResearchPage = () => {
  const [modal, setModal] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    if (!modal) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setModal(null);
    document.addEventListener("keydown", onKey);
    document.body.classList.add("overflow-hidden");
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.classList.remove("overflow-hidden");
    };
  }, [modal]);

  return (
    <main className="min-h-[100dvh] bg-white">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <section className="mb-4 pt-4 bg-white dark:bg-white">
          <h1 className="text-3xl sm:text-4xl font-semibold font-serif tracking-tight text-[#841617] [text-wrap:balance]">
            Research
          </h1>
          <p className="mt-4 text-gray-800 leading-relaxed text-justify hyphens-auto">
            My research focuses on visualization, data analytics, visual design,
            and computer graphics grounded in real-world challenges. Below is a
            sample of ongoing projects in my group. For more information or
            other projects, please contact me. A complete list of publications
            can be found{" "}
            <Link
              href="/publications"
              className="text-[#9D2235] hover:text-[#7f1c2b] underline underline-offset-4"
            >
              here
            </Link>
            .
          </p>
        </section>

        {projects.map((proj, i) => (
          <section
            key={i}
            className="mb-12 bg-white dark:bg-white rounded-xl shadow-sm overflow-hidden"
          >
            {/* Title with Full-Width Ribbon */}
            <div className="relative mb-0">
              <div className="bg-gradient-to-r from-[#841617] to-[#a8201a] py-4 px-8 shadow-md">
                <h3 className="text-2xl text-white font-semibold">
                  {proj.title}
                </h3>
              </div>
              {/* Ribbon fold effect */}
              <div className="absolute left-0 -bottom-2 w-0 h-0 border-l-[16px] border-l-transparent border-t-[16px] border-t-[#5a0f10]" />
            </div>

            {/* Content Area - Image and Text (swapped on desktop) */}
            <div className="p-8 flex flex-col lg:flex-row-reverse gap-8 items-start">
              {/* RIGHT — Text (on desktop) */}
              <div className="flex-1 min-w-0">
                <p className="text-neutral-700 mb-6 leading-relaxed text-justify">
                  {proj.description}
                </p>
              </div>

              {/* LEFT — Image (on desktop) */}
              <div className="flex-shrink-0 w-full lg:w-[40%] flex items-center justify-center">
                {proj.images?.[0] && (
                  <Image
                    src={proj.images[0].src}
                    alt={proj.images[0].alt}
                    width={800}
                    height={500}
                    className="block mx-auto rounded-lg cursor-pointer hover:opacity-90 transition object-cover w-full h-auto"
                    onClick={() => setModal(proj.images[0])}
                  />
                )}
              </div>
            </div>

            {/* Related Papers — Full width BELOW the image/text row (no bullets) */}
            {proj.papers?.length > 0 && (
              <div className="px-8 pb-8">
                <div className="border-t border-neutral-200 pt-6">
                  <h4 className="text-lg font-semibold text-neutral-900 mb-3">
                    Related Papers
                  </h4>
                  <div className="space-y-2">
                    {proj.papers.map((paper, k) => (
                      <div key={k} className="text-sm text-neutral-800">
                        <span>{paper.title}</span>
                        {paper.href && (
                          <Link
                            href={paper.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Open PDF for ${paper.title}`}
                            className="ml-2 inline-flex items-center gap-1 align-middle text-[#841617] hover:text-[#a8201a] transition-colors"
                          >
                            <FaFilePdf className="text-base" />
                            <span className="underline underline-offset-2">
                              PDF
                            </span>
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </section>
        ))}

        {modal && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/50 backdrop-blur-md p-2 sm:p-4"
            onClick={() => setModal(null)}
          >
            <button
              type="button"
              aria-label="Close"
              onClick={() => setModal(null)}
              className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-neutral-800 shadow-md ring-1 ring-black/10 hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#841617] transition"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path name="M6 6l12 12M18 6l-12 12" />
              </svg>
            </button>

            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-[min(98vw,1600px)] h-[min(92vh,1000px)]"
            >
              <Image
                src={modal.src}
                alt={modal.alt}
                fill
                priority
                className="object-contain rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default ResearchPage;
