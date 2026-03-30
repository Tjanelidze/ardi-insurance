import { useEffect } from "react";
import type { Addons, DriverFields, PackageType, VehicleFields } from "../types/insurance.types";

const DRAFT_KEY = "ardi_wizard_draft";

type DraftData = {
  driverData: DriverFields;
  vehicleData: VehicleFields;
  selectedPackage: PackageType | null;
  addons: Addons;
  currentStep: 1 | 2 | 3;
};

export function saveDraft(data: DraftData) {
  localStorage.setItem(DRAFT_KEY, JSON.stringify(data));
}

export function loadDraft(): DraftData | null {
  try {
    const raw = localStorage.getItem(DRAFT_KEY);
    if (!raw) return null;

    return JSON.parse(raw) as DraftData;
  } catch {
    return null;
  }
}

export function clearDraft() {
  localStorage.removeItem(DRAFT_KEY);
}

export function useWizardDraft(data: DraftData) {
  useEffect(() => {
    // don't save if no data entered yet
    const hasData = Object.values(data.driverData).some((v) => v !== "");
    if (!hasData) return;
    saveDraft(data);
  }, [data]);
}
