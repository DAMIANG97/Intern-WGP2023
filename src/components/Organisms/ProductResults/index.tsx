import { FunctionComponent, useState } from 'react';
import { useRouter } from 'next/router';

import PageControls from 'components/Molecules/PageControls';
import ProductItemList from 'components/Molecules/ProductItemsList';
import ProductListControls from 'components/Molecules/ProductListControls';

import styles from './ProductResults.module.scss';

interface ProductResultsProps {
  products: Hybris.ProductsListProps;
  toggleVisible: () => void;
}

const DEFAULT_SORT = {
  name: 'Relevance',
  code: 'relevance',
};

const ProductResults: FunctionComponent<ProductResultsProps> = ({ products, toggleVisible }) => {
  const [isLayoutBig, setLayoutBig] = useState<boolean>(true);
  const [pageSize, setPageSize] = useState<string>('20');
  const [page, setPage] = useState<number>(0);

  const [selectedSort, setSelectedSort] = useState<string | null>(
    products.sorts.find((sort) => sort.selected === true)?.name ?? DEFAULT_SORT.name,
  );
  const [selectedSortCode, setSelectedSortCode] = useState<string | null>(
    products.sorts.find((sort) => sort.name === selectedSort)?.code ?? DEFAULT_SORT.code,
  );

  const router = useRouter();
  const categoryId = router.query.categoryId;
  const query = router.query.query;

  const smallLayoutHandler = () => {
    setLayoutBig(false);
  };

  const bigLayoutHandler = () => {
    setLayoutBig(true);
  };

  const sortSelectSubmitHandler = (sortOption: string) => {
    setSelectedSort(sortOption);
    const sortOptionCode = products.sorts.find((option) => option.name === sortOption)?.code ?? DEFAULT_SORT.code;
    setSelectedSortCode(sortOptionCode);
    router.push({
      pathname: `/search-result/${categoryId}`,
      query: {
        currentPage: page,
        fields: 'FULL',
        sort: sortOptionCode,
        pageSize: pageSize,
        query: query,
      },
    });
  };

  const numberOfProductsSelectHandler = (pageSizeOption: string) => {
    setPageSize(pageSizeOption);
    router.push({
      pathname: `/search-result/${categoryId}`,
      query: {
        currentPage: page,
        fields: 'FULL',
        sort: selectedSortCode,
        pageSize: pageSizeOption,
        query: query,
      },
    });
  };

  const leftArrowHandler = () => {
    if (page > 0) {
      const nextPage = page - 1;
      setPage(nextPage);
      router.push({
        pathname: `/search-result/${categoryId}`,
        query: {
          currentPage: nextPage,
          fields: 'FULL',
          sort: selectedSortCode,
          pageSize: pageSize,
          query: query,
        },
      });
    }
  };

  const rightArrowHandler = () => {
    if (page < products.pagination.totalPages - 1) {
      const nextPage = page + 1;
      setPage(nextPage);
      router.push({
        pathname: `/search-result/${categoryId}`,
        query: {
          currentPage: nextPage,
          fields: 'FULL',
          sort: selectedSortCode,
          pageSize: pageSize,
          query: query,
        },
      });
    }
  };

  const pageNumberHandler = (pageNumber: number) => {
    setPage(pageNumber - 1);
    router.push({
      pathname: `/search-result/${categoryId}`,
      query: {
        currentPage: pageNumber - 1,
        fields: 'FULL',
        sort: selectedSortCode,
        pageSize: pageSize,
        query: query,
      },
    });
  };

  return (
    <div className={styles.wrapper}>
      <ProductListControls
        products={products}
        smallLayoutHandler={smallLayoutHandler}
        bigLayoutHandler={bigLayoutHandler}
        sortSubmitHandler={sortSelectSubmitHandler}
        selectedOption={selectedSort}
        productsPerPage={pageSize}
        toggleVisible={toggleVisible}
      />
      <ProductItemList
        className={isLayoutBig ? styles['products-list-big'] : styles['products-list-small']}
        products={products.products}
      />
      <PageControls
        numberOfPages={products.pagination.totalPages}
        numberOfProductsSelectHandler={numberOfProductsSelectHandler}
        pageSizeOption={pageSize}
        leftArrowHandler={leftArrowHandler}
        rightArrowHandler={rightArrowHandler}
        pageNumberHandler={pageNumberHandler}
        currentPage={page}
      />
    </div>
  );
};

export default ProductResults;
