import type { AddonRowProps } from "@/components/ui/AddonRow/AddonRow.types.ts";

export function AddonRow({
  label,
  description,
  price,
  selected,
  onToggle,
}: AddonRowProps) {
  return (
    <div
      onClick={onToggle}
      className={`flex cursor-pointer items-center gap-4 rounded-xl border-2 p-4 transition-all ${
        selected
          ? "border-primary-500 bg-primary-500/5 dark:bg-primary-500/10"
          : "hover:border-primary-500/50 border-slate-200 dark:border-slate-700"
      } `}
    >
      {/* Checkbox */}
      <div
        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border-2 transition-all ${selected ? "border-primary-500 bg-primary-500" : "border-slate-300 dark:border-slate-600"} `}
      >
        {selected && (
          <svg width="10" height="10" fill="none" viewBox="0 0 24 24">
            <path
              d="M20 6L9 17l-5-5"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>

      <div className="flex-1">
        <div className="text-sm font-medium text-slate-800 dark:text-slate-100">
          {label}
        </div>
        <div className="text-xs text-slate-400">{description}</div>
      </div>

      <div className="text-primary-500 text-sm font-semibold">{price}</div>
    </div>
  );
}
