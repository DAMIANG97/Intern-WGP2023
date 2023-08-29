import React, { FunctionComponent, useState } from 'react';

import Container from 'components/Atoms/Container';
import Hero from 'components/Organisms/Hero';
import ProductFilters from 'components/Organisms/ProductFilters';
import ProductResults from 'components/Organisms/ProductResults';

import styles from './SearchResult.module.scss';

const TAG = 'SearchResult';

interface SearchResultPageProps {
  categoryId: string | string[];
  products: Hybris.ProductsListProps;
  heroContentSearch: Hybris.HeroComponentSearchProps;
}

const SearchResult: FunctionComponent<SearchResultPageProps> = ({ heroContentSearch, categoryId, products }) => {
  const [filtersVisible, setFiltersVisible] = useState(false);
  const toggleVisible = () => setFiltersVisible((is) => !is);
  return (
    <main className={styles['main-container']}>
      <Hero categoryId={categoryId} heroContent={heroContentSearch}></Hero>
      {products ? (
        <Container className={styles['search-result__container']}>
          <ProductFilters
            facets={products.facets}
            breadcrumbs={products.breadcrumbs}
            visible={filtersVisible}
            toggleVisible={toggleVisible}
          />

          <ProductResults products={products} toggleVisible={toggleVisible} />
        </Container>
      ) : (
        <Container>
          <span>categoryId = {categoryId}</span>
          <br />
          <span>No results found</span>
        </Container>
      )}
    </main>
  );
};

SearchResult.displayName = TAG;

export default SearchResult;
