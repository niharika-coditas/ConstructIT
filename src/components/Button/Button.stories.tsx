import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'components/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {}
} as Meta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Button> = args => (
  <Button {...args}>Button</Button>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  buttonType: 'Primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
  buttonType: 'Secondary'
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  buttonType: 'Tertiary'
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  fullWidth: true
};
