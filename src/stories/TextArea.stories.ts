import type { Meta, StoryObj } from '@storybook/react';

import { TextArea } from '../components/atoms/textInput/TextArea';

const meta = {
  title: 'Atoms/TextArea',
  component: TextArea,
  tags: ['autodocs'],
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { placeholder: 'テキスト入力' },
  name: '標準',
};

export const Disabled: Story = {
  args: { placeholder: 'テキスト入力', disabled: true },
  name: '無効',
};
