import React from "react";
import { HiCursorClick } from "react-icons/hi";

import { ButtonContainer } from "./Button.styled";

export interface ButtonProps {
  variant?: string;
  label: string;
  isActive?: boolean;
  icon?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  label,
  isActive,
  icon,
  ...props
}) => {
  let prop: any = {};
  if (isActive) {
    prop["disabled"] = "disabled";
  }
  return (
    <ButtonContainer {...prop} aria-disabled={isActive} variant={variant}>
      {label}
      {icon && <HiCursorClick />}
    </ButtonContainer>
  );
};
