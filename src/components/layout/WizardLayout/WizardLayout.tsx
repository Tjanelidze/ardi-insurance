import { StepIndicator } from "../../ui/StepIndicator/StepIndicator.tsx";
import { ArrowLeftIcon, ArrowRightIcon, CheckIcon } from "@/components/ui/icons.tsx";
import type { WizardLayoutProps } from "@/components/layout/WizardLayout/WizardLayout.types.ts";
import { STEPS } from "@/components/layout/WizardLayout/WizardLayout.constants.ts";

export function WizardLayout({
  currentStep,
  onNext,
  onBack,
  children,
}: WizardLayoutProps) {
  return (
    <div className="flex flex-col items-center px-4 py-10">
      <div className="w-full max-w-2xl">
        <StepIndicator currentStep={currentStep} steps={STEPS} />

        <div className="dark:bg-navy-800 rounded-2xl bg-white shadow-sm">
          {children}
        </div>

        <div className="mt-4 flex gap-3">
          <button
            onClick={onBack}
            disabled={currentStep === 1}
            className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl border border-slate-200 py-3 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 disabled:pointer-events-none disabled:opacity-40 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-700"
          >
            <ArrowLeftIcon />
            <span>უკან</span>
          </button>

          <button
            onClick={onNext}
            className="bg-primary-500 hover:bg-primary-600 flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl py-3 text-sm font-medium text-white transition-colors"
          >
            {currentStep === 3 ? (
              <>
                <span>დადასტურება</span>
                <CheckIcon />
              </>
            ) : (
              <>
                <span>შემდეგი</span>
                <ArrowRightIcon />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
