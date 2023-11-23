import type { Meta, StoryObj } from '@storybook/react';

import { Heading } from '../components/atoms/heading/Heading';

const meta = {
  title: 'Atoms/Heading',
  component: Heading,
  tags: ['autodocs'],
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const H1: Story = {
  args: { children: '見出し Lv1', level: 1 },
  name: '見出し Lv1',
};

export const H2: Story = {
  args: { children: '見出し Lv2', level: 2 },
  name: '見出し Lv2',
};

export const H3: Story = {
  args: { children: '見出し Lv3', level: 3 },
  name: '見出し Lv3',
};

export const H4: Story = {
  args: { children: '見出し Lv4', level: 4 },
  name: '見出し Lv4',
};

export const H5: Story = {
  args: { children: '見出し Lv5', level: 5 },
  name: '見出し Lv5',
};

export const H6: Story = {
  args: { children: '見出し Lv6', level: 6 },
  name: '見出し Lv6',
};
