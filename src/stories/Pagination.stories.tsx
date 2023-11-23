import type { Meta, StoryObj } from '@storybook/react';

import { Pagination } from '../components/molecules/pagenation/Pagination';

const meta = {
  title: 'Molecules/Pagination',
  component: Pagination,
  tags: ['autodocs'],
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { maxPage: 6, activeIndex: 1 },
  name: '標準',
};
