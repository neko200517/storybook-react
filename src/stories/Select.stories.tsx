import type { Meta, StoryObj } from '@storybook/react';

import { Select } from '../components/atoms/selectbox/Select';

const meta = {
  title: 'Atoms/Select',
  component: Select,
  tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <option value='' hidden>
          選択してください
        </option>
        <option value='1'>選択1</option>
        <option value='2'>選択2</option>
        <option value='3'>選択3</option>
        <option value='4'>選択4</option>
      </>
    ),
  },
  name: '標準',
};

export const Disabled: Story = {
  args: {
    children: (
      <>
        <option value='' hidden>
          選択してください
        </option>
      </>
    ),
    disabled: true,
  },
  name: '無効',
};
