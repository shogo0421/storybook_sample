import React from "react";

import { Button } from "../../test-app/src/atoms/Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "atoms/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    onClick: () => {
      return;
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args}>{args.children}</Button>;

export const RedButton = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
RedButton.args = {
  background: "red",
  children: "Button",
};

export const BlueButton = Template.bind({});
BlueButton.args = {
  background: "blue",
  children: "Button",
};
