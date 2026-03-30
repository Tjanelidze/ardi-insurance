import { useDarkMode } from "@/hooks/useDarkMode.ts";

export function Header() {
  const { dark, toggle } = useDarkMode();

  return (
    <header className="bg-navy-900 px-6 py-4">
      <div className="mx-auto flex max-w-2xl items-center justify-between">
        <div className="flex items-center gap-3">
          <svg width="36" height="32" viewBox="0 0 36 32" fill="none">
            <path
              d="M18 2L34 30H2L18 2Z"
              stroke="#00A693"
              strokeWidth="2.5"
              fill="none"
              strokeLinejoin="round"
            />
            <path
              d="M18 10L27 27H9L18 10Z"
              stroke="#00A693"
              strokeWidth="1.5"
              fill="none"
              strokeLinejoin="round"
            />
          </svg>
          <div>
            <div className="text-lg leading-none font-bold tracking-wide text-white">
              არდი
            </div>
            <div className="text-primary-500 text-xs">ავტომობილის დაზღვევა</div>
          </div>
        </div>

        <button
          onClick={toggle}
          className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl bg-white/10 text-white transition-colors hover:bg-white/20"
          aria-label="Toggle dark mode"
        >
          {dark ? (
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
              <circle
                cx="12"
                cy="12"
                r="5"
                stroke="currentColor"
                strokeWidth="1.8"
              />
              <path
                d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
              <path
                d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
}
