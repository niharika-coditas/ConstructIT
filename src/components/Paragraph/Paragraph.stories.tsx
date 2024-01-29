import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { Paragraph } from './Paragraph';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'components/Paragraph',
  component: Paragraph,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {}
} as Meta<typeof Paragraph>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Paragraph> = args => (
  <Paragraph {...args}>Paragraph</Paragraph>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  type: 'Default'
};

export const Small = Template.bind({});
Small.args = {
  type: 'S'
};

export const ExtraSmall = Template.bind({});
ExtraSmall.args = {
  type: 'XS'
};

export const LabelText = Template.bind({});
LabelText.args = {
  type: 'Label'
};

export const Error = Template.bind({});
Error.args = {
  type: 'Error'
};

export const Bold = Template.bind({});
Bold.args = {
  bold: true
};
