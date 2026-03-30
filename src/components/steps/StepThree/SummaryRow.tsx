type Props = {
  label: string;
  value: string;
};

export function SummaryRow({ label, value }: Props) {
  return (
    <div className="flex items-center justify-between border-b border-slate-100 py-2.5 last:border-none dark:border-slate-700">
      <span className="text-sm text-slate-500 dark:text-slate-400">
        {label}
      </span>
      <span className="text-sm font-medium text-slate-800 dark:text-slate-100">
        {value}
      </span>
    </div>
  );
}
