import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { PageLoader } from "./PageLoader";

const meta: Meta<typeof PageLoader> = {
  title: "components/PageLoader",
  component: PageLoader,
};

export default meta;

const Template: StoryFn<typeof PageLoader> = args => (
  <>
    <div>The quick brown fox jumped over the crazy dog</div>
    <PageLoader {...args} />
    <div>The quick brown fox jumped over the crazy dog</div>
  </>
);

export const Primary = Template.bind({});

Primary.args = {
  show: true,
};
