import styled, { css } from "styled-components";

export interface InterfaceMenu {}

export const MenuContainer = styled.nav<InterfaceMenu>(({}) => {
  return css`
    font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    background-color: black;
    height: 80px;
    display: grid;
  `;
});

export const MenuList = styled.ul<InterfaceMenu>(({}) => {
  return css`
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style-type: none;
  `;
});

export const MenuItem = styled.li<InterfaceMenu>(({}) => {
  return css`
    margin: 0px;
    a {
      margin: 0;
      color: white;
      font-weight: bold;
    }
    a:hover {
      color: #ff8906;
      text-decoration: underline;
    }
  `;
});
