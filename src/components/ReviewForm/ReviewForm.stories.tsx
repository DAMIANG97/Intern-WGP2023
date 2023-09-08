import type { Meta, StoryObj } from '@storybook/react';
import ReviewForm from 'components/ReviewForm';

const meta: Meta<typeof ReviewForm> = {
  title: 'Components/ReviewForm',
  component: ReviewForm,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ReviewForm>;

export const Primary: Story = {
  render: () => (
    <div style={{ width: '1200px' }}>
      <ReviewForm name="Camera EOS - D1" manufacturer="Canon" productCode="123" />
    </div>
  ),
};
