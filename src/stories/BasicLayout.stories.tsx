import type { Meta, StoryObj } from '@storybook/react';
import { Header } from '../components/organisms/header/Header';
import { BasicLayout } from '../components/templates/BasicLayout';

const meta = {
  title: 'Template/BasicLayout',
  component: BasicLayout,
  tags: ['autodocs'],
} satisfies Meta<typeof BasicLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

const Main = () => {
  return <div>content-area</div>;
};

const Side = () => {
  return <div>side-area</div>;
};

export const Default: Story = {
  args: {
    header: <Header />,
    main: <Main />,
    side: <Side />,
  },
  name: '標準',
};
