import Image from "next/image";
import Link from "next/link";

export type ResearchProject = {
  id: string;
  title: string;
  summary: string;
  images: { src: string; alt: string; width?: number; height?: number }[];
  publications?: { citation: string; href?: string }[];
};

export default function ResearchCard({
  project,
}: {
  project: ResearchProject;
}) {
  const hero = project.images?.[0];

  return (
    <article
      className="group rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow"
      aria-labelledby={`proj-${project.id}`}
    >
      {/* Title banner */}
      <header className="bg-gradient-to-r from-[#9D2235] to-[#841617] text-white px-6 py-4">
        <h3
          id={`proj-${project.id}`}
          className="text-xl sm:text-[1.35rem] font-semibold leading-tight font-serif tracking-tight"
        >
          {project.title}
        </h3>
      </header>

      {/* Body: grid with image left, text right */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left: image fills full half on desktop */}
        <div className="relative min-h-[220px] sm:min-h-[260px] lg:min-h-[360px]">
          {hero ? (
            <Image
              src={hero.src}
              alt={hero.alt}
              fill
              // Fill the entire left column; slight crop for visual consistency
              className="object-contain"
              sizes="(min-width:1024px) 50vw, 100vw"
              priority
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-50 text-gray-400">
              No image available
            </div>
          )}
        </div>

        {/* Right: text & publications */}
        <div className="px-6 py-6 flex flex-col gap-5">
          <p className="text-[0.98rem] leading-7 text-gray-800 text-justify hyphens-auto">
            {project.summary}
          </p>

          {project.publications?.length ? (
            <section className="pt-4 border-t border-gray-200">
              <h4 className="font-semibold text-[#9D2235] mb-2">
                Selected publications
              </h4>
              <ul className="space-y-3 text-gray-800 text-[0.95rem] leading-7">
                {project.publications.map((pub, idx) => (
                  <li
                    key={idx}
                    className="text-justify [text-indent:-1.1rem] pl-6 relative"
                  >
                    <span className="absolute left-0 text-gray-400">•</span>
                    <span>
                      {pub.citation}
                      {pub.href && (
                        <>
                          {" "}
                          <Link
                            href={pub.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-[#9D2235] hover:text-[#7f1c2b] underline underline-offset-4"
                          >
                            View paper
                          </Link>
                        </>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
        </div>
      </div>
    </article>
  );
}
