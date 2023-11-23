import type { Meta, StoryObj } from '@storybook/react';

import { Dropdown } from '../components/atoms/dropdown/Dropdown';

const meta = {
  title: 'Atoms/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

const handleSelect = (value: number) => {
  console.log(value);
};

export const Default: Story = {
  args: {
    menus: ['メニュー1', 'メニュー2', 'メニュー3'],
    onSelect: handleSelect,
  },
  name: '標準',
};
