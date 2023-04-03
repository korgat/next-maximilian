import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IconsE } from '../Icon/Icon.types';
import Logo from './Logo';

export default {
  component: Logo,
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo />;

export const WithLeftIcon = Template.bind({});
