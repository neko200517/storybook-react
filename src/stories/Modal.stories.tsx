import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from '../components/molecules/modal/Modal';

const meta = {
  title: 'Molecules/Modal',
  component: Modal,
  tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

const handleOk = () => {
  alert('ok');
};

const handleCancel = () => {
  alert('cancel');
};

export const Default: Story = {
  args: {
    header: <p>ダイアログタイトル</p>,
    content: (
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nemo
        dolorum totam molestias quia, facilis aliquam in, dolorem ducimus, sunt
        enim eligendi repellendus commodi blanditiis error. Sequi eius
        reprehenderit iusto.
      </p>
    ),
    onOk: handleOk,
    onCancel: handleCancel,
  },
  name: '標準',
};
