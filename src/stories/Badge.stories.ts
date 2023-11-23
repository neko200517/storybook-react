import type { Meta, StoryObj } from '@storybook/react';

import { Badge } from '../components/atoms/badge/Badge';

const meta = {
  title: 'Atoms/Badge',
  component: Badge,
  tags: ['autodocs'],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Accept: Story = {
  args: { type: 'accept', children: '承認' },
  name: '承認',
};

export const Warning: Story = {
  args: { type: 'warning', children: '注意' },
  name: '注意',
};

export const Alert: Story = {
  args: { type: 'error', children: '警告' },
  name: '警告',
};
