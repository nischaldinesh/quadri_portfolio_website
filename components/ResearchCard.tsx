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
  return (
    <article className="rounded-2xl border border-gray-200 shadow-sm overflow-hidden bg-white">
      {/* Title banner */}
      <div className="bg-[#9D2235] text-white px-6 py-4">
        <h3 className="text-xl font-semibold leading-tight">{project.title}</h3>
      </div>

      {/* Body: images left, text right */}
      <div className="flex flex-col lg:flex-row">
        {/* Images */}
        <div className="lg:w-[40%] w-full p-4 flex justify-center">
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-3 w-[90%] lg:w-[80%] xl:w-[70%]">
            {project.images.slice(0, 2).map((img, idx) => (
              <div
                key={idx}
                className="rounded-xl overflow-hidden ring-1 ring-gray-200"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={640}
                  height={480}
                  className="w-full h-auto object-cover"
                  priority={idx === 0}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Text section */}
        <div className="lg:w-[60%] w-full p-6 flex flex-col gap-4">
          <p className="text-gray-700 leading-relaxed text-justify">
            {project.summary}
          </p>

          {/* Example Publications */}
          {project.publications && project.publications.length > 0 && (
            <div>
              <h4 className="text-[#9D2235] font-semibold mb-2">
                Example Publications:
              </h4>
              <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
                {project.publications.map((pub, idx) => (
                  <p key={idx} className="text-justify">
                    {pub.citation}{" "}
                    {pub.href && (
                      <Link
                        href={pub.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#9D2235] hover:text-[#7f1c2b] font-medium ml-1"
                      >
                        [View Paper]
                      </Link>
                    )}
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
