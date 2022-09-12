import React from "react";
import { HiCursorClick } from "react-icons/hi";
import { Button } from "../../atoms/Button/Button.component";

import {
  PresentationContainer,
  PresentationHeader,
  PresentationFigure,
  PresentationContainerImage,
} from "./Presentation.styled";

export interface PresentationProps {
  onClick?: () => void;
}

export const Presentation: React.FC<PresentationProps> = ({ ...props }) => {
  return (
    <PresentationContainer>
      <PresentationHeader>
        <h1>¡Welcome to this web page, I'm John Doe!</h1>
        <p>
          I'm John Doe from internet and Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Aspernatur, quas reprehenderit impedit officia odit
          omnis quis nemo, adipisci necessitatibus ut facilis a magnam nulla
          molestiae. Fugit sint magnam id ipsam!
        </p>
      </PresentationHeader>
      <PresentationContainerImage>
        <PresentationFigure>
          <img alt="Image of John Doe" src="https://i.imgur.com/KAwsWjF.jpeg" />
        </PresentationFigure>
      </PresentationContainerImage>
    </PresentationContainer>
  );
};
