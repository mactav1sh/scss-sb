import { ComponentMeta, ComponentStory } from '@storybook/react';
import PageLayout from './PageLayout';
export default {
  title: 'Dashboard/Components/PageLayout',
  component: PageLayout,
  args: {
    heading: 'header',
  },
} as ComponentMeta<typeof PageLayout>;

export const Default: ComponentStory<typeof PageLayout> = (args) => (
  <PageLayout {...args} />
);
