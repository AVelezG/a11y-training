import styled, { css } from "styled-components";

export interface InterfaceFooter {}

export const FooterContainer = styled.div<InterfaceFooter>(({}) => {
  return css`
    font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    display: grid;
    grid-template-columns: 30% 40% 30%;
    background-color: black;
    color: white;
    height: 50px;
    padding: 20px 10px;
    div {
      align-self: center;
    }
  `;
});

export const FooterExternalLink = styled.div<InterfaceFooter>(({}) => {
  return css`
    height: 1px;
    width: 1px;
    position: absolute;
    clip: rect(1px, 1px, 1px, 1px);
  `;
});

export const FooterAnchor = styled.a<InterfaceFooter>(({}) => {
  return css`
    color: #ff8906;
    font-weight: bold;
    &::hover {
      text-decoration: underline;
      cursor: pointer;
    }
    &::focus {
      text-decoration: underline;
    }
  `;
});

export const FooterSocialNetwork = styled.div<InterfaceFooter>(({}) => {
  return css`
    display: flex;
    justify-content: space-between;
  `;
});
