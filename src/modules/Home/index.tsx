import React from 'react';

import Hero from 'components/Hero';
import ProductCategories, { CategoryComponentProps } from 'components/ProductCategories';

interface HomeProps {
  heroContent: ReadonlyArray<Hybris.HeroComponentProps>;
  categoriesContent: CategoryComponentProps[];
}

const Home: React.FC<HomeProps> = ({ heroContent, categoriesContent }) => {
  return (
    <div>
      <Hero heroContent={heroContent} />
      <ProductCategories categoriesContent={categoriesContent} />
    </div>
  );
};

export default Home;
