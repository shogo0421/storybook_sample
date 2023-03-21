import React from "react";
import { within, userEvent } from "@storybook/testing-library";

import { App } from "../../test-app/src/App";

export default {
  title: "pages/App",
  component: App,
};

const Template = () => <App />;

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const appPage = Template.bind({});
