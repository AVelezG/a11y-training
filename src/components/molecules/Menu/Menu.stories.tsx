import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Menu, MenuProps } from "./Menu.component";

export default {
  title: "molecules/Menu",
  component: Menu,
} as Meta;

const Template: Story<MenuProps> = (args) => <Menu {...args} />;

export const BasicMenu = Template.bind({});
BasicMenu.args = {};
