import { newsItems } from "@/data/news";
import React from "react";

const page = () => {
  const allNews = newsItems;

  const toLinks = (link?: { label: string; href: string } | { label: string; href: string }[]) =>
    link ? (Array.isArray(link) ? link : [link]) : [];

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          News & Updates
        </h2>
        <ul className="space-y-4">
          {allNews.map((item, index) => {
            const links = toLinks(item.link);

            return (
            <li
              key={index}
              className="p-4 shadow-sm hover:shadow-md transition-shadow rounded-xl bg-white"
            >
              <div className="font-semibold text-gray-900 text-sm sm:text-base">
                {item.monthYear}
              </div>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-1">
                {item.description}
                {links.length > 0 && (
                  <span className="ml-1">
                    {links.map((l, i) => (
                      <React.Fragment key={i}>
                        <a
                          href={l.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline text-blue-600 hover:text-blue-800"
                        >
                          {l.label}
                        </a>
                        {i < links.length - 1 && <span aria-hidden="true"> · </span>}
                      </React.Fragment>
                    ))}
                  </span>
                )}
              </p>
            </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
};

export default page;
