import type { Addons, PackageType } from "@/types/insurance.types.ts";

export const PACKAGE_LABELS: Record<PackageType, string> = {
  basic: "Basic",
  standard: "Standard",
  premium: "Premium",
};

export const ADDON_LABELS: Record<keyof Addons, string> = {
  roadsideAssistance: "Roadside Assistance",
  replacementCar: "Replacement Car",
  zeroDeductible: "0% Deductible",
};
