import { useState } from 'react';
import AnimateHeight from 'react-animate-height';
import useTranslation from 'next-translate/useTranslation';

import ArrowSort from 'assets/icons/arrowSort.svg';
import Container from 'components/Atoms/Container';
import AccordionItem from 'components/Molecules/AccordionItem';
import ReviewCard, { ReviewProps } from 'components/Molecules/ReviewCard';
import ReviewForm from 'components/ReviewForm';

import styles from './ProductReview.module.scss';

interface ReviewListProps {
  reviews: ReadonlyArray<ReviewProps>;
  productName: string;
  productManufacturer: string;
  productCode: string;
  linkStatus: boolean;
  linkHandler: (is: boolean) => void;
}

const ProductReview: React.FC<ReviewListProps> = ({
  reviews,
  productName,
  productManufacturer,
  productCode,
  linkStatus,
  linkHandler,
}) => {
  const { t } = useTranslation('product');

  const [showAllReviews, setShowAllReviews] = useState(false);
  const visibleReviews = [...reviews].slice(3);

  const showAllReviewsButtonHandler = () => {
    setShowAllReviews(!showAllReviews);
  };

  return (
    <section id="reviews">
      <AccordionItem
        name={t('components.productReview.sectionName')}
        modiferclassName={styles['product__accordionItem--open']}
        className={styles.product__accordionItem__title}
        linkStatus={linkStatus}
        linkHandler={linkHandler}>
        <Container>
          <h2 className={styles.name}> {t('components.productReview.sectionTitle')}</h2>
          <div className={styles.container}>
            <div className={styles.box}>
              {[...reviews].slice(0, 3).map((review) => (
                <ReviewCard key={review.id} {...review} />
              ))}
              <AnimateHeight height={showAllReviews ? 'auto' : 0} className={styles['animated-height']}>
                {showAllReviews && visibleReviews.map((review) => <ReviewCard key={review.id} {...review} />)}
              </AnimateHeight>
              {reviews.length > 3 && (
                <div className={styles['border-btn']}>
                  <button type="button" onClick={showAllReviewsButtonHandler} className={styles['reviews-btn']}>
                    {showAllReviews ? (
                      <>
                        <span>{t('components.productReview.less')}</span>
                        <ArrowSort />
                      </>
                    ) : (
                      <>
                        <span>{t('components.productReview.more')}</span>
                        <ArrowSort className={styles.rotatedArrow} />
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>
            <div id="addReview">
              <ReviewForm name={productName} manufacturer={productManufacturer} productCode={productCode} />
            </div>
          </div>
        </Container>
      </AccordionItem>
    </section>
  );
};

export default ProductReview;
