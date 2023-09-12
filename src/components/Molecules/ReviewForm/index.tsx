import React, { FunctionComponent, useState } from 'react';
import { SubmitHandler, useForm, useFormState, useWatch } from 'react-hook-form';
import useTranslation from 'next-translate/useTranslation';

import clsx from 'clsx';
import Button from 'components/Atoms/Button';
import CustomerRating from 'components/Molecules/CustomerRating';
import ReviewModal from 'components/Molecules/ReviewModal';
import { ReviewFormData, submitReviewToServer } from 'utils/Hybris/submitReviewToServer';

import styles from './ReviewForm.module.scss';

interface ReviewFormProps {
  name: string;
  manufacturer: string;
  productCode: string;
}

const ReviewForm: FunctionComponent<ReviewFormProps> = ({ name, manufacturer, productCode }) => {
  const { t } = useTranslation('product');
  const [rating, setRating] = useState<number>(0);

  const { register, handleSubmit, reset, control } = useForm<ReviewFormData>();
  const alias = useWatch({ name: 'alias', control });
  const headline = useWatch({ name: 'headline', control });
  const comment = useWatch({ name: 'comment', control });

  const isSubmitButtonDisabled = rating === 0 || !alias || !headline || !comment;
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const formState = useFormState({ control });

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
  };

  const onSubmit: SubmitHandler<ReviewFormData> = async (data) => {
    if (rating === 0) {
      return;
    }

    const reviewData = {
      headline: data.headline,
      comment: data.comment,
      rating: `${rating}`,
      alias: data.alias,
    };

    try {
      const review = await submitReviewToServer(reviewData, productCode);
      if (review) {
        reset();
        setRating(0);
        setIsModalOpen(true);
      }
    } catch (error) {
      console.error('Error', error);
    }
  };

  return (
    <div>
      <form className={styles['form-container']} onSubmit={handleSubmit(onSubmit)} name="Review Form">
        <p className={styles.introduction}>{t('components.reviewForm.introduction')}</p>
        <span className={styles['product-name']}>
          {manufacturer}&nbsp;{name}
        </span>

        <div id="rating">
          <label className={styles.text}>
            {t('components.reviewForm.your-rating')}
            <span title={t('components.reviewForm.required')}> *</span>
          </label>
          <p className={styles.rating}>{t('components.reviewCard.rating')}</p>
          <CustomerRating rating={rating} onRatingChange={handleRatingChange} />
        </div>

        <label className={styles.text} htmlFor="alias">
          {t('components.reviewForm.nickname')}
          <span title={t('components.reviewForm.required')}> *</span>
        </label>
        <input required type="text" id="alias" className={styles.input} {...register('alias', { required: true })} />

        <label className={styles.text} htmlFor="headline">
          {t('components.reviewForm.summary')}
          <span title={t('components.reviewForm.required')}> *</span>
        </label>
        <input
          required
          type="text"
          id="headline"
          className={styles.input}
          {...register('headline', { required: true })}
        />

        <label className={styles.text} htmlFor="comment">
          {t('components.reviewForm.review')}
          <span title={t('components.reviewForm.required')}> *</span>
        </label>
        <textarea
          required
          id="comment"
          className={clsx(styles.input, styles['input-big'])}
          {...register('comment', { required: true })}
        />

        <Button className={styles['form-btn']} type="submit" disabled={isSubmitButtonDisabled}>
          {t('components.reviewForm.submit')}
        </Button>
        {formState.isSubmitting && <span className={styles.loader}></span>}
      </form>
      <ReviewModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};
export default ReviewForm;
