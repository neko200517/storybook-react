import type { Meta, StoryObj } from '@storybook/react';

import { SearchInput } from '../components/molecules/searchInput/SearchInput';

const meta = {
  title: 'Molecules/SearchInput',
  component: SearchInput,
  tags: ['autodocs'],
} satisfies Meta<typeof SearchInput>;

export default meta;
type Story = StoryObj<typeof meta>;

const onSearch = (keyword: string) => {
  console.log(keyword);
};

export const Default: Story = {
  args: { onSearch: onSearch },
  name: '標準',
};
