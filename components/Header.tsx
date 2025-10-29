/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/research", label: "Research" },
  { href: "/publications", label: "Publications" },
  { href: "/lab", label: "Lab" },
  { href: "/teaching", label: "Teaching" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(href + "/");

  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
      setTimeout(() => closeBtnRef.current?.focus(), 0);
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70 shadow-sm">
      {/* top border accent */}
      {/* <div className="h-0.5 w-full bg-gradient-to-r from-[#841617] via-[#a3232b] to-[#841617] opacity-80" /> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center min-w-0">
          <Link
            href="/"
            className="group outline-none focus-visible:ring-2 focus-visible:ring-[#841617] rounded"
          >
            <h1
              className="text-xl sm:text-2xl font-serif font-semibold text-[#841617]
                         tracking-tight transition-colors"
              title="Go to Home"
            >
              Ghulam Jilani Quadri
            </h1>
            <p className="sr-only">Home</p>
          </Link>
        </div>

        {/* Desktop nav */}
        <nav className="hidden sm:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={[
                      "relative inline-flex items-center px-12 text-sm sm:text-base font-bold transition",
                      active
                        ? "text-[#841617]"
                        : "text-gray-600 hover:text-[#841617]",
                    ].join(" ")}
                  >
                    {/* underline indicator */}
                    {/* <span
                      className={[
                        "absolute inset-x-2 -bottom-[2px] h-0.5 rounded",
                        active
                          ? "bg-[#841617]"
                          : "bg-transparent group-hover:bg-[#841617]/30",
                      ].join(" ")}
                    /> */}
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label="Open menu"
          aria-controls="mobile-sheet"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className="sm:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#841617] focus-visible:ring-offset-2 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.8}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 7h16M4 12h16M4 17h16"
            />
          </svg>
        </button>
      </div>

      {/* Backdrop */}
      <div
        className={[
          "fixed inset-0 z-40 bg-black/40 backdrop-blur-[1px] transition-opacity duration-200",
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        ].join(" ")}
        onClick={() => setOpen(false)}
      />

      {/* Slide-over (mobile) */}
      <aside
        id="mobile-sheet"
        role="dialog"
        aria-modal="true"
        className={[
          "fixed right-0 top-0 z-50 h-screen w-80 max-w-[85%] bg-white shadow-2xl",
          "transform transition-transform duration-300 ease-out will-change-transform",
          open ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
      >
        {/* sheet header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
          <span className="text-lg font-serif font-semibold text-[#841617]">
            Menu
          </span>
          <button
            ref={closeBtnRef}
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#841617] focus-visible:ring-offset-2 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 6l12 12M18 6l-12 12"
              />
            </svg>
          </button>
        </div>

        {/* sheet body */}
        <nav className="px-3 py-4">
          <ul className="space-y-1">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={[
                      "block rounded-lg px-3 py-2 text-base font-medium transition-colors",
                      active
                        ? "text-[#841617] bg-[#841617]/10 ring-1 ring-inset ring-[#841617]/20"
                        : "text-gray-800 hover:bg-gray-100 hover:text-[#841617]",
                    ].join(" ")}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* subtle bottom gradient edge */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-black/5 to-transparent" />
      </aside>
    </header>
  );
}
