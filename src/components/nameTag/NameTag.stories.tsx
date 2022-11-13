import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import NameTag from './NameTag';

export default {
  title: 'Dashboard/Components/NameTag',
  component: NameTag,
  args: {
    name: 'abdelrahman moustafa',
  },
} as ComponentMeta<typeof NameTag>;

export const Default: ComponentStory<typeof NameTag> = (args) => (
  <NameTag {...args} />
);
