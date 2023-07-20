import type { Meta, StoryObj } from '@storybook/react';
import LinkComponent from 'components/LinkComponent';
import ListOfLinks from 'components/ListOfLinks';

const meta: Meta<typeof ListOfLinks> = {
  title: 'Components/ListOfLinks',
  component: ListOfLinks,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      values: [
        { name: 'dark', value: '#212121' },
        { name: 'green', value: '#7db800' },
        { name: 'white', value: '#fff' },
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof ListOfLinks>;

export const Primary: Story = {
  render: () => (
    <div>
      <LinkComponent href="#">Home</LinkComponent>
      <LinkComponent href="#">Products</LinkComponent>
      <LinkComponent href="#">Elements</LinkComponent>
      <LinkComponent href="#">Pages</LinkComponent>
      <LinkComponent href="#">Shop</LinkComponent>
      <LinkComponent href="#">Sale</LinkComponent>
    </div>
  ),

  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const Mobile: Story = {
  render: () => (
    <div>
      <LinkComponent aria-current="true" href="#">
        Menu
      </LinkComponent>
      <LinkComponent href="#">Account</LinkComponent>
      <LinkComponent href="#">Settings</LinkComponent>
    </div>
  ),
  parameters: {
    backgrounds: { default: 'white' },
  },
};
