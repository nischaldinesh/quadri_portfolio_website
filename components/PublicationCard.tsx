import Image from "next/image";
import Link from "next/link";

export type Publication = {
  id: string;
  year: number;
  citation: string;
  image?: { src: string; alt: string; width?: number; height?: number };
  links?: {
    pdf?: string | null;
    demo?: string | null;
    talk?: string | null;
    code?: string | null;
  };

  tags?: string[];
  abstract?: string;
  venue?: string;

  mentions?: string[];
};

export default function PublicationCard({ pub }: { pub: Publication }) {
  const { image, links } = pub;

  const linkDefs: { key: keyof NonNullable<typeof links>; label: string }[] = [
    { key: "pdf", label: "PDF" },
    { key: "demo", label: "Demo" },
    { key: "talk", label: "Talk" },
    { key: "code", label: "Code" },
  ];

  return (
    <article className="rounded-2xl border border-gray-200 shadow-sm bg-white overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 w-full">
          {image ? (
            <div className="relative w-full h-40 sm:h-48 md:h-56 lg:h-60 flex items-center justify-center bg-white">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority={false}
              />
            </div>
          ) : (
            <div className="w-full h-40 sm:h-48 md:h-56 lg:h-60 bg-gray-100 flex items-center justify-center text-gray-400">
              No image
            </div>
          )}
        </div>

        <div className="md:w-2/3 w-full p-5 md:p-6 flex flex-col gap-3">
          {pub.mentions && pub.mentions.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {pub.mentions.map((m, i) => (
                <span
                  key={`${pub.id}-mention-${i}`}
                  className="inline-flex items-center rounded-full bg-amber-50 text-amber-800 border border-amber-200 px-2.5 py-0.5 text-xs font-semibold"
                >
                  {m}
                </span>
              ))}
            </div>
          )}

          <p className="text-gray-800 leading-relaxed text-justify">
            {pub.citation}
          </p>

          {links && (links.pdf || links.demo || links.talk || links.code) ? (
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-1">
              {linkDefs.map(({ key, label }) =>
                links[key] ? (
                  <Link
                    key={key}
                    href={links[key]!}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#9D2235] hover:text-[#7f1c2b] font-medium underline underline-offset-4"
                  >
                    {label}
                  </Link>
                ) : null
              )}
            </div>
          ) : null}

          {pub.tags && pub.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-1">
              {pub.tags.map((t) => (
                <span
                  key={`${pub.id}-tag-${t}`}
                  className="text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-700 border border-gray-200"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
