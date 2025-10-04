"use client";
import Link from "next/link";
import { projects } from "@/data/research";
import ResearchCard from "@/components/ResearchCard";

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <h1 className="text-3xl sm:text-4xl font-semibold italic text-[#841617]">
          Research
        </h1>
        <p className="mt-4 text-gray-700 leading-relaxed w-full max-w-none text-justify [text-align-last:justify] hyphens-auto">
          My research focuses on topics in visualization, data analytics, visual
          design, and computer graphics driven by real-world challenges. Below
          is a sample of on-going projects in my research group. For more
          information about these projects or others, please contact me. A
          complete list of publications can be found{" "}
          <Link
            href="/publications"
            className="text-[#9D2235] hover:text-[#7f1c2b] underline underline-offset-4"
          >
            here
          </Link>
          .
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-10">
        {projects.map((p) => (
          <ResearchCard key={p.id} project={p} />
        ))}
      </section>
    </main>
  );
}
