import { Header } from "./components/layout/Header";

import { WizardLayout } from "@/components/layout/WizardLayout/WizardLayout.tsx";
import { StepTwo } from "@/components/steps/StepTwo/StepTwo.tsx";
import { usePreventUnload } from "@/hooks/usePreventUnload.ts";
import StepThree from "@/components/steps/StepThree";
import { StepOneDriverInfo } from "@/components/steps/StepOneDriverInfo/StepOneDriverInfo.tsx";
import { useWizard } from "@/context/WizardContext.tsx";
import { useState } from "react";
import { loadDraft } from "@/hooks/useWizardDraft.ts";
import { DraftBanner } from "@/components/layout/DraftBanner/DraftBanner.tsx";

function App() {
  const { state, dispatch, step1Ref, handleNext, handleBack } = useWizard();
  const [showDraftBanner, setShowDraftBanner] = useState(() => {
    const draft = loadDraft();

    return (
      draft !== null && Object.values(draft.driverData).some((v) => v !== "")
    );
  });

  const hasData = Object.values(state.driverData).some((v) => v !== "");
  usePreventUnload(hasData);

  return (
    <div className="dark:bg-navy-900 min-h-screen bg-slate-50 transition-colors duration-200">
      <Header />

      {showDraftBanner && (
        <DraftBanner onDismiss={() => setShowDraftBanner(false)} />
      )}

      <WizardLayout
        currentStep={state.currentStep}
        onNext={handleNext}
        onBack={handleBack}
        isSubmitting={state.isSubmitting}
        isComplete={!!state.policyNumber}
      >
        {state.currentStep === 1 && (
          <StepOneDriverInfo
            ref={step1Ref}
            driverData={state.driverData}
            vehicleData={state.vehicleData}
            onDriverChange={(data) =>
              dispatch({ type: "SET_DRIVER_DATA", payload: data })
            }
            onVehicleChange={(data) =>
              dispatch({ type: "SET_VEHICLE_DATA", payload: data })
            }
          />
        )}
        {state.currentStep === 2 && (
          <StepTwo
            selectedPackage={state.selectedPackage}
            addons={state.addons}
            onPackageChange={(pkg) =>
              dispatch({ type: "SET_PACKAGE", payload: pkg })
            }
            onAddonToggle={(key) =>
              dispatch({ type: "TOGGLE_ADDON", payload: key })
            }
            error={state.packageError}
          />
        )}
        {state.currentStep === 3 && state.selectedPackage && (
          <StepThree
            driverData={state.driverData}
            vehicleData={state.vehicleData}
            selectedPackage={state.selectedPackage}
            addons={state.addons}
            policyNumber={state.policyNumber}
          />
        )}
      </WizardLayout>
    </div>
  );
}

export default App;
