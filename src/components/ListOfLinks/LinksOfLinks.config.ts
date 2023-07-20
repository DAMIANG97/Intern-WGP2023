import type { LinkComponentProps } from 'components/LinkComponent';

export const LINKS_DATA = [
  {
    href: '/',
    children: 'Home',
  },
  {
    href: '/Products',
    children: 'Products',
  },
  {
    href: '/Elements',
    children: 'Elements',
  },
  {
    href: '/Pages',
    children: 'Pages',
  },
  {
    href: '/Shop',
    children: 'Shop',
  },
  {
    href: '/Sale',
    children: 'Sale',
  },
] as const satisfies ReadonlyArray<LinkComponentProps>;
