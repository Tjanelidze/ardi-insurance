import { PriceHero } from "./PriceHero";
import { PriceBreakdown } from "./PriceBreakdown";
import { SummarySection } from "./SummarySection";
import { SummaryRow } from "./SummaryRow";
import type { Addons } from "@/types/insurance.types";
import type { StepThreeProps } from "@/components/steps/StepThree/StepThree.types.ts";
import { calculatePremium } from "@/utils/premium.ts";
import { getPolicyDates } from "@/utils/date.ts";
import { ADDON_LABELS, PACKAGE_LABELS } from "@/components/steps/StepThree/StepThree.constants.ts";
import { SuccessView } from "@/components/steps/StepThree/SuccessView.tsx";

export default function StepThree({
  driverData,
  vehicleData,
  selectedPackage,
  addons,
  policyNumber,
}: StepThreeProps) {
  const premium = calculatePremium(
    driverData,
    vehicleData,
    selectedPackage,
    addons,
  );
  const { start, end } = getPolicyDates();

  const activeAddons = (Object.keys(addons) as (keyof Addons)[]).filter(
    (k) => addons[k],
  );

  if (policyNumber) {
    return (
      <SuccessView
        policyNumber={policyNumber}
        annual={premium.annual}
        monthly={premium.monthly}
      />
    );
  }

  return (
    <div className="p-6 sm:p-8">
      <PriceHero annual={premium.annual} monthly={premium.monthly} />

      <SummarySection title="მძღოლი">
        <SummaryRow
          label="სრული სახელი"
          value={`${driverData.firstName} ${driverData.lastName}`}
        />
        <SummaryRow label="პირადი ნომერი" value={driverData.idNumber} />
        <SummaryRow label="ტელეფონი" value={driverData.phone} />
      </SummarySection>

      <SummarySection title="ავტომობილი">
        <SummaryRow label="სახელმწიფო ნომერი" value={vehicleData.plateNumber} />
        <SummaryRow
          label="მარკა / მოდელი"
          value={`${vehicleData.brand} ${vehicleData.model}`}
        />
        <SummaryRow label="გამოშვების წელი" value={vehicleData.year} />
        <SummaryRow
          label="საბაზრო ღირებულება"
          value={`${parseFloat(vehicleData.marketValue).toLocaleString()} GEL`}
        />
      </SummarySection>

      <SummarySection title="პოლისი">
        <SummaryRow label="პაკეტი" value={PACKAGE_LABELS[selectedPackage]} />
        <SummaryRow
          label="დამატებითი ოფციები"
          value={
            activeAddons.length
              ? activeAddons.map((k) => ADDON_LABELS[k]).join(", ")
              : "არ არის არჩეული"
          }
        />
        <SummaryRow label="დაწყების თარიღი" value={start} />
        <SummaryRow label="დასრულების თარიღი" value={end} />
      </SummarySection>

      <PriceBreakdown premium={premium} selectedPackage={selectedPackage} />
    </div>
  );
}
