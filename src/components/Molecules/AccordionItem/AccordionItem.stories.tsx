import type { Meta, StoryObj } from '@storybook/react';
import AccordionItem from 'components/Molecules/AccordionItem';

const meta: Meta<typeof AccordionItem> = {
  title: 'Components/AccordionItem',
  component: AccordionItem,
  tags: ['autodocs'],
  args: {
    name: 'Title',
    children: (
      <>
        <div>children</div>
        <div>children</div>
        <div>children</div>
      </>
    ),
  },
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof AccordionItem>;

export const AccordionItemDefault: Story = {};
