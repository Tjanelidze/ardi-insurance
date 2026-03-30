import type {
  Addons,
  DriverFields,
  PackageType,
  StepOneRef,
  VehicleFields,
} from "@/types/insurance.types.ts";
import type { RefObject } from "react";
import * as React from "react";
import {
  INITIAL_ADDONS,
  INITIAL_DRIVER,
  INITIAL_VEHICLE,
} from "@/constants/insurance.constants.ts";

export type WizardState = {
  currentStep: 1 | 2 | 3;
  driverData: DriverFields;
  vehicleData: VehicleFields;
  selectedPackage: PackageType | null;
  addons: Addons;
  packageError: string | undefined;
  isSubmitting: boolean;
  policyNumber: string | null;
};

export type WizardAction =
  | { type: "SET_DRIVER_DATA"; payload: DriverFields }
  | { type: "SET_VEHICLE_DATA"; payload: VehicleFields }
  | { type: "SET_PACKAGE"; payload: PackageType }
  | { type: "SET_PACKAGE_ERROR"; payload: string | undefined }
  | { type: "TOGGLE_ADDON"; payload: keyof Addons }
  | { type: "NEXT_STEP" }
  | { type: "PREV_STEP" }
  | { type: "SET_SUBMITTING"; payload: boolean }
  | { type: "SET_POLICY_NUMBER"; payload: string }
  | { type: "RESET" };

export type WizardContextValue = {
  state: WizardState;
  dispatch: React.Dispatch<WizardAction>;
  step1Ref: RefObject<StepOneRef | null>;
  handleNext: () => Promise<void>;
  handleBack: () => void;
};

export const INITIAL_STATE: WizardState = {
  currentStep: 1,
  driverData: INITIAL_DRIVER,
  vehicleData: INITIAL_VEHICLE,
  selectedPackage: null,
  addons: INITIAL_ADDONS,
  packageError: undefined,
  isSubmitting: false,
  policyNumber: null,
};
