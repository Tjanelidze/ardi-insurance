import * as React from "react";

export type WizardLayoutProps = {
  currentStep: 1 | 2 | 3;
  onNext: () => void;
  onBack: () => void;
  children: React.ReactNode;
  isSubmitting?: boolean;
  isComplete?: boolean;
};
