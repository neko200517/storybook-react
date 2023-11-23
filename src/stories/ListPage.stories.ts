import type { Meta, StoryObj } from '@storybook/react';

import { ListPage } from '../components/pages/ListPage';

const meta = {
  title: 'Pages/ListPage',
  component: ListPage,
  tags: ['autodocs'],
} satisfies Meta<typeof ListPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  name: '標準',
};
