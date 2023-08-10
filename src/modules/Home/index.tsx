import React from 'react';

import Hero from 'components/Hero';
import ProductCategories, { CategoryComponentProps } from 'components/ProductCategories';

interface HomeProps {
  heroContent: ReadonlyArray<Hybris.HeroComponentProps>;
  categoriesContent: CategoryComponentProps[];
  footerContent: Hybris.FooterComponentProps;
}

const Home: React.FC<HomeProps> = ({ heroContent, categoriesContent, footerContent }) => {
  return (
    <div>
      <Hero heroContent={heroContent} footerContent={footerContent} />
      <ProductCategories categoriesContent={categoriesContent} />
    </div>
  );
};

export default Home;
