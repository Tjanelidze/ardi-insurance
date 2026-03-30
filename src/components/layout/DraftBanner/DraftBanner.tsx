import { useWizard } from "@/context/WizardContext.tsx";
import type { DraftBannerProps } from "@/components/layout/DraftBanner/DraftBanner.types.ts";

export function DraftBanner({ onDismiss }: DraftBannerProps) {
  const { dispatch } = useWizard();

  const handleClear = () => {
    dispatch({ type: "RESET" });
    onDismiss();
  };

  return (
    <div className="bg-primary-500/10 text-primary-500 dark:bg-primary-500/20 mx-auto mt-4 flex max-w-2xl items-center justify-between rounded-xl px-4 py-3 text-sm">
      <div className="flex items-center gap-2">
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
          <path
            d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>შენახული მონაცემები აღდგენილია</span>
      </div>
      <button
        onClick={handleClear}
        className="cursor-pointer text-xs underline opacity-70 hover:opacity-100"
      >
        გასუფთავება
      </button>
    </div>
  );
}
