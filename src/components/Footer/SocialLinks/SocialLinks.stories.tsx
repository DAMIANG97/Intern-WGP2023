import type { Meta, StoryObj } from '@storybook/react';
import SocialLinks from 'components/Footer/SocialLinks';
import { footerContentMock } from 'mocks/footerContentMock';

const meta: Meta<typeof SocialLinks> = {
  title: 'Components/SocialLinks',
  component: SocialLinks,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SocialLinks>;

export const SocialLinksDefault: Story = {
  parameters: {
    backgrounds: { default: 'Mine Shaft' },
  },
};

export const SocialLinksVertical: Story = {
  render: () => (
    <SocialLinks vertical socialLinks={footerContentMock.socialLinks} socialText={footerContentMock.socialText} />
  ),
  parameters: {
    backgrounds: { default: 'Mine Shaft' },
  },
};
