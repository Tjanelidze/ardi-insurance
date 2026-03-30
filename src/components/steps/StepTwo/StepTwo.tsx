import { PackageCard } from "@/components/ui/PackageCard/PackageCard";

import type { StepTwoProps } from "@/components/steps/StepTwo/StepTwo.types.ts";
import { ADDONS, PACKAGES } from "@/constants/insurance.constants.ts";
import { AddonRow } from "@/components/ui/AddonRow/AddonRow.tsx";

export function StepTwo({
  selectedPackage,
  addons,
  onPackageChange,
  onAddonToggle,
  error,
}: StepTwoProps) {
  return (
    <div className="p-6 sm:p-8">
      <div className="mb-8">
        <h3 className="text-primary-500 mb-4 text-xs font-semibold tracking-wider uppercase">
          პაკეტის არჩევა
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {PACKAGES.map((pkg) => (
            <PackageCard
              key={pkg.type}
              {...pkg}
              selected={selectedPackage === pkg.type}
              onSelect={() => onPackageChange(pkg.type)}
            />
          ))}
        </div>
        {error && <p className="mt-2 text-xs text-red-400">{error}</p>}
      </div>

      <div>
        <h3 className="text-primary-500 mb-4 text-xs font-semibold tracking-wider uppercase">
          დამატებითი ოფციები
        </h3>
        <div className="flex flex-col gap-3">
          {ADDONS.map((addon) => (
            <AddonRow
              key={addon.key}
              label={addon.label}
              description={addon.description}
              price={addon.price}
              selected={addons[addon.key]}
              onToggle={() => onAddonToggle(addon.key)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
