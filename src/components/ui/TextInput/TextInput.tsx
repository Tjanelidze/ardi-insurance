import type { TextInputProps } from "@/components/ui/TextInput/TextInput.types.ts";

export function TextInput({
  label,
  error,
  required,
  actionButton,
  ...rest
}: TextInputProps) {
  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={rest.id ?? rest.name}
        className="text-sm font-medium text-slate-600 dark:text-slate-400"
      >
        {label}
        {required && <span className="ml-1 text-red-400">*</span>}
      </label>

      <div className="relative flex items-center">
        <input
          {...rest}
          id={rest.id ?? rest.name}
          className={`dark:bg-navy-900 w-full cursor-text rounded-xl border bg-white px-4 py-2.5 text-sm text-slate-800 transition-colors outline-none placeholder:text-slate-300 dark:text-slate-100 dark:placeholder:text-slate-600 ${actionButton ? "pr-28" : ""} ${
            error
              ? "border-red-400 focus:border-red-400"
              : "focus:border-primary-500 dark:focus:border-primary-500 border-slate-200 dark:border-slate-700"
          } `}
        />
        {actionButton && (
          <button
            type="button"
            onClick={actionButton.onClick}
            disabled={actionButton.loading || !rest.value}
            className="bg-primary-500 hover:bg-primary-600 absolute right-2 flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold text-white transition-colors disabled:opacity-40"
            style={{
              cursor:
                !rest.value || actionButton.loading ? "not-allowed" : "pointer",
            }}
          >
            {actionButton.loading ? (
              <>
                <svg
                  className="pointer-events-none animate-spin"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeDasharray="32"
                    strokeDashoffset="12"
                  />
                </svg>
                <span className="pointer-events-none">მოლოდინი...</span>
              </>
            ) : (
              <span className="pointer-events-none">შემოწმება</span>
            )}
          </button>
        )}
      </div>

      {error && <span className="text-xs text-red-400">{error}</span>}
    </div>
  );
}
