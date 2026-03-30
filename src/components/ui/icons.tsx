type IconProps = {
  size?: number;
  className?: string;
};

export function ArrowLeftIcon({ size = 16, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        d="M19 12H5M5 12l7 7M5 12l7-7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowRightIcon({ size = 16, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        d="M5 12h14M14 5l7 7-7 7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CheckIcon({ size = 16, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        d="M20 6L9 17l-5-5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CheckCircleIcon({ size = 16, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      className={className}
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M8 12l3 3 5-5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function WarningIcon({ size = 16, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        d="M12 2L2 20h20L12 2z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 9v4M12 17h.01"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
