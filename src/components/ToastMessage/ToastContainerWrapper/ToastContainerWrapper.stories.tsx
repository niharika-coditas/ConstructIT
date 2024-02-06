import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { ToastContainerWrapper } from './ToastContainerWrapper';
import { toastSuccess } from '../ToastSuccessContainer/utils';
import { toastError } from '../ToastErrorContainer/utils';
import { toastWarning } from '../ToastWarningContainer/utils';
import { toastInfo } from '../ToastInfoContainer/utils';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'components/ToastContainerWrapper',
  component: ToastContainerWrapper,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {}
} as Meta<typeof ToastContainerWrapper>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof ToastContainerWrapper> = args => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <ToastContainerWrapper {...args} />
    <button onClick={() => toastSuccess('Success!')}>
      Show Success Notification
    </button>
    <button onClick={() => toastError('Error!')} style={{ marginTop: 20 }}>
      Show Error Notification
    </button>
    <button onClick={() => toastWarning('Warning!')} style={{ marginTop: 20 }}>
      Show Warning Notification
    </button>
    <button onClick={() => toastInfo('Info!')} style={{ marginTop: 20 }}>
      Show Info Notification
    </button>
  </div>
);

export const Test = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Test.args = {};
