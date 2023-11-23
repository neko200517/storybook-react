import type { Meta, StoryObj } from '@storybook/react';

import { MaterialIcon } from '../components/atoms/icon/MaterialIcon';

const meta = {
  title: 'Atoms/Icon',
  component: MaterialIcon,
  tags: ['autodocs'],
} satisfies Meta<typeof MaterialIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Material_Icon: Story = {
  args: { icon: 'search' },
  name: 'マテリアルアイコン：検索',
};

export const Material_Icon_Warning: Story = {
  args: { icon: 'report_probrem', warning: true },
  name: 'マテリアルアイコン：警告',
};
