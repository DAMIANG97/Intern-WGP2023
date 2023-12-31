import type { Meta, StoryObj } from '@storybook/react';
import Footer from 'components/Organisms/Footer';
import { footerContentMock } from 'mocks/footerContentMock';
import { localeOptionsMock } from 'mocks/localeOptionsMock';

const meta: Meta<typeof Footer> = {
  title: 'Components/Footer',
  component: Footer,
  tags: ['autodocs'],
  args: {
    footerContent: footerContentMock,
    localeOptions: localeOptionsMock,
  },
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const FooterDesktop: Story = {};

export const FooterMobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};
