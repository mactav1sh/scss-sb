import { ComponentMeta, ComponentStory } from '@storybook/react';
import { users } from '../../data/users';
import Table from './Table';

export default {
  title: 'Dashboard/Components/Table',
  component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const Empty = Template.bind({});
export const Filled = Template.bind({});
Filled.args = {
  data: users,
};
