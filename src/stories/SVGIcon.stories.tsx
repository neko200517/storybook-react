import type { Meta, StoryObj } from '@storybook/react';

import { SVGIcon } from '../components/atoms/icon/SVGIcon';

const meta = {
  title: 'Atoms/Icon',
  component: SVGIcon,
  tags: ['autodocs'],
} satisfies Meta<typeof SVGIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SVG_Icon_Delete: Story = {
  args: { type: 'delete' },
  name: 'SVGアイコン：削除',
};

export const SVG_Icon_Warning: Story = {
  args: { type: 'warning' },
  name: 'SVGアイコン：警告',
};
