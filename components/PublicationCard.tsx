import Image from "next/image";
import Link from "next/link";

export type PublicationLink = { label: string; href: string };
export type Author = { name: string; highlight?: boolean };
export type PublicationDetail = {
  abstract?: string;
  pdf?: string;
  bibtex?: string;
  hero?: { src: string; alt: string };
};

export type Publication = {
  slug: string;
  year: number;
  title: string;
  authors: Author[];
  venue: string;
  image?: { src: string; alt: string; width?: number; height?: number };
  links?: PublicationLink[];
  highlight?: string; // award / badge
  detail?: PublicationDetail;
  tags?: string[];
};

export default function PublicationCard({ pub }: { pub: Publication }) {
  const { image, links } = pub;

  // Merge links[] with detail.pdf if not already included
  const extraPdf =
    pub.detail?.pdf && !links?.some((l) => l.label.toLowerCase() === "pdf")
      ? [{ label: "PDF", href: pub.detail.pdf }]
      : [];
  const allLinks = [...(links || []), ...extraPdf];

  return (
    <article className="group rounded-xl bg-transparent transition-transform duration-200 hover:-translate-y-[1px]">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Media */}
        <div className="md:w-[38%] w-full">
          {image ? (
            <div className="relative w-full h-44 sm:h-52 md:h-56 lg:h-60 flex items-center justify-center bg-white">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 38vw"
                priority={false}
              />
            </div>
          ) : (
            <div className="w-full h-44 sm:h-52 md:h-56 lg:h-60 bg-neutral-100 flex items-center justify-center text-neutral-400">
              No image
            </div>
          )}
        </div>

        {/* Content */}
        <div className="md:w-[62%] w-full flex flex-col gap-2.5 md:gap-3">
          {/* Award / highlight badge */}
          {pub.highlight && (
            <span className="inline-flex w-fit items-center rounded-full bg-amber-100 text-amber-900 px-2.5 py-0.5 text-xs font-semibold">
              {pub.highlight}
            </span>
          )}

          {/* Title */}
          <h3 className="text-neutral-900 font-semibold leading-snug">
            {pub.title}
          </h3>

          {/* Authors */}
          <p className="text-neutral-800 text-sm">
            {pub.authors.map((a, i) => (
              <span
                key={`${pub.slug}-a-${i}`}
                className={a.highlight ? "font-semibold text-[#841617]" : ""}
              >
                {a.name}
                {i < pub.authors.length - 1 ? ", " : ""}
              </span>
            ))}
          </p>

          {/* Venue */}
          {pub.venue && (
            <p className="text-neutral-600 text-sm italic">{pub.venue}</p>
          )}

          {/* Links */}
          {allLinks.length > 0 && (
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-1">
              {allLinks.map((l, i) => (
                <Link
                  key={`${pub.slug}-link-${i}`}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#9D2235] hover:text-[#7f1c2b] font-medium underline underline-offset-4"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          )}

          {/* Optional tags (kept off for minimal look) */}
          {/* {pub.tags?.length ? (
            <div className="flex flex-wrap gap-2 pt-1">
              {pub.tags.map((t) => (
                <span
                  key={`${pub.slug}-tag-${t}`}
                  className="text-xs px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-700"
                >
                  {t}
                </span>
              ))}
            </div>
          ) : null} */}
        </div>
      </div>
    </article>
  );
}
