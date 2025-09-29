import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10 py-3 sm:py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div className="mb-3 sm:mb-0">
          <h1 className="text-2xl font-bold text-gray-900">
            Ghulam Jilani Quadri
          </h1>
        </div>
        <nav>
          <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6">
            <li>
              <Link
                href="/"
                className="text-gray-400 hover:text-gray-600 font-medium text-sm sm:text-base transition-colors duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/research"
                className="text-gray-400 hover:text-gray-600 font-medium text-sm sm:text-base transition-colors duration-200"
              >
                Research
              </Link>
            </li>
            <li>
              <Link
                href="/publications"
                className="text-gray-400 hover:text-gray-600 font-medium text-sm sm:text-base transition-colors duration-200"
              >
                Publications
              </Link>
            </li>
            <li>
              <Link
                href="/teaching"
                className="text-gray-400 hover:text-gray-600 font-medium text-sm sm:text-base transition-colors duration-200"
              >
                Teaching
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
