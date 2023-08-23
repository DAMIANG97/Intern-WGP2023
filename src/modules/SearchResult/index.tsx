import React, { FunctionComponent, useState } from 'react';
import useTranslation from 'next-translate/useTranslation';

import Button from 'components/Atoms/Button';
import Container from 'components/Atoms/Container';
import Hero from 'components/Organisms/Hero';
import ProductFilters from 'components/Organisms/ProductFilters';

import styles from './SearchResult.module.scss';

const TAG = 'SearchResult';

interface SearchResultPageProps {
  categoryId: string | string[];
  results: Hybris.SearchResultResponse | null;
  heroContentSearch: Hybris.HeroComponentSearchProps;
}

const SearchResult: FunctionComponent<SearchResultPageProps> = ({ heroContentSearch, categoryId, results }) => {
  const [filtersVisible, setFiltersVisible] = useState(false);
  const { t } = useTranslation();
  const toggleVisible = () => setFiltersVisible((is) => !is);
  return (
    <main className={styles['main-container']}>
      <Hero categoryId={categoryId} heroContent={heroContentSearch}></Hero>
      {results ? (
        <Container className={styles['search-result__container']}>
          <ProductFilters
            facets={results.facets}
            breadcrumbs={results.breadcrumbs}
            visible={filtersVisible}
            toggleVisible={toggleVisible}
          />
          <div>
            <Button className={styles['filter-open-button']} onClick={toggleVisible}>
              {t('components.productFilters.button-text')}
            </Button>
            <ul>
              {results.products.map((product) => {
                return <li key={product.code}>{product.name}</li>;
              })}
            </ul>
          </div>
        </Container>
      ) : (
        <Container>
          <span>categoryId = {categoryId}</span>
          <br />
          <span>No results found</span>
        </Container>
      )}
      {/* TODO: Replace with proper list component from task WGP2023-57*/}
    </main>
  );
};

SearchResult.displayName = TAG;

export default SearchResult;
