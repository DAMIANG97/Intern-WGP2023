import React from 'react';

import CreateAccount from 'components/Organisms/CreateAccountAdvertisment';
import HeroHomePage from 'components/Organisms/HeroHomePage';
import ProductCategories, { CategoryComponentProps } from 'components/Organisms/ProductCategories';

interface HomeProps {
  heroContent: ReadonlyArray<Hybris.HeroComponentProps>;
  categoriesContent: CategoryComponentProps[];
  footerContent: Hybris.FooterComponentProps;
}

const Home: React.FC<HomeProps> = ({ heroContent, categoriesContent, footerContent }) => {
  return (
    <div>
      <HeroHomePage heroContent={heroContent} footerContent={footerContent} />

      <ProductCategories categoriesContent={categoriesContent} />

      <CreateAccount />
    </div>
  );
};

export default Home;
