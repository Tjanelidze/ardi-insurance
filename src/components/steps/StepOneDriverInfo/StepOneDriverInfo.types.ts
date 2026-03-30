import type { DriverFields, VehicleFields } from "@/types/insurance.types.ts";

export type StepOneDriverInfoProps = {
  driverData: DriverFields;
  vehicleData: VehicleFields;
  onDriverChange: (data: DriverFields) => void;
  onVehicleChange: (data: VehicleFields) => void;
};
