import styled, { css } from "styled-components";

export interface InterfaceCard {}

export const CardContainer = styled.div<InterfaceCard>(({}) => {
  return css`
    font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    background-color: black;
    padding: 24px;
  `;
});

export const CardTitle = styled.h3<InterfaceCard>(({}) => {
  return css`
    color: white;
  `;
});

export const CardBody = styled.p<InterfaceCard>(({}) => {
  return css`
    color: white;
  `;
});

export const CardFooter = styled.div<InterfaceCard>(({}) => {
  return css`
    background-color: black;
  `;
});
