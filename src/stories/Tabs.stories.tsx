import type { Meta, StoryObj } from '@storybook/react';

import { Tabs } from '../components/molecules/tabs/Tabs';

const meta = {
  title: 'Molecules/Tabs',
  component: Tabs,
  tags: ['autodocs'],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

const Content1 = () => {
  return <div>コンテンツ1</div>;
};
const Content2 = () => {
  return <div>コンテンツ2</div>;
};
const Content3 = () => {
  return <div>コンテンツ3</div>;
};
const Content4 = () => {
  return <div>コンテンツ4</div>;
};

export const Default: Story = {
  args: {
    tabs: [
      { label: 'Tab 1', content: <Content1 />, active: true },
      { label: 'Tab 2', content: <Content2 /> },
      { label: 'Tab 3', content: <Content3 /> },
      { label: 'Tab 4', content: <Content4 />, disabled: true },
    ],
  },
  name: '標準',
};
