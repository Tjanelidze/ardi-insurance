import type { PackageType } from "@/types/insurance.types.ts";

type Feature = {
  label: string;
};

export type PackageCardProps = {
  type: PackageType;
  title: string;
  rate: string;
  description: string;
  features: Feature[];
  selected: boolean;
  onSelect: () => void;
  badge?: string;
};
