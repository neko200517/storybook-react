import type { Meta, StoryObj } from '@storybook/react';

import { IconButton } from '../components/atoms/iconButton/IconButton';

const meta = {
  title: 'Atoms/IconButton',
  component: IconButton,
  tags: ['autodocs'],
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const IconLeft: Story = {
  args: { children: 'Icon Button', icon: 'info', align: 'left' },
  name: 'アイコン左',
};

export const IconRight: Story = {
  args: { children: 'Icon Button', icon: 'info', align: 'right' },
  name: 'アイコン右',
};

export const IconOnly: Story = {
  args: { children: '', icon: 'info', iconOnly: true },
  name: 'アイコンのみ',
};
