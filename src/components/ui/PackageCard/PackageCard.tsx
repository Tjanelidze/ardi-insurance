import type { PackageCardProps } from "@/components/ui/PackageCard/PackageCard.types.ts";

export function PackageCard({
  title,
  rate,
  description,
  features,
  selected,
  onSelect,
  badge,
}: PackageCardProps) {
  return (
    <div
      onClick={onSelect}
      className={`relative cursor-pointer rounded-2xl border-2 p-5 transition-all ${
        selected
          ? "border-primary-500 bg-primary-500/5 dark:bg-primary-500/10"
          : "hover:border-primary-500/50 border-slate-200 dark:border-slate-700"
      } `}
    >
      {badge && (
        <div className="bg-primary-500 absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-0.5 text-xs font-semibold text-white">
          {badge}
        </div>
      )}

      <div className="mb-3 flex items-start justify-between">
        <div>
          <div className="font-semibold text-slate-800 dark:text-slate-100">
            {title}
          </div>
          <div className="text-xs text-slate-400">{description}</div>
        </div>
        <span
          className={`rounded-full px-2.5 py-1 text-xs font-semibold transition-colors ${selected ? "bg-primary-500 text-white" : "text-primary-500 bg-slate-100 dark:bg-slate-800"} `}
        >
          {rate}
        </span>
      </div>

      <div className="space-y-1.5">
        {features.map((f, i) => (
          <div
            key={i}
            className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400"
          >
            <svg
              width="14"
              height="14"
              fill="none"
              viewBox="0 0 24 24"
              className="text-primary-500 shrink-0"
            >
              <path
                d="M20 6L9 17l-5-5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {f.label}
          </div>
        ))}
      </div>
    </div>
  );
}
