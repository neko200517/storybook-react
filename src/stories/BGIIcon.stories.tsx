import type { Meta, StoryObj } from '@storybook/react';

import { BGIIcon } from '../components/atoms/icon/BGIIcon';

const meta = {
  title: 'Atoms/Icon',
  component: BGIIcon,
  tags: ['autodocs'],
} satisfies Meta<typeof BGIIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BGI_Icon_Black: Story = {
  args: { colorTheme: 'black' },
  name: 'BGIアイコン：黒',
};

export const BGI_Icon_White: Story = {
  args: { colorTheme: 'white' },
  name: 'BGIアイコン：白',
};
