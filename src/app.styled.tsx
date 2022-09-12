import styled, { css } from "styled-components";

export interface InterfaceApp {}

export const CardsContainer = styled.div<InterfaceApp>(({}) => {
  return css`
    font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-gap: 10px;
    padding: 20px;
  `;
});

export const SectionForm = styled.section<InterfaceApp>(({}) => {
  return css`
    display: flex;
    justify-content: center;
    padding: 30px;
  `;
});
