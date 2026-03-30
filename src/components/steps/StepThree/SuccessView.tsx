import { CheckCircleIcon } from "@/components/ui/icons";
import type { SuccessViewProps } from "@/components/steps/StepThree/StepThree.types.ts";

export function SuccessView({
  policyNumber,
  annual,
  monthly,
}: SuccessViewProps) {
  return (
    <div className="flex flex-col items-center p-8 text-center">
      <div className="bg-primary-500/10 mb-4 flex h-16 w-16 items-center justify-center rounded-full">
        <CheckCircleIcon size={32} className="text-primary-500" />
      </div>
      <h2 className="mb-1 text-xl font-semibold text-slate-800 dark:text-slate-100">
        პოლისი გაიცა!
      </h2>
      <p className="mb-6 text-sm text-slate-400">
        მომდევნო 24 საათში მიიღებთ დამადასტურებელ ელ-ფოსტას
      </p>

      <div className="mb-6 w-full rounded-xl bg-slate-50 p-4 dark:bg-slate-800/50">
        <div className="mb-1 text-xs text-slate-400">პოლისის ნომერი</div>
        <div className="text-primary-500 text-lg font-bold">{policyNumber}</div>
      </div>

      <div className="flex w-full gap-4">
        <div className="flex-1 rounded-xl bg-slate-50 p-4 text-center dark:bg-slate-800/50">
          <div className="mb-1 text-xs text-slate-400">წლიური</div>
          <div className="font-semibold text-slate-800 dark:text-slate-100">
            {annual.toFixed(2)} GEL
          </div>
        </div>
        <div className="flex-1 rounded-xl bg-slate-50 p-4 text-center dark:bg-slate-800/50">
          <div className="mb-1 text-xs text-slate-400">თვიური</div>
          <div className="font-semibold text-slate-800 dark:text-slate-100">
            {monthly.toFixed(2)} GEL
          </div>
        </div>
      </div>
    </div>
  );
}
