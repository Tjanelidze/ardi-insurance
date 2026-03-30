import type { Addons, DriverFields, PackageType, VehicleFields } from "@/types/insurance.types";

export type PolicySubmitPayload = {
  driver: DriverFields;
  vehicle: VehicleFields;
  package: PackageType;
  addons: Addons;
};

export type PolicySubmitResponse = {
  policyNumber: string;
};

export async function submitPolicy(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _: PolicySubmitPayload,
): Promise<PolicySubmitResponse> {
  await new Promise((r) => setTimeout(r, 1500));
  const policyNumber = `ARDI-${Date.now().toString().slice(-6)}`;

  return { policyNumber };
}
