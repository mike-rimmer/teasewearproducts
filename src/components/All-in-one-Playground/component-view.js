import React from 'react';
import {View, PropTypes} from 'react-view';
import TestButton from '../testbutton/testbutton';

export default () => (
  <View
    componentName="TestButton"
    props={{
      children: {
        value: 'Hello',
        type: PropTypes.ReactNode,
        description: 'Visible label.',
      },
      onClick: {
        value: '() => setCaption('Clicked')',
        type: PropTypes.Function,
        description: 'Function called when button is clicked.',
      },
      disabled: {
        value: false,
        type: PropTypes.Boolean,
        description: 'Indicates that the button is disabled',
      },
    }}
    scope={{
      TestButton,
    }}
    imports={{
      'Sizebutton': {
        named: ['Button'],
      },
    }}
  />
);