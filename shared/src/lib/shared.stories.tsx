import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Shared } from './shared';

const Story: ComponentMeta<typeof Shared> = {
  component: Shared,
  title: 'Shared',
};
export default Story;

const Template: ComponentStory<typeof Shared> = (args) => <Shared {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
