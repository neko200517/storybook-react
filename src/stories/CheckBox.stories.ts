import type { Meta, StoryObj } from '@storybook/react';

import { CheckBox } from '../components/atoms/checkbox/CheckBox';

const meta = {
  title: 'Atoms/CheckBox',
  component: CheckBox,
  tags: ['autodocs'],
} satisfies Meta<typeof CheckBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { label: 'CheckBox' },
  name: 'チェック無し',
};

export const Checked: Story = {
  args: { label: 'CheckBox', checked: true },
  name: 'チェック有り',
};

export const NonText: Story = {
  args: {},
  name: 'テキスト無し',
};
