import type { Addons, PackageType } from "@/types/insurance.types.ts";

export type StepTwoProps = {
  selectedPackage: PackageType | null;
  addons: Addons;
  onPackageChange: (pkg: PackageType) => void;
  onAddonToggle: (key: keyof Addons) => void;
  error?: string;
};
