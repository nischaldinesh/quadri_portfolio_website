import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <div className="relative flex justify-center items-center">
        <Image
          src="/div.png"
          alt="DIV"
          className="object-contain"
          height={500}
          width={500}
        />
      </div>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <p className="mt-2 text-gray-600 text-justify">
          The Data Interaction and Visualization Lab, in short DIV-Lab is an
          interdisciplinary research laboratory located in the School of
          Computer Science at the University of Oklahoma, Norman. We specialize
          in Data Visualization, Perception and Cognition Science, Computer
          Graphics, and applied Artificial Intelligence. Our primary focus is on
          creating visual representations and interfaces that enhance
          understanding, interaction, and development of computational models.
          The DIV-Lab explores the intersection of data science, visual
          cognition, and computer graphics in order to understand how people
          make sense of visual information, and then leverage that knowledge to
          design innovative visualization systems that drive discovery across a
          wide range of domains, from psychology to communication to topology.
          Our ultimate mission is to facilitate the dialog between people and
          technologies, enabling discovery and advancing the state of the art in
          visual design and data interpretation. Through close collaboration
          with scholars and researchers, we strive to create interfaces and
          tools that empower users to explore, analyze, and gain valuable
          insights from complex data.
        </p>
      </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 flex items-center justify-center">
        <Link
          href="https://www.div-lab.org/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Official website of DIV Lab (opens in a new tab)"
          className="group inline-flex items-center gap-2 rounded-full border border-[#841617] bg-[#841617] px-5 py-2.5
               text-white font-medium shadow-sm transition
               hover:bg-[#6d1213] hover:shadow-md
               focus:outline-none focus-visible:ring-2 focus-visible:ring-[#841617] focus-visible:ring-offset-2"
        >
          Official Website of DIV Lab
          <svg
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M7 17L17 7" />
            <path d="M8 7h9v9" />
          </svg>
        </Link>
      </div>
    </main>
  );
}
