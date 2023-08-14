import React, { FunctionComponent } from 'react';

const TAG = 'SearchResult';

interface SearchResultPageProps {
  categoryId: string | string[];
}

const SearchResult: FunctionComponent<SearchResultPageProps> = ({ categoryId }) => {
  return (
    <div>
      <h2>Search Result Page</h2>
      <span>Category Id: {categoryId}</span>
    </div>
  );
};

SearchResult.displayName = TAG;

export default SearchResult;
