import React, { FunctionComponent } from 'react';

const TAG = 'SearchResult';

interface SearchResultPageProps {
  categoryId: string | string[];
  products: Hybris.SearchResultProduct[];
}

const SearchResult: FunctionComponent<SearchResultPageProps> = ({ categoryId, products }) => (
  <div>
    <h2>Search Result Page</h2>
    <span>Category Id: {categoryId}</span>
    {products.length > 0 ? (
      <ul>
        {products.map((product) => {
          return <li key={product.code}>{product.name}</li>;
        })}
      </ul>
    ) : (
      <div>No results found</div>
    )}
  </div>
);

SearchResult.displayName = TAG;

export default SearchResult;
