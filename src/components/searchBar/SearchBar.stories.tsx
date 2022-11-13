import { ComponentMeta, ComponentStory } from '@storybook/react';
import SearchBar from './SearchBar';
export default {
  title: 'Dashboard/Components/SearchBar',
  component: SearchBar,
} as ComponentMeta<typeof SearchBar>;

export const Default: ComponentStory<typeof SearchBar> = () => <SearchBar />;
