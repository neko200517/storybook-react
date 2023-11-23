import type { Meta, StoryObj } from '@storybook/react';
import { Header } from '../components/organisms/header/Header';
import { ThreeColumnLayout } from '../components/templates/ThreeColumnLayout';

const meta = {
  title: 'Template/ThreeColumnLayout',
  component: ThreeColumnLayout,
  tags: ['autodocs'],
} satisfies Meta<typeof ThreeColumnLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

const Main = () => {
  return <div>content-area</div>;
};

const Left = () => {
  return <div>left-side-area</div>;
};

const Right = () => {
  return <div>right-side-area</div>;
};

const Footer = () => {
  return <div>footer-area</div>;
};

export const Default: Story = {
  args: {
    header: <Header />,
    left: <Left />,
    main: <Main />,
    right: <Right />,
    footer: <Footer />,
  },
  name: '標準',
};
