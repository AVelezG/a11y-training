import styled, { css } from "styled-components";

export interface InterfaceForm {}

export const FormContainer = styled.form<InterfaceForm>(({}) => {
  return css`
    font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    background-color: black;
    color: white;
    padding: 24px;
    width: 500px;
  `;
});

export const FormElements = styled.div<InterfaceForm>(({}) => {
  return css`
    display: flex;
    flex-direction: column;
  `;
});

export const FormInputButton = styled.input<InterfaceForm>(({}) => {
  return css`
    margin-top: 20px;
    padding: 10px;
    background-color: #ff8906;
    color: black;
    font-weight: bold;
    border: 2px solid #ff8906;
    font-size: 15px;
    &:hover {
      cursor: pointer;
      border: 2px solid black;
      background: white;
    }
  `;
});

export const FormLabel = styled.label<InterfaceForm>(({}) => {
  return css`
    margin-top: 10px;
  `;
});

export const FormInput = styled.input<InterfaceForm>(({}) => {
  return css`
    font-size: 18px;
    /**
        Rule: 2.4.7 Focus Visible
        More Info: https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0&currentsidebar=%23col_overview&levels=aaa#focus-visible
        Tool: manual
         */
    /* Solution */
    /* remove outline: none */
  `;
});

export const FormError = styled.p<InterfaceForm>(({}) => {
  return css`
    color: red;
    font-weight: bold;
  `;
});
