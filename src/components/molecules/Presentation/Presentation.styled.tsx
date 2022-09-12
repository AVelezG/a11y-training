import styled, { css } from "styled-components";

export interface InterfacePresentation {}

export const PresentationContainer = styled.div<InterfacePresentation>(({}) => {
  return css`
    font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    background-color: black;
    padding: 24px;
    height: 300px;
    display: grid;
    grid-template-columns: 50% 50%;
  `;
});

export const PresentationHeader = styled.div<InterfacePresentation>(({}) => {
  return css`
    color: white;
    align-self: center;
  `;
});

export const PresentationContainerImage = styled.div<InterfacePresentation>(
  ({}) => {
    return css`
      height: inherit;
    `;
  },
);
export const PresentationFigure = styled.figure<InterfacePresentation>(({}) => {
  return css`
    height: 100%;
    img {
      height: 100%;
    }
  `;
});
