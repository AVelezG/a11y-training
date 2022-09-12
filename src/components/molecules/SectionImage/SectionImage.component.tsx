import React from "react";
import { HiCursorClick } from "react-icons/hi";

import { SectionImageContainer, SectionImageHead } from "./SectionImage.styled";

export interface SectionImageProps {
  onClick?: () => void;
  children?: any;
}

export const SectionImage: React.FC<SectionImageProps> = ({ children }) => {
  return (
    <SectionImageContainer>
      <SectionImageHead role="heading" aria-level={2}>
        Heading with role
        {children}
      </SectionImageHead>
    </SectionImageContainer>
  );
};
