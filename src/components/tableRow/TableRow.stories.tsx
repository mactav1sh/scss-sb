import { ComponentMeta, ComponentStory } from '@storybook/react';
import TableRow from './TableRow';

export default {
  title: 'Dashboard/Components/TableRow',
  component: TableRow,
} as ComponentMeta<typeof TableRow>;

export const Default: ComponentStory<typeof TableRow> = (args) => (
  <TableRow {...args} />
);
