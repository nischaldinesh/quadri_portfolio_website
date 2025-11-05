"use client";
import React from "react";

// Matches "Ghulam Jilani Quadri" or "Ghulam Jilani Quadri*"
const NAME_CAPTURE = /(Ghulam\s+Jilani\s+Quadri\*?)/gi;

export default function HighlightGJQ({ text }: { text: string }) {
  return (
    <>
      {text.split(NAME_CAPTURE).map((seg, i) =>
        seg.match(NAME_CAPTURE) ? (
          <span key={i} className="font-semibold text-[#841617]">
            {seg}
          </span>
        ) : (
          <React.Fragment key={i}>{seg}</React.Fragment>
        )
      )}
    </>
  );
}
