type Props = {
  label: string;
  value: string;
  highlight?: boolean;
};

export function BreakdownRow({ label, value, highlight }: Props) {
  return (
    <div className="flex items-center justify-between py-1.5">
      <span
        className={`text-xs ${
          highlight
            ? "font-medium text-slate-700 dark:text-slate-200"
            : "text-slate-400"
        }`}
      >
        {label}
      </span>
      <span
        className={`text-xs ${
          highlight
            ? "text-primary-500 font-semibold"
            : "text-slate-500 dark:text-slate-400"
        }`}
      >
        {value}
      </span>
    </div>
  );
}
