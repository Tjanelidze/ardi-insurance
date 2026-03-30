import type {
  Addons,
  DriverFields,
  PackageType,
  VehicleFields,
} from "@/types/insurance.types.ts";

export type StepThreeProps = {
  driverData: DriverFields;
  vehicleData: VehicleFields;
  selectedPackage: PackageType;
  addons: Addons;
  policyNumber: string | null;
};

export type SuccessViewProps = {
  policyNumber: string;
  annual: number;
  monthly: number;
};
