import React from "react";
import { HiCursorClick } from "react-icons/hi";
import { Button } from "../../atoms/Button/Button.component";

import { MenuContainer, MenuList, MenuItem } from "./Menu.styled";

export interface MenuProps {
  onClick?: () => void;
}

export const Menu: React.FC<MenuProps> = ({ ...props }) => {
  return (
    <MenuContainer>
      <MenuList>
        <MenuItem>
          <a href="/our-work/">Item 1</a>
        </MenuItem>
        <MenuItem>
          <a href="/our-work/">Item 2</a>
        </MenuItem>
        <MenuItem>
          <a href="/our-work/">Item 3</a>
        </MenuItem>
        <MenuItem>
          <a href="/our-work/">Google</a>
        </MenuItem>
        <MenuItem>
          <Button variant="primary" label="Button Primary" />
        </MenuItem>
      </MenuList>
    </MenuContainer>
  );
};
