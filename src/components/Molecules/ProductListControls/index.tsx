import { useState } from 'react';
import useTranslation from 'next-translate/useTranslation';

import LayoutBig from 'assets/icons/LayoutBig.svg';
import LayoutSmall from 'assets/icons/LayoutSmall.svg';
import clsx from 'clsx';
import Button from 'components/Atoms/Button';
import Select from 'components/Molecules/Select';

import styles from './ProductListControls.module.scss';

interface ProductsListControlsProps {
  products: Hybris.ProductsListProps;
  selectedOption: string | null;
  sortSubmitHandler: (selectedOption: string) => void;
  smallLayoutHandler: () => void;
  bigLayoutHandler: () => void;
  productsPerPage: string;
  toggleVisible: () => void;
}

const ProductsListControls: React.FC<ProductsListControlsProps> = ({
  products,
  sortSubmitHandler,
  smallLayoutHandler,
  bigLayoutHandler,
  selectedOption,
  productsPerPage,
  toggleVisible,
}) => {
  const { t } = useTranslation();
  const productsFrom = Number(productsPerPage) * products.pagination.currentPage + 1;
  const productTo =
    Number(productsPerPage) * (products.pagination.currentPage + 1) < products.pagination.totalResults
      ? Number(productsPerPage) * (products.pagination.currentPage + 1)
      : products.pagination.totalResults;

  const [activeLayout, setActiveLayout] = useState('big');

  const layoutButtonClickHandler = (layout: 'big' | 'small') => {
    if (layout === 'big') {
      bigLayoutHandler();
    } else {
      smallLayoutHandler();
    }
    setActiveLayout(layout);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <button
          className={clsx(styles['icon-container'], activeLayout === 'big' ? styles.dark : styles.light)}
          onClick={() => layoutButtonClickHandler('big')}
          type="button">
          <LayoutBig />
        </button>
        <button
          className={clsx(styles['icon-container'], activeLayout === 'small' ? styles.dark : styles.light)}
          onClick={() => layoutButtonClickHandler('small')}
          type="button">
          <LayoutSmall />
        </button>
        <span className={styles.text}>{`${t('components.productListControls.items')} ${productsFrom}-${productTo}
         ${t('components.productListControls.of')} ${products.pagination.totalResults}`}</span>
      </div>

      <div className={styles.container}>
        <Button className={styles['filter-open-button']} onClick={toggleVisible}>
          {t('components.productFilters.button-text')}
        </Button>
        <span className={styles.text}>{t('components.productListControls.sort')}</span>

        <Select
          options={products.sorts.map((sort) => sort.name)}
          selectedOption={selectedOption}
          submitHandler={sortSubmitHandler}
          className={styles['custom-select']}
          listModifierClass={styles['custom-select-list ']}
        />
      </div>
    </div>
  );
};

export default ProductsListControls;
