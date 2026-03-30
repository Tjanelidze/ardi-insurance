type Props = {
  annual: number;
  monthly: number;
};

export function PriceHero({ annual, monthly }: Props) {
  return (
    <div className="bg-primary-500 mb-6 rounded-2xl p-6 text-center text-white">
      <div className="mb-1 text-sm opacity-80">წლიური პრემია</div>
      <div className="text-4xl font-bold">
        {annual.toFixed(2)} <span className="text-2xl">GEL</span>
      </div>
      <div className="mt-1 text-sm opacity-80">
        თვიური: <span className="font-semibold">{monthly.toFixed(2)} GEL</span>
      </div>
    </div>
  );
}
