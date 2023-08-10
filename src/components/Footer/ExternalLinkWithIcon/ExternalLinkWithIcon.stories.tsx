import type { Meta, StoryObj } from '@storybook/react';
import Icon from 'assets/icons/Vector.svg';
import ExternalLinkWithIcon from 'components/Footer/ExternalLinkWithIcon';

const meta: Meta<typeof ExternalLinkWithIcon> = {
  title: 'Components/ExternalLinkWithIcon',
  component: ExternalLinkWithIcon,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof ExternalLinkWithIcon>;
export const ExternalLinkWithIconDefault: Story = {
  render: () => (
    <div style={{ color: '#bbbbbb', textAlign: 'center' }}>
      <ExternalLinkWithIcon href="/#">
        <Icon />
      </ExternalLinkWithIcon>
    </div>
  ),
};
