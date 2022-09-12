import styled, { css } from "styled-components";

export interface InterfaceSectionImage {}

export const SectionImageContainer = styled.div<InterfaceSectionImage>(({}) => {
  return css`
    font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    background-color: black;
    background: url(https://i.imgur.com/xZZGa11.jpeg);
    background-repeat: no-repeat;
    background-size: auto;
    background-position: center;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
});

export const SectionImageHead = styled.div<InterfaceSectionImage>(({}) => {
  return css`
    color: white;
    font-size: 30px;
    font-weight: bold;
    letter-spacing: 1px;
  `;
});
