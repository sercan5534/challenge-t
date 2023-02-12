import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { CouponItem } from '.';

const Story: ComponentMeta<typeof CouponItem> = {
  component: CouponItem,
  title: 'CouponItem',
};
export default Story;

const Template: ComponentStory<typeof CouponItem> = (args) => (
  <CouponItem {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  item: {
    id: 115,
    marketName: "Match Result",
    outcomeName: "Draw",
    eventName: "Besiktas - Fenerbahce",
    odd: "3.12",
    mbc: 2
  },
  onRemove: () => { }
};
