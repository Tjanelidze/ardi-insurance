import {
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useReducer,
  useRef,
} from "react";
import {
  type WizardAction,
  type WizardContextValue,
  type WizardState,
} from "@/types/wizardcontext.types.ts";
import { submitPolicy } from "@/api/policyApi.ts";
import type { StepOneRef } from "@/types/insurance.types.ts";
import {
  clearDraft,
  loadDraft,
  useWizardDraft,
} from "@/hooks/useWizardDraft.ts";
import {
  INITIAL_ADDONS,
  INITIAL_DRIVER,
  INITIAL_VEHICLE,
} from "@/constants/insurance.constants.ts";

function wizardReducer(state: WizardState, action: WizardAction): WizardState {
  switch (action.type) {
    case "SET_DRIVER_DATA":
      return { ...state, driverData: action.payload };
    case "SET_VEHICLE_DATA":
      return { ...state, vehicleData: action.payload };
    case "SET_PACKAGE":
      return {
        ...state,
        selectedPackage: action.payload,
        packageError: undefined,
      };
    case "SET_PACKAGE_ERROR":
      return { ...state, packageError: action.payload };
    case "TOGGLE_ADDON":
      return {
        ...state,
        addons: {
          ...state.addons,
          [action.payload]: !state.addons[action.payload],
        },
      };
    case "NEXT_STEP":
      return {
        ...state,
        currentStep: Math.min(3, state.currentStep + 1) as 1 | 2 | 3,
      };
    case "PREV_STEP":
      return {
        ...state,
        currentStep: Math.max(1, state.currentStep - 1) as 1 | 2 | 3,
      };
    case "SET_SUBMITTING":
      return { ...state, isSubmitting: action.payload };
    case "SET_POLICY_NUMBER":
      return { ...state, policyNumber: action.payload };
    case "RESET":
      return {
        currentStep: 1,
        driverData: INITIAL_DRIVER,
        vehicleData: INITIAL_VEHICLE,
        selectedPackage: null,
        addons: INITIAL_ADDONS,
        packageError: undefined,
        isSubmitting: false,
        policyNumber: null,
      };
    default:
      return state;
  }
}

function getInitialState(): WizardState {
  const draft = loadDraft();

  return {
    currentStep: draft?.currentStep ?? 1,
    driverData: draft?.driverData ?? INITIAL_DRIVER,
    vehicleData: draft?.vehicleData ?? INITIAL_VEHICLE,
    selectedPackage: draft?.selectedPackage ?? null,
    addons: draft?.addons ?? INITIAL_ADDONS,
    packageError: undefined,
    isSubmitting: false,
    policyNumber: null,
  };
}

const WizardContext = createContext<WizardContextValue | null>(null);

export function WizardProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(
    wizardReducer,
    undefined,
    getInitialState,
  );
  const step1Ref = useRef<StepOneRef | null>(null);

  useWizardDraft({
    driverData: state.driverData,
    vehicleData: state.vehicleData,
    selectedPackage: state.selectedPackage,
    addons: state.addons,
    currentStep: state.currentStep,
  });

  useEffect(() => {
    if (state.policyNumber) clearDraft();
  }, [state.policyNumber]);

  const handleBack = () => dispatch({ type: "PREV_STEP" });

  const handleNext = async () => {
    if (state.currentStep === 1) {
      const isValid = step1Ref.current?.validate();
      if (!isValid) return;
    }

    if (state.currentStep === 2) {
      if (!state.selectedPackage) {
        dispatch({
          type: "SET_PACKAGE_ERROR",
          payload: "გთხოვთ აირჩიოთ პაკეტი",
        });

        return;
      }
    }

    if (state.currentStep === 3) {
      if (!state.selectedPackage) return;
      dispatch({ type: "SET_SUBMITTING", payload: true });

      try {
        const res = await submitPolicy({
          driver: state.driverData,
          vehicle: state.vehicleData,
          package: state.selectedPackage,
          addons: state.addons,
        });
        dispatch({ type: "SET_POLICY_NUMBER", payload: res.policyNumber });
      } finally {
        dispatch({ type: "SET_SUBMITTING", payload: false });
      }

      return;
    }

    dispatch({ type: "NEXT_STEP" });
  };

  return (
    <WizardContext.Provider
      value={{ state, dispatch, step1Ref, handleNext, handleBack }}
    >
      {children}
    </WizardContext.Provider>
  );
}

export function useWizard() {
  const ctx = useContext(WizardContext);
  if (!ctx) throw new Error("useWizard must be used inside WizardProvider");

  return ctx;
}
