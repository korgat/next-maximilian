import { ComponentStory, ComponentMeta } from '@storybook/react';
import UserItem from './UserItem';

export default {
  component: UserItem,
} as ComponentMeta<typeof UserItem>;

const Template: ComponentStory<typeof UserItem> = (args) => <UserItem {...args} />;

export const WithoutPhoto = Template.bind({});
WithoutPhoto.args = {
  user: {
    name: 'Ivan Popov',
    photo: '',
  },
  className: 'h-[50px]',
};
