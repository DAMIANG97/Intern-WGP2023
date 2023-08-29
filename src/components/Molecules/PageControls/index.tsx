import PaginationArrow from 'assets/icons/paginationArrow.svg';
import clsx from 'clsx';
import Button from 'components/Atoms/Button';
import Select from 'components/Molecules/Select';
import range from 'lodash/range';

import styles from './PageControls.module.scss';

interface PageControllsProps {
  numberOfPages: number;
  numberOfProductsSelectHandler: (pageSizeOption: string) => void;
  pageSizeOption: string;
  leftArrowHandler: () => void;
  rightArrowHandler: () => void;
  pageNumberHandler: (page: number) => void;
  currentPage: number;
}

const numberOfProductsOptions = ['9', '16', '21', '30'];

const PageControls: React.FC<PageControllsProps> = ({
  numberOfPages,
  numberOfProductsSelectHandler,
  pageSizeOption,
  leftArrowHandler,
  rightArrowHandler,
  pageNumberHandler,
  currentPage,
}) => {
  const pages = range(1, numberOfPages);

  return (
    <div className={styles.container}>
      {currentPage !== 0 && (
        <Button onClick={leftArrowHandler} className={styles['arrow-button']}>
          <PaginationArrow className={clsx(styles.arrow, styles['arrow-left'])} />
        </Button>
      )}
      <div className={styles.pagination}>
        {pages.map((page) => (
          <button
            className={styles['page-number']}
            key={page}
            onClick={() => pageNumberHandler(page)}
            aria-current={Number(page) === currentPage + 1}>
            {page}
          </button>
        ))}
      </div>

      <div className={styles.wrapper}>
        {currentPage + 2 < numberOfPages && (
          <Button onClick={rightArrowHandler} className={styles['arrow-button']}>
            <PaginationArrow className={styles.arrow} />
          </Button>
        )}
        <span className={styles.text}>Show</span>
        <Select
          options={numberOfProductsOptions}
          selectedOption={pageSizeOption}
          submitHandler={numberOfProductsSelectHandler}
          className={styles['number-select']}
        />
        <span className={styles.text}>per page</span>
      </div>
    </div>
  );
};

export default PageControls;
