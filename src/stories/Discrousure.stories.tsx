import type { Meta, StoryObj } from '@storybook/react';

import { Discrousure } from '../components/molecules/discrousure/Discrousure';

const meta = {
  title: 'Molecules/Discrousure',
  component: Discrousure,
  tags: ['autodocs'],
} satisfies Meta<typeof Discrousure>;

export default meta;
type Story = StoryObj<typeof meta>;

const Content = () => {
  return <div>コンテンツ</div>;
};

export const Default: Story = {
  args: {
    label: 'タイトル',
    content: <Content />,
  },
  name: '標準',
};
