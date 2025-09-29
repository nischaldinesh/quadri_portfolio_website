// components/Timeline.tsx
type Item = {
  year: string; // e.g., "2012" (can be "May, 2020" too)
  label?: string; // purple label (optional)
  events?: string[]; // bullets (optional)
};

export default function Timeline({ data }: { data: Item[] }) {
  return (
    <section className="w-full max-w-3xl mx-auto">
      {/* Container offset to match py-6 per item */}
      <div className="-my-6">
        {data.map((item, i) => {
          const hasLabel = !!item.label?.trim();
          const hasEvents = !!item.events?.length;

          return (
            <div
              key={`${item.year}-${i}`}
              className="relative pl-8 sm:pl-32 py-6 group"
            >
              {/* Purple label */}
              {hasLabel && (
                <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">
                  {item.label}
                </div>
              )}

              {/* Vertical line (::before) ~ Year badge ~ Title ~ Circle marker (::after) */}
              <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                {/* Year badge */}
                <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                  {item.year}
                </time>
                {/* Title = label if present, otherwise an em-dash */}
                <div className="text-xl font-bold text-slate-900">
                  {hasLabel ? item.label : "—"}
                </div>
              </div>

              {/* Content (bulleted events) */}
              {hasEvents ? (
                <ul className="text-slate-500 list-disc pl-6 space-y-1">
                  {item.events!.map((ev, idx) => (
                    <li key={idx}>{ev}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}
