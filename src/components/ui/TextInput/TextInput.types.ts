import * as React from "react";

export type ActionButton = {
  label: string;
  onClick: () => void;
  loading?: boolean;
};

export type TextInputProps = {
  label: string;
  error?: string;
  required?: boolean;
  actionButton?: ActionButton;
} & React.InputHTMLAttributes<HTMLInputElement>;
