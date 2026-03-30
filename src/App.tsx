import { useRef, useState } from "react";
import { Header } from "./components/layout/Header";

import {
  type Addons,
  type DriverFields,
  type PackageType,
  type StepOneRef,
  type VehicleFields
} from "./types/insurance.types";
import { INITIAL_ADDONS, INITIAL_DRIVER, INITIAL_VEHICLE } from "@/constants/insurance.constants.ts";
import { WizardLayout } from "@/components/layout/WizardLayout/WizardLayout.tsx";
import { StepOneDriverInfo } from "@/components/steps/StepOneDriverInfo/StepOneDriverInfo.tsx";
import { StepTwo } from "@/components/steps/StepTwo/StepTwo.tsx";

type Step = 1 | 2 | 3;

function App() {
  const [step, setStep] = useState<Step>(1);
  const [driverData, setDriverData] = useState<DriverFields>(INITIAL_DRIVER);
  const [vehicleData, setVehicleData] =
    useState<VehicleFields>(INITIAL_VEHICLE);
  const [selectedPackage, setSelectedPackage] = useState<PackageType | null>(
    null,
  );
  const [addons, setAddons] = useState<Addons>(INITIAL_ADDONS);
  const [packageError, setPackageError] = useState<string>();

  const step1Ref = useRef<StepOneRef>(null);

  const handleNext = () => {
    if (step === 1) {
      const isValid = step1Ref.current?.validate();
      if (!isValid) return;
    }

    if (step === 2) {
      if (!selectedPackage) {
        setPackageError("გთხოვთ აირჩიოთ პაკეტი");

        return;
      }
      setPackageError(undefined);
    }
    setStep((s) => Math.min(3, s + 1) as Step);
  };
  const handleBack = () => setStep((s) => Math.max(1, s - 1) as Step);

  const handleAddonToggle = (key: keyof Addons) => {
    setAddons((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="dark:bg-navy-900 min-h-screen bg-slate-50 transition-colors duration-200">
      <Header />
      <WizardLayout currentStep={step} onNext={handleNext} onBack={handleBack}>
        {step === 1 && (
          <StepOneDriverInfo
            ref={step1Ref}
            driverData={driverData}
            vehicleData={vehicleData}
            onDriverChange={setDriverData}
            onVehicleChange={setVehicleData}
          />
        )}
        {step === 2 && (
          <StepTwo
            selectedPackage={selectedPackage}
            addons={addons}
            onPackageChange={setSelectedPackage}
            onAddonToggle={handleAddonToggle}
            error={packageError}
          />
        )}
        {step === 3 && (
          <p className="p-8 text-center text-sm text-slate-400">Step 3</p>
        )}
      </WizardLayout>
    </div>
  );
}

export default App;
