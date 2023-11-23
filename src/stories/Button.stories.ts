import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../components/atoms/button/Button';

const meta = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: { children: 'Button' },
  name: '標準',
};

export const Primary: Story = {
  args: { children: 'Button', variant: 'primary' },
  name: 'プライマリ',
};

export const Outline: Story = {
  args: { children: 'Button', variant: 'outline' },
  name: 'アウトライン',
};
