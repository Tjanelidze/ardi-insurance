import type {
  Addons,
  DriverFields,
  PackageType,
  PremiumBreakdown,
  VehicleFields,
} from "../types/insurance.types";
import { PACKAGE_RATES } from "@/constants/insurance.constants.ts";

function getAge(birthDate: string): number {
  const bd = new Date(birthDate);
  const today = new Date();
  const age = today.getFullYear() - bd.getFullYear();
  const hasHadBirthday =
    today >= new Date(today.getFullYear(), bd.getMonth(), bd.getDate());

  return hasHadBirthday ? age : age - 1;
}

export function calculatePremium(
  driver: DriverFields,
  vehicle: VehicleFields,
  pkg: PackageType,
  addons: Addons,
): PremiumBreakdown {
  const value = parseFloat(vehicle.marketValue);
  const base = value * PACKAGE_RATES[pkg];

  // age surcharge
  const age = getAge(driver.birthDate);
  const ageSurchargeRate = age >= 18 && age <= 25 ? 0.2 : age >= 61 ? 0.15 : 0;
  const ageSurcharge = base * ageSurchargeRate;

  // car age surcharge
  const carAge = new Date().getFullYear() - parseInt(vehicle.year);
  const carAgeSurcharge = carAge > 10 ? base * 0.1 : 0;

  // addons
  const roadsideAssistance = addons.roadsideAssistance ? 40 : 0;
  const replacementCar = addons.replacementCar ? 90 : 0;

  // subtotal before deductible
  const subtotal =
    base + ageSurcharge + carAgeSurcharge + roadsideAssistance + replacementCar;

  // zero deductible applies to subtotal
  const zeroDeductible = addons.zeroDeductible ? subtotal * 0.15 : 0;

  const annual = subtotal + zeroDeductible;
  const monthly = Math.round((annual / 12) * 100) / 100;

  return {
    base,
    ageSurcharge,
    carAgeSurcharge,
    roadsideAssistance,
    replacementCar,
    zeroDeductible,
    annual,
    monthly,
  };
}
