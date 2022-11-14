import { ComponentMeta, ComponentStory } from '@storybook/react';
import TextInput from './textInput';

export default {
  title: 'Dashboard/Components/TextInput',
  component: TextInput,
  args: {
    placeholder: 'type anything',
  },
} as ComponentMeta<typeof TextInput>;

export const Default: ComponentStory<typeof TextInput> = (args) => (
  <TextInput {...args} />
);
