import type { Meta, StoryObj } from '@storybook/react';

import { DetailSearch } from '../components/organisms/detailSearch/DetailSearch';

const meta = {
  title: 'Organisms/DetailSearch',
  component: DetailSearch,
  tags: ['autodocs'],
} satisfies Meta<typeof DetailSearch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  name: '標準',
};
