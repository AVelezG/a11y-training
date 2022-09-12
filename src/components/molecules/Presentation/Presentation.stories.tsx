import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Presentation, PresentationProps } from "./Presentation.component";

export default {
  title: "molecules/Presentation",
  component: Presentation,
} as Meta;

const Template: Story<PresentationProps> = (args) => <Presentation {...args} />;

export const BasicCard = Template.bind({});
BasicCard.args = {};
