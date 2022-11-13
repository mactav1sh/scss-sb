import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SecMenuBar from './SecMenuBar';

// COMPONENT WITH METADATA
export default {
  title: 'Header/Secondary Menu',
  component: SecMenuBar,
} as ComponentMeta<typeof SecMenuBar>;

// STORIES
export const Primary: ComponentStory<typeof SecMenuBar> = (args) => (
  <SecMenuBar {...args} />
);
Primary.args = {
  links: [
    { title: 'LinkOne', linkTo: '/linkOne' },
    { title: 'LinkTwo', linkTo: '/linkTwo' },
    { title: 'LinkThree', linkTo: '/linkThree' },
    { title: 'LinkFour', linkTo: '/linkFour' },
  ],
};
