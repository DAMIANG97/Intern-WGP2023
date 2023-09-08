import apiFetch from 'utils/apiFetch';
import { BASESITE_URL } from 'utils/Hybris/endpoints';

export interface ReviewFormData {
  headline: string;
  comment: string;
  rating: string;
  alias: string;
}

interface ReviewResponse {
  status: number;
  alias: string;
  comment: string;
  date: string;
  headline: string;
  id: string;
  principal: {
    name: string;
    uid: string;
  };
  rating: number;
}

export const submitReviewToServer = async (reviewData: ReviewFormData, productCode: string) => {
  const apiUrl = `${BASESITE_URL}/products/${productCode}/reviews`;
  const requestOptions: RequestInit = {
    credentials: 'same-origin',
    method: 'POST',
    body: JSON.stringify(reviewData),
  };

  return apiFetch<ReviewResponse>(apiUrl, requestOptions);
};
