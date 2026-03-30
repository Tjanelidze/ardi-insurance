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
};
