import type { Meta, StoryObj } from '@storybook/react';
import ProductFilters from 'components/Organisms/ProductFilters';
import { breadcrumbs, facets, toggleVisible } from 'mocks/productFiltersMock';

const meta: Meta<typeof ProductFilters> = {
  title: 'Components/ProductFilters',
  component: ProductFilters,
  tags: ['autodocs'],
  args: {
    facets: facets,
    breadcrumbs: breadcrumbs,
    visible: true,
    toggleVisible: toggleVisible,
  },
};

export default meta;

type Story = StoryObj<typeof ProductFilters>;

export const Primary: Story = {};
