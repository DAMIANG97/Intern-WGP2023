import React, { FunctionComponent } from 'react';

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

const SearchResult: FunctionComponent<SearchResultPageProps> = ({ heroContentSearch, categoryId, results }) => (
  <div>
    <Hero categoryId={categoryId} heroContent={heroContentSearch}></Hero>
    <h2>Search Result Page</h2>
    <span>Category Id: {categoryId}</span>
    {results ? (
      <Container className={styles['search-result__container']}>
        <ProductFilters facets={results.facets} breadcrumbs={results.breadcrumbs} />
        <ul>
          {results.products.map((product) => {
            return <li key={product.code}>{product.name}</li>;
          })}
        </ul>
      </Container>
    ) : (
      <div>No results found</div>
    )}
    {/* TODO: Replace with proper list component from task WGP2023-57*/}
  </div>
);

SearchResult.displayName = TAG;

export default SearchResult;
