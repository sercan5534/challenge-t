import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { OutcomeItem } from '.';

const Story: ComponentMeta<typeof OutcomeItem> = {
  component: OutcomeItem,
  title: 'OutcomeItem',
};
export default Story;

const Template: ComponentStory<typeof OutcomeItem> = (args) => (
  <div style={{ width: "90px" }}><OutcomeItem {...args} /></div>
);

export const Primary = Template.bind({});
Primary.args = {
  selected: false,
  flag: 'up',

  event:{
    id: 115,
    marketName: "",
    outcomeName: "",
    eventName: "",
    odd: "3.12",
    mbc: 2
  }
};
