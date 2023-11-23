import type { Meta, StoryObj } from '@storybook/react';

import { Radio } from '../components/atoms/radio/Radio';

const meta = {
  title: 'Atoms/Radio',
  component: Radio,
  tags: ['autodocs'],
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { radios: [{ label: 'Radio1' }, { label: 'Radio2' }] },
  name: 'チェック無し',
};

export const Checked: Story = {
  args: { radios: [{ label: 'Radio1', checked: true }, { label: 'Radio2' }] },
  name: 'チェック有り',
};

export const NonText: Story = {
  args: { radios: [{ label: '' }, { label: '' }] },
  name: 'テキスト無し',
};
