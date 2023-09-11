import type { Meta, StoryObj } from '@storybook/react';
import ApplyDiscountSection from 'components/Organisms/ApplyDiscountSection';

const meta: Meta<typeof ApplyDiscountSection> = {
  title: 'Components/ApplyDiscountSection',
  component: ApplyDiscountSection,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ApplyDiscountSection>;

export const Primary: Story = {};
