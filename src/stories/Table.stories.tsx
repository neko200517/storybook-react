import type { Meta, StoryObj } from '@storybook/react';

import { Table } from '../components/atoms/table/Table';
import { ListData } from '../data/ListData';

const meta = {
  title: 'Atoms/Table',
  component: Table,
  tags: ['autodocs'],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    headers: ListData.headers,
    rows: ListData.rows,
  },
  name: '標準',
};
