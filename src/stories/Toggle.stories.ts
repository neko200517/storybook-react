import type { Meta, StoryObj } from '@storybook/react';

import { Toggle } from '../components/atoms/toggle/Toggle';

const meta = {
  title: 'Atoms/Toggle',
  component: Toggle,
  tags: ['autodocs'],
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  name: 'OFF',
};

export const Checked: Story = {
  args: { checked: true },
  name: 'ON',
};
