import { CheckIcon } from "@/components/ui/icons.tsx";
import type { StepIndicatorProps } from "./StepIndicator.types";

export function StepIndicator({ currentStep, steps }: StepIndicatorProps) {
  return (
    <div className="mb-8 w-full">
      <div className="flex items-center">
        {steps.map((label, i) => {
          const stepNumber = i + 1;
          const isDone = stepNumber < currentStep;
          const isActive = stepNumber === currentStep;

          return (
            <div
              key={stepNumber}
              className="flex flex-1 items-center last:flex-none"
            >
              <div className="flex flex-col items-center gap-1">
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold transition-all ${isDone ? "bg-primary-500 text-white" : ""} ${isActive ? "bg-primary-500 ring-primary-500/20 text-white ring-4" : ""} ${!isDone && !isActive ? "dark:bg-navy-800 bg-slate-100 text-slate-400" : ""} `}
                >
                  {isDone ? <CheckIcon size={16} /> : stepNumber}
                </div>
                <span
                  className={`text-xs font-medium whitespace-nowrap transition-colors ${
                    isActive
                      ? "text-primary-500"
                      : "text-slate-400 dark:text-slate-500"
                  }`}
                >
                  {label}
                </span>
              </div>

              {i < steps.length - 1 && (
                <div
                  className={`mx-2 mb-4 h-0.5 flex-1 transition-all ${
                    isDone ? "bg-primary-500" : "bg-slate-200 dark:bg-slate-700"
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
