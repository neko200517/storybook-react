import type { Meta, StoryObj } from '@storybook/react';

import { CountBadge } from '../components/atoms/badge/CountBadge';

const meta = {
  title: 'Atoms/Badge',
  component: CountBadge,
  tags: ['autodocs'],
} satisfies Meta<typeof CountBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Count: Story = {
  args: { value: 0 },
  name: 'カウント',
};
