import { newsItems } from "@/data/news";
import React from "react";

const page = () => {
  const latestNews = newsItems.slice(4, -1);
  return (
    <main>
      <div className="max-w-7xl mx-auto mt-4 ">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Older News & Updates
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
    </main>
  );
};

export default page;
