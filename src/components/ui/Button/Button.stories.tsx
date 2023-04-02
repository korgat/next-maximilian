import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IconsE } from '../Icon/Icon.types';
import Button from './Button';

export default {
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const WithLeftIcon = Template.bind({});
WithLeftIcon.args = {
  text: 'My button',
  leftIcon: IconsE.USER,
  fill: 'bg-red-500 hover:bg-red-600',
};
export const WithRightIcon = Template.bind({});
WithRightIcon.args = {
  text: 'My button',
  rightIcon: IconsE.USER,
  fill: 'true',
};
export const WithoutIcon = Template.bind({});
WithoutIcon.args = {
  text: 'My button',
  fill: 'true',
  className: '',
};
export const Outlined = Template.bind({});
Outlined.args = {
  text: 'My button',
  outlined: 'true',
};
export const LinkButton = Template.bind({});
Outlined.args = {
  text: 'My button',
  className: 'hover:text-gray-600',
};
