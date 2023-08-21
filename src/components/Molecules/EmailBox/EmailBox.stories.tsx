import type { Meta, StoryObj } from '@storybook/react';
import EmailBox from 'components/Molecules/EmailBox';

const meta: Meta<typeof EmailBox> = {
  title: 'Components/EmailBox',
  component: EmailBox,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof EmailBox>;

export const EmailBoxBlack: Story = {};
