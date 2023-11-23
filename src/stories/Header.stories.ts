import type { Meta, StoryObj } from '@storybook/react';

import { Header } from '../components/organisms/header/Header';

const meta = {
  title: 'Organisms/Header',
  component: Header,
  tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  name: '標準',
};
