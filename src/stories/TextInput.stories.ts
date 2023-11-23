import type { Meta, StoryObj } from '@storybook/react';

import { TextInput } from '../components/atoms/textInput/TextInput';

const meta = {
  title: 'Atoms/TextInput',
  component: TextInput,
  tags: ['autodocs'],
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: { placeholder: 'テキスト入力', type: 'text' },
  name: 'テキスト入力',
};

export const Password: Story = {
  args: { placeholder: 'パスワード入力', type: 'password' },
  name: 'パスワード入力',
};

export const Email: Story = {
  args: { placeholder: 'メールアドレス入力', type: 'email' },
  name: 'メールアドレス入力',
};

export const URL: Story = {
  args: { placeholder: 'URL入力', type: 'url' },
  name: 'URL入力',
};

export const Error: Story = {
  args: { placeholder: 'テキスト入力', type: 'text', error: true },
  name: 'エラー表示',
};
