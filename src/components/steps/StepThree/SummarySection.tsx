type Props = {
  title: string;
  children: React.ReactNode;
};

export function SummarySection({ title, children }: Props) {
  return (
    <div className="mb-6">
      <h3 className="text-primary-500 mb-3 text-xs font-semibold tracking-wider uppercase">
        {title}
      </h3>
      <div className="rounded-xl border border-slate-100 px-4 dark:border-slate-700">
        {children}
      </div>
    </div>
  );
}
