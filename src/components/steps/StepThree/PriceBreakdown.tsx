import { BreakdownRow } from "./BreakdownRow";

import type { PackageType, PremiumBreakdown } from "@/types/insurance.types";

type Props = {
  premium: PremiumBreakdown;
  selectedPackage: PackageType;
};

const PACKAGE_LABELS: Record<PackageType, string> = {
  basic: "Basic",
  standard: "Standard",
  premium: "Premium",
};

export function PriceBreakdown({ premium, selectedPackage }: Props) {
  return (
    <div className="rounded-xl bg-slate-50 p-4 dark:bg-slate-800/50">
      <h3 className="text-primary-500 mb-3 text-xs font-semibold tracking-wider uppercase">
        ფასის დეტალები
      </h3>
      <BreakdownRow
        label={`საბაზო (${PACKAGE_LABELS[selectedPackage]})`}
        value={`${premium.base.toFixed(2)} GEL`}
      />
      {premium.ageSurcharge > 0 && (
        <BreakdownRow
          label="ასაკის დანამატი"
          value={`+${premium.ageSurcharge.toFixed(2)} GEL`}
        />
      )}
      {premium.carAgeSurcharge > 0 && (
        <BreakdownRow
          label="ავტომობილის სიძველე (+10%)"
          value={`+${premium.carAgeSurcharge.toFixed(2)} GEL`}
        />
      )}
      {premium.roadsideAssistance > 0 && (
        <BreakdownRow
          label="Roadside Assistance"
          value={`+${premium.roadsideAssistance.toFixed(2)} GEL`}
        />
      )}
      {premium.replacementCar > 0 && (
        <BreakdownRow
          label="Replacement Car"
          value={`+${premium.replacementCar.toFixed(2)} GEL`}
        />
      )}
      {premium.zeroDeductible > 0 && (
        <BreakdownRow
          label="0% Deductible (+15%)"
          value={`+${premium.zeroDeductible.toFixed(2)} GEL`}
        />
      )}
      <div className="mt-2 border-t border-slate-200 pt-2 dark:border-slate-700">
        <BreakdownRow
          label="სულ წლიური"
          value={`${premium.annual.toFixed(2)} GEL`}
          highlight
        />
      </div>
    </div>
  );
}
