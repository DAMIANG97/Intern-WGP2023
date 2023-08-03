import React from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

import Container from 'components/Container';
import CategoryItem from 'components/ProductCategories/CategoryItem';

import styles from './ProductCategories.module.scss';

export interface CategoryComponentProps {
  key: string;
  name: string;
  url: string;
  image: {
    url: string;
    altText: string;
  };
}

interface CategoryProps {
  categoriesContent: ReadonlyArray<CategoryComponentProps>;
}

const masonryBreakPoints = {
  [styles.breakpointTablet.toString().slice(0, -2)]: 1,
  [styles.breakpointDesktop.toString().slice(0, -2)]: 2,
};

const ProductCategories: React.FC<CategoryProps> = ({ categoriesContent }) => {
  return (
    <Container>
      <ResponsiveMasonry columnsCountBreakPoints={masonryBreakPoints}>
        <Masonry gutter="15px">
          {categoriesContent?.map((category) => (
            <CategoryItem key={category.key} name={category.name} image={category.image} url={category.url} />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </Container>
  );
};

export default ProductCategories;
