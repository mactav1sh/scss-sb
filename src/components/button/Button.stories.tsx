import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin5Line } from 'react-icons/ri';

import Button from './Button';

// Component with metadata
export default {
  title: 'Dashboard/Components/Button',
  component: Button,
  args: {
    content: 'click me',
    size: 'small',
  },
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

// Stories
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});

export const Edit = Template.bind({});
Edit.args = {
  content: (
    <>
      <FiEdit />
      <span>edit</span>
    </>
  ),
  variant: 'edit',
};

export const Delete = Template.bind({});
Delete.args = {
  content: (
    <>
      <RiDeleteBin5Line />
      <span>delete</span>
    </>
  ),
  variant: 'delete',
};
